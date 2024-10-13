import React from "react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function FormInfosReservationRestaurant() {
  return (
    <>
      <Header styles={{ display: "none" }} />
      <div
        style={{ width: "100vw", marginTop: "10rem" }}
        className="profile-container"
      >
        <h1>Date et Heure de reservation</h1>
        <div>
          <div style={{ margin: "3rem" }}>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="date"
            />
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="time"
            />
          </div>
          <>
            <Button colorScheme="teal" onClick={() => alert("valider")}>
              Valider
            </Button>
          </>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormInfosReservationRestaurant;
