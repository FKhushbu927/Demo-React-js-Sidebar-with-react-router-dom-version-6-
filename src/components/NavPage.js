import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './../pages/Dashboard';
import Products from '../pages/Products';
import Sales from './../pages/Sales';
import Setting from './../pages/Setting';
import Purchase from '../pages/Purchase';
import Report from '../pages/Report';

const NavPage = () => {
  return (
     <React.Fragment>
        <section>
          <Routes>
              {/* <Route path="/" element ={ <Accountantly />}/> */}
              <Route path="/dashboard" element ={ <Dashboard />}/>
              <Route path="/products" element ={ <Products />}/>
              <Route path="/purchase" element ={ <Purchase />}/>
              <Route path="/sales" element ={ <Sales />}/>
              <Route path="/report" element ={ <Report />}/>
              <Route path="/setting" element ={ <Setting />}/>
          </Routes>
        </section>
     </React.Fragment>
  )
}

export default NavPage