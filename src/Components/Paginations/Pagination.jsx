import Stack from '@mui/material/Stack';
import { Wrapper, PaginationStyled } from './Pagination.styled';


export default function PaginatitionBlocks({page, totalPage, handleCurrentPageChange, isMobile}) {

    const hangleChangePage = (_, pageNum) => {
        handleCurrentPageChange(pageNum)
    }

    return (
        <Wrapper>
            <Stack>
            <PaginationStyled
            size={isMobile ? 'small' : 'large'}
            count={totalPage}
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            onChange={hangleChangePage}
            page={page}
            color={page ? 'primary' : 'secondary'}
            />
            </Stack>
        </Wrapper>
    )
}