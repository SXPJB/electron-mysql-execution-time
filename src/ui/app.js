const {remote}=require('electron')
const controller=remote.require('./controller')

let insertTenThousandth=document.getElementById('insertTenThousandth')
let insertTime=document.getElementById('insertTime')
let selectTenThousandth=document.getElementById('selectTenThousandth')
let selectTime=document.getElementById('selectTime')
let deleteTable=document.getElementById('deleteTable')
let timeDelete=document.getElementById('deleteTime')

const getDescription=(time)=>(
    `El tiempo que se tomó fue de: ${time/1000} segundos`
)

insertTenThousandth.addEventListener('click',async ()=>{
    let begin = Date.now();
    await controller.insertTenThousandth()
    let end = Date.now();
    insertTime.innerHTML= getDescription((end-begin))
})

selectTenThousandth.addEventListener('click',async ()=>{
  let begin=Date.now()
  await controller.selectTenThousandth()
  let end=Date.now()
  selectTime.innerHTML=getDescription((end-begin))
})

deleteTable.addEventListener('click',async ()=>{
    let begin=Date.now()
    await controller.deleteTable()
    let end=Date.now()
    timeDelete.innerHTML=getDescription((end-begin))
})


