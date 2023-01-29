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

function ViewChannels() {
  // const [data, setData] = useState(null);
  const [prop, setProp] = useState();
  const [show, setShow] = useState();
  const [error, setError] = useState(null);
  //const [name, setName] = useState(data);

  useEffect(() => {
    axios
      .get(`http://localhost:9191/channel/get`)
      .then((response) => {
        setProp(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const viewData = async (e) => {
    e.preventDefault();

    await axios.get(`http://localhost:9191/channel/get`).then((res) => {
      console.log(res);
      setProp(res.data);
      console.log("plans are shown");
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:9191/channel/delete/${id}`)
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

  return (
    <div>
      <h2 style={{color:"darkblue"}}> Channel Data</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 600 }}
          aria-label="customized table"
          style={{ width: "300px", margin: "auto" }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
              {/* <StyledTableCell>Update</StyledTableCell> */}
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
                    <StyledTableCell>
                      <button
                        className="channel-btn"
                        onClick={() => handleDelete(p.id)}
                      >
                        Remove
                      </button>
                    </StyledTableCell>
                    {/* <StyledTableCell>
                      <button
                        className="channel-btn"
                        onClick={() => handleDelete(p.id)}
                      >
                        Update
                      </button>
                    </StyledTableCell> */}
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewChannels;
