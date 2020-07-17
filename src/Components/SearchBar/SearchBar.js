import React from 'react';
import { TextField, Box } from '@material-ui/core';

const SearchBar = ({handleSearch, value}) => {
    return (
        <Box display="inline" width="100%" p={1} my={3}>
            <TextField
                fullWidth
                onChange={handleSearch}
                id="filled-basic"
                variant="filled"
                label="Search:"
            />
        </Box>
    )
}

export default SearchBar
