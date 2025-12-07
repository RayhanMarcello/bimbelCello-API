import usersModel from "../models/usersModel.js";

const login = (req, res) => {
  const { username, password } = req.body;
  res.json({
    data: {
      usename: username,
      password: password,
    },
  });
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
