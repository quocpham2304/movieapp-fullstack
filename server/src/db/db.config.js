const baseUrl = process.env.TMDB_URL_BASE
const key = process.env.TMDB_KEY

const getUtl = (endpoint, params) => {
    const qs = new URLSearchParams(params);

    return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUtl };