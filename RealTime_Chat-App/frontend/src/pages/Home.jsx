import React from 'react'
import SideBar from '../components/sidebar.jsx'
import MessageArea from '../components/MessageArea.jsx'
import { useSelector } from 'react-redux'
import getMessage from '../customHooks/getMessages.jsx'


const Home = () => {
  let {selectedUser}=useSelector(state=>state.user)
  getMessage()
  return (
    <div className=' w-full h-[100vh] flex overflow-hidden'>
       <SideBar />
       <MessageArea />
    </div>
  )
}

export default Home
