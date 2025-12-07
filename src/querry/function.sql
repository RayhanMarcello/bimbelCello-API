-- function 

DELIMITER $$

CREATE FUNCTION f_check_jawaban (
    p_soal_id INT,
    p_jawaban_dipilih CHAR(1)
)
RETURNS TINYINT(1)
DETERMINISTIC
BEGIN
    DECLARE v_jawaban_benar CHAR(1);

    SELECT jawaban_benar
    INTO v_jawaban_benar
    FROM soal
    WHERE soal_id = p_soal_id;

    IF v_jawaban_benar IS NULL THEN
        RETURN 0;
    END IF;

    RETURN (UCASE(p_jawaban_dipilih) = v_jawaban_benar);
END$$

CREATE FUNCTION f_hitung_skor_latihan (
    p_latihan_id INT,
    p_siswa_id   INT
)
RETURNS DECIMAL(5,2)
DETERMINISTIC
BEGIN
    DECLARE v_total_soal INT DEFAULT 0;
    DECLARE v_benar      INT DEFAULT 0;
    DECLARE v_skor       DECIMAL(5,2);

    SELECT COUNT(*)
    INTO v_total_soal
    FROM soal
    WHERE latihan_id = p_latihan_id;

    IF v_total_soal = 0 THEN
        RETURN 0;
    END IF;

    SELECT COUNT(*)
    INTO v_benar
    FROM jawaban_siswa js
    JOIN soal s ON js.soal_id = s.soal_id
    WHERE s.latihan_id = p_latihan_id
      AND js.siswa_id  = p_siswa_id
      AND js.is_benar  = 1;

    SET v_skor = (v_benar / v_total_soal) * 100;

    RETURN v_skor;
END$$









