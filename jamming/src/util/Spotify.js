let accessToken ;
const URL = 'https://accounts.spotify.com/authorize'
const redirectURI = 'http://localhost:3000/';
const clientID = '';
const Spotify={
    getAccessToken(){
        if(accessToken){
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessToken && expiresInMatch){
            accessToken = accessTokenMatch[1]
            let expirationTime = Number(expiresInMatch[1]);
            window.setTimeout(()=>{
                accessToken=""
            }, expirationTime*1000);
            window.history.pushState('accessToken', null, '/');
            return accessToken;
        } else{
            window.location = `${URL}?client_id=${clientID}&
                                response_type=token&scope=playlist-modify-public&
                                redirect_uri=${redirectURI}`
        }
    },
    search(term){
        const accessToken = Spotify.getAccessToken();
        const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`
        fetch(endpoint, {headers: {Authorization: `Bearer ${accessToken}`}})
        .then(response=>{ 
            return response.json()
        })
        .then(jsonResponse=>{
            if(!jsonResponse.tracks){
                return [];
            }
        })
    } 
};

export default Spotify;