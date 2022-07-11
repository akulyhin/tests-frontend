import styled from '@emotion/styled';
import { Pagination } from '@mui/material';

export const Wrapper = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: center;
  ul li button {
    border-color: #E5E5E5;
    radius: 8px;
    color: #1A1A1A;
  }
  ul li button.MuiPaginationItem-previousNext {
    border: 0;
    background-color: transparent;
  }
  ul li button.MuiPaginationItem-previousNext.Mui-disabled {
    opacity: 1;
  }
  ul li button.MuiPaginationItem-previousNext.Mui-disabled svg {
    color: #F1F1F1;
  }
  ul li button.MuiPaginationItem-previousNext svg {
    width: 48px;
    height: 48px;
    color: #3A80BA;
  }
  ul li button.Mui-selected {
    background-color: #3A80BA;
    color: #fff;
  }
`;


export const PaginationStyled = styled(Pagination)``;