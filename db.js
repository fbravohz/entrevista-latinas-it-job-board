const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db-mysql-nyc1-18083-do-user-14663188-0.b.db.ondigitalocean.com',      // Cambia esto a la dirección de tu servidor MySQL
  user: 'doadmin',     // Cambia esto al nombre de tu usuario de base de datos
  password: 'AVNS_ZVFT6Fvk6MSsYrrXX9x', // Cambia esto a tu contraseña de base de datos
  database: 'defaultdb', // Cambia esto al nombre de tu base de datos
  port: '25060'
});

// Conexión a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conexión exitosa a la base de datos.');
  }
});
