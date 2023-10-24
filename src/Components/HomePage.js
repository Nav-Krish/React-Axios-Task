import { Fab } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
  TableBody,
  Paper,
} from "@mui/material";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { green } from "@mui/material/colors";

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

const fabGreenStyle={
    bgcolor:green[500],
    ml:1,
    '&:hover': {
        bgcolor: green[600],
      },
    textTansform:"none"
};

function Home({ users, onEditUser, onDeleteUser }) {
  return (
    <div>
      <div className="header">
        <h2 className="sub-heading">User Data</h2>
        <Link to="/add">
          <Fab sx={fabGreenStyle} variant="extended" aria-label="add">
          Add User <PersonAddIcon sx={{ml:1}} />
          </Fab>
        </Link>
      </div>
      {/* All user data is displayed in the table format which is see to look */}
      {/* Each user data is displayed with edit and delete button */}
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Id</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Username</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Website</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell align="center">{user.id}</StyledTableCell>
                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.username}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.phone}</StyledTableCell>
                <StyledTableCell align="center">{user.website}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link to={`edit/${user.id}`}>
                    <EditRoundedIcon sx={{color: "green"}}
                      onClick={() => onEditUser(user)}
                    ></EditRoundedIcon>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <DeleteRoundedIcon sx={{color: "red"}}
                    style={{ cursor: "pointer" }}
                    onClick={() => onDeleteUser(user.id)}
                  ></DeleteRoundedIcon>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;