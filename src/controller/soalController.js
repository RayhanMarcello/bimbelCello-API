import soalModel from "../models/soalModel.js";

const addSoal = async (req, res) => {
  const {
    latihan_id,
    pertanyaan,
    opsi_a,
    opsi_b,
    opsi_c,
    opsi_d,
    jawaban_benar,
  } = req.body;
  await soalModel.addSoal(
    latihan_id,
    pertanyaan,
    opsi_a,
    opsi_b,
    opsi_c,
    opsi_d,
    jawaban_benar
  );
  try {
    res.json({
      message: "berhasil membuat soal",
      data: pertanyaan,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const deleteSoal = async (req, res) => {
  const idSoal = req.params.idSoal;
  try {
    await soalModel.deleteSoal(idSoal);
    res.json({
      message: "sucsess delete soal",
      deletediId: idSoal,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getSoalByLatihan = async (req, res) => {
  const idLatihan = req.params.idLatihan;
  const data = await soalModel.getSoalByLatihan(idLatihan);
  try {
    res.json({
      message: "sucsess get soal",
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const getSoalDetail = async (req, res) => {
  console.log("test");
  const idSoal = req.params.idSoal;
  const data = await soalModel.getSoalDetail(idSoal);
  try {
    res.json({
      message: "sucsess get soal detail",
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export default { addSoal, deleteSoal, getSoalByLatihan, getSoalDetail };
