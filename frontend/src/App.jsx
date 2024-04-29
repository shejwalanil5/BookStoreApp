import Course from "./Components/Course"
import Courses from "./Components/Courses/Courses"
import Signup from "./Components/Signup"
import Home from "./Home/Home"
import { Routes, Route } from "react-router-dom"

function App() {
 return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App