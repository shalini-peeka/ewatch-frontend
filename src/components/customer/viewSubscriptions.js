import React, { useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
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
 const [userId,setUserId]=useState();
 const[userData,setuserData]=useState();
 const [showTable, setShowTable] = useState(false);
 const[showForm,setShowForm]=useState(true);
 const viewSub=((e)=>{
  e.preventDefault();
  axios.get(`http://localhost:9191/subscribe/viewsubscription?userName=${userId}`, {
     params: {
       id: userId
       } })
        .then(res => { 
          console.log(res);
          if(res.data==null){
            window.alert("No data found for this user");
          }
          setuserData(res.data);
           })
        .catch(err => { window.alert("usernotFound");
         });
         setShowTable(true);
         setShowForm(false);
 })

  return (
    <div className='main'>
      <br></br>
      
  
      {
        showForm&&
        <div className='container'>
      <form onSubmit={viewSub}>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <label><strong>Enter user Name</strong></label><br></br>
      <input type="text"  value={userId} onChange={(e) => setUserId(e.target.value)} required />
      <br></br>
      <br></br>
       <Button variant="contained" type="submit">Submit</Button>
      </form>
      </div>
}
    
     {
      showTable&&
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table" style={{width:'300px', margin:'auto'}}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Channel Id</StyledTableCell>
            <StyledTableCell >Channel Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          userData?
          userData.map((p) => (
            <StyledTableRow key={p.id}>
              <StyledTableCell component="th" scope="row">
                {p.id}
              </StyledTableCell>
              
              <StyledTableCell>{p.name}</StyledTableCell>
            </StyledTableRow>
          )):null
}
        </TableBody>
      </Table>
    </TableContainer>
}
    </div>
  )
}
export default View
