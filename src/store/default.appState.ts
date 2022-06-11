export interface DefaultAppState {
    isLoggedIn: boolean;

    user : {
        id:string;
        name:string;
        email:string;
        access_token:string;
    }
}