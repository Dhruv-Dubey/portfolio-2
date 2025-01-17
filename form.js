import { db } from "./firebase.js";
import { collection, addDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
const form = document.querySelector('.form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const submit = document.querySelector('.submit');

const docRef = collection(db, "form");


submit.addEventListener("click", (e) => {
  e.preventDefault();

  addDoc(docRef, {
    Name: name.value,
    email: email.value,
    message: message.value,
  }).then(() => {
    form.reset();
  })
});

var stdNo = 0;
var tbody = document.getElementById("tbody1");

var data1 = [];
getDocs(docRef).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    data1.push(doc.data());
  });
  AddItemsToTable(data1);//not outside since getData is async function.

});

console.log(data1);


function AddItems(name, email, message) {
  var trow = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');

  td1.innerHTML = ++stdNo;
  td2.innerHTML = name;
  td3.innerHTML = email;
  td4.innerHTML = message;

  console.log("ijdijikwd");

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  tbody.appendChild(trow);
}

function AddItemsToTable(data2) {
  stdNo = 0;
  console.log("ijdijikwd");
  tbody.innerHTML = "";//so we dont get duplicate rows
  data2.forEach(element => {
    AddItems(element.Name, element.email, element.message)
  });
}