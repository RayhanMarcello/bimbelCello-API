import db from "../config/db.js";

const register = async (username, password, role) => {
  const sql = "call sp_register_user(?,?,?)";
  const [result] = await db.execute(sql, [username, password, role]);
  return result;
};

export default { register };
