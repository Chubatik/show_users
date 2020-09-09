const connection = require('../database/database_connect');


//#region users
let usersJSON = require('../assets/users');
let users = require('./users');
let usersData = users(usersJSON);
//#endregion

//#region user
let userJSON = require('../assets/user');
let user = require('./user');
let userData = user(userJSON);
//#endregion


//#region queries_user
const sql_1 = `create table if not exists user(
    id int primary key auto_increment,
    description varchar(255),
    language varchar(255),
    has_issues boolean,
    html_url varchar(255)
)`;
const sql_2 = `replace into user(description,language,has_issues,html_url) values ?`;

//#endregion

//#region queries_users
const sql1 = `create table if not exists users(
    id int primary key auto_increment,
    login varchar(255) not null,
    avatar_url varchar(255) not null)`;
const sql2 = `replace into users(login, avatar_url) values ?`;
//#endregion

//#region database_tables

async function createTables(){
        let output_1 = [], output_2 =[];
    try{
        await connection.query(sql_1);
        output_1 = await connection.query(sql_2, [userData]);
        await connection.query(sql1);
        output_2 = await connection.query(sql2, [usersData]);
        await connection.end();
    }catch(err){
        console.log(err.message);
    }
    console.log(output_1[0]);
    console.log(output_2[0]);
    }
createTables(); 
    
//#endregion


//For another file
/*


//#region express server
app.get('/', async (req,res)=>{
    let usersArr = [];
    try{
        usersArr = await connection.query("SELECT * FROM users");
    }catch(e){
        console.log(e.message);
    }
    console.log(usersArr[0][0]);
});
app.listen(3000);
//#endregion
*/


