
export interface Geolocation {
    lat?: string,
    long?: string
}
export interface Address {
    geolocation?: Geolocation,
    city?: string,
    street?: string,
    number?: number,
    zipcode?: string
}
export interface Username {
    firstname?: string,
    lastname?: string
}
export interface User {
    address?: Address,
    id?: number,
    email?: string,
    username?: string,
    password?: string,
    name?: Username,
    phone?: string
}