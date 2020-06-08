import axios from 'axios';

const API_KEY = '06254c8926msh3b4318691ce804dp180048jsn3bdc56645c6c';

const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 3000,
    headers  : {'X-RapidApi-Key': API_KEY}
});

export function getAlbums(search = 'eminem'){
    const albums = request.get(`search?q=${search}`)
        .then(respone => respone.data.data)
        .catch(error => console.log(error));
    return albums
}

export function getAlbum(id){
    const album = request.get(`album/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error));
    return album;
}

export function getFavouritesAlbums(){
    const album = localStorage.getItem('favourites');
    return album;
}