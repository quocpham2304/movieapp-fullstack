import responseHandler from "../handlers/response.handler";
import dbApi from "../db/db.api";
import userModel from "../models/user.model";
import favoriteModel from "../models/favorite.model";
import reviewModel from "../models/review.model";
import tokenMiddlerware from "../middlewares/token.middleware";

const gerList = async (req, res) => {
    try {
        const { page } = req.query
        const { mdeiaType, mediaCategory } = req.params

        const response = await dbApi.mediaList({ mediaType, mediaCategory, page })

        return responseHandler.ok(res, response)
    } catch {
        responseHandler.error(res)
    }
};

const getGenres = async (req, res) => {
    try {
        const { mdeiaType } = req.params;

        const response = await dbApi.mediaGenres({ mdeiaType });
        return responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res);
    }
};

const search = async (req, res) => {
    try {
        const { mediaType } = req.params;
        const { query, page } = req.query;

        const response = await dbApi.mediaSearch({
            query,
            page,
            mediaType: mediaType === "people" ? "person" : mediaType
        });

        responseHandler.ok(res, response);
    } catch {
        responseHandler.error(res);
    }
};

const getDetail = async (req, res) => {
    try {
        const { mediaType, mediaId } = req.params;

        const params = { mediaType, mediaId };

        const media = await dbApi.mediaDetail(params);

        media.credits = await dbApi.mediaCredits(params)

        const videos = await dbApi.mediaVideos(params);

        media.videos = videos

        const recommend = await dbApi.mediaRecommend(params);

        media.recommend = recommend.results

        media.images = await dbApi.mediaImages(params)

        const tokenDecoded = tokenMiddlerware.tokenDecode(req);

        if (tokenDecoded) {
            const user = await userModel.findById(tokenDecoded.data)

            if (user) {
                const isFavorite = await favoriteModel.findOne({ user: user.id, mediaId })
                media.isFavorite = isFavorite !== null
            }
        }
        media.reviews = await reviewModel.find({ mediaId }).populate("user").sort("-createdAt");
        responseHandler.ok(res, media);
    } catch {
        responseHandler.error(res);
    }
};

export default { gerList, getGenres, search, getDetail };