import React from 'react'
import Meta from './meta'
import Home from './home'
function Index() {
    const metaTags={
        title:'Home',
        description:'This is home page',
    }
  return (
    <>
    <Meta metaTags={metaTags}/>
    <Home/>
    </>
  )
}

export default Index