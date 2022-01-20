const { response } = require('express');
const userConnection = require('../database/user');

//Función para crear un nuevo usuario en la BD
const createUser = async (req, res = response) => {
  try {
    //Datos obtenidos a través de la acción POST, tomando los campos del frontend
    //IMPORTANTE: Tener en cuenta que estos campos se deben llamar igual a como estan definidos a continuación
    const {
      identificacion,
      Id_tipo,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      usuario,
      contrasena,
      direccion,
      telefono,
      email
    } = req.body;

    //Consulta para guardar en la BD, en la tabla user
    var sSQLCreate = 'INSERT INTO usuario (identificacion,Id_tipo,primer_nombre,segundo_nombre, '
    sSQLCreate += ' primer_apellido,segundo_apellido,usuario,contrasena,direccion,telefono,email) VALUES (';
    sSQLCreate +=  identificacion + ', ';
    sSQLCreate +=  Id_tipo + ', ';
    sSQLCreate += '\'' + primer_nombre + '\', ';
    sSQLCreate += '\'' + segundo_nombre + '\', ';
    sSQLCreate += '\'' + primer_apellido + '\', ';
    sSQLCreate += '\'' + segundo_apellido + '\', ';
    sSQLCreate += '\'' + usuario + '\', ';
    sSQLCreate += '\'' + contrasena + '\', ';
    sSQLCreate += '\'' + direccion + '\', ';
    sSQLCreate += '\'' + telefono + '\', ';
    sSQLCreate += '\'' + email + '\');';

    const connection = userConnection();
    connection.query(
      sSQLCreate,
      function (err, results, fields) {

        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //Respuesta de la petición
          return res.status(200).json({
            success: true,
            result: results,
          });

        }
      }
    );
    //Se cierra la conexión con la BD
    connection.end();

  } catch (e) {
    console.log(e);
    //En caso de fallos se retorna el error 
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};


//Buscar un solo registro de la tabla de usuarios
const getUser = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro buscar
    const {
      id, //Identificación del usuario
      idUsuario, //tipo usuario
    } = req.params;
    //Consulta a ejecutar
    var SQLSearch =  'SELECT * FROM usuario '
    SQLSearch += '  WHERE identificacion = '+ id  + ' AND Id_tipo = '+idUsuario+';';
    console.log(SQLSearch)
    const connection = userConnection();
    connection.query(
      SQLSearch,
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Buscar los usuarios existentes
const getUsers = async (req, res = response) => {
  try {
    const connection = userConnection();
    connection.query(
      'SELECT * FROM usuario;',
      function (err, results, fields) {
        if (err) {
          //Error al ejecutar la consulta 
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

    //Errores 
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Actualizar los usuarios existentes
const updateUser = async (req, res = response) => {
  try {
    //Los datos a actualizar
    const {
      identificacion,
      Id_tipo,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      usuario,
      contrasena,
      direccion,
      telefono,
      email
    } = req.body;

    //Son lo parámetros que se le envían a la petición para identificar que registro modificar
    const {
      id, //Identificación del usuario, en dado caso que la quiera modificar se guarda para poder realizar la actualización
      idUsuario, //tipo usuario
    } = req.params;
    //Consulta a ejecutar
    var SQLUpdate =  'UPDATE usuario SET '
    SQLUpdate += 'identificacion = ' + identificacion + ', ' 
    SQLUpdate += ' Id_tipo = ' + Id_tipo + ', ' 
    SQLUpdate += ' primer_nombre = \'' + primer_nombre + '\', ' 
    SQLUpdate += ' segundo_nombre = \'' + segundo_nombre + '\', ' 
    SQLUpdate += ' primer_apellido = \'' + primer_apellido + '\', ' 
    SQLUpdate += ' segundo_apellido = \'' + segundo_apellido + '\', ' 
    SQLUpdate += ' usuario = \'' + usuario + '\', ' 
    SQLUpdate += ' contrasena = \'' + contrasena + '\', ' 
    SQLUpdate += ' direccion = \'' + direccion + '\', ' 
    SQLUpdate += ' telefono =' + telefono + ', ' 
    SQLUpdate += ' email = \'' + email + "\' "
    SQLUpdate += '  WHERE identificacion = '+ id  + ' AND Id_tipo = '+idUsuario+';';

    const connection = userConnection();
    connection.query(
      SQLUpdate,
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Borrar un registro de la tabla de usuarios
const deleteUser = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro borrar
    const {
      id, //Identificación del usuario
      idUsuario, //tipo usuario
    } = req.params;
    //Consulta a ejecutar
    var SQLDelete =  'DELETE FROM usuario '
    SQLDelete += '  WHERE identificacion = '+ id  + ' AND Id_tipo = '+idUsuario+';';

    const connection = userConnection();
    connection.query(
      SQLDelete,
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Método para el login
const loginUser = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para verificar las credenciales del usuario al loguearse
    const {
      usuario, 
      contrasena, 
    } = req.params;

    //Consulta a ejecutar
    var SQLLogin =  'SELECT * FROM usuario '
    SQLLogin += '  WHERE usuario = \''+ usuario  + '\' AND contrasena = \''+contrasena+'\';';

    const connection = userConnection();
    connection.query(
      SQLLogin,
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Método para consultar los tipos de usuarios
const typeUser = async (req, res = response) => {
  try {
    //Consulta a ejecutar
    var SQLTipoUsuario =  'SELECT * FROM tipousuario; ';

    const connection = userConnection();
    connection.query(
      SQLTipoUsuario,
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Se exportan las funciones definidas en la API (CRUD) y funciones para login, buscar tipo de usuario
module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  typeUser
};