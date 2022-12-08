
import { useState } from 'react';
import jsPDF from "jspdf"
import ACertificate from '../certificate/appreciationC.png'


// const events = ["Skit" , "Singing Competition" , "Feel the Reel","xquizite","Ibm Bootcamp " ,
// " SDP: Entrepreneurship Skills" , "Guest Lecture on Cyber Security Awareness and it's Emerging Trends ","Just-A-Minute(JAM)",
// " Feel The Reel","Badminton"];


const CLUBADVISOR =["Mr Mohd Suaib","Dr mohd Akbar","Mr Mohd Usman khan","Mrs Saleha mariyam","Dr Faiyaz ahmad","Mr Anwar Ahmad Sheikh"]
const Appreciation=()=> {
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
           doc.setFont('time','bold',);
           doc.text(122,232,YearB);    // Year branch
           doc.text(233,232,position); // position
           doc.text(358,232,sEname); // Event name
           doc.text(173,247,Cname);  // Club name
           doc.text(290,261,Ed); // event Date

         
       doc.save(`${sName}'s_${sEname}_certificate.pdf`);
  }

  return (
    <>
      
       <div className="text-center">
        
        
        <h2>Appreciation Certificate</h2>
       </div>
      <div className="container form-outline mt-4  py-2 px-3">
        <form >
         
          <label for="fname" >Student Name:</label>
          <input class="form-control mb-3" type="text" id="fname" name="fname" onChange={(e)=>setsName(e.target.value)} />
          
          <label for="YB">Year/branch:</label>
          <input class="form-control mb-3" type="text" id="YB" name="YB" onChange={(e)=>setYearB(e.target.value)} />
         
          <label for="POS">Position:</label>
          <input class="form-control mb-3" type="text" id="POS" name="POS" onChange={(e)=>setPosition(e.target.value)} />
          
          
          
          
          <label for="ClubN">Enter Club Name :</label>
          <input class="form-control mb-3" type="text" id="ClubN" name="ClubN" onChange={(e)=>setCname(e.target.value)}/>
          
          <label for="Edate">Enter Event Date </label>
          <input class="form-control mb-3" type="date" id="Edate" name="Edate" onChange={(e)=>setEd(e.target.value)}/>
          
          <label for="EventName">Enter Event Name </label>
          <input class="form-control mb-3"  id="EventName" name="EventName" onChange={(e)=>setEname(e.target.value)}/>
          
          
          
         
          
         <br/>
          <button className="bg-info btn text-center " onClick={pdfGenerator}>Download Certificate</button>
        </form>
      </div>
      
      

      
    </>
  );
}

export default Appreciation;
