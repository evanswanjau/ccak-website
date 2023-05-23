import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const InputForm = ({
    type,
    name,
    label,
    required = false,
    data,
    updateData,
}) => {
    const [pass, setPass] = useState(false);
    const [passType, setType] = useState(type);
    return (
        <div>
            <label
                for={type}
                class="block uppercase mb-2 text-[0.7em] font-bold text-gray-900 font-montserrat"
            >
                {label}{" "}
                {required && <span className="text-red-600 text-sm">*</span>}
            </label>
            <div className="relative">
                <input
                    type={type === "password" && passType}
                    id={name}
                    class="border font-manjari text-gray-900 rounded-lg focus:outline-none focus:ring-[#ED7423] focus:border-[#ED7423] block w-full p-2 pt-3"
                    placeholder={label.toLowerCase()}
                    value={data[name]}
                    onChange={(event) => {
                        updateData({ ...data, [name]: event.target.value });
                    }}
                />
                {type === "password" && (
                    <div>
                        {pass ? (
                            <EyeIcon
                                className="w-6 absolute top-3 right-2 text-gray-400 cursor-pointer"
                                onClick={() => {
                                    setType("password");
                                    setPass(false);
                                }}
                            />
                        ) : (
                            <EyeSlashIcon
                                className="w-6 absolute top-3 right-2 text-gray-400 cursor-pointer"
                                onClick={() => {
                                    setType("text");
                                    setPass(true);
                                }}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
