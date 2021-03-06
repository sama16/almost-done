import React from "react";
import Management from "../components/Tabs/Management/Management";
import "./index.css";

function management() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: "30px",
          marginTop: "100px",
          marginBottom: "40px",
        }}
      >
        <div className="p">
          <p style={{ color: "#ffd6ba" }}>Time</p>
          <p style={{ color: "#ffd6ba" }}>is</p>
          <p style={{ color: "#ffd6ba" }}>gold</p>
          <p style={{ color: "#ffd6ba" }}>do</p>
          <p style={{ color: "#ffd6ba" }}>not</p>
          <p style={{ color: "#ffd6ba" }}>waste</p>
          <p style={{ color: "#ffd6ba" }}>it</p>
          <p style={{ color: "#2c3964" }}>⏳</p>
    
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <h3 style={{ textAlign: "center" , color: "#2c3965" }}>But what does it exactly mean?</h3>
        <p style={{ color: "#555b6e", fontSize:"23px" }}>
          • Time is Valuable Like gold, time is considered a valuable wealth.
          Because when we have time, we are capable of doing and having what we
          desire. Time gives us the liberty to do what we want and enjoy life.
          On the opposite, lack of time creates stress and unhappiness in our
          life.
          <br />• Time is Indispensable Like gold, time is irreplaceable. Once
          it is gone, it cannot be reproduced. It will take a rather vast event
          for it to happen that you can replace time.{" "}
        </p>
        <h3 style={{ textAlign: "center", marginTop: "50px" , color: "#2c3964" }}>
          Manage Your Time With Us
        </h3>
        <Management />
      </div>
    </div>
  );
}

export default management;
