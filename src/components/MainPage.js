import React, { useState } from 'react'
import Navbar from './Navbar';
import NavPage from './NavPage';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { SidebarData } from './../Data/SideBarData';

const MainPage = () => {

  const [open, setOpen] = useState(true);
  const activeLink = 'hover:bg-violet-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-purple-800'
  const normalLink = 'hover:bg-violet-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'
  return (
    <React.Fragment>
      <div className='grid grid-cols-12 '>
        <div className='col-span-3  h-screen  md:col-span-2'>
          <aside className={`text-white bg-purple-700 h-screen relative  m-0  ${open ? "w-72" : "w-20"}`}>
            <div className=''>
              <AiOutlineArrowLeft className={`bg-white text-purple-200 font-semibold text-3xl absolute -right-6 top-8 border-6 border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}></AiOutlineArrowLeft>

{/* //flex align-items-center justify-around */}
              <div className='inline-flex'>
                  <div className='p-7'> <BiCategoryAlt className='text-white rounded cursor-pointer block float-left text-4xl'></BiCategoryAlt></div>
                     <div className='pt-7'>
                     <h1 className={`text-white  duration-300 origin-left text-3xl font-medium ${!open && "scale-0"}`}>Accountantly</h1>
                     </div>
              </div>
            </div>
           
            <div className=''>
              {
                SidebarData.map((item, index) => {
                  return (
                    <div key={index}>
                      <NavLink to={item.path}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }>
                        <span>{item.icon}</span>
                        <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{item.title}</span>
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
          </aside>
        </div>
        <div className='col-span-9 bg-slate-400 h-screen md:col-span-10'>
          <Navbar></Navbar>
          <NavPage></NavPage>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainPage