import db from "../config/db.js";

const addVideo = async (materi_id, judul, video_path, deskripsi) => {
  const sql = "call sp_add_video(?,?,?,?)";
  const [result] = await db.execute(sql, [
    materi_id,
    judul,
    video_path,
    deskripsi,
  ]);
  return result;
};

const deleteVideo = async (id) => {
  const sql = "call sp_delete_video(?)";
  const [result] = await db.execute(sql, [id]);
  return result;
};

export default { addVideo, deleteVideo };
