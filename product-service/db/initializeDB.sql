create extension if not exists "uuid-ossp"; 

create table if not exists products (
	id uuid primary key default uuid_generate_v4(),
	title text,
	description text,
	price float
)

create table if not exists stocks (
	id uuid primary key default uuid_generate_v4(),
	product_id uuid,
	count integer,
	foreign key ("product_id") references "products" ("id")
)

insert into products (title, description, price) values
('Royal Canin Sterilised', 'The best premium food for your cats', 21.99),
('Royal Canin British Shorthair', 'The best premium food for your cats', 14.99),
('Royal Canin Sensible 33', 'The best premium food for your cats', 9.99),
('Royal Canin Kitten', 'The best premium food for your cats', 9.99),
('Royal Canin Indoor 27', 'The best premium food for your cats', 19.99),
('Royal Canin Hair & Skin Care', 'The best premium food for your cats', 19.99),
('Royal Canin Urinary Care', 'The best premium food for your cats', 14.99),
('Royal Canin Babycat', 'The best premium food for your cats', 14.99),
('Royal Canin Hairball Care', 'The best premium food for your cats', 19.99),
('Royal Canin Exigent Savour Sensation', 'The best premium food for your cats', 20.99)

insert into stocks (product_id, count) values
('7584feac-1479-4712-9cb6-c1eeca8282f0', 1),
('b92620b0-e26c-4aa0-9606-d6dd3a4f3b1d', 2),
('78b012ec-8bc1-44e8-b8e5-e888531933d8', 6),
('36b55bc2-493e-4ed2-bdcf-52c750d865de', 4),
('7798063a-6019-4c2a-9e1a-a0bc6936f23e', 8),
('bed16ffc-965c-40d3-979d-8bcac00929cd', 11),
('c820b927-b98f-4dfe-b013-456fefaf7955', 3),
('f8e2851d-b250-4805-8c04-b4141dc61040', 5),
('051c1c6e-3313-406b-905d-2fbd057acb4a', 22),
('464c29cb-1aa6-47e2-b056-1e42a7de186e', 9)
