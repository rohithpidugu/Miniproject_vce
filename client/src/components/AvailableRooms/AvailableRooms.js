import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
  table: {
    width:"600px",
  }
});

export default function AvailableRooms({room,name}) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Room Names</TableCell>
            <TableCell align="right">Join</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {room.map((room,id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {room}
              </TableCell>
              <TableCell align="right"><Link to={`/chat?name=${name}&room=${room}`}><LinkIcon /></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}