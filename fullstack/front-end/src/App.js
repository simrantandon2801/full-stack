import logo from './logo.svg';
import './App.css';
import  Rajiv  from "./pages/Rajiv";
import NewsFeed from './newsfeed';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Routes>
				  
          <Route path="/rajiv" element={<Rajiv />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
          </Routes>
    </div>
  );
}

export default App;
