import {useState} from "react";
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import {
    Wrapper,
    SearchWrapper,
    PaperStyled,
    SelectStyled,
    InputBaseStyled,
    ButtonStyled,
  } from './Search.styled';



export default function Search({filter, searchQuery, handleFilterChange, handleSearchQuery,  handleSearch}) {

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        handleSearch(filter, searchQuery);
    }



    return (
        <Wrapper>
            <PaperStyled component="form" onSubmit={ event => handleSearchSubmit(event)}>
                <SearchWrapper>
                    <InputBaseStyled
                    value={searchQuery}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleSearchQuery}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                    <SelectStyled
                    variant="standard"
                    defaultValue='address'
                    disableUnderline
                    IconComponent={KeyboardArrowDownIcon}
                    value={filter}
                    onChange={handleFilterChange}
                    >
                        <MenuItem value='address'>Address</MenuItem>
                        <MenuItem value='blockNumber'>Block Number</MenuItem>
                        <MenuItem value='transactionId'>Transaction ID</MenuItem>
                    </SelectStyled>
                </SearchWrapper>
                    <ButtonStyled type="submit" aria-label="search">
                        <SearchIcon />
                    </ButtonStyled>
          </PaperStyled>
        </Wrapper>
    )


}