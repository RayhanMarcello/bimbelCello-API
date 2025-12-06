const login = (req, res) => {
  const { username, password } = req.body;
  res.json({
    data: {
      usename: username,
      password: password,
    },
  });
};

const register = (req, res) => {};

export default { login, register };
