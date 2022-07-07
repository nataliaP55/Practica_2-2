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
conexionDB.query("SELECT * FROM platos", function(error, registros){
    if(error){
        throw error;
    }
    console.log("mostrando registros en la tabla: \n", registros);
});

conexionDB.end( function (error){
    if (error){
        return console.log("error: " + error.message);
    }
    console.log ("conexion con base de datos cerrada");
});
