import React from "react";
import { Grid, Avatar, Box } from "@material-ui/core";

const CharacterCard = ({ name, position, depart, salary }) => {
  return (
    <Box py={1}>
      <Grid align="center" justify="center" container>
        <Grid align="center" item xs>
          <Box display="flex" height="100%" alignItems="center">
            <Avatar
              variant="square"
              src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpm1.narvii.com%2F6995%2F8cac9a3bd39487d8e052fef8bf6f3fc2afdaa314r1-1125-873v2_hq.jpg&f=1&nofb=1`}
            />
          </Box>
        </Grid>
        <Grid item xs>
          {name}
        </Grid>
        <Grid item xs>
          {depart}
        </Grid>
        <Grid item xs>
          {position}
        </Grid>
        <Grid item xs>
          ${salary}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CharacterCard;
