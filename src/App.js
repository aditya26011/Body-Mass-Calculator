import './App.css';
import BMI from './Components/BMI';
import Body from './Components/Body';
import Habits from './Components/Habits';
import Info from './Components/Info';
import Limitations from './Components/Limitations';

function App() {
  return (
   
      <div className=' lg:relative '>
        <Body/>
        <div className='lg:absolute lg:top-[65px] lg:left-96 lg:w-4/6'>
        <BMI />
        </div>
        <Info/>
        <Habits/>
        <Limitations/>
        </div>
       
      
  
  );
}

export default App;
