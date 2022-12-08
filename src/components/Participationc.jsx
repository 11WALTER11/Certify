import React from 'react'
import { useState } from 'react';
import jsPDF from "jspdf"
import PCertificate from '../certificate/participationC.png'
import akbarsir from '../Signatures/akbarsir.png'
import anwarsir from '../Signatures/anwarsir.png'
import faiyazsir from '../Signatures/faiyazsir.png'
import suaibsir from '../Signatures/suaibsir.png'
import usmansir from '../Signatures/usmansir.png'






 function Participationc() {

  const CLUBADVISOR=["Mr Mohd Suaib" ,"Dr Mohd Akbar","Mr Mohd Usman khan", "Mrs Saleha mariyam","Dr Faiyaz Ahamad","Mr Anwar Ahmad Sheikh"]

    const [sName, setsName] = useState("");
    const[YearB, setYearB] = useState("")
    const [sEname, setEname] = useState("");
    const [Cname, setCname] = useState("");
    const [Ed, setEd] = useState("");
    const [CA,setCA]= useState("");

  
   const pdfGenerator=()=>{
    
         var doc= new jsPDF('landscape','px','a4','false');
         doc.addImage(PCertificate,'PNG',65,20,500,400);
             doc.setFontSize(15);
             doc.setFont('courier', 'bolditalic');
             doc.text(242,200,sName,);  // Student Name
             
             doc.setFontSize(13);
             doc.setFont('time','bold',);
             doc.text(122,235,YearB);    // Year branch
             doc.text(328,235,sEname); // Event name
             doc.text(150,252,Cname);  // Club name
             doc.text(290,267,Ed); // event Date

             if (CA===CLUBADVISOR[0]){
              doc.addImage(suaibsir,'PNG',130,310,50,40);
              doc.setFont('courier');
              doc.setFontSize(12);
              doc.text(123,358,CLUBADVISOR[0])
            }else if (CA===CLUBADVISOR[1]){
              doc.addImage(akbarsir,'PNG',115,280,90,80)
              doc.setFont('courier');
              doc.setFontSize(12);
              doc.text(123,358,CLUBADVISOR[1])
            }else if (CA===CLUBADVISOR[2]){
              doc.addImage(usmansir,'PNG',115,280,90,80)
              doc.setFont('courier');
              doc.setFontSize(12);
              doc.text(105,358,CLUBADVISOR[2])
            }else if (CA===CLUBADVISOR[3]){
              doc.addImage() 
              doc.setFont('courier');
              doc.setFontSize(12);
              doc.text(110,350,CLUBADVISOR[3])                           // saleha mam
            }else if (CA===CLUBADVISOR[4]){
              doc.addImage(faiyazsir,'PNG',130,300,50,40)
              doc.setFont('courier');
              doc.setFontSize(12);
              doc.text(125,358,CLUBADVISOR[4])
            }else if (CA===CLUBADVISOR[5])
            {
              doc.addImage(anwarsir,'PNG',130,314,50,40)
              doc.setFont('courier');
              doc.setFontSize(11.5);
              doc.text(100,358,CLUBADVISOR[5])
            }



         doc.save(`${sName}'s_${sEname}certificate.pdf`);
    }










  return (
    <>
     
       <div className="text-center">
        
        <h2>Participation Certificate</h2>
       
       </div>
      <div className="container form-outline mt-4  py-2 px-3">
        <form >
         
          <label for="fname" >Student Name:</label>
          <input class="form-control mb-3" type="text" id="fname" name="fname" onChange={(e)=>setsName(e.target.value)} />
          
          <label for="YB">Year/branch:</label>
          <input class="form-control mb-3" type="text" id="YB" name="YB" onChange={(e)=>setYearB(e.target.value)} />
         
          
          
          
          
          
          <label for="ClubN">Enter Club Name :</label>
          <input class="form-control mb-3" type="text" id="ClubN" name="ClubN" onChange={(e)=>setCname(e.target.value)}/>
          
          <label for="Edate">Enter Event Date </label>
          <input class="form-control mb-3" type="date" id="Edate" name="Edate" onChange={(e)=>setEd(e.target.value)}/>
          
          <label for="EventName">Enter Event Name </label>
          <input class="form-control mb-3"  id="EventName" name="EventName" onChange={(e)=>setEname(e.target.value)}/>

          <label for="CA">Select Your Club Advisor</label>
          <select name="CA" className="form-control mb-3" onChange={(e)=>setCA(e.target.value)}>
          <option deafault selected disabled >Choose an option</option>
          {/* {CA.map((value) => (
                  <option>{value}</option>
                ))} */}
                <option>Mr Mohd Suaib</option>
                <option>Dr Mohd Akbar</option>
                <option>Mr Mohd Usman khan</option>
                <option>Mrs Saleha mariyam</option>
                <option>Dr Faiyaz Ahamad</option>
                <option>Mr Anwar Ahmad Sheikh</option>


          </select>
          
         <br/>
          <button className="bg-info btn text-center " onClick={pdfGenerator}>Download Certificate</button>
        </form>
      </div>
      
     

     
     
      
    </>
  )
}

export default Participationc;