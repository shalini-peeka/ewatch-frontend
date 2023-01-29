import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Viewplans() {
  const [prop, setProp] = useState();
  const [show, setShow] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:9191/plan/get")
      .then((response) => {
        setProp(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const viewData = async (e) => {
    e.preventDefault();

    await axios.get("http://localhost:9191/plan/get").then((res) => {
      console.log(res);
      setProp(res.data);
      console.log("plans are shown");
    });
  };
  // const handleClick=()=>{
  //    setShow(true);
  //    window.alert("fill the details and procced to payment") ;
  //    window.location('./SubscribeChannel')
  // }
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9191/plan/delete/${id}`)
      .then((res) => {
        setProp((prevData) => {
          return prevData.filter((item) => item.id !== id);
        });
        console.log("plan deleted");
      })
      .catch((err) => {
        setError(err);
      });
  };
  const geturl = (id) => {
    return "/UpdatePlans/" + id;
  };

  return (
    <div>
      <br></br>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 600 }}
          aria-label="customized table"
          style={{ width: "300px", margin: "auto" }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Plan Id</StyledTableCell>
              <StyledTableCell>Plan Name</StyledTableCell>
              <StyledTableCell>Channel Name</StyledTableCell>
              <StyledTableCell>Plan Details</StyledTableCell>
              <StyledTableCell>tax percent</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
              <StyledTableCell>Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prop
              ? prop.map((p) => (
                  <StyledTableRow key={p.id}>
                    <StyledTableCell component="th" scope="row">
                      {p.id}
                    </StyledTableCell>
                    <StyledTableCell>{p.name}</StyledTableCell>
                    <StyledTableCell>{p.channelName}</StyledTableCell>
                    <StyledTableCell>{p.details}</StyledTableCell>
                    <StyledTableCell>{p.taxpercent}</StyledTableCell>
                    <StyledTableCell>{p.amountperMonth}</StyledTableCell>

                    <StyledTableCell>
                      <button
                        className="btn-viewplans"
                        onClick={() => handleDelete(p.id)}
                      >
                        Remove
                      </button>
                    </StyledTableCell>
                    <StyledTableCell>
                      <button className="btn-viewplans">
                        <Link to={geturl(p.id)} style={{color:"black"}}>Update</Link>
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Viewplans;

