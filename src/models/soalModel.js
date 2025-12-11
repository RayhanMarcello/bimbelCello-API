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

export default { addSoal };
