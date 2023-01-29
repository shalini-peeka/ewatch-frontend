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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function Promoters() {
  const [name, setName] = useState("");
  const [prop, setProp] = useState();
  const [show, setShow] = useState();
  const [error, setError] = useState(null);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
    };
    console.log(data);
    axios
      .post(`http://localhost:9191/promoter/post`, data)
      .then((response) => {
        alert("promoter added successfully....!")
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:9191/promoter/get`)
      .then((response) => {
        setProp(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const viewData = async (e) => {
    e.preventDefault();

    await axios.get("http://localhost:9191/promoter/get").then((res) => {
      console.log(res);
      setProp(res.data);
      console.log("plans are shown");
    });
  };
  return (
    <div>
      <div className="container">
        <form>
          <label className="label-addchannel"><strong>PromoterName</strong></label>
          <input
            type="text"
            className="input-addplan"
            id="id-promo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
        </form>

        <Button variant="contained" type="submit" onClick={handleFormSubmit}>
          Add Promoter
        </Button>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 600 }}
          aria-label="customized table"
          style={{ width: "300px", margin: "auto" }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Promoter Id</StyledTableCell>
              <StyledTableCell>Promoter Name</StyledTableCell>
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
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Promoters;
