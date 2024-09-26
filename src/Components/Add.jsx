import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return ( <div>
    <TextField id="standard-basic" label="MovieName" variant="standard" /><br />
    <TextField id="standard-basic" label="Description" variant="standard" /><br />
    <TextField id="standard-basic" label="Director" variant="standard" /><br />
    <TextField id="standard-basic" label="Language" variant="standard" /><br />
    <TextField id="standard-basic" label="year" variant="standard" /> <br /><br />
    <Button variant="contained">submit</Button> <br /></div>
  )
}

export default Add