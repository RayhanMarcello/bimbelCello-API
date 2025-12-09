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

const deleteMateri = async (id, owner_id) => {
  const sql = "call sp_delete_materi(?,?)";
  const [result] = await db.execute(sql, [id, owner_id]);
  return result;
};

const getMateriById = async (id) => {
  const sql = "call sp_get_materi_by_id(?)";
  const [result] = await db.execute(sql, [id]);
  return result;
};

export default { uploadMateri, getAllMateri, deleteMateri, getMateriById };
