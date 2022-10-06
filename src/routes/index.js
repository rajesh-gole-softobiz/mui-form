import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShowUsers from "../components/ShowUsers"
import AddUser from "../components/User"
const Index = () => {
    return <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/all-users" element={<ShowUsers/>} />
        {/* <Route path="/show-user" element={AddUser} /> */}
    </Routes>
    </BrowserRouter>
}
export default Index