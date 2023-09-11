import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Sample leaderboard data (replace with your actual data)
const leaderboardData = [
  { rank: 1, name: 'Player 1', score: 3 },
  { rank: 2, name: 'Player 2', score: 1 },
  { rank: 3, name: 'Player 3', score: 2 },
  { rank: 4, name: 'Player 4', score: 1 },
  { rank: 5, name: 'Player 5', score: 1 },
];

// Define custom styles for the table
const useStyles = makeStyles({
  table: {
    minWidth: 250, // Adjust the minimum width as needed
  },
});

function Leaderboard() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Leaderboard">
        <TableHead>
          <TableRow>
            <TableCell align="center">Rank</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Missed StandUp Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData.map((row) => (
            <TableRow key={row.rank}>
              <TableCell align="center">{row.rank}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Leaderboard;
