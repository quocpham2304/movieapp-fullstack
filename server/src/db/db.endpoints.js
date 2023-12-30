import dbConfig from "./db.config.js";

const tmdbEndpoints = {
    mediaList: ({ mediaType, mediaCategory, page }) => dbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    mediaDetail: ({ mediaType, mediaId }) => dbConfig.getUrl(
        `${mediaType}/${mediaId}`, page
    ),
    mediaGenres: ({ mediaType }) => dbConfig.getUtl(
        `genre/${mediaType}/List`
    ),
    mediaCredits: ({ mediaType, mediaId }) => dbConfig.getUtl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({ mediaType, mediaId }) => dbConfig.getUtl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({ mediaType, mediaId }) => dbConfig.getUtl(
        `${mediaType}/${mediaId}/recommendations`
    ),
    mediaImages: ({ mediaType, mediaId }) => dbConfig.getUtl(
        `${mediaType}/${mediaId}/images`
    ),
    mediaSearch: ({ mediaType, query, page }) => dbConfig.getUtl(
        `search/${mediaType}`, { query, page }
    ),
    personDetail: ({ personId }) => dbConfig.getUtl(
        `person/${personId}`
    ),
    personMedia: ({ personId }) => dbConfig.getUtl(
        `person/${personId}/combined_credits`
    ),
}
export default tmdbEndpoints;