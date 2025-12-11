import jawabModel from "../models/jawabModel.js";
import nilaiModel from "../models/nilaiModel.js";

const postJawaban = async (req, res) => {
  const { idSoal, idSiswa, jawaban_dipilih, idLatihan } = req.body;
  await jawabModel.postJawab(idSoal, idSiswa, jawaban_dipilih);
  await nilaiModel.nilaiResult(idLatihan, idSiswa);
  try {
    res.json({
      messages: "jawaban berhasil dikirim",
    });
  } catch (error) {
    res.json({
      messages: error.messages,
    });
  }
};

const getJawaban = async (req, res) => {
  const { idLatihan, idSiswa } = req.body;
  const data = await jawabModel.getJawaban(idLatihan, idSiswa);
  try {
    res.json({
      message: "berhasil get jawaban",
      data: data,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export default { postJawaban, getJawaban };
