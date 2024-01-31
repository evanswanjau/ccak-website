import axios from "axios";
import jwt from "jwt-decode";

/** These enpoints include enpoints that relate to the logged member */
export const submitData = (
    url,
    data,
    updateData,
    setError = null,
    enqueueSnackbar = null,
    setLoading = null,
    setBtnLoading = null,
    message = null
) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + url,
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then(({ data }) => {
            updateData(data.results ? data.results : data);
            if (message)
                enqueueSnackbar(message, {
                    variant: "success",
                    anchorOrigin: {
                        horizontal: "center",
                        vertical: "bottom",
                    },
                });
        })
        .catch(({ response }) => {
            if (setError)
                setError(
                    response.data.message
                        ? response.data.message
                        : "Unknown error ocurred! Please try again later."
                );
            if (enqueueSnackbar)
                enqueueSnackbar(
                    response.data.message
                        ? response.data.message
                        : "Unknown error ocurred! Please try again later.",
                    { variant: "error" }
                );
        })
        .finally(() => {
            if (setBtnLoading) setBtnLoading(false);
            if (setLoading) setLoading(false);
        });
};

/* ---------------- MEMBER --------------------- */
export const resetPassword = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "auth/resetlink",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const getMember = (updateData) => {
    if (localStorage.getItem("token")) {
        let decodedToken = jwt(localStorage.getItem("token"));

        return axios({
            method: "get",
            url:
                process.env.REACT_APP_API_URL +
                "member/" +
                decodedToken.user_id,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(({ data }) => {
            updateData(data);
            return data;
        });
    }
};

export const updateMember = (
    data,
    updateData,
    setBtnLoading = null,
    setError = null
) => {
    delete data.password;
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "member/update/" + data.id,
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then(({ data }) => {
            updateData(data);
            if (setBtnLoading) setBtnLoading(false);
            return data;
        })
        .catch(({ response }) => {
            if (setError) setError(response.data.message);
            if (setBtnLoading) setBtnLoading(false);
        });
};

export const changeMemberPassword = (data, updateData) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "member/update/" + data.id,
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    }).then(({ data }) => {
        updateData(data);
        return data;
    });
};

/* ----------------- INVOICE ---------------- */

export const getMemberInvoice = (id, updateData) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "invoice/" + id,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    }).then(({ data }) => {
        updateData(data);
        return data;
    });
};

export const getMemberInvoices = (data, updateData, parseData) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "invoices/search",
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    }).then(({ data }) => {
        updateData(parseData(data));
        return data;
    });
};

/* --------------- SOCIAL POST ------------ */

export const getSocialPost = (id) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "socialpost/" + id,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const updateSocialPost = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "socialpost/update/" + data.id,
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
};

export const fetchComments = (postID, updateComments) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "comments/socialpost/" + postID,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(({ data }) => {
        updateComments(data);
    });
};

export const submitComment = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "comment",
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
};
