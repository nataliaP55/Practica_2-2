const mysql = require("mysql"); //pido usar el módulo de sql "conector"
require("dotenv").config();

//preparamos conexion con la DB
const conexionDB = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

conexionDB.connect(function (error){
    if(error){
        throw error; //lanza el error en caso de que algo salga mal
    }
    console.log("conexion fue realizada! :D");
}); 

/*obtener la informacion de registros en la tabla platos */
conexionDB.query("SELECT * FROM platos", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("mostrando registros en la tabla: \n", resultado);
});

// insertamos un nuevo "plato" registro a la tabla

/* conexionDB.query("INSERT INTO platos (nombre, precio, con_oferta) VALUES ('ensalada Cesar', 800, FALSE)", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("mostrando registros en la tabla: \n", resultado);
}); */

// Actualiza un registro de la tabla
/* conexionDB.query("UPDATE platos SET con_oferta = FALSE WHERE con_oferta = TRUE ", function(error, resultado){
    if(error){
        throw error;
    }
    console.log("actualizamos la tabla: \n", resultado);
}); */
let sqlComando = "DELETE FROM platos WHERE id_plato = 1";
// elimina un registro de la tabla
conexionDB.query(sqlComando, function(error, resultado){
    if(error){
        throw error;
    }
    console.log("eliminamos un registro en la tabla: \n", resultado);
});

conexionDB.end( function (error){
    if (error){
        return console.log("error: " + error.message);
    }
    console.log ("conexion con base de datos cerrada");
});
