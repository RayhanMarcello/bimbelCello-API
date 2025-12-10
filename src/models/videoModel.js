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

const getVideoByMateri = async (idMateri) => {
  const sql = "call sp_get_all_video_by_materi(?)";
  const [result] = await db.execute(sql, [idMateri]);
  return result[0];
};

const getVideoById = async (idVideo) => {
  const sql = "call sp_get_video_by_id(?)";
  const [result] = await db.execute(sql, [idVideo]);
  return result[0];
};

export default { addVideo, deleteVideo, getVideoByMateri, getVideoById };
