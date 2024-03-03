import { InputForm } from "../../../components/forms/input-form";
import { Select } from "../../../components/forms/select";
import { TextArea } from "../../../components/forms/text-area";
import { ImageUpload } from "../../../components/forms/uploadImage";
import { IKImage } from "imagekitio-react";
import { BsImage } from "react-icons/bs";

let technologies = [
    { name: "Cook Stoves Providers", value: "cook stoves providers" },
    { name: "Ethanol", value: "ethanol" },
    { name: "Biogas", value: "biogas" },
    { name: "Non-Carbonized Briquettes", value: "non-carbonized briquettes" },
    { name: "Carbon Briquettes", value: "carbon briquettes" },
    { name: "Research and Consultancy", value: "research and consultancy" },
    { name: "LPG", value: "lpg" },
    { name: "Partners", value: "partners" },
    { name: "Membership Associations", value: "membership associations" },
    { name: "Solar", value: "solar" },
    { name: "Journalists", value: "journalists" },
    { name: "IMC", value: "imc" },
];

export const CompanyDetails = ({ data, updateData, setError }) => {
    return (
        <div className="space-y-4">
            <div className="w-full">
                <TextArea
                    type="text"
                    name="bio"
                    label="Write your bio here"
                    required={true}
                    data={data}
                    updateData={updateData}
                />
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full">
                    <InputForm
                        type="email"
                        name="company_email"
                        label="Company Email"
                        data={data}
                        updateData={updateData}
                    />
                </div>
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="company_phone"
                        label="Company Phone Number"
                        data={data}
                        updateData={updateData}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="location"
                        label="Location"
                        required={true}
                        data={data}
                        updateData={updateData}
                    />
                </div>
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="postal_address"
                        label="Postal Address"
                        required={true}
                        data={data}
                        updateData={updateData}
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5">
                <div className="w-full">
                    <Select
                        item="technology"
                        label="Technology"
                        required={true}
                        list={technologies}
                        data={data}
                        updateData={updateData}
                    />
                </div>
                <div className="w-full">
                    <InputForm
                        type="text"
                        name="website_link"
                        label="Website"
                        data={data}
                        updateData={updateData}
                    />
                </div>
            </div>
            <h3 className="block uppercase mb-2 text-[0.7em] font-bold text-gray-900 font-poppins">
                COMPANY LOGO
            </h3>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5">
                <div className="w-2/12 flex justify-center items-center">
                    {data.logo === "" ? (
                        <BsImage className="text-[8.5em] mx-auto -mt-1 text-gray-600" />
                    ) : (
                        <IKImage
                            className="object-cover rounded-lg max-h-32"
                            urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
                            path={"members/" + data.logo}
                        />
                    )}
                </div>
                <div className="w-10/12">
                    <ImageUpload
                        data={data}
                        updateData={updateData}
                        setError={setError}
                        folder="members"
                    />
                </div>
            </div>
        </div>
    );
};
