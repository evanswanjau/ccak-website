export const AuthMember = (jwt_decode, emailToken = null) => {
    const token = emailToken ? emailToken : localStorage.getItem("token");

    if (!token) {
        window.location.replace("/membership/login");
    } else {
        const decodedToken = jwt_decode(token);

        if (!decodedToken || isTokenExpired(decodedToken)) {
            logout();
        }
    }
};

export const logout = () => {
    localStorage.setItem("token", "");
    window.location.replace("/membership/login");
};

const isTokenExpired = (decodedToken) => {
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
};
