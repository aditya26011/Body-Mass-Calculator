import gender from '../Assets/icon-gender.svg'
import race from '../Assets/icon-race.svg'
import muscle from '../Assets/icon-muscle.svg'
import pregnancy from '../Assets/icon-pregnancy.svg'
import age from '../Assets/icon-age.svg'   
const Limitations=()=>{
    return(
        <div className="mt-8  ">
            <div >
              <h1 className="text-2xl font-bold text-center">Limitations of BMI</h1>
              <div className='text-center mt-6 md:p-5 '>
                <p>
                Although BMI is often a practical indicator of healthy weight, it is not suited for
        every person. Specific groups should carefully consider their BMI outcomes, and in
        certain cases, the measurement may not be beneficial to use.
                </p>
                </div>
            </div>
            <div className='flex flex-col items-center md:flex-row  md:flex-wrap justify-around'>
            <div className='mt-5 ml-3 w-72 bg-slate-100 rounded-md p-2'>
            <div className='flex mb-2 '>
                <img className='mr-2' src={gender} alt="" />
                <h3 className='text-xl font-bold'>Gender</h3>
            </div>
            <p>The development and body fat composition of girls and boys vary with age.
        Consequently,
        a child's age and gender are considered when evaluating their BMI.</p>
        </div>
        <div className='mt-5 ml-3 w-72 bg-slate-100 rounded-md p-2'>
            <div className='flex mb-2 '>
                <img className='mr-2' src={age} alt="" />
                <h3 className='text-xl font-bold'>Age</h3>
            </div>
            <p>In aging individuals, increased body fat and muscle loss may cause BMI to
        underestimate
        body fat content.</p>
        </div>
        <div className='mt-5 ml-3 w-72 bg-slate-100 rounded-md p-2'>
            <div className='flex mb-2 '>
                <img className='mr-2' src={muscle} alt="" />
                <h3 className='text-xl font-bold'>Muscle</h3>
            </div>
            <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't
        differentiate muscle from fat.</p>
        </div>
        <div className='mt-5 ml-3 w-72 bg-slate-100 rounded-md p-2'>
            <div className='flex mb-2 '>
                <img className='mr-2' src={pregnancy} alt="" />
                <h3 className='text-xl font-bold'>Pregnancy</h3>
            </div>
            <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a
        healthy pre-pregnancy BMI is advisable to minimise health risks for both mother
        and child.</p>
        </div>
        <div className='mt-5 ml-3 w-72 bg-slate-100 rounded-md p-2'>
            <div className='flex mb-2 '>
                <img className='mr-2' src={race} alt="" />
                <h3 className='text-xl font-bold'>Race</h3>
            </div>
            <p>Certain health concerns may affect individuals of some Black and Asian origins at
        lower BMIs than others. To learn more, it is advised to discuss this with your
        GP or practice nurse.</p>
        </div>
        </div>
        </div>
    )
}

export default Limitations;