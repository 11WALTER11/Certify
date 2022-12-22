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
  const [sName, setsName] = useState("");
  const [YearB, setYearB] = useState("");
  const [position, setPosition] = useState("");
  const [sEname, setEname] = useState("");
  const [Cname, setCname] = useState("");
  const [Ed, setEd] = useState("");
  const [CA, setCA] = useState("");

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

  const pdfGenerator = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(ACertificate, "PNG", 65, 20, 500, 400);
    doc.setFontSize(15);
    doc.setFont("courier", "bolditalic");
    doc.text(238, 200, sName); // Student Name

    doc.setFontSize(9);
    doc.setFont("time", "bold");
    doc.text(389, 73, `IU/CSE/AMC-${EventShortForm()}/${Ed}/${Random(5)}`);

    doc.setFontSize(13);
    doc.setFont("time", "bold");
    doc.text(122, 232, YearB); // Year branch
    doc.text(233, 232, position); // position
    doc.text(358, 232, sEname); // Event name
    doc.text(173, 247, Cname); // Club name
    doc.text(290, 261, Ed); // event Date

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
    } else {
      // doc.addImage(anwarsir, "PNG", 130, 314, 50, 40);
      doc.setFont("courier");
      doc.setFontSize(11.5);
      doc.text(100, 358, CLUBADVISOR[5]);
    }

    doc.save(`${sName}'s_${sEname}_certificate.pdf`);
  };

  return (
    <>
      <div className=" header w- text-center">
        <h2>Appreciation Certificate</h2>
      </div>
      <div className="container form-outline mt-4 ">
        <form className="py-2 px-3">
          <label for="fname">Student Name:</label>
          <input
            class="col-md-4 form-control mb-3"
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

          <label for="POS">Position:</label>
          <input
            class="form-control mb-3"
            type="text"
            id="POS"
            name="POS"
            onChange={(e) => setPosition(e.target.value)}
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
            className="form-control mb-3 sm"
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

          <br />
          <center>
            {" "}
            <button
              className="bg-dark text-white btn text-center "
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
