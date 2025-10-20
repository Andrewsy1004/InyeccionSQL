import db from '../database/config.js';

export const vulnerableLogin = async (req, res) => {
  const { correo, contrasena } = req.body;

  //Todo: Vulnerable: concatenación directa
  const sql = `SELECT * FROM usuarios WHERE correo = '${correo}' AND contrasena = '${contrasena}'`;

  try {
    const [rows] = await db.query(sql);
    if (rows.length > 0) {
      res.json({ message: 'Login exitoso', usuario: rows[0], query: sql });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas', query: sql });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};