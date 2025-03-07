import { authKit } from "./apikit";

export const fetchSponsors = () => {
    return authKit.get('api/v1/sponsor/all')
}
export const fetchSponsorDetails = (id) => {
    return authKit.get(`api/v1/sponsor/${id}`)
}
export const searchSponsors = (data) => {
    return authKit.get(`api/v1/sponsor/search`, {
        params: { keyword: data },
    })
}
export const fetchExhibitors = () => {
    return authKit.get('api/v1/exhibitor/all')
}
export const fetchExhibitorDetails = (id) => {
    return authKit.get(`api/v1/exhibitor/${id}`)
}
export const searchExhibitors = (data) => {
    return authKit.get(`api/v1/exhibitor/search`, {
        params: { keyword: data },
    })
}