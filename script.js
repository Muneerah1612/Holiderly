/* what to do : local storage of go class
  API implementation

  */
 
 function getData() {
   console.log('ok');
   
   let name=document.getElementById('name').value;
   localStorage.setItem('value',name);

 }
 function getName(){
  let subName=document.getElementById('sub-name').value;
  let email=document.getElementById('email').value;
  if (subName ==''){
      alert('Please Enter Your Name');
  }else{
  localStorage.setItem('name',subName);
  localStorage.setItem('email',email);
}
}