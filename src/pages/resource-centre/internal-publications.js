import { useState, useEffect } from "react";
import { Slide } from "react-reveal";
import { Research } from "../../components/research";
import { searchPosts } from "../../api/api-calls";

export const InternalPublicationsPage = () => {
    const [data, updateData] = useState([]);
    const [searchData] = useState({
        keyword: "",
        table: "posts",
        category: "internal-publications",
        technology: "",
        project_status: "",
        page: 1,
        limit: 12,
        ip_address: "",
        created_by: 0,
    });

    useEffect(() => {
        searchPosts(searchData, updateData);
    }, [searchData]); // eslint-disable-line

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">
                        Internal Publications
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        Welcome to our internal publications page! This is the place
                        where you can find a collection of CCAK's publications.
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                        {data.map((item, i) => {
                            return <Research key={i} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
