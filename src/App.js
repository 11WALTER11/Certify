import "./App.css";

// eslint-disable-next-line
import { useState } from 'react';
import Appreciation from "./components/Appreciation";
import Participationc from "./components/Participationc";
import Header from "./components/header";
import Footer from "./components/footer";


// const events = ["Skit" , "Singing Competition" , "Feel the Reel","xquizite","Ibm Bootcamp " ,
// " SDP: Entrepreneurship Skills" , "Guest Lecture on Cyber Security Awareness and it's Emerging Trends ","Just-A-Minute(JAM)",
// " Feel The Reel","Badminton"];
const App=()=> {
  const [selectedForm,setSelectedForm]=useState(0);
  
return(
  <>
  <Header/>
  <h2 className="text-center">Active Mind Club</h2>
  <h4 className="text-center">Certificate Generator</h4>
  <div className="text-center container mb-5 mt-5 bg-light">
  <h5>Choose Type of certificate you want to Genearte :</h5>

  <label   >Appreciation Certificate</label>
  <input checked={selectedForm===0} type="radio" onClick={()=>setSelectedForm(0)}></input><br/>
  <label >Participation Certificate</label>
  <input checked={selectedForm===1} type="radio" onClick={()=>setSelectedForm(1)}></input>
  
  </div>
  
  {
    selectedForm?<Participationc/>:<Appreciation/>
  }
 
  <Footer/>
  </>

);

}

export default App;
