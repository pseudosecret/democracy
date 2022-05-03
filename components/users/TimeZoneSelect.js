import timezones from './TimeZone.json'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import styles from '../../styles/AccountCreationForm.module.css'


const TimeZoneSelect = () => {
    let timezoneArray = []
    Object.keys(timezones).forEach((tz, index) => {
        timezoneArray.push(timezones[index])
    })

    return (
        <div>
            <FormControl sx={{ minWidth: 500 }}>
                <InputLabel id="timezoneLabel">Your TimeZone</InputLabel>
                <Select
                    labelId="timezoneLabel"
                    id="timezone"
                    label="Your Timezone"
                >
                    {timezoneArray.map(tz => {
                        return <MenuItem value={tz["value"]}>{tz["text"]}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    )

}

export default TimeZoneSelect