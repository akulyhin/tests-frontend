import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';


export const Wrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  color: #000;
`;

export const PaperStyled = styled(Paper)`
  display: flex;
  box-shadow: none;

  @media (max-width: 750px) {
    flex-direction: column;
  }

  /* position: relative; */
`;


export const SelectStyled = styled(Select)`
  min-width: 155px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  color: #000;

  & svg {
    fill: #3A80BA;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    background-color: #F1F1F1;
    width: 1px;
    height: 32px;
  }

  .MuiSelect-select:focus {
    background-color: #fff;
  }

  @media (max-width: 850px) {
    min-width: 90px;
  }
`;

export const SearchWrapper = styled.div`
  padding: 2px 4px;
  padding: 5px 15px;
  max-width: 380px;
  display: flex;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const InputBaseStyled = styled(InputBase)`
  min-width: 180px;
  font-style: italic;

  @media (max-width: 750px) {
    min-width: 130px;
  }
`;

export const ButtonStyled = styled(Button)`
  min-width: 48px;
  min-height: 48px;
  margin-left: 15px;
  background-color: #3A80BA;
  border-radius: 8px;
  border: 1px solid transparent;

  /* position: absolute;
  top: 0;
  right: -65px; */

  & svg {
    fill: #fff;
  }

  &:hover {
    background-color: #fff;
    border: 1px solid #ccc;

    & svg {
      fill: #000;
    }
  }

  @media (max-width: 750px) {
    margin-left: 0;
    margin-top: 25px;
    position: relative;
  }
`;