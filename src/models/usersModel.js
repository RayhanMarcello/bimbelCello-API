import db from "../config/db.js";

const register = async (username, password, role) => {
  const sql = "call sp_register_user(?,?,?)";
  const [result] = await db.execute(sql, [username, password, role]);
  return result;
};

const login = async (username, password, role) => {
  const sql = "call sp_login_user(?,?,?)";
  const [result] = await db.execute(sql, [username, password, role]);
  return result;
};

const getUserById = async (id, owner_id) => {
  const sql = "call sp_get_user_by_id(?,?)";
  const [result] = await db.execute(sql, [id, owner_id]);
  return result;
};

export default { register, login, getUserById };
