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
      url: process.env.REACT_APP_API_URL + "member/" + decodedToken.user_id,
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

export const fetchSocialPosts = () => {
  return axios({
    method: "get",
    url: process.env.REACT_APP_API_URL + "socialposts",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      throw new Error("Error fetching social posts");
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
    .catch((error) => {
      console.log(error.response.data.error);
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
