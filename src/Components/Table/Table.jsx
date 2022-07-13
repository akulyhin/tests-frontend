import {Table} from 'react-bootstrap';
import {toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.scss';

import { useMediaQuery } from 'react-responsive';
import TableData from './TableData/TableData';
import {useEffect, useState} from "react";
import blocksApi from '../../services';
import Search from '../Search/Search';
import PaginatitionBlocks from '../Paginations/Pagination';
import LinearProgress from '@mui/material/LinearProgress';

export default function GetTable() {

const [blocks, setBlocks] = useState('');
const [loading, setLoading] = useState(false);
const [totalPage, setTotalPage] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [searchQuery, setSearchQuery] = useState('');
const [filter, setFilter] = useState('address');

const handleCurrentPageChange = (page) => {

    setLoading(true);
    setCurrentPage(page);

    blocksApi.getBlocksBySearch(page, filter, searchQuery)
  .then(blocks => {
    setTotalPage(blocks.totalPage)
    setCurrentPage(blocks.page)
    setBlocks(blocks.transactions)})
  .catch(error => {
    setSearchQuery('')
    toast.error(error.response.data.message, {autoClose: 5000})
})
  .finally(() => setLoading(false))
}

const handleFilterChange = (filterValue) => {
    setFilter(filterValue.target.value)
}

const handleSearchQuery = (searchQuery) => {
    setSearchQuery(searchQuery.target.value)
}

useEffect(() => {
  setLoading(true);

  blocksApi.getBlocks(currentPage)
  .then(blocks => {
    setTotalPage(blocks.totalPage)
    setCurrentPage(blocks.page)
    setBlocks(blocks.transactions)})
  .catch(error => toast.error(error.response.data.message, {autoClose: 5000}))
  .finally(() => setLoading(false))
}, [])

const handleSearch = (search, searchQuery) => {
    setLoading(true);

    blocksApi.getBlocksBySearch(1, search, searchQuery)
    .then(blocks => {
        setTotalPage(blocks.totalPage)
        setBlocks(blocks.transactions)
        setCurrentPage(blocks.page)
    })
    .catch(error => toast.error(error.response.data.message, {autoClose: 5000}))
    .finally(() => setLoading(false))
}

const isMobile = useMediaQuery({
    query: '(max-width: 850px)',
  });


    return (
        <>
        <Search filter={filter} searchQuery={searchQuery} handleFilterChange={handleFilterChange} handleSearchQuery={handleSearchQuery} handleSearch={handleSearch}/>
        
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th style={isMobile ? {maxWidth: '85px'} : {maxWidth: '93px'}}>
                        Block number
                    </th>
                    <th className='text-center' style={isMobile ? {maxWidth: '85px'} : {maxWidth: '138px'}}>
                        Transaction ID
                    </th>
                    <th style={isMobile ? {maxWidth: '85px'} : {maxWidth: '125px'}}>
                        Sender address
                    </th>
                    <th style={isMobile ? {maxWidth: '100px'} : {maxWidth: '155px'}}>
                        Recipient's address
                    </th>
                    <th style={isMobile ? {maxWidth: '100px'} : {maxWidth: '130px'}}>
                        Block confirmations
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Value
                    </th>
                    <th style={isMobile ? {maxWidth: '85px'} : {maxWidth: '125px'}}>
                        Transaction Fee
                    </th>
                </tr>
            </thead>
            <tbody>
                {loading ?
                 <tr><td colSpan={8} className="Loader"><LinearProgress/><br></br>Loading...</td></tr> :
                  blocks[0] ? <TableData data={blocks} /> : <tr><td colSpan={8} className="Loader">No data...</td></tr>}
            </tbody>
        </Table>

        {!loading && <PaginatitionBlocks page={currentPage} isMobile={isMobile} totalPage={totalPage} handleCurrentPageChange={handleCurrentPageChange}  />}
        </>
    )
}