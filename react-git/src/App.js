import React from 'react'
import Servises from './Components/Servises'
import Banner from './Components/Banner'
import Body from './Components/Body'
import ResponsiveAppBar from './Components/ResponsiveAppBar'
import BlogEntries from './Components/BlogEntries'
import Dropdown from './Components/Dropdown'
import MapInput from './Components/MapInput'
const App = () => {
  return (
    <div style={{margin:'0px',padding:'0px'}}>
      <ResponsiveAppBar />
      <Body />
      <Servises />
      <Banner />
      <BlogEntries />
      <Dropdown />
      <MapInput />

    </div>
  )
}

export default App