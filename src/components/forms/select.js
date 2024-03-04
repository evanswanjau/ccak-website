export const Select = ({
    item,
    label,
    required = false,
    list,
    data,
    updateData,
}) => {
    return (
        <div>
            <label
                className="block uppercase mb-2 text-[0.7em] font-bold text-gray-900 font-poppins"
                htmlFor={item}
            >
                {label}{" "}
                {required && <span className="text-red-600 text-sm">*</span>}
            </label>
            <select
                className="bg-white border font-manjari text-gray-900 rounded-lg focus:outline-none focus:ring-[#ED7423] focus:border-[#ED7423] block w-full p-2 pt-3"
                id={item}
                onChange={(event) => {
                    updateData({
                        ...data,
                        [item]: event.target.value,
                    });
                }}
            >
                <option value={""}>Choose {item.replace(/_/g, " ")}</option>
                {list.map((option) => {
                    return (
                        <option
                            key={option.value}
                            value={option.value}
                            selected={data[item] === option.value}
                            className="font-manjari"
                        >
                            {option.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
