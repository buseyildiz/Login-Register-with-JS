const email = document.getElementById('email');
const password = document.getElementById('pwd');
const allusersbtnlogin = document.getElementById('alluserslogin');
const loginbutton= document.getElementById('loginbutton');

loginbutton.addEventListener('click',function(e){

    axios.post('https://buseileogreniyorum.herokuapp.com/login',{
        password:password.value,
        email:email.value,
    })
    .then((response)=> {
        alert(response.data.message)
        console.log(response)})
    .catch((err)=>{
        alert(err.response.data.error)
        console.log(err)});

    e.preventDefault();
});

allusersbtnlogin.addEventListener('click',function(e){


    axios.get('https://buseileogreniyorum.herokuapp.com/allusers',{
        headers:{
            deger:"1"
        }
      })
      .then(function (response) {
        for (let i = 0; i < response.data.data.length; i++) {
           console.log(response.data.data[i])
            
        }
        console.log()
    }).catch((error)=>{
        console.log(error);
    })
    
    
        e.preventDefault();
    });