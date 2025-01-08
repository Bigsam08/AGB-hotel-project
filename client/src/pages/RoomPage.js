import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../component/Rooms";
import Loader from "../component/Loader";
import Error from "../component/Error";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import "../styles/filter.css";

dayjs.extend(isBetween);

const { RangePicker } = DatePicker;

function RoomPage() {
  // fetch data from api endpoint to display all rooms
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [checkInDate, setCheckInDate] = useState();
  const [checOutDate, setCheckOutDate] = useState();
  const [cloneRooms, setcloneRooms] = useState([]);
  const [searchRoom, setSearchRoom] = useState();
  const [roomType, setRoomType] = useState("all");
  const [searchActive, setSearchActive] = useState(false); // New state to track search activity
  const [placeholder, setPlaceholder] = useState([
    "Arrival Date",
    "Departure Date",
  ]);

  /** use the get api request to fetch data from server side
   * use the useEffect function and useState (rooms) to save the the data from backend
   */
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/rooms/allrooms");
        setRooms(response.data);
        setcloneRooms(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  /** get the check in and check out dates from user, save into an array in a formatted way
   * usestate to save both dates differently using the onchange method
   */

  const dateFilter = (dates) => {
    const arrFormatted = dayjs(dates[0]);
    const departFormatted = dayjs(dates[1]);

    if (arrFormatted.isValid() && departFormatted.isValid()) {
      setCheckInDate(arrFormatted.format("DD-MM-YYYY"));
      setCheckOutDate(departFormatted.format("DD-MM-YYYY"));
    } else {
      setCheckInDate(null);
      setCheckOutDate(null);
    }

    let temproom = [];

    for (const room of cloneRooms) {
      let availability = true;

      // If the room has bookings, check if the selected dates overlap with any of them
      if (room.currentBookings.length > 0) {
        for (const booking of room.currentBookings) {
          const bookingFrom = dayjs(booking.arrival, "MM-DD-YYYY");
          const bookingTo = dayjs(booking.departure, "MM-DD-YYYY");

          // Check if the selected dates overlap with the booking dates
          const isOverlap =
            arrFormatted.isBetween(bookingFrom, bookingTo, null, "[]") ||
            departFormatted.isBetween(bookingFrom, bookingTo, null, "[]") ||
            bookingFrom.isBetween(arrFormatted, departFormatted, null, "[]") ||
            bookingTo.isBetween(arrFormatted, departFormatted, null, "[]");

          if (isOverlap) {
            availability = false;
            break;
          }
        }
      }
      if (availability) {
        temproom.push(room);
      }
    }
    if (roomType !== "all") {
      temproom = temproom.filter(
        (room) => room.type.toLowerCase() === roomType.toLowerCase()
      );
    }
    setRooms(temproom);
  };

  /**
   * THIS FIELD HANDLES THE SEARCH BAR
   * TO SEARCH FOR ROOMS AND DISPLAY IT
   * TAKING THE ROOM NAME AS THE KEY AND CONVERTING TO LOWER CASE
   */
  const key = (e) => {
    setSearchRoom(e.target.value);
  };

  const filterSearch = () => {
    const searchKeyResult = cloneRooms.filter((room) =>
      room.name.toLowerCase().includes(searchRoom.toLowerCase())
    );
    setRooms(searchKeyResult);

    // Reset dates and searchActive state on search
    setCheckInDate(null);
    setCheckOutDate(null);
    setSearchActive(true); // Mark search as active
  };

  /** ----------------ROOM TYPE FILTER ------------------------------- */
  const handleRoomTypeChange = (e) => {
    const selectedType = e.target.value;
    setRoomType(selectedType);

    if (selectedType === "all") {
      // If 'all' is selected, reset rooms to all available rooms
      setRooms(cloneRooms);
    } else {
      // Filter rooms based on selected type, ensuring room.roomType exists and is a string
      const filteredRooms = cloneRooms.filter((room) => {
        return (
          room.roomType &&
          typeof room.roomType === "string" &&
          room.roomType.toLowerCase() === selectedType.toLowerCase()
        );
      });
      setRooms(filteredRooms);
    }
  };

  // Conditionally set RangePicker value
  const getDatePickerValue = () => {
    if (checkInDate && checOutDate) {
      const startDate = dayjs(checkInDate, "DD-MM-YYYY");
      const endDate = dayjs(checOutDate, "DD-MM-YYYY");

      if (startDate.isValid() && endDate.isValid()) {
        return [startDate, endDate];
      }
    }
    return null; // If no valid dates
  };

  const updatePlaceholder = () => {
    setPlaceholder(["Arrival Date Updated", "Departure Date Updated"]);
  };

  return (
    <div className="" style={{ height: "fit-content" }}>
      <div className="filter-container col-md-9 mt-5 p-3">
        <div className="date p-1 col-md-3">
          <div className="d-flex justify-content-between align-items-center  col-12 date-h">
            {" "}
            <b>
              <p> Check In</p>
            </b>
            <b>
              <p> Check Out</p>
            </b>
          </div>
          <RangePicker
            format="DD-MM-YYYY"
            onChange={dateFilter}
            placeholder={placeholder}
            value={getDatePickerValue()} // Conditionally set value based on dates
            disabledDate={(current) =>
              current && current.isBefore(dayjs(), "day")
            } // Disable dates before today
          />
        </div>

        <div className="p-3 col-md-3 mt-4 search-field">
          <input
            type="search"
            placeholder="search rooms"
            className="search-rooms-input"
            value={searchRoom}
            onChange={key}
            onKeyUp={filterSearch}
          />
        </div>

        <div className="room-type-box p-3 col-md-2 mt-4 sm-2">
          <select
            className="room-type"
            value={roomType}
            onChange={handleRoomTypeChange}
          >
            <option value="all">All rooms </option>
            <option value="standard">Standard </option>
            <option value="delux"> Delux </option>
            <option value="suites"> Suites </option>
          </select>
        </div>
      </div>

      <div className="justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          // Render your Error component or message here
          <div className="error-message col-md-9 mt-4 col-sm-11">
            <Error />
            <b>
              <h3> ERROR CONNECTION </h3>
            </b>
            <p>
              {" "}
              😞 <br />
              Server is down <br /> Retry loading the page after few minutes{" "}
              <br /> we are working on it{" "}
            </p>
          </div>
        ) : (
          rooms.map((roomdata) => {
            return (
              <div
                className="display-rooms col lg-12 col-sm-11"
                key={roomdata._id}
              >
                <Room
                  room={roomdata}
                  arrival={checkInDate}
                  departure={checOutDate}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default RoomPage;
