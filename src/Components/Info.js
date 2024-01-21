import ManImg from "../Assets/image-man-eating.webp";

const Info = () => {
  return (
    <div className="mt-8 md:flex justify-center items-center lg:justify-evenly">
       
      <img className="md:w-80 md:h-auto lg:w-96 " src={ManImg} alt="" />
      
        <div className="mt-10 mr-1 p-4 md:ml-6 lg:w-[448px]">
        <h1 className="mb-4 text-2xl font-bold">What your BMI result means</h1>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </div>
  );
};

export default Info;
