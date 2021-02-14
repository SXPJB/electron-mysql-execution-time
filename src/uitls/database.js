const mysql=require('promise-mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'So76699737427',
    database:'sda'
})

const getConnection = () =>(
    connection
)

module.exports={
    getConnection
}
