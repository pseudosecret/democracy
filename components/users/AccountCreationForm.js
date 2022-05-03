import React, { ReactElement } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import styles from '../../styles/AccountCreationForm.module.css'
import timezones from './TimeZone.json'


const AccountCreationForm = () => {
    let timeZoneArray = []
    Object.keys(timezones).forEach((tz, index) => {
        timeZoneArray.push(timezones[index])
    })

    const [date, setDate] = React.useState(new Date())
    const [color, setColor] = React.useState('')
    const [season, setSeason] = React.useState('')
    const [spicy, setSpicy] = React.useState('')
    const [pineapple, setPineapple] = React.useState('')
    const [timeZone, setTimeZone] = React.useState('')

    const handleDateChange = (newValue) => {
        setDate(newValue)
    }

    const handleColorChoiceChange = (event) => {
        setColor(event.target.value)
    }

    const handleSeasonChoiceChange = (event) => {
    }

    const handleSpicyChoiceChange = (event) => {
        setSpicy(event.target.value)
    }

    const handlePineappleChoiceChange = (event) => {
        setPineapple(event.target.value)
    }

    const handleTimeZoneChoiceChange = (event) => {
        setTimeZone(event.target.value)
    }

    return (
        <div className={styles.container}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                    marginBottom: 5,
                }}
                noValidate
                autoComplete="off"
            >
                <h3>Your Name</h3>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    label="firstName"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Middle Name</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    label="middleName"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                    <OutlinedInput
                    id="component-outlined"
                    label="lastName"
                    />
                </FormControl>
            </Box>
            <Box
                component="form" 
                sx={{
                    '& > :not(style)': { m: 1 },
                    marginBottom: 5,
                }}
            >
                <h3>Your Email Address</h3>
                <p className={styles.disclaimer}>
                    <span className={styles.italic}>We will never share this with anyone. We 
                    will <span className={styles.underline}>only</span> use it for password 
                    reset purposes.</span>
                </p>
                <FormControl>
                    <TextField id="email1" label="Email" variant="outlined" />
                </FormControl>
                <FormControl>
                    <TextField id="email2" label="Email Again" variant="outlined" />
                </FormControl>
            </Box>
            <Box
                component="form" 
                sx={{
                    '& > :not(style)': { m: 1 },
                    marginBottom: 5,
                }}
            >
                <h3>Your Date of Birth</h3>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date of Birth"
                        inputFormat="MM/dd/yyyy"
                        value={date}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Date of Birth"
                        inputFormat="MM/dd/yyyy"
                        value={date}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
            <Box
                component="form" 
                sx={{
                    '& > :not(style)': { m: 1 },
                    marginBottom: 5,
                }}
            >
                <h3>TimeZone</h3>
                <FormControl sx={{ minWidth: 500 }}>
                    <InputLabel id="timezoneLabel">Your TimeZone</InputLabel>
                    <Select
                        labelId="timezoneLabel"
                        id="timezone"
                        label="Your Timezone"
                        value={timeZone}
                        onChange={handleTimeZoneChoiceChange}
                    >
                        {timeZoneArray.map(tz => {
                            return <MenuItem value={tz["abbr"]}>{tz["text"]}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
            <Box
                component="form" 
                sx={{
                    '& > :not(style)': { m: 1 },
                    marginBottom: 5,
                }}
            >
                <h3>Some of Your Favorite Things</h3>
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="favoriteColorLabel">Favorite Color</InputLabel>
                    <Select
                        id="favoriteColor"
                        value={color}
                        label="Favorite Color"
                        onChange={handleColorChoiceChange}
                    >
                        <MenuItem value="black"     ></MenuItem>
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
                </FormControl>
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="favoriteSeasonLabel">Your Favorite Season</InputLabel>
                    <Select
                        labelId="favoriteSeasonLabel"
                        id="favoriteSeason"
                        value={season}
                        label="Favorite Season"
                        onChange={handleSeasonChoiceChange}
                    >
                        <MenuItem value="spring"    >Spring</MenuItem>
                        <MenuItem value="summer"    >Summer</MenuItem>
                        <MenuItem value="fall"      >Fall</MenuItem>
                        <MenuItem value="winter"    >Winter</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box
                component="form" 
                sx={{
                    '& > :not(style)': { m: 1 },
                    marginBottom: 5,
                }}
            >
                <h3>Some of Your Food Preferences</h3>
                <FormControl sx={{ minWidth: 270 }}>
                    <InputLabel id="spicyFoodLabel">Spicy Food?</InputLabel>
                    <Select
                        id="spicyFood"
                        value={spicy}
                        label="Spicy Food"
                        onChange={handleSpicyChoiceChange}
                    >
                        <MenuItem value="yes"      >Yay spice!</MenuItem>
                        <MenuItem value="no"       >Nooo spice!</MenuItem>
                        <MenuItem value="sometimes">Maybe sometimes.</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 270 }}>
                    <InputLabel id="pineappleLabel">Pineapple on Pizza?</InputLabel>
                    <Select
                        labelId="pineappleLabel"
                        id="pineapple"
                        value={pineapple}
                        label="Pineapple on Pizza"
                        onChange={handlePineappleChoiceChange}
                    >
                        <MenuItem value="yes"   >Yes!</MenuItem>
                        <MenuItem value="no"    >No!</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box
                component="form" 
                sx={{
                    '& > :not(style)': { m: 1 },
                    marginBottom: 5,
                }}
            >
                <h3>Finally, Your Password</h3>
                <FormControl>
                    <TextField id="password1" label="Password" variant="outlined" />
                </FormControl>
                <FormControl>
                    <TextField id="password2" label="Password Again" variant="outlined" />
                </FormControl>
            </Box>
        </div>
    )
}

export default AccountCreationForm