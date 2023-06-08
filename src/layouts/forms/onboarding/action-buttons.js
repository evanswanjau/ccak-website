import { ButtonLoader } from "../../../components/btnLoader";

export const ActionButtons = ({
    disabled,
    data,
    updateData,
    submitData,
    btnLoading,
}) => {
    return (
        <div className="flex space-x-4">
            <button
                type="button"
                className={`${
                    data.step === "personal" ? "invisible" : "visible"
                } w-full tracking-widest bg-white hover:bg-gray-800 text-black hover:text-white border border-gray-800 flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-200 ease-in-out`}
                onClick={() => {
                    if (data.step === "company") {
                        updateData({ ...data, step: "personal" });
                    } else if (data.step === "subscription") {
                        updateData({ ...data, step: "company" });
                    } else if (data.step === "checkout") {
                        updateData({ ...data, step: "subscription" });
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
    );
};
