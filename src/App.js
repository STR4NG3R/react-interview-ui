import './App.css'

import React, { useEffect } from 'react'

import Stack from '@mui/material/Stack'
import WidgetList from './components/WidgetList'
import { createWidget } from './facade/widget-facade'

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        await Promise.all(
          createWidget({ name: "Coca Cola", price: 12.32, description: 'A delicious soda' }),
          createWidget({ name: "Cheese", price: 52.32, description: 'Imported from netherlands' }),
          createWidget({ name: "Taco al Pastor", price: 32.32, description: 'God food' }),
        )
      } catch (error) {
        console.log(error)
      }
    })()
  }, []
  )
  return (<Stack>
    <WidgetList></WidgetList>
  </Stack>)
}

export default App
