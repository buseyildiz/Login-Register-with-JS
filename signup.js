const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pwd');
const about= document.getElementById('about');
const signbutton= document.getElementById('signbutton');
const allusersbtnsignup = document.getElementById('alluserssignup');

signbutton.addEventListener('click', function(e){
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(about.value);

   

  axios.post('https://buseileogreniyorum.herokuapp.com/user',{
    username:username.value,
    email:email.value,
    about:about.value,
    password:password.value
  })
  .then((response) => {
    alert("Kayıt İşlemi Başarılı");
    username.value="";
    email.value="";
    about.value="";
    password.value="";
    

    console.log(response)})
  .catch((err)=>{
    alert(err.response.data.error);
    username.value="";
    email.value="";
    about.value="";
    password.value="";
    console.log(err)});

      e.preventDefault();
});


allusersbtnsignup.addEventListener('click',function(e){


  axios.get('https://buseileogreniyorum.herokuapp.com/allusers',{
      headers: {
          deger:"1"
      }
  })
  .then((response)=>{
      for(let i = 0; i< response.data.data.lenght;i++){
          console.log(response.data.data[i]);
      }
  }).catch((err)=>console.log(err));
  
  
  
  
  
      e.preventDefault();
  });



