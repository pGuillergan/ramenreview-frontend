import React, { useState, useEffect } from "react";
import * as envVar from "./../../config/EnvironmentVariables";
import axios from "axios";
import TopTenView from "./TopTenView";

export default function TopTenPage() {
  const [years, setYears] = useState([]);
  const [topten, setTopten] = useState([]);

  const config_years = {
    method: "get",
    url: envVar.REACT_APP_SERVER_DOMAIN + "/get_top_ten_years_list",
    headers: { "Access-Control-Allow-Origin": true },
  };

  const config_topten = {
    method: "get",
    url: envVar.REACT_APP_SERVER_DOMAIN + "/get_top_ten",
    headers: { "Access-Control-Allow-Origin": true },
  };

  useEffect(() => {
    axios(config_years)
      .then(function (response) {
        setYears(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios(config_topten)
      .then(function (response) {
        setTopten(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TopTenView year={years} topten={topten} />
    </>
  );
}
