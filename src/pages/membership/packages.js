import { useState } from "react";
import { Slide } from "react-reveal";
import { Package } from "../../components/package";
import { Page } from "../../layouts/page";

export const PackagesPage = () => {
    const [data, updateData] = useState([]);

    return (
        <Page
            title="Packages"
            description="Clean Cooking Association of Kenya exists to serve its Members; as its main priority, it intends to be the preferred organization through which players in the clean cooking sector will engage. CCAK’s membership comprises of members from the government, academia, private sector, NGOs and individuals active in the clean cooking sector"
            page="packages"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-gray-800 text-4xl lg:text-6xl font-semibold my-5">
                            Packages
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                            {data[0]?.content?.header}
                        </p>
                    </Slide>
                    <div className="flex flex-row px-6 lg:px-16 py-5">
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-10">
                            {data[1]?.content?.map((item, i) => {
                                return <Package key={i} data={item} />;
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </Page>
    );
};
