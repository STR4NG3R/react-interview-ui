import { Grid, TextField } from "@mui/material"

export const Filter = ({ id, param, value, friendlyText }) => {
    
    return (
        <Grid item xs={4}>
            <TextField id={id} defaultValue={value || ""} label={friendlyText} />
        </Grid>
    )
}