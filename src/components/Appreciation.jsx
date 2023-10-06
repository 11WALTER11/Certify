import { useState } from "react";
import jsPDF from "jspdf";
import ACertificate from "../certificate/appreciationC.png";
// import akbarsir from "../Signatures/akbarsir.png";
// import anwarsir from "../Signatures/anwarsir.png";
// import faiyazsir from "../Signatures/faiyazsir.png";
// import suaibsir from "../Signatures/suaibsir.png";
// import usmansir from "../Signatures/usmansir.png";
// import salehamam from "../Signatures/salehamam.png";

// const events = ["Skit" , "Singing Competition" , "Feel the Reel","xquizite","Ibm Bootcamp " ,
// " SDP: Entrepreneurship Skills" , "Guest Lecture on Cyber Security Awareness and it's Emerging Trends ","Just-A-Minute(JAM)",
// " Feel The Reel","Badminton"];

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

const CLUBS = [
  "Tech Club",
  "Social Responsibilty Club",
  "Art&Cultural Club",
  "Sports Club",
  "Literary Club",
  "Code Club",
];

const CLUBADVISOR = [
  "Mr Mohd Suaib",
  "Dr mohd Akbar",
  "Mr Mohd Usman khan",
  "Mrs Saleha Mariyam",
  "Dr Faiyaz ahmad",
  "Mr Anwar Ahmad Sheikh",
];

const Appreciation = () => {
  const [formData, setFormData] = useState({
    sName: "",
    YearB: "",
    position: "",
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

  const pdfGenerator = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(ACertificate, "PNG", 65, 20, 500, 400);
    doc.setFontSize(15);
    doc.setFont("courier", "bolditalic");
    doc.text(238, 200, formData.sName); 

    doc.setFontSize(9);
    doc.setFont("time", "bold");
    doc.text(389, 73, `IU/CSE/AMC-${EventShortForm()}/${formData.Ed}/${Random(5)}`);

    doc.setFontSize(13);
    doc.setFont("time", "bold");
    doc.text(122, 232, formData.YearB); 
    doc.text(233, 232, formData.position); 
    doc.text(358, 232, formData.sEname); 
    doc.text(173, 247, formData.Cname); 
    doc.text(290, 261, formData.Ed); 

    if (formData.CA === CLUBADVISOR[0]) {
      // doc.addImage(suaibsir, "PNG", 130, 310, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(123, 358, CLUBADVISOR[0]);
    } else if (formData.CA === CLUBADVISOR[1]) {
      // doc.addImage(akbarsir, "PNG", 115, 280, 90, 80);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(123, 358, CLUBADVISOR[1]);
    } else if (formData.CA === CLUBADVISOR[2]) {
      // doc.addImage(usmansir, "PNG", 115, 280, 90, 80);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(105, 358, CLUBADVISOR[2]);
    } else if (formData.CA === CLUBADVISOR[3]) {
      // doc.addImage(salehamam, "PNG", 130, 304, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(100, 358, CLUBADVISOR[3]); // saleha mam
    } else if (formData.CA === CLUBADVISOR[4]) {
      // doc.addImage(faiyazsir, "PNG", 130, 300, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(12);
      doc.text(125, 358, CLUBADVISOR[4]);
    } else {
      // doc.addImage(anwarsir, "PNG", 130, 314, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(11.5);
      doc.text(100, 358, CLUBADVISOR[5]);
    }

    doc.save(`${formData.sName}'s_${formData.sEname}_certificate.pdf`);
  };

  return (
    <>
      <div class="header w- text-center">
        <h2>Appreciation Certificate</h2>
      </div>
      <div class="container form-outline mt-4 col align-self-center w-50">
        <form class="py-2 px-3">
          <label htmlFor="sName">Student Name:</label>
          <input
            class="col-md-4 form-control mb-3"
            type="text"
            id="sName"
            name="sName"
            value={formData.sName}
            onChange={handleChange}
          />

          <label htmlFor="YearB">
            Year/branch: <h6 class="text-muted">(Ex: 4 Y/CSE)</h6>
          </label>
          <input
            class="form-control mb-3"
            type="text"
            id="YearB"
            name="YearB"
            value={formData.YearB}
            onChange={handleChange}
          />

          <label htmlFor="position">Position:</label>
          <input
            class="form-control mb-3"
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />

          <label htmlFor="Cname">Choose Club:</label>
          <select
            class="form-control mb-3"
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
            class="form-control mb-3"
            type="date"
            id="Ed"
            name="Ed"
            value={formData.Ed}
            onChange={handleChange}
          />

          <label htmlFor="sEname">Enter Event Name:</label>
          <input
            class="form-control mb-3"
            id="sEname"
            name="sEname"
            value={formData.sEname}
            onChange={handleChange}
          />

          <label htmlFor="CA">Select Your Club Advisor:</label>
          <select
            name="CA"
            class="form-control mb-3 sm"
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


          <center>
            <button
              class="bg-dark text-white btn text-center"
              onClick={pdfGenerator}
            >
              Download Certificate
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default Appreciation;
