const express=require('express');
const app=express();
const students = [
    { name: 'John Doe', age: 20, graduation: '2022' },
    { name: 'Jane Smith', age: 22, graduation: '2020' },
    { name: 'Bob Johnson', age: 21, graduation: '2021' },
    { name: 'Alice Brown', age: 20, graduation: '2023' },
    { name: 'Mike Davis', age: 23, graduation: '2019' },
    { name: 'Emily Chen', age: 21, graduation: '2022' },
    { name: 'David Lee', age: 22, graduation: '2020' },
    { name: 'Sophia Patel', age: 20, graduation: '2024' },
    { name: 'Kevin White', age: 21, graduation: '2021' },
    { name: 'Olivia Martin', age: 23, graduation: '2018' }
  ];
app.get('/',(req,res)=>{
    res.send(students);
})
app.get('/user',(req,res)=>{
    res.send(students);
})
app.listen(3000,()=>{
    console.log('Server started on port 3000');
})