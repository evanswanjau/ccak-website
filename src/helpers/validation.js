/**
 * A function that validates an email address and throws an error if not
 * @param {*} email
 */
export const validateEmail = (email) => {
    if (
        !email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    )
        throw new Error("Not a valid email address");
};

/**
 * A function that validates a password and throws an error if not
 * @param {*} phoneNumber
 */
export const validatePhoneNumber = (phoneNumber) => {
    if (
        !phoneNumber.match(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
    )
        throw new Error("Not a valid phone number");
};

/**
 * A function that validates a password and throws and error if not
 * @param {*} password
 * @param {*} confirmPassword
 */
export const validatePassword = (password, confirmPassword) => {
    if (password.length < 8) throw new Error("Password too short");

    if (password !== confirmPassword) throw new Error("Passwords not similar");
};
