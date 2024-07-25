import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SelectINFO() {
    const names = [
        {id:1,name:'Oliver Hansen'},
        {id:2,name:'Van Henry'},
        {id:3,name:'April Tucker'},
        {id:4,name:'Ralph Hubbard'},
        {id:5,name:'Omar Alexander'}
      ];

      
  const [personID,setPersonID] = React.useState([3,5])
  const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setPersonID(
  typeof value === 'string' ? value.split(',') : value,
  );
  }

  const handleShowButton = () =>{
    console.log("ids",personID)
    setPersonID([])
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personID}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {names.map((ele) => (
            <MenuItem
              key={ele.id}
              value={ele.id}
            >
              {ele.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button onClick={handleShowButton}>Show</button>
    </div>
  )
}

export default SelectINFO
