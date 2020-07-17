import React, { Component } from "react";
import {
  Paper,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import CharCard from "../CharacterCard/CharacterCard";
import { charArr, variants, fields } from "../../assets/chars";
import { motion } from "framer-motion";
import SearchBar from '../SearchBar/SearchBar'

class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: ""
    };
    this.charArr = charArr;
  }
  componentDidMount() {
    this.setState({characters: this.charArr})
    console.log('On Mount: ', this.charArr);
  }

  componentDidUpdate() {
  
    console.log('On Updated:', this.charArr )
  }

  handleSearchUpdate = (e) => {
    e.preventDefault()
    let filteredChars = this.charArr.filter((char) => {
      return char.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });
    this.setState({characters: filteredChars})
  };

  compareProps = (key) => {
    return (a, b) => {
      let comparison = 0;
      if (a[key] > b[key]) {
        comparison = 1;
      } else if (a[key] < b[key]) {
        comparison = -1;
      }
      return comparison;
    };
  };

  handleSort = (e) => {
    e.preventDefault()
    console.log('On sort before setState/Sort:', charArr);
    const targetId = e.target.id;
    // this.setState((state) => {
    //   console.log('On sort function: ', this.charArr);
    //   let sortedArr = state.characters.sort(this.compareProps(targetId));
    //   return { characters: sortedArr };
    // });
    let sortedArr = this.state.characters.sort(this.compareProps(targetId));

    this.setState({characters: sortedArr})
  };

  handleReset = () => {
    console.log('On Reset: ', this.charArr);
    this.setState({ characters: this.charArr });
  };

  render() {
    return (
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <Typography align="center" variant="h3">
                Current Employees:
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <SearchBar handleSearch={this.handleSearchUpdate} />
          </Grid>
          <Grid item xs={12}>
            <Box mb={3} p={1}>
              <Paper>
                <Grid align="center" container>
                  <Box px={1} display="flex" alignItems="center">
                    <Grid item xs>
                      <Button onClick={this.handleReset}>Reset</Button>
                    </Grid>
                  </Box>
                  {fields.map((field, i) => {
                    return (
                      <Grid key={i} item xs>
                        <p
                          style={{
                            fontWeight: "bold",
                            borderLeft: "solid 1px #ccc",
                          }}
                          onClick={this.handleSort}
                          key={field.id}
                          id={field.id}
                        >
                          {field.text}
                        </p>
                      </Grid>
                    );
                  })}
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={1}>
              <Paper
                style={{
                  maxHeight: "500px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
                className="listCard"
              >
                <Box p={1}>
                  {this.state.characters.map((char, i) => {
                    return (
                      <motion.div
                        key={i}
                        variants={variants}
                        initial="closed"
                        animate="open"
                        transition={{
                          delay: i * 0.125,
                          type: "spring",
                          damping: 15,
                          ease: [0.445, 0.05, 0.55, 0.95],
                        }}
                      >
                        <CharCard
                          key={char._id}
                          name={char.name}
                          position={char.position}
                          depart={char.department}
                          salary={char.salary}
                        />
                      </motion.div>
                    );
                  })}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default ListCard;
