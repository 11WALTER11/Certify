import React from "react";
import { useState } from "react";
import jsPDF from "jspdf";
// import * as XLSX from "xlsx";
import ReactLoading from "react-loading";

import PCertificate from "../certificate/participationC.png";
// import akbarsir from "../Signatures/akbarsir.png";
// import anwarsir from "../Signatures/anwarsir.png";
// import faiyazsir from "../Signatures/faiyazsir.png";
// import suaibsir from "../Signatures/suaibsir.png";
// import usmansir from "../Signatures/usmansir.png";
// import salehamam from "../Signatures/salehamam.png";

const Random = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const Participationc = () => {
  const EventShortForm = () => {
    if (Cname === "Tech Club") {
      return `TC`;
    } else if (Cname === "Social Responsibilty Club") {
      return `SRC`;
    } else if (Cname === "Art&Cultural Club") {
      return `ACC`;
    } else if (Cname === "Sports Club") {
      return `SPT`;
    } else if (Cname === "Literary Club") {
      return `LIT`;
    } else {
      return `CC`;
    }
  };

  const CLUBADVISOR = [
    "Mr Mohd Suaib",
    "Dr Mohd Akbar",
    "Mr Mohd Usman khan",
    "Mrs Saleha Mariyam",
    "Dr Faiyaz Ahamad",
    "Mr Anwar Ahmad Sheikh",
  ];
  const CLUBS = [
    "Tech Club",
    "Social Responsibilty Club",
    "Art&Cultural Club",
    "Sports Club",
    "Literary Club",
    "Code Club",
  ];

  const [sName, setsName] = useState("");
  const [YearB, setYearB] = useState("");
  const [sEname, setEname] = useState("");
  const [Cname, setCname] = useState("");
  const [Ed, setEd] = useState("");
  const [CA, setCA] = useState("");

  // const handleFile = async (e) => {
  //   const file = e.target.files[0];
  //   const data = await file.arrayBuffer();
  //   const workbook = XLSX.read(data);

  //   const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  //   const jsonData = XLSX.utils.sheet_to_json(
  //     worksheet,

  //     {
  //       header: 1,
  //       defval: "",
  //     }
  //   );

  //   console.log(jsonData);
  // };

  const pdfGenerator = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(PCertificate, "PNG", 65, 20, 500, 400);
    doc.setFontSize(15);
    doc.setFont("courier", "bolditalic");
    doc.text(242, 200, sName); // Student Name

    doc.setFontSize(9);
    doc.setFont("time", "bold");
    doc.text(389, 73, `IU/CSE/AMC-${EventShortForm()}/${Ed}/${Random(5)}`);

    doc.setFontSize(13);
    doc.setFont("time", "bold");
    doc.text(122, 235, YearB); // Year branch
    doc.text(328, 235, sEname); // Event name
    doc.text(150, 252, Cname); // Club name
    doc.text(290, 267, Ed); // event Date

    if (CA === CLUBADVISOR[0]) {
      // doc.addImage(suaibsir, "PNG", 130, 310, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(123, 358, CLUBADVISOR[0]);
    } else if (CA === CLUBADVISOR[1]) {
      // doc.addImage(akbarsir, "PNG", 115, 280, 90, 80);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(123, 358, CLUBADVISOR[1]);
    } else if (CA === CLUBADVISOR[2]) {
      // doc.addImage(usmansir, "PNG", 115, 280, 90, 80);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(105, 358, CLUBADVISOR[2]);
    } else if (CA === CLUBADVISOR[3]) {
      // doc.addImage(salehamam, "PNG", 130, 304, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(100, 358, CLUBADVISOR[3]); // saleha mam
    } else if (CA === CLUBADVISOR[4]) {
      // doc.addImage(faiyazsir, "PNG", 130, 300, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(125, 358, CLUBADVISOR[4]);
    } else if (CA === CLUBADVISOR[5]) {
      // doc.addImage(anwarsir, "PNG", 130, 314, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(11.5);
      doc.text(100, 358, CLUBADVISOR[5]);
    }

    doc.save(`${sName}'s_${sEname}certificate.pdf`);
  };

  return (
    <>
      <div className=" header  text-center">
        <h2>Participation Certificate</h2>
      </div>
      <div className=" container  form-outline mt-4 col align-self-center w-50">
        <div className="">
          <div className="form-group">
            <form className=" py-2 px-3">
              <label for="fname">Student Name:</label>
              <input
                class="form-control mb-3"
                type="text"
                id="fname"
                name="fname"
                onChange={(e) => setsName(e.target.value)}
              />

              <label for="YB">
                Year/branch: <h6 className="text-muted">(Ex: 4 Y/CSE)</h6>
              </label>
              <input
                class="form-control mb-3"
                type="text"
                id="YB"
                name="YB"
                onChange={(e) => setYearB(e.target.value)}
              />

              <label for="ClubN">Choose Club:</label>
              <select
                class="form-control mb-3"
                type="text"
                id="ClubN"
                name="ClubN"
                onChange={(e) => setCname(e.target.value)}
              >
                <option deafault selected disabled>
                  Choose an option
                </option>

                {CLUBS.map((value) => (
                  <option>{value}</option>
                ))}
              </select>

              <label for="Edate">Enter Event Date </label>
              <input
                class="form-control mb-3"
                type="date"
                id="Edate"
                name="Edate"
                onChange={(e) => setEd(e.target.value)}
              />

              <label for="EventName">Enter Event Name </label>

              <input
                class="form-control mb-3"
                id="EventName"
                name="EventName"
                onChange={(e) => setEname(e.target.value)}
              />

              <label for="CA">Select Your Club Advisor</label>
              <select
                name="CA"
                className="form-control mb-3"
                onChange={(e) => setCA(e.target.value)}
              >
                <option deafault selected disabled>
                  Choose an option
                </option>
                {/* {CA.map((value) => (
                  <option>{value}</option>
                ))} */}
                <option>Mr Mohd Suaib</option>
                <option>Dr Mohd Akbar</option>
                <option>Mr Mohd Usman khan</option>
                <option>Mrs Saleha Mariyam</option>
                <option>Dr Faiyaz Ahamad</option>
                <option>Mr Anwar Ahmad Sheikh</option>
              </select>

              {/* <h1>Parse Excel</h1>
          <input type="file" onChange={(e) => handleFile(e)} /> */}

              <br />
              <center>
                <button
                  className="bg-dark text-white btn "
                  onClick={pdfGenerator}
                >
                  Download Certificate
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Participationc;
