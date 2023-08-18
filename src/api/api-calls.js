import axios from "axios";
import jwt from "jwt-decode";

export const searchPosts = (searchData, updateData) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "posts/search",
        data: searchData,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(({ data }) => {
        updateData(data);
    });
};

export const searchMember = (searchData, updateData) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "members/search",
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
        .then(() => {
            setSuccess("You have been subscribed successfully");
            setError(false);
        })
        .catch(({ response }) => {
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setSuccess(false);
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
        return data;
    });
};

export const registerMember = (data, setBtnLoading, setError) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "member",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(({ data }) => {
            localStorage.setItem("token", data.token.access);
            window.location.replace("/membership/onboarding");
        })
        .catch(({ response }) => {
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setBtnLoading(false);
        });
};

export const onboardMember = (data, updateData, setBtnLoading, setError) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "member/update/" + data.id,
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(({ data }) => {
            updateData(data);
            setBtnLoading(false);
        })
        .catch(({ response }) => {
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setBtnLoading(false);
        });
};

export const getMember = (updateData) => {
    let decodedToken = jwt(localStorage.getItem("token"));

    return axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "member/" + decodedToken.user_id,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(({ data }) => {
        updateData(data);
    });
};

export const sendMail = (data, setBtnLoading, setError, setSuccess) => {
    let message = `Name: ${data.first_name} ${data.last_name} -
                    Email: ${data.email} -
                    Phone Number: ${data.phone_number} -
                    Message: ${data.message}`;

    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "send/email",
        data: {
            subject: "New Website Message",
            message: message,
            recipient: "info@ccak.or.ke",
            recipient_name: "CCAK",
        },
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            setSuccess("Your email has been sent successfully");
            setBtnLoading(false);
        })
        .catch(({ response }) => {
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setBtnLoading(false);
        });
};
