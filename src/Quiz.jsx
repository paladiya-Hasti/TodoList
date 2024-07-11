import React, { useState } from 'react'

const Quiz = () => {
    let [task,settask]=useState(" ")
    let[tasklist,settasklist]=useState([])

    const handleadd=()=>{
      let todo={
        task:task,
        status:false,
      }
      settasklist([...tasklist,todo])
      settask("")
      console.log(tasklist);
    }

    const handlestatus=(index)=>{
      let filter=tasklist.map((ele,i)=>{
        if(i==index){
          ele.status=!ele.status
          return ele
        }
        else{
          return ele
        }
      })
      settasklist(filter)
    }

    const handleremovetask=(index)=>{
          console.log(index);
          let filter=tasklist.filter((ele,i)=>i!=index)
            settasklist(filter)
          
    }
  return (
    <div>
      <div>
        <input type="text" value={task} onChange={(e)=>settask(e.target.value)}/>
        <button onClick={handleadd}>add</button>
         
      </div>
      <div>
        {
          tasklist.map((ele,index)=>(
            <div>
            <p style={{color:ele.status ?"green" : "red"}}>{ele.task}</p>
            <button onClick={()=>handlestatus(index)}>
              {
                ele.status?"uncomplete":"complete"
              }
            </button>
            <button onClick={()=>handleremovetask(index)}>delete</button>
            </div>
           
          ))
        }
      </div>
    </div>
  )
}

export default Quiz