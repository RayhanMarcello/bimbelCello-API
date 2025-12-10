import latihanModel from "../models/latihanModel.js";

const addLatihan = async (req, res) => {
  const { materi_id, judul, deskripsi } = req.body;
  await latihanModel.addLatihan(materi_id, judul, deskripsi);
  try {
    res.json({
      message: "berhasil",
      data: {
        judul: judul,
        deskripsi: deskripsi,
      },
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteLatihan = async (req, res) => {
  const id = req.params.id;
  await latihanModel.deleteLatihan(id);
  console.log(id);
  try {
    res.json({
      message: `menghapus latihan dengan id ${id}`,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getLatihanByMateri = async (req, res) => {
  const id = req.params.id;
  const data = await latihanModel.getLatihanByMateri(id);
  try {
    res.json({
      message: "get latihan by materi sucsess ",
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export default { addLatihan, deleteLatihan, getLatihanByMateri };
