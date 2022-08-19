// window.addEventListener('load', () => ) {
//
//   const params = (new URL(document.location)).searchParams;
//   const name = params.get('name');
//   const surname = params.get('surname');
//
//   document.getElementById('result-name').innerHTML = name;
//   document.getElementById('result-password').innerHTML = password;
// }
function handleSubmit(){
  const name= document.getElementById('name').value;
  const password= document.getElementById('password').value;
  // localStorage.setItem("Username",name);
  // localStorage.setItem("Password",password);
  alert("Welcome, "+name);
  return;
}
