var mysql = require('mysql')
var $ = require('jquery')

// var database = 'bancoNode';
// var table = 'marcas';

// var client = mysql.createConnection({
//     user: 'root',
//     password: 'root',
//     host: 'localhost',
//     port: 3306
// });

// module.exports = {

//     createData: function createData(data){
//         client.connect()
//         client.query('USE '+database);
//         client.query(
//             'INSERT INTO '+table+' '+
//             'SET nome = ?',
//             [data]
//         );
//         client.end();
//     },

//     selectData: function selectData(){
//         client.connect()
//         client.query('USE '+database);
//         client.query(
//             'SELECT * FROM '+table,
//             function(err, results, fields) {
//                 if( err ) {
//                     throw err;
//                 }
//                 console.log(results)
//             }
//         );
//         client.end();
//     }

// }