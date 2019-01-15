auth = firebase.auth();
db = firebase.database();

function SignUp()
{
    alert('hi')

let userName = document.getElementById("usernamesignup").value;
let userEmail = document.getElementById("emailsignup").value;
let userPassword = document.getElementById("passwordsignup").value;
let userConfirmPassword = document.getElementById("passwordsignup_confirm").value;

console.log(userEmail)



if(userPassword===userConfirmPassword){
  
    auth.createUserWithEmailAndPassword(userEmail, userPassword).then((snapshot)=> {
        console.log(snapshot);
        
        let userObject= {


            USERNAME : userName,
            USEREMAIL : userEmail,
        
            USERPASSWORD : userPassword,
            USERCONFIRMPASSWORD : userConfirmPassword,
            uid: snapshot.user.uid,
        };

        console.log(userObject);        

        db.ref().child(`users/${userObject.uid}`).set(userObject).then(() => {
            swal({
                title: "Acount Created Sucessfully",
                // text: "You clicked the button!",
                icon: "success",
            });

            setTimeout(() => {
                location.href = "login.html";
            }, 1000);

        })

    })
        .catch((e) => {
            swal({
                title: e,
                // text: "You clicked the button!",
                icon: "warning",
            });
        })
        
      
}

}