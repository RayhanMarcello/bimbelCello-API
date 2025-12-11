import db from "../config/db.js";

const nilaiResult = async (idLatihan, idSiswa) => {
  const sql = "call sp_hitung_nilai_latihan(?,?)";
  const [result] = await db.execute(sql, [idLatihan, idSiswa]);
  return result;
};
export default { nilaiResult };
