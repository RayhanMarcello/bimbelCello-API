import { configDotenv } from "dotenv";
import usersModel from "../models/usersModel.js";
import jwt from "jsonwebtoken";
configDotenv;

const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role) {
    return res
      .status(400)
      .json({ message: "Username, password, and role are required" });
  }
  if (!["siswa", "pengajar"].includes(role)) {
    return res
      .status(400)
      .json({ message: "Role bukan 'siswa' atau 'pengajar'" });
  }
  try {
    const result = await usersModel.login(username, password, role);
    const resultLogin = result[0][0];

    const payload = {
      user_id: resultLogin.user_id,
      username: resultLogin.username,
      role: resultLogin.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
    console.log(resultLogin);
    return res.json({
      message: "sucsess login",
      token: token,
      datas: payload,
    });
  } catch (error) {
    return res.json({
      internalMessage: error.message,
      message: "bukan role anda",
    });
  }
};

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    await usersModel.register(username, password, role);
    res.json({
      message: "succses register",
      datas: {
        username: username,
        role: role,
      },
    });
  } catch (error) {
    res.json({
      message: "cannot regist",
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await usersModel.getUserById(id);
    res.json({
      data: result,
    });
  } catch (error) {}
};

export default { login, register, getUserById };
