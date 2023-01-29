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
import { useParams } from "react-router-dom";
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

const UpdatePlans = () => {
  const routeparams = useParams();
  console.log(routeparams.id);
  const [amountperMonth, setAmountPerMonth] = useState(0);
  const [channelid, setChannelId] = useState(0);
  const [details, setItemsDetails] = useState("");
  const [id, setplanid] = useState(0);
  const [name, setItemsName] = useState("");
  const [taxpercent, settaxPercent] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:9191/plan/` + routeparams.id)
      .then((response) => {
        console.log(response.data);
        setAmountPerMonth(response.data.amountperMonth);
        setChannelId(response.data.channelid);
        setItemsDetails(response.data.details);
        setplanid(response.data.id);
        setItemsName(response.data.name);
        settaxPercent(response.data.taxpercent);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

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
    console.log("*****");
    console.log({data});

    axios
      .put(`http://localhost:9191/plan/put`,data)
      .then((response) => {
        alert('Plan updated successfully');
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
          onChange={(e) => setAmountPerMonth(e.target.value)}
        />
        <br />
        <label><strong>ChannelID</strong></label>
        <br></br>
        <input
          type="Text"
          className="input-addplan"
          value={channelid}
          onChange={(e) => setChannelId(e.target.value)}
        />
        <br />
        <label><strong>Details</strong></label>
        <br></br>
        <input
          type="Text"
          className="input-addplan"
          value={details}
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
          onChange={(e) => setplanid(e.target.value)}
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
          onChange={(e) => settaxPercent(e.target.value)}
        />
        <br></br>
        <br></br>

        <Button
        variant="contained"
          type="submit"
          className="btn-addplan"
          onClick={handleFormSubmit}
        >
          Update plan
        </Button>
      </form>
    </div>
  );
};

export default UpdatePlans;
