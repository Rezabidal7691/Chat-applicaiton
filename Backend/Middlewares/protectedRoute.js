import jwt from "jsonwebtoken";
import User from "../Models/User.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401);
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
      if (err) return res.status(401);
      const user = await User.findById(decoded.userId);
      if (!user){
        return res
        .statu(404)
        .json({ status: "error", message: "کاربری یافت نشد" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};
