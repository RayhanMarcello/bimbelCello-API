import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv;
const JWT_SECRET = process.env.JWT_SECRET;

const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || typeof authHeader !== "string") {
      return res
        .status(401)
        .json({ message: "Unauthorized. Silakan login terlebih dahulu" });
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res.status(401).json({ message: "Unauthorized. Token malformed" });
    }

    const token = parts[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    console.log(decoded);
    return next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Unauthorized. Token invalid or expired" });
  }
};

const isPengajar = (req, res, next) => {
  if (req.user && req.user.role === "pengajar") {
    return next();
  }
  return res
    .status(403)
    .json({ message: "Forbidden. Hanya Pengajar yang dapat mengakses" });
};

const isSiswa = (req, res, next) => {
  if (req.user && req.user.role === "siswa") {
    return next();
  }
  return res
    .status(403)
    .json({ message: "Forbidden. Hanya siswa yang dapat mengakses" });
};

export default { isAuthenticated, isPengajar, isSiswa };
