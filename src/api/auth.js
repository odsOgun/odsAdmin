import { authKit } from "./apikit";

export const loginAction = (payload) => {
    return authKit.post('api/v1/admin/login', payload)
}