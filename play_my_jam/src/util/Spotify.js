let accessToken;
const redirect_uri = "http://localhost:3000/";
const client_id = "6e1b1121ee214ff780b973c92bf2d58c";

export const Spotify={
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }

        const newAccessToken =windoe.location.href.match(/access_token=([^&]*)/);
        const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (newExpiresIn && newAccessToken){
            accessToken = newAccessToken[1];
            const timeOut = Number(newExpiresIn[1]);
            window.setTimeout(()=> accessToken="", timeOut*1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessURL = `https://accounts.spotify.com/
            authorize?client_id=${client_id}&response_type=token
            &scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
            window.location = accessURL;
        }
    }, 
};