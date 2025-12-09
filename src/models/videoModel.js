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
export default { addVideo };
