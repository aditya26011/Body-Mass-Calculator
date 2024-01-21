import eating from '../Assets/icon-eating.svg'
import exercise from '../Assets/icon-exercise.svg' 
import sleep from '../Assets/icon-sleep.svg' 

const Habits=()=>{
return (
    <div className='mt-5 ml-2 md:flex md:w-auto md:p-5 md:ml-16  '>
        <div >
        <img src={eating} alt="eating " />
        <h3 className='font-bold mt-5 text-xl'>Healthy eating</h3>
        <p className='mt-5 mr-4'>Healthy eating promotes weight control, disease prevention, better digestion,
          immunity, mental clarity, and mood.</p>
        </div>
        <div className='mt-5'>
        <img src={exercise} alt="eating " />
        <h3 className='font-bold mt-5 text-xl'>Regular exercise</h3>
        <p className='mt-5 mr-4'>Exercise improves fitness, aids weight control, elevates mood, and reduces disease
          risk, fostering wellness and longevity.</p>
        </div>
        <div className='mt-5'>
        <img src={sleep} alt="eating " />
        <h3 className='font-bold mt-5 text-xl'>Adequate sleep</h3>
        <p className='mt-5 mr-4'>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting
          overall restoration and rejuvenation.</p>
        </div>
    </div>
);
}

export default Habits;