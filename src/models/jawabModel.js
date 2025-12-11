import db from "../config/db.js";

const postJawab = async (idSoal, idSiswa, jawaban_dipilih) => {
  const sql = "call sp_jawab_soal(?,?,?)";
  const [result] = await db.execute(sql, [idSoal, idSiswa, jawaban_dipilih]);
  return result;
};

const getJawaban = async (idLatihan, idSiswa) => {
  const sql = "call sp_get_jawaban_siswa_latihan(?,?)";
  const [result] = await db.execute(sql, [idLatihan, idSiswa]);
  return result[0];
};

export default { postJawab, getJawaban };
