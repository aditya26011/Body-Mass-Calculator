import './App.css';
import BMI from './Components/BMI';
import Body from './Components/Body';
import Info from './Components/Info';

function App() {
  return (
   
      <div className=' lg:relative '>
        <Body/>
        <div className='lg:absolute lg:top-[65px] lg:left-96 lg:w-4/6  xl:w-5/6'>
        <BMI />
        </div>
        <Info/>
        </div>
       
      
  
  );
}

export default App;
