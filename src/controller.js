const fs = require('fs')
const path=require('path')
const {getConnection} = require('./uitls/database')

const getArrayDocument = (path) => {
    let file = fs.readFileSync(path, 'utf-8')
    let regex = new RegExp('[\n\r]')
    return file.split(regex)
}

const insertTenThousandth = async () => {
    const conn = await getConnection()
    let queryArray = getArrayDocument(path.join(__dirname,'uitls','ventas.sql'))
    queryArray.map(q => {
        conn.query(q);
    })
}

const deleteTable = async ()=>{
    const conn=await getConnection()
    conn.query('truncate ventas;')
}

const selectTenThousandth= async ()=>{
    const conn = await getConnection()
    for (let i = 0; i < 10000; i++) {
        conn.query('select count(*) from ventas;')
    }
}
module.exports={
    insertTenThousandth,
    deleteTable,
    selectTenThousandth
}
