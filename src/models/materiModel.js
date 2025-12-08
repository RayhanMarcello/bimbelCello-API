import db from "../config/db.js";

const uploadMateri = async (judul, deskripsi, owner_id) => {
  const sql = "call sp_create_materi(?,?,?)";
  const [result] = await db.execute(sql, [judul, deskripsi, owner_id]);
  return result;
};

export default uploadMateri;
