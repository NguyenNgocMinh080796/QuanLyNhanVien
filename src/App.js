import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainBoard from './page/MainBoard';
import ModalHOC from './HOC/ModalHOC';

function App() {
  return (
    <BrowserRouter>
      <MainBoard />
      <ModalHOC />
    </BrowserRouter>
  );
}

export default App;
