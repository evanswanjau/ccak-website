import { useState, useEffect } from "react";
import { Slide } from "react-reveal";
import { Career } from "../../Components/career";
import { apiRequest } from "../../api/api-calls";

export const FundingOpportunitiesPage = () => {
    const [data, updateData] = useState([]);

    useEffect(() => {
        apiRequest(
            "get",
            "post/search/all/funding-opportunities/12",
            data,
            updateData
        );
    }, []); // eslint-disable-line
    
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl px-6 font-semibold my-5">
                        Funding Opportunities
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        CCAK regularly seeks out and applies for funding
                        opportunities from various sources such as government
                        agencies, private foundations, and other organizations.
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                        {data.map((item, i) => {
                            return <Career key={i} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
