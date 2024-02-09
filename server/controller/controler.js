import schema from "../model.js";
console.log("reached");

export async function addData(req, res) {
  console.log("reached add");
  try {
    let { task, date } = req.body;
    console.log(req.body);
    let result = await schema.create({task,date});
    console.log("result",result);
    res.status(200).send("data added");
  } catch (error) {
    console.log(error);
  }
}
 export async function getData(req,res){
  try {
    const result=await schema.find();
    console.log("get data",result);
    res.status(200).send(result)
  } catch (error) {
    console.log(error);
  }
 }

 export  async function deleteData(req,res){
  let {id}=req.params;
  console.log("id",id);
const result=await schema.deleteOne({_id:id});
res.status(200).send("deleted");
 }

 export async function editData(req,res){
  let{id}=req.params;
  let{task,date}=req.body;
  const result=await schema.updateOne({_id:id},{$set:{task,date}});
  res.status(200).send(result)
 }