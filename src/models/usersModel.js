import db from "../config/db.js";

const register = async (username, password, role) => {
  const sql = "call sp_register_user(?,?,?)";
  const [result] = await db.execute(sql, [username, password, role]);
  return result;
};

const login = async (username, password) => {
  const sql = "call sp_login_user(?,?)";
  const [result] = await db.execute(sql, [username, password]);
  return result;
};

export default { register, login };
