
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [courses, setCourses] = useState([]);

useEffect(() => {
    fetch('http://localhost:8080/courses')
    .then(res => res.json())
    .then(courses => setCourses(courses))
  },[])

  return (

    <>
    {courses.length}
    </>
  )
}

export default App;
