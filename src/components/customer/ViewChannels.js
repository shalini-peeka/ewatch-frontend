import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function View() {
  const [prop,setProp]=useState();
  useEffect(()=>{
    axios.get('http://localhost:9191/channel/get').then(response=>{
      setProp(response.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])
const viewData=async(e)=>{
     e.preventDefault();
    await axios.get('http://localhost:9191/channel/')
   .then(res=>{
    console.log(res)
     setProp(res.data) 
     console.log('channels are shown');
     })
     

}
const subscribed=()=>{
    window.alert("Subscribed");
    document.getElementById("myButton1").value="Subscribed";
}
  return (
    <div className='main'>
      {/* <img src={backimg} width="1280px" height="512px"/> */}
      <br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table" style={{width:'300px', margin:'auto'}}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Channel Id</StyledTableCell>
            <StyledTableCell >Channel Name</StyledTableCell>
            <StyledTableCell >Owner Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          prop?
          prop.map((p) => (
            <StyledTableRow key={p.id}>
              <StyledTableCell component="th" scope="row">
                {p.id}
              </StyledTableCell>
              <StyledTableCell >{p.name}</StyledTableCell>
              <StyledTableCell>{p.promoterName}</StyledTableCell>
            </StyledTableRow>
          )):null
}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

 export default View
