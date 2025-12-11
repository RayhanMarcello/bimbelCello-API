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
export default { addSoal };
