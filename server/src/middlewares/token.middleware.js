import jsonwebtoken from "jsonwebtoken"
import responseHandler from "../handlers/response.handler.js"
import userModel from "../models/user.model.js"

const tokenDecode = (req) => {
    try {
        const beareHeader = req.headers("authorization")

        if (beareHeader) {
            const token = beareHeader.split(" ")[1]

            return jsonwebtoken.verify(
                token,
                process.env.TOKEN_SECRET
            )
        }
        return false;
    } catch {
        return false;
    }
};

const auth = async (req, res, next) => {
    const tokenDecoded = tokenDecode(req)

    if (!tokenDecode) return responseHandler.unauthorize(res)

    const user = await userModel.findById(tokenDecoded.data)

    if (!user) return responseHandler.unauthorize(res)

    req.user = user;

    next();
};

export default { auth, tokenDecode };