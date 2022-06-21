import React from 'react'
import Meta from '../meta'
import About from './about'

function Index() {
    const metaTags={
        title:'About',
        description:'This is About page',
    }
  return (
    <>
    <Meta metaTags={metaTags}/>
    <About/>
    </>
  )
}

export default Index