var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var sites = [];
if (localStorage.getItem("sites") != null) {
  sites = JSON.parse(localStorage.getItem("sites"));
  displayInfo();
}
function displayInfo() {
  var cartona = ``;
  for (var i = 0; i < sites.length; i++) {
    cartona += `
       <tr>
       <td>${sites[i].name}</td>
       <td>${sites[i].siteURL}</td>
       <td>
         <button class="btn btn-info">
           <i class="fa-solid fa-eye pe-2"></i>
           Visit
         </button>
       </td>
       <td>
         <button class="btn btn-danger">
           <i class="fa-solid fa-trash-can px-1" onclick="deleteInfo(${i})"></i>
           Delete
         </button>
       </td>
     </tr>
       `;
  }
  document.getElementById("demo").innerHTML = cartona;
}
function getData() {
  siteInfo = {
    name: siteName.value,
    siteURL: siteURL.value,
  };
  if (checkName(siteName.value) == true && checkUrl(siteURL == true)) {
    sites.unshift(siteInfo);
    clearInfo();
    localStorage.setItem("sites", JSON.stringify(sites));
    displayInfo();
  } else {
  var box=document.getElementById('box')
  box.style.display="flex"
  }
}

function deleteInfo(index) {
  sites.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(sites));
  displayInfo();
}
function clearInfo() {
  siteName.value = "";
  siteURL.value = "";
}

function checkName(str) {
  var regex = /^[a-zA-Z0-9]{3,}$/;
  return regex.test(str);
}
function checkUrl(str) {
  var regex = /^(https:\/\/)?www.[a-zA-Z]{3,}.com(\/)?(.eg)?$/;
  return regex.test(str);
}
function closeBox(){
  var box=document.getElementById('box')
  box.style.display="none"
}