import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import jsPDF from "jspdf"
import ACertificate from '../src/certificate/appreciationC.png'
// eslint-disable-next-line
import PCertificate from '../src/certificate/participationC.png'// eslint-disable-next-line
import { useState } from 'react';


const events = ["Skit" , "Singing Competition" , "Feel the Reel","xquizite","Ibm Bootcamp " ,
" SDP: Entrepreneurship Skills" , "Best Strategies to Crack Aptitude Test of MNCs ",
" Feel The Reel"];
function App() {
  const [sName, setsName] = useState("");
  const[YearB, setYearB] = useState("")
  const[position, setPosition] = useState("");
  const [sEname, setEname] = useState("");
  const [Cname, setCname] = useState("");
  const [Ed, setEd] = useState("");

 const pdfGenerator=()=>{
  
       var doc= new jsPDF('landscape','px','a4','false');
       doc.addImage(ACertificate,'PNG',65,20,500,400);
           doc.setFontSize(15);
           doc.setFont('courier', 'bolditalic');
           doc.text(238,200,sName,);  // Student Name
           
           doc.setFontSize(13);
           doc.setFont('time','italic',);
           doc.text(122,232,YearB);    // Year branch
           doc.text(233,232,position); // position
           doc.text(358,232,sEname); // Event name
           doc.text(173,247,Cname);  // Club name
           doc.text(290,261,Ed); // event Date
       doc.save(`${sName}'s_${sEname}certificate.pdf`);
  }

  return (
    <div>
      <Header />

      <div className="cont">
        <form>
          <br />
          <label for="fname">Student Name:</label>
          <input type="text" id="fname" name="fname" onChange={(e)=>setsName(e.target.value)} />
          <br />
          <label for="YB">Year/branch:</label>
          <input type="text" id="YB" name="YB" onChange={(e)=>setYearB(e.target.value)} />
          <br />
          <label for="POS">Position:</label>
          <input type="text" id="POS" name="POS" onChange={(e)=>setPosition(e.target.value)} />
          <br />
          
          
          <br />
          <label for="ClubN">Enter Club Name :</label>
          <input type="text" id="ClubN" name="ClubN" onChange={(e)=>setCname(e.target.value)}/>
          <br />
          <br />
          <label for="Edate">Enter Event Date </label>
          <input type="date" id="Edate" name="Edate" onChange={(e)=>setEd(e.target.value)}/>
          <br />
          <br />
          <label for="EventName">Choose Event name:</label>
          <select id="EventName" name="EventName" onChange={(e)=>setEname(e.target.value)}>
            <option disabled>Choose an option</option>

            {events.map((value) => (
              <option>{value}</option>
            ))}
          </select>
          <br />
          <button onClick={pdfGenerator}>Downlaod Certificate</button>
        </form>
      </div>
      
      <Footer />

      
    </div>
  );
}

export default App;
