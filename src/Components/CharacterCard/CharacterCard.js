import React from "react";
import { Grid, Avatar, Box } from "@material-ui/core";

const CharacterCard = ({ name, position, depart, salary }) => {
  return (
    <Box py={1}>
      <Grid style={{
        borderBottom: '1px solid #ccc'
      }} align="center" justify="center" container>
        <Grid style={{
          borderLeft: '1px solid #ccc'
        }} item xs>
          
          {name}
        </Grid>
        <Grid style={{
          borderLeft: '1px solid #ccc'
        }} item xs>
          
          {depart}
        </Grid>
        <Grid style={{
          borderLeft: '1px solid #ccc'
        }} item xs>
          
          {position}
        </Grid>
        <Grid style={{
          borderLeft: '1px solid #ccc'
        }} item xs>
          
          ${salary}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CharacterCard;
