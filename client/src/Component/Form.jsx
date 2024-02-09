import React,{useEffect, useState} from "react";
import axios from 'axios';
export default function Form(){
    const [data,setData]=useState([])
    const[text,setText]=useState(false)
    const[tid,setId]=useState('')
    const [task,setask]=useState(
        {
            "task":"",
            "date":""
        }
    )
    const [newData,setNewData]=useState({
        "task":"",
        "date":"",
        "status":false
    })
   const handleChange=(e)=>{
    console.log(e.target.value);
    setask((pre)=>{
       return {...pre,[e.target.name]:e.target.value
       }
    })
   }
   const Change=(e)=>{
    console.log(e.target.value);
    setNewData((pre)=>{
       return {...pre,[e.target.name]:e.target.value
       }
    })
   }
   const submit=async()=>{
    console.log("click");
    console.log(task);
      const res=await axios.post("http://localhost:3000/api/add",task)
      
     if(res.status ==200){
        alert("task added")
     }else{
        console.log("error");
     }
    get();
   }
   const get=async()=>{
    const res=await axios.get("http://localhost:3000/api/get")
    setData(res.data)
    console.log(res.data);
    // if(res.status == 200)
   }
  const tddelete=async(id)=>{
    console.log("id",id);
const res=await axios.delete(`http://localhost:3000/api/delete/${id}`)
if(res.status==200){
    alert("deleted")
}
get();
  }

const editdata=async(id)=>{
    console.log("eid",id);
setText(true)
setId(id)
}
const edit=async()=>{
    console.log("id edit",tid);
    console.log("data",newData);
    const res=await axios.put(`http://localhost:3000/api/edit/${tid}`,newData)
    if(res.status==200){
        alert("edited")
    }
    get();
}

   useEffect(()=>{
    get();
   }, [])
    return(
        <>
        <div className="container">
            <h1>Todo-s</h1>
            <input type="text" name="task" onChange={handleChange}/>
            <input type="date" name="date" onChange={handleChange}/>
            <button type="submit" onClick={submit}>Add</button>
        </div>
        <div>
            {text &&(
                <>
                <input type="text" name="task" placeholder="update the task" onChange={Change} />
                <input type="date" name="date" onChange={Change}/>

                <button onClick={edit}>submit</button>
                </>
           )}
        </div>
        <div>
            {
                data.map((td)=>{
                    return <div key={td._id}>
                        <h3>{td.task}</h3><p>{td.date}</p>
                        <button onClick={()=>tddelete(td._id)}>delete</button>
                        <button onClick={()=>editdata(td._id)}>edit</button>


                        </div>
                })
            }
        </div>
        </>
    )
}