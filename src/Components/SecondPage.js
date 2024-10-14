import React, { useState, useEffect } from "react";
import {
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Spinner,
  SimpleGrid,
} from "@chakra-ui/react";
import "./secondPage.css";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { ItemComponent, ResidenceComponent } from "./residence/residence";
// import jsonData from '../data/data.json'
/******* import image*/
import apiClient from "../api/api_client";

function SecondPage(props) {
  // const id = props.match.params.id;
  const location = useLocation();
  const [token, setToken] = useState();

  const [residences, setResidences] = useState(null);
  const [vehicules, setVehicules] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentUrl = location.pathname;
  console.log(currentUrl);
  const id = currentUrl.split("/")[2];

  const fetchData = async () => {
    let residencesData = await apiClient.getResidences(id);
    let vehiculesData = await apiClient.getVehicules(id);

    setResidences(() => residencesData);
    setVehicules(() => vehiculesData);

    console.log(residencesData);

    console.log(vehiculesData);

    setIsLoading(() => false);
  };

  useEffect(() => {
    // setToken(localStorage.getItem("token"))
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Header styles={{ display: "none" }} />
        <div className=" text-dark" style={{ margin: "8rem 0 0 0" }}>
          <Spinner size="xl" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header styles={{ display: "none" }} />
      <div className=" text-dark" style={{ margin: "8rem 0 0 0", padding: 50 }}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Residences</Tab>
            <Tab>Vehicules</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid minChildWidth="300px" spacing="40px">
                {residences &&
                  residences.map((residence) => (
                    <ItemComponent
                      id={residence.id}
                      title={residence.name}
                    />
                  ))}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid minChildWidth="300px" spacing="40px">
                {vehicules &&
                  vehicules.map((vehicule) => (
                    <ItemComponent
                      id={vehicule.id}
                      title={vehicule.model}
                    />
                  ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default SecondPage;
