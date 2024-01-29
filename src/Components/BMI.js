import { useState } from "react";

const BMI = () => {
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [bmiValue, setBMIValue] = useState("");

  const CalculateBmi = () => {
    const height = heightValue;
    const heightInMeters = height / 100;
    const weight = weightValue;
    setBMIValue(
      Math.round((weight / (heightInMeters * heightInMeters)) * 10) / 10
    );
  };

  return (
    <div className=" bg-white w-8/12 mx-auto rounded-xl min-h-96 shadow-2xl md:w-[68%]  ">
      <h2 className="text-center mb-5 font-bold  text-xl">
        Enter Your Details Below
      </h2>
      <div className="md:flex md:justify-around ">
        <div>
          <label className="m-2 ">Height in cm</label>
          <div>
            <input
              className="m-2 rounded-md border-black border-2"
              value={heightValue}
              onChange={(e) => setHeightValue(e.target.value)}
              type="number"
            />
          </div>
        </div>
        <div>
          <label className="m-2 ">Weight in kg</label>
          <div>
            <input
              className="m-2 rounded-md border-black border-2"
              value={weightValue}
              onChange={(e) => setWeightValue(e.target.value)}
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center md:mt-2">
        <button
          className="bg-black text-white  m-2 p-2 rounded-lg md:flex md:justify-center "
          onClick={CalculateBmi}
        >
          Calculate BMI
        </button>
      </div>

      <div className="mt-5 text-center">
        {bmiValue ? (
          <h1 className="text-2xl font-bold">
            Your BMI is {bmiValue} -{" "}
            {bmiValue <= 18.5
              ? "Underweight"
              : bmiValue >= 18.5 && bmiValue <= 24.5
              ? "Normal Weight"
              : bmiValue>=25 && bmiValue<=29.9
              ? "Overweight"
              :  "Obesity"
              }
          </h1>
        ) : (
          <h1 className="text-2xl font-bold">
            Welcome! Enter your height and weight to see your BMI!
          </h1>
        )}
      </div>
    </div>
  );
};

export default BMI;
