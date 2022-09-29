
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Subjects from './components/Subjects/Subjects';


function App() {
 
  return (
    <div className="App">
    <Header></Header>
    <h2 className='text-primary'>Select Your Sttudy Plan</h2>
    <Subjects></Subjects>
    <h2 className="text-success mt-5 p-3">Read Some Blogs</h2>
    <Blogs></Blogs>
    </div>
  );
}

export default App;
