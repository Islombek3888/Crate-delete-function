
// let name1 = document.querySelector(".name");
// let color = document.querySelector(".color");
// let speed = document.querySelector(".speed");
// let price = document.querySelector(".price");

// let arr = [];
// function click2() {
//     let data = {
//         name1: name1.value,
//         color: color.value,
//         speed: speed.value,
//         price: price.value
//     }
//     let array = []
//     let str = ""
//     name1.value = "";
//     color.value = "";
//     speed.value = "";
//     price.value = "";
//     arr.push(data);
//     if (data.name1 == "")
//         array.push("Name Kiritilsin")
//     if (data.color == "")
//         array.push("Color Kiritilsin")
//     if (data.speed == "")
//         array.push("Speed Kiritilsin")
//     if (data.price == "")
//         array.push("Prince Kiritilsin")
//     if (array.length > 0) {
//         for (const i of array) {
//             str += i + "\n"
//         }
//         alert(str)
//     } else {
//         document.getElementById("h").innerHTML = "<tr><td>Name</td><td>Color</td><td>Speed</td><td>Price</td></tr>";
//         for (const i of arr) {
//             x = "<tr><td>" + i.name1 + "</td><td>" + i.color + "</td><td>" + i.speed + " </td><td>" + i.price + "</td></tr>";
//             document.getElementById("h").innerHTML += x;
//         }

//     }
// }

// function click3() {
//     console.log(arr);
//     document.getElementById("h").innerHTML = "<tr><td>Name</td><td>Color</td><td>Speed</td><td>Price</td></tr>";
//     arr.pop()
//     for (const i of arr) {
//         let x = "<tr><td>" + i.name1 + "</td><td>" + i.color + "</td><td>" + i.speed + " </td><td>" + i.price + "</td></tr>";
//         document.getElementById("h").innerHTML += x;
//     }
// }



// function search1() {
    
//     let ser = arr.find(function (i) {
//         let m = i.name1
//         return m.toLowerCase()== document.querySelector(".search").value.toLowerCase();
//     })
//     console.log(ser);
//     document.getElementById("h").innerHTML = "<tr><td>Name</td><td>Color</td><td>Speed</td><td>Price</td></tr>";
//     x = "<tr><td>" + ser.name1 + "</td><td>" + ser.color + "</td><td>" + ser.speed + " </td><td>" + ser.price + "</td></tr>";
//     document.getElementById("h").innerHTML += x;
// }


// function search2(){
//     document.getElementById("h").innerHTML = "<tr><td>Name</td><td>Color</td><td>Speed</td><td>Price</td></tr>";
//     for (const i of arr) {
//         x = "<tr><td>" + i.name1 + "</td><td>" + i.color + "</td><td>" + i.speed + " </td><td>" + i.price + "</td></tr>";
//         document.getElementById("h").innerHTML += x;
//     }
// }





