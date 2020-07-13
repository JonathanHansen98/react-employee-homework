import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import Header from "./Components/Header/Header";
import DFImg from "./img/download.jpg";
import ListCard from "./Components/ListCard/ListCard";

function App() {
  return (
    <div className="App">
      <Header src={DFImg} />
      <Container>
        <Box mt={5}>
          <Grid container>
            <Grid item sm={6}>
              <Box>
                <Typography align="center" variant="h2">
                  {" "}
                  Dunder Mifflin Employee Directory{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <ListCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
