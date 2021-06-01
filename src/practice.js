// const user = ["Aniruddha SG", "ani@dctacademy.com", "92", "No"]
// var rv = ['name','email','min','guest'];
// const newArr = []
// const obj = {}

// for (let i = 0; i < user.length; i++){
//     for(let i=0; i<rv.length; i++){
//         obj[rv[i]] = user[i]
//     }
// }
// newArr.push(obj)
// console.log(newArr)

// const handleFileChange = (e) => {
//     // const getFile = e.target.files[0]
//     // const reader = new FileReader();
//     // reader.onload = function(event) {
//     //   // The file's text will be printed here
//     //   setFile(event.target.result)
//     };
  
//     // reader.readAsText(getFile);
// }

// const arr = file.split('\r\n').filter(ele=>ele)

// console.log(arr)

// for(let i=0; i<arr.length; i++){
//     for(let i=0; i<column.length; i++){
//         arr[i].split(',').forEach(ele=>{
//             console.log(column[i])
//             console.log(ele)
//         })
//     }
// }

// for(let i=0; i<arr.length; i++){
//     arr[i].split(',').forEach(ele=>{
//         for(let i=0; i<col.length; i++){
//             obj[col[i]] = ele
//         }
//     })
//     newArr.push(obj)
//     obj = {}
// }

const arr = [
    {name__original_name_: "Jack M", user_email: "jack@gmail.com", total_duration__minutes_: 92, guest: "Yes"}
    ,{name__original_name_: "John D", user_email: "john@gmail.com", total_duration__minutes_: 95, guest: "Yes"}
    ,{name__original_name_: "Rachel S", user_email: "rachel@gmail.com", total_duration__minutes_: 92, guest: "Yes"}
    ,{name__original_name_: "Monica B", user_email: "monica_b@gmail.com", total_duration__minutes_: 92, guest: "Yes"}
    ,{name__original_name_: "Ross G", user_email: "ross_g@gmail.com", total_duration__minutes_: 92, guest: "Yes"}
    ,{name__original_name_: "Chandler B", user_email: "chandler_b@gmail.com", total_duration__minutes_: 91, guest: "Yes"}
]
const minutes = []
const values = arr.filter(ele=>{
    minutes.push(ele.total_duration__minutes_)
})

const min = Math.min(...minutes)
const max = Math.max(...minutes)

console.log(min, max)

const list = [];
for (let i = min; i <= max; i++) {
    list.push(i);
}
console.log(list)