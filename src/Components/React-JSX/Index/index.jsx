//--------------------------------------------------------------------------------------
//                                                                                     |
//  Index.jsx is the general file into this goes every section you saw in Home page !  |
//                                                                                     |
//--------------------------------------------------------------------------------------


// Called React Libraries goes here
import React from 'react';


// Called Components
import NavBar from '../Repetitive/navBar';
import IndexHeader from './indexHeader';
import IndexMain from './indexMain';
import Footer from '../Repetitive/footer';

function Index() {
  return (
    <>
      <NavBar />
      <IndexHeader />
      <IndexMain />
      <Footer />
    </>
  )
}

export default Index