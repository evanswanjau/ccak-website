import axios from "axios";

export const searchPosts = (searchData, updateData) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "search/posts",
        data: searchData,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(({ data }) => {
        updateData(data);
    });
};

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

export const registerMember = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "member",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(({ data }) => {
        window.location.replace("/");
        console.log(data);
    });
};
