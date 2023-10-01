import "./App.css";

// eslint-disable-next-line
import { useState } from "react";
import Appreciation from "./components/Appreciation";
import Participationc from "./components/Participationc";
import Header from "./components/header";
import Footer from "./components/footer";

// const events = ["Skit" , "Singing Competition" , "Feel the Reel","xquizite","Ibm Bootcamp " ,
// " SDP: Entrepreneurship Skills" , "Guest Lecture on Cyber Security Awareness and it's Emerging Trends ","Just-A-Minute(JAM)",
// " Feel The Reel","Badminton"];
const App = () => {
  const [selectedForm, setSelectedForm] = useState(0);

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Certificate Generator</h2>

        <div className="  text-center mb-5 mt-5 bg-transparent ">
          <h5>Choose Type of certificate you want to Genearte :</h5>
          <div
            class="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              onClick={() => setSelectedForm(0)}
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-dark" for="btnradio2">
              Appreciation Certificate
            </label>

            <input
              onClick={() => setSelectedForm(1)}
              type="radio"
              class="btn-check "
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label class="btn btn-outline-dark" for="btnradio3">
              Participation Certificate
            </label>
          </div>
        </div>

        {selectedForm ? <Participationc /> : <Appreciation />}
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
