import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Subjects from './components/Subjects/Subjects';
import { toast } from 'react-toastify';

function App() {
  const notify=()=>toast("hwllo");
  return (
    <div className="App">
    <Header></Header>
    <h2 className='text-primary'>Select Your Sttudy Plan</h2>
    <Subjects></Subjects>
    </div>
  );
}

export default App;
