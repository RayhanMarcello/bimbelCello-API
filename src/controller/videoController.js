import videoModel from "../models/videoModel.js";

const addVideo = async (req, res) => {
  const { materi_id, judul, video_path, deskripsi } = req.body;
  const result = await videoModel.addVideo(
    materi_id,
    judul,
    video_path,
    deskripsi
  );
  if (!materi_id || !judul || !video_path || !deskripsi) {
    return res.status(400).json({
      message: "cannot add vidio",
    });
  }
  try {
    res.json({
      message: "sucsess add videos",
      datas: result,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export default { addVideo };
