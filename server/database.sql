create TABLE client(
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  insta VARCHAR(100)
);

create TABLE appointment(
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(50),
  date TIMESTAMPTZ NOT NULL, 
  procedure VARCHAR(50),
  base VARCHAR(50),
  gel VARCHAR(50),
  gel_lak VARCHAR(50),
  top VARCHAR(50),
  price INTEGER,
  notes VARCHAR(100),
  info VARCHAR(100),
  client_id VARCHAR(50),
  FOREIGN KEY (client_id) REFERENCES client (id)
);

-- TIMESTAMPTZ учитывает time zone, что при переводе обратно даст корректный результат