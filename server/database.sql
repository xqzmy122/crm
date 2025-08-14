create TABLE client(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  insta VARCHAR(100)
);

create TABLE appointment(
  id SERIAL PRIMARY KEY,
  date VARCHAR(100) NOT NULL,
  procedure VARCHAR(50),
  base VARCHAR(50),
  gel VARCHAR(50),
  gel_lak VARCHAR(50),
  top VARCHAR(50),
  price INTEGER,
  notes VARCHAR(100),
  info VARCHAR(100),
  client_id INTEGER,
  FOREIGN KEY (client_id) REFERENCES client (id)
);