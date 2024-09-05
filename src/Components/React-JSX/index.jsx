//--------------------------------------------------------------------------------------
//                                                                                     |
//  Index.jsx is the general file into this goes every section you saw in Home page !  |
//                                                                                     |
//--------------------------------------------------------------------------------------


// Called React Libraries goes here
import React from 'react';



// StyleSheet for this react file
import "../Stylesheets/index.scss";

// Called Components
import Footer from './footer';
import IndexMain from './indexMain';
import IndexHeader from './indexHeader';

function Index() {
  return (
    <>
      <IndexHeader />
      <IndexMain />
      <Footer />
    </>
  )
}

export default Index