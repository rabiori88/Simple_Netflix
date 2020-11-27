
const API_KEY = "7de4075244a997ec8942542f50bc274d";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}with_networks=213`


}


export default requests
