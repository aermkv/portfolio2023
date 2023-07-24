import React, { Component } from 'react';
import './index.css'
import Main from './components/Main'
import DoodleLabs from './pages/DoodleLabs'
import BlackGlass from './pages/BlackGlass'
import CreativeBrands from './pages/CreativeBrands'
import Iworld from './pages/Iworld'
import Framexpert from './pages/Framexpert'
import Warner from './pages/Warner'
import Misc from './pages/Misc'
import Misc2 from './pages/Misc2'
import { Route, Routes } from 'react-router-dom'


function App() {

  console.log(window.location)

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // let activePage;
  // switch(window.location.pathname) {
  //   case "/":
  //     activePage = <Main />
  //     break
  //   case "./pages/DoodleLabs":
  //     activePage = <DoodleLabs />
  //     break
  //   case "./pages/CreativeBrands":
  //     activePage = <CreativeBrands />
  //     break
  //   case "./pages/Iworld":
  //     activePage = <Iworld />
  //     break
  //   case "./pages/Framexpert":
  //     activePage = <Framexpert />
  //     break
  //   case "./pages/Warner":
  //     activePage = <Warner />
  //     break
  // }

  return (
    <>
      {/* <Main /> */}
      <div className='container'>
        {/* {activePage} */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/pages/DoodleLabs' element={<DoodleLabs />} />
          <Route path='/pages/BlackGlass' element={<BlackGlass />} />
          <Route path='/pages/CreativeBrands' element={<CreativeBrands />} />
          <Route path='/pages/Iworld' element={<Iworld />} />
          <Route path='/pages/Framexpert' element={<Framexpert />} />
          <Route path='/pages/Warner' element={<Warner />} />
          <Route path='/pages/Misc' element={<Misc />} />
          <Route path='/pages/Misc2' element={<Misc2 />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
