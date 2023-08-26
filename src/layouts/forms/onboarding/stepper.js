import { CheckCircleIcon } from "@heroicons/react/24/solid";

const items = ["personal", "company", "subscription", "confirm"];

export const Stepper = ({ disabled, data, updateData }) => {
    return (
        <ol className="p-5 shadow-sm rounded-t flex items-center w-full justify-between text-sm font-medium text-center text-gray-400 sm:text-base">
            {items.map((item, i) => {
                return items.length - 1 !== i ? (
                    <li
                        className={`flex md:w-full items-center cursor-pointer ${
                            data.step === item && "text-blue-600 "
                        } hover:text-blue-600 transition duration-150 ease-in-out sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-5 dark:after:border-gray-700`}
                        onClick={() => {
                            updateData({ ...data, step: item });
                        }}
                    >
                        <span className="flex items-center after:content-['/'] capitalize font-manjari font-bold tracking-wider sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <CheckCircleIcon className="w-6 -mt-1.5 mr-2" />
                            {item}
                        </span>
                    </li>
                ) : (
                    <li
                        className={`flex items-center cursor-pointer font-manjari tracking-wider font-bold ${
                            data.step === item && "text-blue-600 "
                        } hover:text-blue-600 transition duration-150`}
                        onClick={() => {
                            updateData({ ...data, step: "confirm" });
                        }}
                    >
                        <CheckCircleIcon className="w-6 -mt-1.5 mr-2" />
                        Confirm
                    </li>
                );
            })}
        </ol>
    );
};
