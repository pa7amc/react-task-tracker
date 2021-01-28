import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
      /*   const name = "Brad";
        const x = false; */

      return (
            <div className="cont1">
                  <Header />
                  <Tasks />
                  {/* 
      <h2>Hello {name}</h2>
      <h3>Hello {x ? "Y" : "N"}</h3> */}
            </div>
      );
}

export default App;
