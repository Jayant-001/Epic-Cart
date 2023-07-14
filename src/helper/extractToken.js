import jwt from "jsonwebtoken";

export const extractToken = async (req) => {
    try {
        const token = req.cookies.get("token")?.value || '';
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        return decodedData.id;
    } catch (err) {
        return null
    }
};

export const verifyToken = (token) => {
    try {
        if(token === '' || token.length <= 1) return false;
        console.log(token)
        const data = jwt.verify(token, process.env.JWT_SECRET);
        console.log(data)
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}