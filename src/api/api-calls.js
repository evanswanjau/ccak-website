import axios from "axios";

export const apiRequest = (method, url, data, updateData) => {
    return axios({
        method: method,
        url: process.env.REACT_APP_API_URL + url,
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(({ data }) => {
        updateData(data);
    });
};
