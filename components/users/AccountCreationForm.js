import React from 'react'
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from '../../styles/AccountCreationForm.module.css'

const AccountCreationForm = () => {

    return (
        <div className={styles.container}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl>
                    <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    label="Name"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    label="Name"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    label="Name"
                    />
                </FormControl>
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <InputLabel id="demo-simple-select-label">Favorite Color</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    autowidth
                >
                    <MenuItem value="black"     >Black</MenuItem>
                    <MenuItem value="blue"      >Blue</MenuItem>
                    <MenuItem value="brown"     >Brown</MenuItem>
                    <MenuItem value="fuchsia"   >Fuchsia</MenuItem>
                    <MenuItem value="gray"      >Gray</MenuItem>
                    <MenuItem value="green"     >Green</MenuItem>
                    <MenuItem value="lavender"  >Lavender</MenuItem>
                    <MenuItem value="orange"    >Orange</MenuItem>
                    <MenuItem value="pink"      >Pink</MenuItem>
                    <MenuItem value="purple"    >Purple</MenuItem>
                    <MenuItem value="red"       >Red</MenuItem>
                    <MenuItem value="turquoise" >Turquoise</MenuItem>
                    <MenuItem value="white"     >White</MenuItem>
                    <MenuItem value="yellow"    >Yellow</MenuItem>
                </Select>
            </Box>
        </div>
    )
}

export default AccountCreationForm