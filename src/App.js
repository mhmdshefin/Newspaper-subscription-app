import logo from './logo.svg';
import './App.css';
import AddSubscribers from './component/AddSubscribers';
import SearchSubscribers from './component/SearchSubscribers';
import DeleteSubscribers from './component/DeleteSubscribers';
import ViewSubscribers from './component/ViewSubscribers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddSubscribers />} />
       <Route path="/delete" element={<DeleteSubscribers/>} />
       <Route path="/search" element={<SearchSubscribers/>} />
       <Route path="/view" element={<ViewSubscribers/>} />



      </Routes>
    </BrowserRouter>




  );
}

export default App;
