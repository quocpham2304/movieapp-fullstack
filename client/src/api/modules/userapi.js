import privateClient from "../client/privateClient";
import publicClient from "../client/publicClient";

const userEndpoint = {
    signin: "user/signin",
    signup: "user/signup",
    getInfor: "user/infor",
    passwordUpdate: "user/update-password",
}

const userApi = {
    signin: async ({ username, password }) => {
        try {
            const response = await publicClient.post(
                userEndpoint.signin,
                { username, password }
            );
            return { response }
        } catch (err) { return { err }; }
    },
    signup: async ({ username, password, confirmPassword, displayName }) => {
        try {
            const response = await publicClient.post(
                userEndpoint.signup,
                { username, password, confirmPassword, displayName }
            );
            return { response }
        } catch (err) { return { err }; }
    },
    getInfor: async () => {
        try {
            const response = await privateClient.get(
                userEndpoint.getInfor,
            );
            return { response }
        } catch (err) { return { err }; }
    },
    passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
        try {
            const response = await privateClient.put(
                userEndpoint.passwordUpdate,
                { password, newPassword, confirmNewPassword }
            );
            return { response }
        } catch (err) { return { err }; }
    }
};

export default userApi;