import { Container, FormControl, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import React from "react";
import TopTenPage from "./TopTenPage";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

export default function TopTenView(props) {
  const classes = useStyles();
  const [year, setYear] = React.useState("");
  const [rlist, setRList] = React.useState([]);
  
  const handleChange = (event) => {
    setYear(event.target.value);
    let ramenlist = [];  
    props.topten.map( (ramen)=>{
        if(ramen.ramen_top_ten == event.target.value){
            ramenlist.push( { 
                ramen_rank : ramen.ramen_rank, 
                ramen_brand :ramen.ramen_brand, 
                ramen_variety :ramen.ramen_variety,
                ramen_style :ramen.ramen_style, 
                ramen_country :ramen.ramen_country, 
                ramen_stars :ramen.ramen_stars,})
        }
    } )
    ramenlist.sort( function(a, b){ return a.ramen_rank - b.ramen_rank } )
    setRList(ramenlist);
  };

  return (
    
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Choose year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              onChange={handleChange}
            >
              {props.year.map((y) => {
                return <MenuItem value={y}>{y}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell align="center">Ramen Brand</TableCell>
                  <TableCell align="center">Variety</TableCell>
                  <TableCell align="center">Style</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Stars</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rlist.map((ramen) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {ramen.ramen_rank}
                    </TableCell>
                    <TableCell align="center">{ramen.ramen_brand}</TableCell>
                    <TableCell align="center">{ramen.ramen_variety}</TableCell>
                    <TableCell align="center">{ramen.ramen_style}</TableCell>
                    <TableCell align="center">{ramen.ramen_country}</TableCell>
                    <TableCell align="center">{ramen.ramen_stars}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
