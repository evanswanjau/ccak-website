import { InputForm } from "../../components/forms/input-form";

export const BillingDetails = ({ member, setMember }) => {
    return (
        <div>
            <h2 className="font-bold text-lg my-2">Billing Details</h2>
            <div className="w-full my-1">
                <InputForm
                    type="text"
                    name="name"
                    label="Full Name"
                    required={true}
                    data={member}
                    updateData={setMember}
                />
            </div>
            <div className="w-full my-1">
                <InputForm
                    type="email"
                    name="email"
                    label="Email Address"
                    required={true}
                    data={member}
                    updateData={setMember}
                />
            </div>
            <div className="w-full my-1">
                <InputForm
                    type="text"
                    name="phone_number"
                    label="Phone Number"
                    required={true}
                    data={member}
                    updateData={setMember}
                />
            </div>
        </div>
    );
};
