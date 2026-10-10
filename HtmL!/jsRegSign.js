const ToRegWindow = document.getElementById("ButtonToReg");
const circle = document.querySelector(".circle");

ToRegWindow.addEventListener("click",function(){
    circle.classList.add("slipp");
})
        /*-----------ButtonToReg(Up)-------------*/

const ToSignInWindow = document.getElementById("ButtonToSignIn");

ToSignInWindow.addEventListener("click",function(){
    circle.classList.remove("slipp");
})
        /*-----------ButtonToSignIn(Up)----------*/




const InputNameReg = document.querySelector("#InputNameReg");
const InputPasswordReg = document.querySelector("#InputPasswordReg");



const Users = [];


const ButtonRegIn = document.querySelector("#ButtonReg");

ButtonRegIn.addEventListener("click",function(){
    
       
        let name = InputNameReg.value;
        let password = InputPasswordReg.value;
        let user = null;   
        let Add = true; 
        for( let i in Users)
        {
            if(name == Users[i].name || password == Users[i].password)
            {
                console.log("The name is already been taken")
                Add = false;
                break;
                
                
            }
            
    
         }
       if(Add)
        {   user = {
            name: name ,  password:password};
            Add = true;
            Users.push(user);
        console.log(Users);   
        }     
        
    
    
    
})

            /*--------------Registration(Up)------------------*/


const InputNameSignIn = document.querySelector("#InputNameSignIn");
const InputPasswordSignIn = document.querySelector("#InputPasswordSignIn");

const ButtonSignIn = document.querySelector("#ButtonSignIn");

const SignInMaessageTrue = document.querySelector("#SignInMaessage");
const ButtonCloseSignInTrue = document.querySelector("#WindowSignInTrueButton");

ButtonCloseSignInTrue.addEventListener("click",function(){
    SignInMaessageTrue.classList.remove("true");
})

const SignInWindowFalse = document.querySelector("#SignInMaessageFalse");
const ButtonCloseSignInFalse = document.querySelector("#WindowSignInFalseButton");

ButtonCloseSignInFalse.addEventListener("click",function(){
    SignInWindowFalse.classList.remove("true");
})
ButtonSignIn.addEventListener("click",function(){
  let name =  InputNameSignIn.value;
  let password = InputPasswordSignIn.value;
  let found = false;
for(let  i in Users)
{
  if (name == Users[i].name && password == Users[i].password)
  {
     found = true;
     
  }
  else if(name != Users.name && password != Users.password && found  == false)
  {
    found = false;
  }

}
if(found)
{
    console.log("True");
    SignInMaessageTrue.classList.add("true");
    found = false;
}
else{
    console.log("false");
    SignInWindowFalse.classList.add("true");
}

})