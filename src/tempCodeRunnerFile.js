import './App.css';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  const events =["abc","abd","kdfg"];

  return (
    <div>
      <Header/>
        

       <div class="cont">
        <form>
        <br/>
        <label for="fname">Student Name:</label>
        <input type="text" id="fname" name="fname"/><br/>
        <br/>
        <label for="YearB">Enter Year / Branch :</label>
        <input type="text" id="YearB" name="YearB"/><br/>
        <br/>
        <label for="ClubN">Enter Club Name :</label>
        <input type="text" id="ClubN" name="ClubN"/><br/>
        <br/>
        <label for="Edate">Enter Event Date </label>
        <input type="date" id="Edate" name="Edate"/><br/>
        <br/>
        <label for="EventName">Choose Event name:</label>
  <select id="EventName" name="EventName">
                    <option disabled>Choose an option</option>

  {events.map((value) => (
                  <option>{value}</option>
                ))}
    
  </select><br/>
  <button >Downlaod Certificate</button>

        </form>

       </div>


  
        <Footer/>
       
      
    </div>
  );
}

export default App;
