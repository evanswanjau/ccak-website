import axios from "axios";
import jwt from "jwt-decode";

export const searchPosts = (searchData, updateData, setPaginationData) => {
    return axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}posts/search${
            searchData.page > 1 ? "?page=" + searchData.page : ""
        }`,
        data: searchData,
        headers: {
            "Content-Type": "application/json",
        },
    }).then(({ data }) => {
        updateData(data.results);

        if (setPaginationData) {
            delete data.results;
            setPaginationData(data);
        }
    });
};

export const search = (
    searchType,
    searchData,
    updateData,
    setPaginationData,
    enqueueSnackbar,
    setLoading
) => {
    return axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}${searchType}/search${
            searchData.page > 1 ? "?page=" + searchData.page : ""
        }`,
        data: searchData,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(({ data }) => {
            updateData(data.results);

            if (setPaginationData) {
                delete data.results;
                setPaginationData(data);
            }
            setLoading(false);
        })
        .catch(() => {
            enqueueSnackbar("Unknown error occurred. Please try reloading the page", {
                variant: "error",
                anchorOrigin: {
                    horizontal: "center",
                    vertical: "bottom",
                },
                autoHideDuration: null,
                action: () => (
                    <button
                        className="bg-white text-gray-600 py-2 px-4 rounded-md shadow-lg"
                        color="secondary"
                        size="small"
                        onClick={() => window.location.reload()}
                    >
                        Reload
                    </button>
                ),
            });
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

export const generateInvoice = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "invoice",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const searchMpesaCode = (mpesaCode) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "payments/search",
        data: {
            transaction_id: mpesaCode,
            method: "mpesa",
            invoice_number: "",
            page: 1,
            limit: 1,
        },
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const paymentsByInvoice = (invoiceNumber) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "payments/search",
        data: {
            keyword: invoiceNumber,
            method: "",
            page: 1,
            limit: 100,
        },
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const activateMpesaPayment = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "payments/mpesa/activate",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
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

export const getMemberPosts = () => {
    let decodedToken = jwt(localStorage.getItem("token"));

    return axios({
        method: "get",
        url:
            process.env.REACT_APP_API_URL +
            "socialposts/member/" +
            decodedToken.user_id,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            throw error;
        });
};

export const getMemberProfile = async () => {
    try {
        const token = localStorage.getItem("token");
        const decodedToken = jwt(token);

        const response = await axios({
            method: "get",
            url:
                process.env.REACT_APP_API_URL +
                "member/" +
                decodedToken.user_id,
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
};

export const getMembers = () => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "members",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            console.error("An error occurred:", error);
            throw error;
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

export const addSocialPost = (postData, setSuccess, setError) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "socialpost",
        data: postData,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then(() => {
            setSuccess("Your post has been added successfully");
            setError(false);
        })
        .catch(({ response }) => {
            console.log(response);
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setSuccess(false);
        });
};

/* -------------------- SOCIAL POSTS ------------------- */
export const fetchSocialPosts = (setPosts, enqueueSnackbar) => {
    return axios({
        method: "get",
        url: process.env.REACT_APP_API_URL + "socialposts",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(({ data }) => {
            return setPosts(data);
        })
        .catch(() => {
            enqueueSnackbar("Error fetching social posts", {
                variant: "error",
                anchorOrigin: {
                    horizontal: "center",
                    vertical: "bottom",
                },
            });
        });
};

export const loginMember = (data, setBtnLoading, setError) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + `auth/member/login`,
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(({ data }) => {
            localStorage.setItem("token", data.access);
            window.location.replace("/");
        })
        .then(({ data }) => {
            localStorage.setItem("token", data.access);
            window.location.replace("/social-hub");
        })
        .catch((error) => {
            setError(error.response.data.error);
        })
        .finally(() => {
            setBtnLoading(false);
        });
};

export const deletePost = (postId, setBtnLoading, setError) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "socialpost/delete/" + postId,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((res) => {
            console.log(res);
            setBtnLoading(false);
        })
        .catch(({ response }) => {
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setBtnLoading(false);
        });
};

export const getCommentsForPost = (postId, setError) => {
    const url = process.env.REACT_APP_API_URL + "comments/socialpost/" + postId;

    return axios({
        method: "get",
        url: url,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch(({ response }) => {
            setError(response.data);
            console.error("An error occurred:", response.data);
            return [];
        });
};

export const addSocialPostComment = async (
    commentData,
    setSuccess,
    setError
) => {
    try {
        const response = await axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + "comment",
            data: commentData,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        setSuccess(response);
        setError(false);

        return response;
    } catch (error) {
        console.log(error.response);
        if (error.response) {
            const errors = error.response.data;
            const keys = Object.keys(errors);
            setError(errors[keys[0]][0]);
        } else {
            console.error("An error occurred:", error);
        }
        setSuccess(false);

        throw error;
    }
};

export const deleteSocialPostComment = async (
    commentId,
    setSuccess,
    setError
) => {
    try {
        const response = await axios({
            method: "post",
            url: process.env.REACT_APP_API_URL + `comment/delete/${commentId}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        setSuccess("Comment deleted successfully");
        setError(false);
    } catch (error) {
        console.log(error.response);
        if (error.response) {
            const errors = error.response.data;
            const keys = Object.keys(errors);
            setError(errors[keys[0]][0]);
        } else {
            console.error("An error occurred:", error);
        }
        setSuccess(false);
    }
};

export const updateSocialPost = (
    postId,
    updatedData,
    setBtnLoading,
    setError
) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "socialpost/update/" + postId,
        data: updatedData,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            setBtnLoading(false);
        })
        .catch(({ response }) => {
            let errors = response.data;
            let keys = Object.keys(response.data);

            setError(errors[keys[0]][0]);
            setBtnLoading(false);
        });
};

export const storeDonation = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "donation",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const updateDonation = (data) => {
    return axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + "donation/update/" + data.id,
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    });
};
