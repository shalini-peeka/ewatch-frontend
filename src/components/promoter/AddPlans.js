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

const Plan = () => {
  const [name, setItemsName] = useState("");
  const [details, setItemsDetails] = useState("");
  const [amountperMonth, setAmountPerMonth] = useState();
  const [channelid, setChannelId] = useState("");
  const [taxpercent, settaxPercent] = useState("");
  const [id, setplanid] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      amountperMonth,
      channelid,
      details,
      id,
      name,
      taxpercent,
    };
    console.log(data);
    axios
      .post(`http://localhost:9191/plan/post`, data)
      .then((response) => {
        alert("plan is added successfully..!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="container">
      <form>
        <label className="labelclass"><strong>AmountPerMonth</strong></label>
        <br></br>
        <input
          type="Text"
          autoFocus
          className="input-addplan"
          value={amountperMonth}
          required
          onChange={(e) => setAmountPerMonth(Number(e.target.value))}
        />
        <br />
        <label><strong>ChannelID</strong></label>
        <br></br>
        <input
          type="Text"
          className="input-addplan"
          value={channelid}
          required
          onChange={(e) => setChannelId(Number(e.target.value))}
        />
        <br />
        <label><strong>Details</strong></label>
        <br></br>
        <input
          type="Text"
          className="input-addplan"
          value={details}
          required
          onChange={(e) => setItemsDetails(e.target.value)}
        />
        <br />
        <label><strong>Id</strong></label>
        <br></br>
        <input
          type="text"
          autoFocus
          className="input-addplan"
          value={id}
          required
          onChange={(e) => setplanid(Number(e.target.value))}
        />

        <br />
        <label><strong>Name</strong></label>
        <br></br>
        <input
          type="text"
          value={name}
          className="input-addplan"
          onChange={(e) => setItemsName(e.target.value)}
        />
        <br />

        <label><strong>TaxPercent</strong></label>
        <br></br>
        <input
          type="text"
          value={taxpercent}
          className="input-addplan"
          onChange={(e) => settaxPercent(Number(e.target.value))}
        />
        <br></br>
        <br></br>

        <Button
          variant="contained"
          type="submit"
          className="btn-addplan"
          onClick={handleFormSubmit}
        >
          Add plan
        </Button>
      </form>
    </div>
  );
};

export default Plan;
