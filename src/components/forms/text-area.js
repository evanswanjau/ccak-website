export const TextArea = ({
    type,
    name,
    label,
    required = false,
    data,
    updateData,
}) => {
    return (
        <div>
            <label
                htmlhtmlFor={type}
                className="block uppercase mb-2 text-[0.7em] font-bold text-gray-900 font-montserrat"
            >
                {name}
                {required && <span className="text-red-600 text-sm">*</span>}
            </label>
            <textarea
                id={type}
                rows="3"
                placeholder={label}
                className="border font-manjari text-gray-900 rounded-lg focus:outline-none focus:ring-[#ED7423] focus:border-[#ED7423] block w-full p-2 pt-3"
                value={data[name]}
                onChange={(event) => {
                    updateData({ ...data, [name]: event.target.value });
                }}
            ></textarea>
        </div>
    );
};
