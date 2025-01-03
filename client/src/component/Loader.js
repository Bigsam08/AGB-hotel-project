import { useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";

function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div
      className="sweet-loading d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
        textAlign: "center",
      }}
    >
      <CirclesWithBar
        height="200"
        width="200"
        color="#4fa94d"
        outerCircleColor="hsl(225, 76%, 13%)"
        innerCircleColor="hsl(51, 84.80%, 25.90%)"
        barColor="hsl(51, 84.80%, 25.90%)"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* <ColorRing
        visible={true}
        height="200"
        width="200"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['hsl(225, 76%, 13%)', 'hsl(51, 84.80%, 25.90%)', 'hsl(225, 76%, 13%)', 'hsl(51, 84.80%, 25.90%)']}
      /> */}
    </div>
  );
}

export default Loader;
