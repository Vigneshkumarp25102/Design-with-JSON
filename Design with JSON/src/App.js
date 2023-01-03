import { BrowserRouter, Route,Routes } from "react-router-dom";
import {Header} from "./component/header.js";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
