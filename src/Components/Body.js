import Logo from '../Assets/logo.svg'

const Body=()=>{
    return(
        <div className='flex items-center flex-col bg-slate-300 rounded-b-3xl lg:w-3/4 lg:ml-3 lg:relative  '>
            <div >
                <img className='mt-4 lg:absolute lg:left-24 ' src={Logo} alt="Logo" />
            </div>
            <div className='mt-6 w-72 h-96 text-center md:w-[640px] lg:text-start lg:mt-44 lg:mr-10 xl:mr-56 ' >


            <h1 className='text-5xl font-extrabold lg:w-[25rem]'>Body Mass Index Calculator</h1>
            <p className='mt-4 p-2 lg:w-[25rem]'>
            Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.  
            </p>

            </div>
        </div>
    );
}

export default Body;