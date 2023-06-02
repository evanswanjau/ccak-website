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

export const subscribeUser = (data, setSuccess, setError) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "subscriber",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(({ data }) => {
            setSuccess("You have been subscribed successfully");
            setError(false)
        })
        .catch(({ response }) => {
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setSuccess(false)
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
