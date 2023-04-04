export const InputForm = ({ type, name, label, data, updateData }) => {
    return (
        <div>
            <label
                for={type}
                class="block mb-2 text-sm font-medium text-gray-900 font-manjari"
            >
                {label}
            </label>
            <input
                type={type}
                id={name}
                class="bg-gray-50 border-2 border-transparent font-manjari text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#ED7423] focus:border-[#ED7423] block w-full p-2.5 "
                placeholder={`Enter ${label.toLowerCase()}`}
                value={data[name]}
                onChange={(event) => {
                    updateData({ ...data, [name]: event.target.value });
                }}
            />
        </div>
    );
};
