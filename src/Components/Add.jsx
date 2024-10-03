import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
  const [employee,setEmployee]=useState({MovieName:'',MovDes:'',MovDir:'',MovCat:'',MovLang:'',MovYr:''})
  let fetchvalue=(e)=>{

    // console.log(e)
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  let sendData=(e)=>{
    console.log(employee)
  }
  return ( <div>
    <h2>ADD MOVIE</h2>
    <TextField  id="standard-basic" label="MovieName" name='MovieName'
    //  value={employee.MovieName} 
     variant="standard" onChange={fetchvalue} /><br />
    <TextField  id="standard-basic" label="MovDes" variant="standard" name='MovDes' 
    // value={employee.MovDes} 
     onChange={fetchvalue} /><br />
    <TextField   id="standard-basic" label="MovDir" variant="standard" name='MovDir' 
    // value={employee.MovDir} 
    onChange={fetchvalue}/><br />
    <TextField   id="standard-basic" label="MovCat" variant="standard" name='MovCat' 
    // value={employee.MovCat}
      onChange={fetchvalue}/> <br /><br />
      <TextField   id="standard-basic" label="MovLang" variant="standard" name='MovLang' 
    // value={employee.MovLang}
      onChange={fetchvalue}/> <br /><br />
       <TextField   id="standard-basic" label="MovYr" variant="standard" name='MovYr' 
    // value={employee.MovYr}
      onChange={fetchvalue}/> <br /><br />
    <Button onClick={sendData} variant="contained">submit</Button> <br /></div>
  )
}

export default Add
