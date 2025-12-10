import db from "../config/db.js";

const addLatihan = async (materi_id, judul, deskripsi) => {
  const sql = "call sp_create_latihan(?,?,?) ";
  const [result] = await db.execute(sql, [materi_id, judul, deskripsi]);
  return result;
};

const deleteLatihan = async (id) => {
  const sql = "call sp_delete_latihan(?)";
  const [result] = await db.execute(sql, [id]);
  return result;
};

const getLatihanByMateri = async (id) => {
  const sql = "call sp_get_latihan_by_materi(?)";
  const [result] = await db.execute(sql, [id]);
  return result[0];
};
export default { addLatihan, deleteLatihan, getLatihanByMateri };
