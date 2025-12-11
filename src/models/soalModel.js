import db from "../config/db.js";

const addSoal = async (
  latihan_id,
  pertanyaan,
  opsi_a,
  opsi_b,
  opsi_c,
  opsi_d,
  jawaban_benar
) => {
  const sql = "call sp_add_soal(?,?,?,?,?,?,?)";
  const [result] = await db.execute(sql, [
    latihan_id,
    pertanyaan,
    opsi_a,
    opsi_b,
    opsi_c,
    opsi_d,
    jawaban_benar,
  ]);
  return result;
};

const deleteSoal = async (idSoal) => {
  const sql = "call sp_delete_soal(?)";
  const [result] = await db.execute(sql, [idSoal]);
  return result;
};

const getSoalByLatihan = async (idLatihan) => {
  const sql = "call sp_get_soal_by_latihan(?)";
  const [result] = await db.execute(sql, [idLatihan]);
  return result[0];
};

const getSoalDetail = async (idSoal) => {
  const sql = "call sp_get_soal_detail(?)";
  const [result] = await db.execute(sql, [idSoal]);
  return result[0];
};

export default { addSoal, deleteSoal, getSoalByLatihan, getSoalDetail };
