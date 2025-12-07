import usersModel from "../models/usersModel.js";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await usersModel.login(username, password);
    const rows = Array.isArray(result[0]) ? result[0] : result;

    if (!rows || rows.length === 0) {
      // tidak ada user yang cocok
      return res.status(401).json({
        message: "username or password wrong!!!",
      });
    }

    // kalau mau kirim data user:
    const user = rows[0];
    return res.json({
      message: "sucsess login",
      data: user,
    });
  } catch (error) {
    return res.json({
      message: "username or password wrong!!!",
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

export default { login, register };
