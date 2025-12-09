import materiModel from "../models/materiModel.js";

const uploadMateri = async (req, res) => {
  try {
    const { judul, deskripsi } = req.body;
    const owner_id = req.user.user_id;
    await materiModel.uploadMateri(judul, deskripsi, owner_id);
    res.json({
      message: "succsess upload materi",
      data: {
        judul: judul,
        deskripsi: deskripsi,
        owner_id: owner_id,
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
    const id = req.params.id;
    const owner_id = req.user.user_id;
    await materiModel.deleteMateri(id, owner_id);
    req.json({
      message: "sucsess delete data",
      data: id,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getMateriById = async (req, res) => {
  const id = req.params.id;
  const [datas] = await materiModel.getMateriById(id);
  try {
    res.json({
      message: "sucsess",
      datas: datas,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export default { uploadMateri, getAllMateri, deleteMateri, getMateriById };
