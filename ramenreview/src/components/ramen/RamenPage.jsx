import React, { useState, useEffect } from "react";
import RamenViewSearch from "./RamenViewSearch";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import RamenReviewFilter from "./RamenReviewFilter";
import axios from "axios";
import * as envVar from "./../../config/EnvironmentVariables";

export default function RamenPage() {
  const [brands, setBrands] = useState([]);
  const [style, setStyle] = useState([]);
  const [country, setCountry] = useState([]);
  const [stars, setStars] = useState([]);
  const categories = envVar.GET_FILTERS_LIST;

  const handleFilter = (val)=>{
    console.log(`in the parent class: ${val}`);
  }

  useEffect(() => {
    
    categories.forEach((cat) => {
      let config_categories = {
        method: "get",
        url: envVar.REACT_APP_SERVER_DOMAIN + cat,
        headers: { "Access-Control-Allow-Origin": true },
      };

      axios(config_categories)
        .then(function (response) {
          switch (cat) {
            case envVar.GET_BRAND_LIST:
              setBrands(response.data);
              break;
            case envVar.GET_STYLE_LIST:
              setStyle(response.data);
              break;
            case envVar.GET_COUNTRY_LIST:
              setCountry(response.data);
              break;
            case envVar.GET_STARS_LIST:
              setStars(response.data);
              break;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }, []);

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <RamenViewSearch />
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={12}>
          <hr />
          <RamenReviewFilter brands={brands}  style={style} country={country} stars={stars} handleFilter={handleFilter}/>
        </Grid>
      </Grid>
      <hr />
      SEARCH RESULTS HERE!!!
    </Container>
  );
}
