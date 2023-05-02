import React from 'react' 
import SearchBar from './SearchBar'
import LineChart from '../charts/LineChart'
import PieChart from '../charts/PieChart'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineTags,AiOutlineLike,AiOutlineLine} from 'react-icons/ai'
import Sidebar from '../Sidebar'

const Dashboard = () => {
  return (
    <>
   
    <Sidebar/>
  <div className=' w-[1200px] h-[568px]'>

  <div className='first row  mt-1 p-3 '>
     <div className='lg:flex'>
      <h1 className='font-bold text-lg mb-2'>Dashboard</h1>
    {/* input */}
    <div className=" lg:flex lg:justify-end   lg:w-[900px]">
    <SearchBar />
     </div>
     </div>
  </div>

      <div className='second row lg:flex lg:justify-evenly  pt-5 pb-5   '>
      <div className='w-[160px] h-[100px] bg-green-200 shadow-lg rounded-lg hover:cursor-pointer border-black hover:border-2 sm:w-[180px] sm:h[80px]  lg:w-[240px] lg:h-[100px] mb-2 ml-5'>
        <div className='flex justify-end mr-5 text-2xl'>
          <h1 className='mt-3 ml-auto'><FaRegMoneyBillAlt /></h1> 
        </div>
        <div>
          <h3 className='font-semibold mb-1 ml-3'>Total Revenues</h3>
          <h1 className='font-bold mb-2 ml-3'>$2,129,430</h1>
        </div>
      </div>
      <div className='w-[160px] h-[100px] bg-red-200 shadow-lg rounded-lg hover:cursor-pointer border-black hover:border-2 sm:w-[180px] sm:h[80px]  lg:w-[240px] lg:h-[100px] mb-2 ml-5'>
        <div className='flex justify-end mr-5 text-2xl'>
          <h1 className='mt-3 ml-auto'><AiOutlineTags /></h1> 
        </div>
        <div>
          <h3 className='font-semibold mb-1 ml-3'>Total Transaction</h3>
          <h1 className='font-bold mb-2 ml-3'>15,203</h1>
        </div>
      </div>
      <div className='w-[160px] h-[100px] bg-yellow-200 shadow-lg rounded-lg hover:cursor-pointer border-black hover:border-2 sm:w-[180px] sm:h[80px] lg:w-[240px] lg:h-[100px] mb-2 ml-5'>
        <div className='flex justify-end mr-5 text-2xl'>
          <h1 className='mt-3 ml-auto'><AiOutlineLike /></h1> 
        </div>
        <div>
          <h3 className='font-semibold mb-1 ml-3'>Total Likes</h3>
          <h1 className='font-bold mb-2 ml-3'>529,917</h1>
        </div>
      </div>
      <div className='w-[160px] h-[100px] bg-violet-200 shadow-lg rounded-lg hover:cursor-pointer border-black hover:border-2 sm:w-[180px] sm:h[80px]  lg:w-[240px] lg:h-[100px] mb-2 ml-5'>
        <div className='flex justify-end mr-5 text-2xl'>
          <h1 className='mt-3 ml-auto'><FiUsers /></h1> 
        </div>
        <div>
          <h3 className='font-semibold mb-1 ml-3'>Total Users</h3>
          <h1 className='font-bold mb-2 ml-3'>2,179</h1>
        </div>
      </div>
      </div>

    <div className='  justify-center items-center  ml-1 mt-1 shadow-lg  rounded-lg lg:h-[300px] hover:cursor-pointer border-black hover:border-2 w-[250px] lg:w-full'>
      <h1 className="text-lg lg:text-3xl font-bold lg:float-left ml-5">Activites</h1>
    <div className="w-[250px] h-[150px] lg:w-[500px] lg:h-[300px] lg:ml-56  ">
        <LineChart/>
      </div>
    </div>

   <div className=' lg:flex lg:justify-center lg:items-center   '>
      <div className='w-[250px] h-[300px] lg:w-[300px] lg:h-[350px] mr-5 rounded-2xl shadow-2xl mt-5 hover:cursor-pointer border-black hover:border-2 '>
        <h2 className='font-semibold  pl-5 text-lg lg:text-xl mt-2'>Top Coins</h2>
        <PieChart/>
      </div>
      <div className='w-[250px] h-[350px] lg:w-[450px] lg:h-[280px] shadow-lg  rounded-lg hover:cursor-pointer border-black hover:border-2'>
         <h1 className='font-bold text-lg lg:text-xl ml-8 mt-5'>Today Schedule</h1>
       <div className='mt-6 flex'>
         <AiOutlineLine className='text-5xl ml-5 mt-4 transform rotate-90 text-green-400' />
         <div className=''> 
          <h3 className='font-semibold text-lg ml-5'>Meeting with supplier from Bali</h3>
          <h3 className='ml-5'>14:00 - 15:00</h3>
          <h1 className='ml-5'>At Sunset road Bali</h1>
         </div>
      </div>
     <div className='mt-6 flex'>
      <AiOutlineLine className='text-5xl ml-5 mt-4 transform rotate-90 text-violet-400' />
      <div className=''> 
      <h3 className='font-semibold text-lg ml-5'>Meeting with supplier from Bali</h3>
      <h3 className='ml-5'>14:00 - 15:00</h3>
      <h1 className='ml-5'>At Sunset road Bali</h1>
      </div>
  </div> 

      </div> 
   </div>
  </div>
  </>
  )
}

export default Dashboard

