import Course from "./Components/Course"
import Courses from "./Components/Courses/Courses"
import Signup from "./Components/Signup"
import Home from "./Home/Home"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Components/context/AuthProvider"

function App() {
  const [authUser, setAuthUser]=useAuth();
    console.log(authUser);
  
 return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
