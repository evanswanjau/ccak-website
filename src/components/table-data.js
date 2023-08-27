export const TableData = ({ titles, data }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="font-manjari w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr className="border-b">
                        <th scope="col" className="px-3 py-3 border-r">
                            #
                        </th>

                        {titles.map((title) => {
                            return (
                                <th scope="col" className="px-3 py-3 border-r">
                                    {title.name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return (
                            <tr className="bg-white border-b border-gray-100">
                                <td className="px-3 py-4 border-r">{i + 1}</td>
                                {titles.map((title) => {
                                    return (
                                        <td className="py-4 px-3 capitalize border-r border-gray-100">
                                            {item[title.key]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
