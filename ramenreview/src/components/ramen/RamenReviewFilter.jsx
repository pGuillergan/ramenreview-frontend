import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function (props) {
  const classes = useStyles();
  const [brand, setBrand] = React.useState("");
  const [style, setStyle] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [stars, setStars] = React.useState("");

  const handleChange = (event) => {

    console.log("in handle change child")
    console.log(event.currentTarget.id)
    console.log(event.target.value)

    // setBrand(event.target.value);
    props.handleFilter(event.target.value)
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <FormControl id="testt" className={classes.margin} fullWidth="true">
            <InputLabel shrink id="brand-select-label">
              By brand
            </InputLabel>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              value={brand}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None..</em>
              </MenuItem>
              {props.brands.map((y)=>{return <MenuItem id="brand" value={y}>{y}</MenuItem>;})}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <FormControl className={classes.margin} fullWidth="true">
            <InputLabel shrink id="style-select-label">
              By style
            </InputLabel>
            <Select
              labelId="style-select-label"
              id="style-select"
              value={style}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None..</em>
              </MenuItem>
              {props.style.map((y)=>{return <MenuItem value={y}>{y}</MenuItem>;})}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.margin} fullWidth="true">
            <InputLabel shrink id="country-select-label">
              By country
            </InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={country}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None..</em>
              </MenuItem>
              {props.country.map((y)=>{return <MenuItem value={y}>{y}</MenuItem>;})}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.margin} fullWidth="true">
            <InputLabel shrink id="star-select-label">
              By stars
            </InputLabel>
            <Select
              labelId="star-select-label"
              id="star-select"
              value={stars}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None..</em>
              </MenuItem>
              {props.stars.map((y)=>{return <MenuItem value={y}>{y}</MenuItem>;})}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
