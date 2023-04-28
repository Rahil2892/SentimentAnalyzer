import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Form from './Form';

function App() {
  return (
    <div className="w-screen h-screen bg-cyan-200" >
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/form" element={<Form/>} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
