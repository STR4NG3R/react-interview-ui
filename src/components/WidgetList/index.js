import { BASE_URL, fetchAllWidgets } from '../../lib/apiConnect'
import { Button, Card, CardContent } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { Filter } from '../Filter/Filter'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import WidgetDisplay from '../WidgetDisplay'
import { createFilterCriteria } from '../../utils/createFilterCriteria'
import { useFetch } from '../hooks/useFetch'

const WidgetList = () => {
  const [params, setParams] = useState([]);
  const { data: widgets, loading, error, refresh } = useFetch({ intialState: [], route: `${BASE_URL}/v1/widgets${createFilterCriteria(params)}` })

  if (loading) return <>Items loading....</>
  if (error) return <>Error fetching {error}</>

  console.log(widgets)
  return (
    <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>
      <CreateWidget refresh={refresh} />
      <FilterArea setParams={setParams} refresh={refresh} />
      <ListWidgets refresh={refresh} widgets={widgets} />
    </Stack >
  )
}
const ListWidgets = ({ refresh, widgets }) => (
  <Card>
    <CardContent>
      <Typography sx={{ textAlign: 'center' }} variant="h3">
        List of widgets:
      </Typography>
      <Grid container justifyContent="center" spacing={4} sx={{ paddingRight: 4, width: '100%' }}>
        {widgets.map((current, index) => <WidgetDisplay key={`${current.name}_${index}`} widget={current} refresh={refresh} />)}
      </Grid>
    </CardContent>
  </Card>
)

const CreateWidget = ({ refresh }) => (
  <>
    <Typography sx={{ textAlign: 'center' }} variant="h3">
      Create Widget
    </Typography>
    <WidgetDisplay widget={{ name: '', price: '0.0', description: '' }} refresh={refresh} main={true} />
  </>
)

const FilterArea = ({ setParams, refresh }) => {

  const filterCriteria = [
    { id: 'filterName', param: 'name', friendlyText: 'Filter by name' },
    { id: 'filterDescription', param: 'description', friendlyText: 'Contains on description' },
    { id: 'filterPrice', param: 'price', friendlyText: 'Filter procuts that price its greater than' },
  ]
  return (
    <Card>
      <CardContent>
        <Typography sx={{ textAlign: 'center' }} variant="h3">
          Filter Criteria
        </Typography>
        <form onSubmit={(e) => {
          e.preventDefault()
          setParams(
            filterCriteria.map(({ id, param }) => {
              return [param, e.target[id].value]
            }).filter(([_key, value]) => value)
          )
        }}>
          <Grid container justifyContent="center" spacing={4} sx={{ paddingRight: 4, width: '100%' }}>
            {filterCriteria.map((current, idx) => <Filter key={idx} {...current} />)}
          </Grid>
          <Button type='submit'>Search</Button>
        </form>
      </CardContent>
    </Card>
  )
}


export default WidgetList
