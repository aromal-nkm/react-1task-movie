import React from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Home = () => {
const mov_obj=[{MovieName:"kgf2",Description:"Action",Director:"Neel",Language:"malayalam,kannada",year:2018},{
    MovieName:"drishyam2",Description:"crime thriller",Director:"jithu",Language:"malayalam",year:2018},{MovieName:"bahubali2",Description:"epic",Director:"mouli",
    Language:"malayalam,kannada",year:2017}]
  return (

    <>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>MOVIE LIST</TableCell>
            <TableCell align="right"> MovieName</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">year</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {mov_obj.map((row) => (
            <TableRow
            //   key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="right">{row.MovieName}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Director}</TableCell>
              <TableCell align="right">{row.Language}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </>

  )

}




export default Home
