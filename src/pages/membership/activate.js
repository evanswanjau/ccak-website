import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import { AuthMember } from "../../helpers/auth";
import { getMember, updateMember } from "../../api/member-api-calls";

export const ActivateEmail = () => {
    const params = useParams();
    const [status, setStatus] = useState("activating");
    const [member, setMember] = useState({});

    const activate = () => {
        localStorage.setItem("token", params.token);

        const decodedToken = jwt_decode(params.token);
        getMember(setMember);
        updateMember(
            { ...member, email_activation: true, id: decodedToken.user_id },
            setMember
        ).then(() => {
            setStatus("redirecting");
            window.location.replace("/membership/onboarding");
        });
    };

    useEffect(() => {
        AuthMember(jwt_decode, params.token);
        activate();
    }, []); //eslint-disable-line

    if (status === "activating")
        return <p className="p-1">Validating email... </p>;
    if (status === "redirecting")
        return <p className="p-1">You are being redirected... </p>;
};
