import { useState } from "react";
import { PersonalDetails } from "./forms/onboarding/personal";
import { ButtonLoader } from "../components/btnLoader";
import { validateEmail, validatePhoneNumber } from "../helpers/validation";
import { ErrorMessage } from "../components/forms/error";
import { InputForm } from "../components/forms/input-form";
import { Checkout } from "./forms/checkout/checkout";

const amountOptions = ["1000", "5000", "10000", "20000", "50000", "100000"];

export const DonateNow = ({ setShow }) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, updateData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    company: "",
    designation: "",
    amount: 0,
    step: "personal",
  });

  const getStep = (step) => {
    step = "";

    if (data.step === "personal") step = "amount";
    if (data.step === "amount") step = "checkout";

    return step;
  };

  const submitData = () => {
    try {
      // setBtnLoading(true);
      validateEmail(data.email);
      validatePhoneNumber(data.phone_number);

      setError(false);
      updateData({ ...data, step: getStep(data.step) });
      // onboardMember(
      //     { ...data, step: getStep(data.step) },
      //     updateData,
      //     setBtnLoading,
      //     setError
      // );
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }
  };

  let disabled = false;

  if (data.step === "personal") {
    disabled =
      data.first_name === "" ||
      data.last_name === "" ||
      data.email === "" ||
      data.phone_number === "" ||
      data.company === "" ||
      data.designation === "";
  } else if (data.step === "amount") {
    disabled = data.amount === "" || data.amount === 0;
  } else if (data.step === "checkout") {
    disabled = true;
  }
  return (
    <div className="bg-black bg-opacity-50 text-white fixed w-full h-screen z-50 -mt-[6.9em]">
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="px-4 py-20  w-full shadow-lg overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative bg-white text-black flex w-9/12 mx-auto justify-between rounded-lg shadow">
          {data.step !== "checkout" && (
            <div
              style={{
                backgroundImage: `url(${
                  process.env.REACT_APP_IMAGEKIT_URL +
                  "donate_page_section_1.jpg"
                })`,
              }}
              className="w-5/12 flex bg-cover bg-center bg-no-repeat rounded-l-lg"
            ></div>
          )}

          <div
            className={`${data.step === "checkout" ? "w-full" : "w-7/12"} px-5`}
          >
            <div class="flex items-start justify-end mt-5">
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="staticModal"
                onClick={() => {
                  setShow(false);
                }}
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {error && <ErrorMessage error={error} setError={setError} />}
            {data.step === "personal" && (
              <div>
                <h3 className="font-semibold text-lg">
                  Enter personal details
                </h3>
                <PersonalDetails data={data} updateData={updateData} />
              </div>
            )}

            {data.step === "amount" && (
              <div>
                <h3 className="font-semibold text-lg">Choose amount</h3>
                <div className="flex flex-wrap my-5">
                  {amountOptions.map((option) => {
                    return (
                      <p
                        className="border p-3 pb-2 w-25 my-2 mr-3 text-lg rounded-lg cursor-pointer"
                        onClick={() => {
                          updateData({
                            ...data,
                            amount: parseInt(option),
                          });
                        }}
                      >
                        {parseInt(option).toLocaleString("en-US")} KES
                      </p>
                    );
                  })}
                </div>
                <InputForm
                  type="number"
                  name="amount"
                  label="Amount to donate (KSH)"
                  required={true}
                  data={data}
                  updateData={updateData}
                />
              </div>
            )}

            {data.step === "checkout" && (
              <Checkout data={data} updateData={updateData} />
            )}

            <div className="flex space-x-4">
              <button
                type="button"
                className="w-full tracking-widest bg-white hover:bg-gray-800 text-black hover:text-white border border-gray-800 flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-200 ease-in-out"
                onClick={() => {
                  if (data.step === "personal") {
                    setShow(false);
                  } else if (data.step === "amount") {
                    updateData({
                      ...data,
                      step: "personal",
                    });
                  } else if (data.step === "checkout") {
                    updateData({
                      ...data,
                      step: "amount",
                    });
                  }
                }}
              >
                BACK
              </button>
              <button
                type="button"
                disabled={disabled}
                className={`w-full tracking-widest ${
                  disabled || btnLoading
                    ? "bg-gray-200"
                    : "bg-[#329E49] hover:bg-[#3ab554]"
                }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-700 ease-in-out`}
                onClick={() => {
                  submitData();
                }}
              >
                {btnLoading ? <ButtonLoader /> : "CONTINUE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
