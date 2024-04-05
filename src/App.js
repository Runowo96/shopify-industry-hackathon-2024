import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import QuizOne from './Pages/QuizOne';
import QuizTwo from './Pages/QuizTwo';
import Profile from './Pages/Profile';
// const url = "http://localhost:8080/";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quiz/one" element={<QuizOne />}/>
        <Route path="/quiz/two" element={<QuizTwo />}/>
      
      </Routes>
</BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
<Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
