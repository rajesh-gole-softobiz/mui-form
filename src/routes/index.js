import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CustomizedDialogs from "../components/Dialog"
import Error from "../components/Error"
import ShowUsers from "../components/ShowUsers"
import AddUser from "../components/User"
const Index = () => {
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<CustomizedDialogs/>} />
        <Route path="/all-users" element={<ShowUsers/>} />
        {/* <Route path="/show-user" element={AddUser} /> */}
        <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
}
export default Index