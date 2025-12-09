import materiModel from "../models/materiModel.js";

const uploadMateri = async (req, res) => {
  try {
    const { judul, deskripsi, owner_id } = req.body;
    await materiModel.uploadMateri(judul, deskripsi, owner_id);
    res.json({
      message: "succsess upload materi",
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

const getAllMateri = async (req, res) => {
  try {
    const [data] = await materiModel.getAllMateri();
    res.json({
      message: "sucsess menampilkan semua materi",
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteMateri = async (req, res) => {
  try {
    const id = req.params;
    const [data] = await materiModel.deleteMateri(id);
    req.json({
      message: "sucsess delete data",
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export default { uploadMateri, getAllMateri, deleteMateri };
