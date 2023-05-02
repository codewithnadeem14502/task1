import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {MdDashboard} from 'react-icons/md'
import {BsCalendar2DayFill, BsFillArrowRightCircleFill, } from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import {AiFillHome, AiFillPhone, AiFillRightCircle, AiFillSetting, AiFillTag} from 'react-icons/ai'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
const Sidebar = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [open,setOpen] = useState(true)
  return (
   <div className='flex'>
   <div className={`bg-black h-[1500px] lg:h-[900px] p-5 pt-10 text-white ${open ? 'w-52' : 'w-15'} duration-300 relative lg:${open? 'w-72' : 'w-20'}  
    `}> <AiFillRightCircle className={` text-4xl rounded-full absolute -right-3 top-8     border-solid border-black cursor-pointer ${!open && 'rotate-180'} `}onClick={() =>
    setOpen(!open)
    
   }/>
   
   <div className=' flex'>
      <h1 className={`ml-4 font-semibold 
   duration-300  ${open?  'text-4xl':'hidden'} `}>Board</h1>
   </div>

    <ul className="mt-16">
  <li className={` flex items-center font-semibold text-xl text-white hover:bg-yellow-400 rounded-md p-2   mb-5 sm:hoverbg-yellow-400 `}>
    <Link to="/dashboard" className="flex items-center">
      <MdDashboard className="mr-2" />
      <span className={`flex-shrink-0  ${!open  && 'hidden'}`}>Dashboard</span>
    </Link>
  </li>
  <li className={` flex items-center font-semibold text-xl text-white hover:bg-yellow-400 rounded-md p-2   mb-5`}>
    <Link to="/transaction" className="flex items-center">
      <AiFillTag className="mr-2" />
      <span className={`flex-shrink-0  ${!open  && 'hidden'}`}>Transaction</span>
    </Link>
  </li>
  <li className={` flex items-center font-semibold text-xl text-white hover:bg-yellow-400 rounded-md p-2   mb-5`}>
    <Link to="/schedule" className="flex items-center">
      <BsCalendar2DayFill className="mr-2" />
      <span className={`flex-shrink-0  ${!open  && 'hidden'}`}>Schedule</span>
    </Link>
  </li>
  <li className={` flex items-center font-semibold text-xl text-white hover:bg-yellow-400 rounded-md p-2   mb-5`}>
    <Link to="/user" className="flex items-center">
      <FaUserCircle className="mr-2" />
      <span className={`flex-shrink-0  ${!open  && 'hidden'}`}>User</span>
    </Link>
  </li>
  <li className={` flex items-center font-semibold text-xl text-white hover:bg-yellow-400 rounded-md p-2   mb-2`}>
    <Link to="/setting" className="flex items-center">
      <AiFillSetting className="mr-2" />
      <span className={`flex-shrink-0  ${!open  && 'hidden'}`}>Setting</span>
    </Link>
  </li>
  <li className={` flex items-center font-semibold text-lg mt-52 text-white hover:bg-yellow-400 rounded-md p-2 mb-2   `}>
    <Link to="/contact">
      <span className={`flex-shrink-0 ${!open  && 'hidden'}  `}>Contact</span>
    </Link>
  </li>
  <li className={` flex items-center font-semibold text-lg text-white hover:bg-yellow-400 rounded-md p-2  mb-5  `}>
    <Link to="/help" className="flex items-center">
      <span className={`flex-shrink-0  ${!open  && 'hidden'} `}>Help</span>
    </Link>
  </li>
  <li className={` flex items-center font-semibold text-lg text-white hover:bg-yellow-400 rounded-md p-2  mb-5  `}>
   <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
  </li>


 
</ul>



   

   


   
   </div>
   
   </div>
  )
}

export default Sidebar