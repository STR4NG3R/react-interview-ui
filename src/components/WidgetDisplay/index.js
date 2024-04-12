import { Button, CardActions, InputLabel, TextField } from '@mui/material'
import { deleteWidget, updateWidget } from '../../facade/widget-facade'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import React from 'react'
import Stack from '@mui/material/Stack'

const DisplayWidget = ({ widget, refresh, main }) => {
  const { description, name, price } = widget
  return (
    <Grid item xs={6}>
      <Card>
        <form onSubmit={(e) => {
          e.preventDefault();
          let newName = name
          const { priceTxt, descriptionTxt } = e.target
          if (main) newName = e.target.nameTxt.value
          updateWidget({ name: newName, price: priceTxt.value, description: descriptionTxt.value })
            .then(res => {
              if (res.data)
                refresh();
            }).catch(error => {
              alert(error.response.data.map(d => d).join('\n'))
            })
        }}>
          <CardContent>
            <Stack spacing={2}>
              {main ?
                <TextField label='Name' id="nameTxt" defaultValue={name} /> :
                <InputLabel>{name}</InputLabel>
              }
              <TextField label="Price" id="priceTxt" defaultValue={price} type='number' />
              <TextField label="Description" id="descriptionTxt" defaultValue={description} />
            </Stack>
          </CardContent>
          <CardActions>
            {!main && <Button onClick={(e) => {
              e.preventDefault();
              deleteWidget({ name }).then(res => {
                if (res.data)
                  refresh();
              });
            }}>Delete</Button>}
            <Button type='submit'>{main ? "Create" : "Update"}</Button>
          </CardActions>
        </form>
      </Card>
    </Grid>)
}

export default DisplayWidget
