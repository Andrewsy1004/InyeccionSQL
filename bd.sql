CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  correo VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (correo, contrasena) VALUES
('ana@example.com', '12345'),
('carlos@example.com', 'password'),
('maria@example.com', 'qwerty');
