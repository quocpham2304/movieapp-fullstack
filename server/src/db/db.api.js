import axiosClient from "../axios/axios.client";
import dbEndpoints from "./db.endpoints"

const dbApi = {
    mediaList: async ({ mediaType, mediaCategory, page }) => await axiosClient.get(dbEndpoints.mediaList({ mediaType, mediaCategory, page })
    ),
    mediaDetail: async ({ mediaType, page }) => await axiosClient.get(dbEndpoints.mediaDetail({ mediaType, page })
    ),
    mediaGenres: async ({ mediaType }) => await await axiosClient.get(dbEndpoints.mediaGenres({
        mediaType
    })
    ),
    mediaCredits: async ({ mediaType, mediaId }) => await axiosClient.get(dbEndpoints.mediaCredits({ mediaType, mediaId })
    ),
    mediaVideos: async ({ mediaType, mediaId }) => await axiosClient.get(dbEndpoints.mediaVideos({ mediaType, mediaId })
    ),
    mediaImages: async ({ mediaType, mediaId }) => await axiosClient.get(dbEndpoints.mediaImages({ mediaType, mediaId })
    ),
    mediaRecommend: async ({ mediaType, mediaId }) => await axiosClient.get(dbEndpoints.mediaRecommend({ mediaType, mediaId })
    ),
    mediaSearch: async ({ mediaType, query, page }) => await axiosClient.get(dbEndpoints.mediaSearch({ mediaType, query, page })
    ),
    personDetail: async ({ personId }) => await axiosClient.get(dbEndpoints.personDetail({ personId }))
};

export default dbApi;