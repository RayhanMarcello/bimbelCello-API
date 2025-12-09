import db from "../config/db.js";

const uploadMateri = async (judul, deskripsi, owner_id) => {
  const sql = "call sp_create_materi(?,?,?)";
  const [result] = await db.execute(sql, [judul, deskripsi, owner_id]);
  return result;
};

const getAllMateri = async () => {
  const sql = "call sp_get_all_materi()";
  const [result] = await db.execute(sql);
  return result;
};

const deleteMateri = async (id) => {
  const sql = "call sp_delete_materi(?)";
  const [result] = await db.execute(sql, [id]);
  return result;
};

export default { uploadMateri, getAllMateri, deleteMateri };
