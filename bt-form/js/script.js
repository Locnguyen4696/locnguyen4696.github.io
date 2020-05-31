let user={
  name:"",
  bday:[],
  sex:"",
  address:"",
  tel:"",
  email:""
}
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
for(let i=1;i<32;i++){
  let option=document.createElement('option');
  option.text=i;
  day.add(option);
}
for(let i=1;i<13;i++){
  let option=document.createElement('option');
  option.text=i;
  month.add(option);
}
for(let i=1960;i<2021;i++){
  let option=document.createElement('option');
  option.text=i;
  year.add(option);
}
function register(){
  user.name=document.getElementById('name').value;
  user.bday=[day=document.getElementById('day').value,document.getElementById('month').value,document.getElementById('year').value];
  user.sex=document.getElementById('sex').value;
  user.address=document.getElementById('address').value;
  user.tel=document.getElementById('tel').value;
  user.email=document.getElementById('email').value;
  console.log(user)
  window.location.href="register.html";
}