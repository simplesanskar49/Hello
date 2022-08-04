import './App.css';
import CheckApi from './components/CheckApi';
import Home from './components/Home';
import {Layout} from 'antd';
import Navbar from './components/Navbar';
import Foot from './components/Foot';
import Check from './components/Check';
import Navbarr from './components/Navbarr';

function App() {
  return (
    <div>
      <Layout>
        <Navbar/>
        <Home/>
        <Foot/>
      </Layout>
      {/* <CheckApi/> */}
      {/* <Navbarr/> */}
    </div>
  );
}

export default App;
