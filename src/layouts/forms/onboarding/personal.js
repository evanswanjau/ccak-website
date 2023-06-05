import { InputForm } from "../../../components/forms/input-form";

export const PersonalDetails = ({ data, updateData }) => {
    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5">
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="first_name"
                        label="First Name"
                        required={true}
                        data={data}
                        updateData={updateData}
                    />
                </div>
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="last_name"
                        label="Last Name"
                        required={true}
                        data={data}
                        updateData={updateData}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full">
                    <InputForm
                        type="email"
                        name="email"
                        label="Email Address"
                        required={true}
                        data={data}
                        updateData={updateData}
                    />
                </div>
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="phone_number"
                        label="Phone Number"
                        required={true}
                        data={data}
                        updateData={updateData}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="company"
                        label="Company you represent"
                        data={data}
                        updateData={updateData}
                    />
                </div>
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="designation"
                        label="Designation"
                        data={data}
                        updateData={updateData}
                    />
                </div>
            </div>
        </div>
    );
};
