// javascript code goes here
let elemArr=document.getElementsByClassName('box')
let p1Arr=[0,0,0,0,0,0,0,0,0]
let p2Arr=[0,0,0,0,0,0,0,0,0]
let count=0
for(let i=0; i<elemArr.length; i++)
{
    elemArr[i].onclick=function()
    {
     let id=this.id
     id=Number(id)
     let isP1Winner=false
     let isP2Winner=false
     if(p1Arr[id-1]===0 && p2Arr[id-1]===0){
     
     if(count%2===0)
     {
       this.innerHTML='X'
       p1Arr[id-1]=1
       isP1Winner=checkWinner(p1Arr)
       if(isP1Winner)
       {
           alert('Congratulations! Player1 wins')
           window.location.reload()
       }
     }
     else{
       this.innerHTML='O'
       p2Arr[id-1]=1
        isP2Winner=checkWinner(p2Arr)
        if(isP2Winner)
        {
            alert('Congratulations! Player2 wins')
            window.location.reload()
        }
     }
     count++
     if(count===9 && !isP1Winner && !isP2Winner){
       alert('Draw!')
       window.location.reload()
     }
     }
    }
}

function checkWinner(arr)
{
    if(arr[0]===1 && arr[3]===1 && arr[2]===1){return true }
    else if(arr[0]===1 && arr[3]===1 && arr[6]===1){return true}
    else if(arr[0]===1 && arr[4]===1 && arr[8]===1){return true}
    else if(arr[1]===1 && arr[4]===1 && arr[7]===1){return true}
    else if(arr[2]===1 && arr[5]===1 && arr[8]===1){return true}
    else if(arr[3]===1 && arr[4]===1 && arr[5]===1){return true}
    else if(arr[6]===1 && arr[7]===1 && arr[8]===1){return true}
    else if(arr[2]===1 && arr[4]===1 && arr[6]===1){return true}
    else{return false}
}