import React from "react";
import "./room.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "../styles/room.css";

function Room({ room, arrival, departure }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="room-container mt-5 col-7 m-auto">
      <div className="img-div">
        <img src={room.imgagesUrl[0]} alt="rooms pic" />
      </div>
      <div className="info-div">
        <p className="roomname">{room.name} </p>

        <p className="mt-3"> {room.amenities} </p>
        <p>
          {" "}
          Room Type: <b>{room.roomType}</b>{" "}
        </p>
        <p>
          {" "}
          Sleeps : <b>{room.maxAdult}</b>{" "}
        </p>
        <p>
          {" "}
          Per Night: <b>NGN {room.perNight}</b>{" "}
        </p>

        <div className="button">
          {arrival && departure && (
            <Link to={`/booking/${room._id}/${arrival}/${departure}`}>
              <button className="btn-details"> Book Now</button>
            </Link>
          )}
          <button className="btn-details" onClick={handleShow}>
            {" "}
            Room Details
          </button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <b>{room.name} </b>{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imgagesUrl.map((imgurl) => {
              return (
                <Carousel.Item>
                  <img
                    src={imgurl}
                    alt="display picture"
                    className="d-block w-100  pb-4 modal-img"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <hr></hr>
          <p> {room.description} </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
