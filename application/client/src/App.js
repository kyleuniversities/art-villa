import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './app/home/HomePage';
import { RequestPage } from './app/request/RequestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/request" element={<RequestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
