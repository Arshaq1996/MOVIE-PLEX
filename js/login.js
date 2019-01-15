let db = firebase.database();
let auth = firebase.auth();
function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{


swal({
    title: 'Sucessfully logged in',
    // text: "You clicked the button!",
    icon: "success",
});

setTimeout(() => {
    location.href = 'movies.html';
}, 1000)



    }).catch(function(error) {
        swal({

            title:error,
            icon:'warning'
        });
      });




}