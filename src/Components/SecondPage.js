import React, { useState, useEffect } from "react";
import {
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Spinner,
} from "@chakra-ui/react";
import "./secondPage.css";
import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {ResidenceComponent} from './residence/residence'
import SiteTouristic from "./Body/siteTouristic/SiteTouristic";
import Restaurant from "./Body/Restaurants/Restaurant";
import Logement from "./Body/logement/Logement";
import Vehicules from "./Body/vehicules/Vehicules";
// import jsonData from '../data/data.json'
/******* import image*/
import apiClient from "../api/api_client";

import cathedrale1 from "./Assets/CathedralePlateau1.jpeg";
import cathedrale2 from "./Assets/CathedralePlateau2.jpeg";
import cathedrale3 from "./Assets/CathedralePlateau3.jpeg";

import Banco1 from "./Assets/ForêtBanco1.jpg";
import Banco2 from "./Assets/ForetBanco2.jpg";
import Banco3 from "./Assets/ForetBanco3.jpg";
import { useQuery } from "@chakra-ui/react";

function SecondPage(props) {
  // const id = props.match.params.id;
  const location = useLocation();
  const [token, setToken] = useState();

  const [residences, setResidences] = useState(null);
  const [vehicules, setVehicules] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentUrl = location.pathname;
  console.log(currentUrl)
  const id = currentUrl.split("/")[2];

  const fetchData = async () => {
    let residencesData = await apiClient.getResidences(id);
    let vehiculesData = await apiClient.getVehicules(id);

    setResidences(() => residencesData);
    setVehicules(() => vehiculesData);

    console.log(vehiculesData)

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
      <div className=" text-dark" style={{ margin: "8rem 0 0 0" }}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Residences</Tab>
            <Tab>Vehicules</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
                {
                    vehicules && vehicules.map((vehicule)=>(<ResidenceComponent  id={vehicule.id} model={vehicule.model}  />))
                }
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default SecondPage;
