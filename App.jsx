import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Jobs from "./components/Jobs";
import Applications from "./components/Applications";
import SavedJobs from "./components/SavedJobs";
import JobDetails from "./components/JobDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile"
import "./App.css";

function App () {
 
const [searchTerm,setsearchTerm] = useState({keyword:"",location:"",})

const [applications,setApplications] = useState(() =>
     
    JSON.parse(localStorage.getItem("applications") || "[]" )
);

const[savedJobs, setSavedJobs] = useState(() => 
     
     JSON.parse(localStorage.getItem("savedJobs") || "[]")
);

const handleRemoveJob = (jobId) => {
     const updatedJobs = savedJobs.filter((job) =>
       job.id !== jobId);

     setSavedJobs(updatedJobs);
     localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
 };

 const handleClearSavedJobs = () => {
     setSavedJobs([]);

     localStorage.setItem("savedJobs", JSON.stringify([]));
 };

  return(
   <BrowserRouter>
   <Header />
     
     <Routes>
     <Route path="/" element={
      <>
     <SearchBar onSearch={setsearchTerm} />

     <Jobs
        searchTerm={searchTerm}
        savedJobs={savedJobs}
        setSavedJobs={setSavedJobs}
        applications={applications}
        setApplications={setApplications}
      />  

     <SavedJobs
       savedJobs={savedJobs}
       onRemoveJob={handleRemoveJob}
       onClearAll={handleClearSavedJobs}
     />
   
   <Applications applications={applications} 
                 setApplications={setApplications}/>
   </>
     }
     />
     <Route path="/job-details" 
            element={<JobDetails 
            setApplications={setApplications}/>}
     />

    <Route path ="/login" element={<Login />}/>

    <Route path="/register" element={ <Register/> }/>
    <Route path="/profile"  element={<Profile />}/>

     </Routes>
   </BrowserRouter>
);

}

export default App;