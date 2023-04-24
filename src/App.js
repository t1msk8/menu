import logo from './logo.svg';
import './App.css';
import first from './img/first.png'
import second from './img/second.png'
import third from './img/third.png'
import four from './img/four.png'
import five from './img/five.png'
import six from './img/six.png'

function App() {
  return (
    <div className="App">
     
        <img src={first} alt="logo" className='image'/>
        <img src={second} alt="logo" className='image'/>
        <img src={third} alt="logo" className='image'/>
        <img src={four} alt="logo" className='image'/>
        <img src={five} alt="logo" className='image'/>
        <img src={six} alt="logo" className='image'/>
    
    </div>
  );
}

export default App;
