let accessToken ;
const redirect_uri = 'http://localhost:3000';
const clientId = 'b02c4934fc3c4239adab42f5e8c4354f';

const Spotify = {
    getAccessToken() {
        if (accessToken) {
        return accessToken;
        }

        const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (newAccessToken && newExpiresIn) {
        accessToken = newAccessToken[1];
        const expiresIn = Number(newExpiresIn[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
        } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&show_dialog=true&redirect_uri=${redirect_uri}`;
        window.location = accessUrl;
        }
    },

    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const headers = {
        Authorization: `Bearer ${accessToken}`
        };
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {headers: headers})
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
            }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
            return [];
        }
        return jsonResponse.tracks.items.map(track => ({
            id: track.id, 
            name: track.name, 
            artist: track.artists[0].name, 
            album: track.album.name, 
            uri: track.uri}));
        });
    },

    savePlaylist(playlistName, trackURIs) {
        if (playlistName && trackURIs.length) {
        const accessToken = Spotify.getAccessToken();
        const headers = {
            Authorization: `Bearer ${accessToken}`
        };
        let userID;
        let playlistID;
        return fetch('https://api.spotify.com/v1/me', {headers: headers}).then(response => {
            if (response.ok) {
            return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name: playlistName})
            }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
            }, networkError => {
            console.log(networkError.message);
            }).then(jsonResponse => {
            playlistID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({uris: trackURIs})
            }).then(response => {
                if (response.ok) {
                return response.json();
                }
                throw new Error('Request failed!');
            }, networkError => {
                console.log(networkError.message);
            }).then(jsonResponse => jsonResponse);
            });
        });

        } else {
        return;
        }
    }
}
  
// const Spotify={
//     getAccessToken(){
//         if(accessToken){
//             return accessToken;
//         }
//         const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
//         const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

//         if (accessToken && expiresInMatch){
//             accessToken = accessTokenMatch[1]
//             const expirationTime = Number(expiresInMatch[1]);
//             window.setTimeout(()=> accessToken="", expirationTime*1000);
//             window.history.pushState('accessToken', null, '/');
//             return accessToken;
//         } else{
//             const accessURL = `${URL}?client_id=${clientID}&
//                                 response_type=token&scope=playlist-modify-public&
//                                 redirect_uri=${redirectURI}`
//             window.location = accessURL;
//         }
//     },

//     search(term){
//         const accessToken = Spotify.getAccessToken();
//         console.log('My token: ' + accessToken)
//         const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`
//         fetch(endpoint, {headers: {Authorization: `Bearer ${accessToken}`}})
//         .then(response=>{
//             if(response.ok){
//                 return response.json()
//             }
//             throw new Error('Request failed! Try again!')
//         }, networkError=>{
//             console.log(networkError.message)
//         })
//         .then(jsonResponse=>{
//             if(!jsonResponse.tracks){
//                 return [];
//             }
//             jsonResponse.tracks.items.map(track=>(
//                 {
//                     id: track.id, 
//                     name: track.name, 
//                     artist: track.artist[0].name, 
//                     album: track.album.name,
//                     uri: track.uri
//                 })
//             )
//         })
//     }, 

//     savePlaylist(name, arr){
//         if(!name || !arr.length){
//             return;
//         }
//         const accessToken = Spotify.getAccessToken();
//         const headers = {Authorization: `Bearer ${accessToken}`};
//         let userID;
//         let playlistID;
//         const endpoint = `https://api.spotify.com/v1/me`;
//         return fetch(endpoint, {headers: headers})
//         .then(response=>{
//             if(response.ok){
//                 return response.json()
//             }
//             throw new Error('Request failed! Try again')         
//         }, networkError=>{
//             console.log(networkError.message)
//         })
//         .then(jsonResponse=>{
//             userID=jsonResponse.id
//             return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
//             {
//                 headers: headers,
//                 method: 'POST',
//                 body: JSON.stringify({name: name})
//             }).then(response=>{
//                 if(response.ok){
//                     return response.json()
//                 }
//                 throw new Error('Request failed! Try again')         
//             }, networkError=>{
//                 console.log(networkError.message)
//             })
//             .then(jsonResponse=>{
//                 playlistID = jsonResponse.id;
//                 return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
//                 {
//                     header: headers, 
//                     method: 'POST', 
//                     body: JSON.stringify({uris: arr})})
//                 })
//             .then(response=>{
//                 if(response.ok){
//                     return response.json()
//                 }
//                 throw new Error('Request failed! Try again')         
//             }, networkError=>{
//                 console.log(networkError.message)
//             })
//             .then(jsonResponse=>jsonResponse)
//         }) 
//     }

// };

export default Spotify;