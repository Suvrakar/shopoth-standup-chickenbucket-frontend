import React, { useState } from "react";
import {
  Button,
  Box,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";

function PlayerForm() {
  const [rows, setRows] = useState([]);
  const [showSave, setShowSave] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];

  const addRow = () => {
    setRows([...rows, { id: Date.now(), points: 0 }]);
    setShowSave(true); // Show the Save button when a new row is created
  };

  const increasePoints = (rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, points: row.points + 1 } : row
    );
    setRows(updatedRows);
  };

  const resetPoints = (rowId) => {
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, points: 0 } : row
    );
    setRows(updatedRows);
  };

  const handleSave = () => {
    // Log the data (for demonstration, we'll console.log it)
    console.log(rows);

    // You can send the data to your backend or perform other actions here
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={addRow}>
        Add Row
      </Button>

      {rows.map((row) => (
        <Box
          key={row.id}
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={4}
        >
          <Autocomplete
            options={options}
            renderInput={(params) => (
              <TextField {...params} label="Autocomplete" fullWidth />
            )}
            style={{ width: "400px", float: "right" }}
          />
          <Box display="flex" alignItems="center" style={{margin:'10px'}}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => increasePoints(row.id)}
            >
              +
            </Button>
            <Typography variant="body1" mx={2}>
              Points: {row.points}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => resetPoints(row.id)}
            >
              Reset
            </Button>
          </Box>
        </Box>
      ))}
      <div style={{marginTop:'20px'}}>
        {showSave && (
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        )}
      </div>
    </div>
  );
}

export default PlayerForm;
