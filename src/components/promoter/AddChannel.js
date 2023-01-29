import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';

function Promoter() {
  const [name, setName] = useState("");
  const [promoterid, setpromoterid] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      promoterid,
    };
    console.log(data);
    axios
      .post(`http://localhost:9191/channel/post`, data)
      .then((response) => {
        alert(" channel is added successfully...!")
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container">
      <form>
        <label className="label-addchannel"><strong>ChannelName</strong> </label>
        <input
          type="text"
          className="input-addplan"
          id="input-addchannel"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label className="label-addchannel" id="label-id"><strong>
          PromoterID{" "}
          </strong>
        </label><br></br>
        <input
          type="text"
          className="input-addplan"
          value={promoterid}
          onChange={(e) => setpromoterid(Number(e.target.value))}
          required
        />
        <br />
        <br />

        <Button variant="contained" type="submit" onClick={handleFormSubmit}><strong>
          Add Channel
          </strong>
        </Button>
      </form>

      {isAdded ? <p>Your channel is added successfully</p> : null}
    </div>
  );
}

export default Promoter;
