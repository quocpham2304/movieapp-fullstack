import privateClient from "../client/privateClient";

const reviewEndpoints = {
    list: "reviews",
    add: "reviews",
    remove: ({ reviewID }) => `reviews/${reviewID}`
};

const reviewApi = {
    add: async ({
        mediaID,
        mediaType,
        mediaTitle,
        mdeiaPoster,
        content
    }) => {
        try {
            const response = await privateClient.post(
                reviewEndpoints.add,
                {
                    mediaID,
                    mediaType,
                    mediaTitle,
                    mdeiaPoster,
                    content
                }
            );
            return { response };
        } catch (err) { return { err }; }
    },
    remove: async ({ reviewId }) => {
        try {
            const response = await privateClient.delete(
                reviewEndpoints.remove({ reviewId }));
            return { response };
        } catch (err) { return { err }; }
    },
    getList: async () => {
        try {
            const response = await privateClient.get(reviewEndpoints.list);
            return { response };
        } catch (err) { return { err }; }
    }
};

export default reviewApi;