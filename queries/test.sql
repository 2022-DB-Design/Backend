CREATE TABLE test (
  index INTEGER PRIMARY KEY,
  name VARCHAR(20),
  age SMALLINT,
  birthdate DATE,
  address VARCHAR (100)
);

DROP TABLE test;

INSERT INTO test (index, name, age, birthdate, address) VALUES (
  0, 'KIM', 20, '2000-01-11', 'Seoul'
);
INSERT INTO test (index, name, age, birthdate, address) VALUES (
  1, 'LEE', 21, '1999-02-22', 'Pusan'
);
INSERT INTO test (index, name, age, birthdate, address) VALUES (
  2, 'PARK', 22, '2000-03-31', 'Gwangju'
);
INSERT INTO test (index, name, age, birthdate, address) VALUES (
  3, 'BAEK', 35, '1987-10-23', 'Pusan'
);
INSERT INTO test (index, name, age, birthdate, address) VALUES (
  4, 'YUM', 21, '2002-03-07', 'Seongnam'
);

DELETE FROM test WHERE index = 0;

UPDATE test SET age=40 WHERE index=0;