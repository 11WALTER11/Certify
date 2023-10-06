import React from "react";
import { useState } from "react";
import jsPDF from "jspdf";
// import * as XLSX from "xlsx";

import PCertificate from "../certificate/participationC.png";
// import akbarsir from "../Signatures/akbarsir.png";
// import anwarsir from "../Signatures/anwarsir.png";
// import faiyazsir from "../Signatures/faiyazsir.png";
// import suaibsir from "../Signatures/suaibsir.png";
// import usmansir from "../Signatures/usmansir.png";
// import salehamam from "../Signatures/salehamam.png";

const Participationc = () => {
  const EventShortForm = () => {
    if (formData.Cname === "Tech Club") {
      return `TC`;
    } else if (formData.Cname === "Social Responsibilty Club") {
      return `SRC`;
    } else if (formData.Cname === "Art&Cultural Club") {
      return `ACC`;
    } else if (formData.Cname === "Sports Club") {
      return `SPT`;
    } else if (formData.Cname === "Literary Club") {
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

  const [formData, setFormData] = useState({
    sName: "",
    YearB: "",
    sEname: "",
    Cname: "",
    Ed: "",
    CA: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const pdfGenerator = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(PCertificate, "PNG", 65, 20, 500, 400);
    doc.setFontSize(15);
    doc.setFont("courier", "bolditalic");
    doc.text(242, 200, formData.sName); // Student Name

    doc.setFontSize(9);
    doc.setFont("time", "bold");
    doc.text(
      389,
      73,
      `IU/CSE/AMC-${EventShortForm()}/${formData.Ed}/${Random(5)}`
    );

    doc.setFontSize(13);
    doc.setFont("time", "bold");
    doc.text(122, 235, formData.YearB); // Year branch
    doc.text(328, 235, formData.sEname); // Event name
    doc.text(150, 252, formData.Cname); // Club name
    doc.text(290, 267, formData.Ed); // event Date

    if (formData.CA === CLUBADVISOR[0]) {
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(123, 358, CLUBADVISOR[0]);
    } else if (formData.CA === CLUBADVISOR[1]) {
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(123, 358, CLUBADVISOR[1]);
    } else if (formData.CA === CLUBADVISOR[2]) {
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(105, 358, CLUBADVISOR[2]);
    } else if (formData.CA === CLUBADVISOR[3]) {
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(100, 358, CLUBADVISOR[3]);
    } else if (formData.CA === CLUBADVISOR[4]) {
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(125, 358, CLUBADVISOR[4]);
    } else if (formData.CA === CLUBADVISOR[5]) {
      doc.setFont("courier");
      doc.setFontSize(11.5);
      doc.text(100, 358, CLUBADVISOR[5]);
    }

    doc.save(`${formData.sName}'s_${formData.sEname}certificate.pdf`);
  };

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

  const validateForm = (e) => {
    e.preventDefault();
    if (formData.sName.length === 0) {
      alert('Student Name is required')
      return
    }
    if(formData.YearB.length === 0) {
      alert('Year/branch is required')
      return
    }
    if(formData.Cname.length === 0) {
      alert('Club name is required')
      return
    }
    if(formData.Ed.length === 0) {
      alert('Event Date is required')
      return
    }
    if(formData.sEname.length === 0){
      alert('Event name is required')
      return
    }
    if(formData.CA.length === 0) {
      alert('Club Advisor is required')
      return
    }
    pdfGenerator();
  }

  return (
    <>
      <div className="header text-center">
        <h2>Participation Certificate</h2>
      </div>
      <div className="container form-outline mt-4 col align-self-center w-50">
        <div className="">
          <div className="form-group">
            <form className="py-2 px-3">
              <label htmlFor="sName">Student Name:</label>
              <input
                className="form-control mb-3"
                type="text"
                id="sName"
                name="sName"
                value={formData.sName}
                onChange={handleChange}
              />

              <label htmlFor="YearB">
                Year/branch: <h6 className="text-muted">(Ex: 4 Y/CSE)</h6>
              </label>
              <input
                className="form-control mb-3"
                type="text"
                id="YearB"
                name="YearB"
                value={formData.YearB}
                onChange={handleChange}
              />

              <label htmlFor="Cname">Choose Club:</label>
              <select
                className="form-control mb-3"
                id="Cname"
                name="Cname"
                value={formData.Cname}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose an option
                </option>

                {CLUBS.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>

              <label htmlFor="Ed">Enter Event Date:</label>
              <input
                className="form-control mb-3"
                type="date"
                id="Ed"
                name="Ed"
                value={formData.Ed}
                onChange={handleChange}
              />

              <label htmlFor="sEname">Enter Event Name:</label>
              <input
                className="form-control mb-3"
                id="sEname"
                name="sEname"
                value={formData.sEname}
                onChange={handleChange}
              />

              <label htmlFor="CA">Select Your Club Advisor:</label>
              <select
                name="CA"
                className="form-control mb-3"
                value={formData.CA}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option>Mr Mohd Suaib</option>
                <option>Dr Mohd Akbar</option>
                <option>Mr Mohd Usman khan</option>
                <option>Mrs Saleha Mariyam</option>
                <option>Dr Faiyaz Ahamad</option>
                <option>Mr Anwar Ahmad Sheikh</option>
              </select>

              <br />
              <center>
                <button
                  className="bg-dark text-white btn"
                  onClick={validateForm}
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
