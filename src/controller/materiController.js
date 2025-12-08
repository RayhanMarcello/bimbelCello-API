import materiModel from "../models/materiModel.js";

const uploadMateri = async (req, res) => {
  try {
    const { judul, deskripsi, owner_id } = req.body;
    await materiModel(judul, deskripsi, owner_id);
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

export default uploadMateri;
