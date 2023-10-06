import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  const events = ["abc", "abd", "kdfg"];

  return (
    <div>
      <Header />

      <div className="cont">
        <form>
          <br />
          <label htmlFor="fname">Student Name:</label>
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label htmlFor="YearB">Enter Year / Branch :</label>
          <input type="text" id="YearB" name="YearB" />
          <br />
          <br />
          <label htmlFor="ClubN">Enter Club Name :</label>
          <input type="text" id="ClubN" name="ClubN" />
          <br />
          <br />
          <label htmlFor="Edate">Enter Event Date </label>
          <input type="date" id="Edate" name="Edate" />
          <br />
          <br />
          <label htmlFor="EventName">Choose Event name:</label>
          <select id="EventName" name="EventName">
            <option disabled>Choose an option</option>

            {events.map((index, value) => (
              <option key={index}>{value}</option>
            ))}
          </select>
          <br />
          <button>Downlaod Certificate</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default App;
