use MBD_UAS;

-- store procedure

delimiter $$
create procedure sp_register_user (
	p_username varchar(50),
    p_password varchar(255),
    p_role enum("siswa","pengajar")
)

begin
	declare exit handler for sqlexception
    begin 
		rollback;
	end ;
    
    start transaction;
    insert into users(username,password,role)
    values (p_username,p_password,p_role);
    commit ;
end$$
delimiter ;

drop procedure sp_login_user;
delimiter $$
create procedure sp_login_user(
	p_username varchar(50),
    p_password varchar(255)
)

begin
	declare exit handler for sqlexception
    begin
		rollback;
    end;
    
    start transaction;
    select password, username role from v_users
    where username = p_username and password = p_password;
    commit;
end$$

delimiter ;

delimiter $$

create procedure sp_get_user_by_id (
	p_user_id int
)
begin
	declare exit handler for sqlexception
    begin
		rollback;
	end ;
    
    start transaction;
    select user_id, username, role from v_users 
    where user_id = p_user_id;
    
    commit ;
end$$
delimiter ;

delimiter $$

create procedure sp_create_materi(
	p_judul varchar(255),
    p_deskripsi text,
    p_owner_id int
)

begin
	declare exit handler for sqlexception
    begin
		rollback;
	end;
    
    start transaction;
    insert into materi (judul,deskripsi,owner_id) 
    values (p_judul, p_deskripsi, p_owner_id);
    commit;
end$$

delimiter ;


delimiter $$
create procedure sp_get_all_materi()
begin
	declare exit handler for sqlexception
    begin
		rollback;
    end;
    
    start transaction;
    
    select * from v_materi;
    commit;
end$$
delimiter ;

delimiter $$

create procedure sp_delete_materi(
	p_materi_id int,
    p_owner_id int
)

begin
	declare exit handler for sqlexception
    begin
		rollback;
    end;
    
    start transaction;
    
    delete from materi 
    where materi_id = p_materi_id 
    AND owner_id = p_owner_id;
    
    commit;
end$$
delimiter ;

delimiter $$
delimiter ;

delimiter $$
delimiter ;














