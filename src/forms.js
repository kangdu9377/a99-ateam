window.addEventListener("load", function () {
    
    // New User Creation
    function sendData( form ) {
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new URLSearchParams(new FormData( form ));
        sendRequest.addEventListener("error", function(event){
            alert('Submission unsuccessful! Please try again.');
        });
        sendRequest.addEventListener("load", function(event){
            alert('Your account was created!');
        });
        sendRequest.open("POST", "http://localhost:5000/app/new/user");
        sendRequest.send( signupInfo );
    }

    const newuser = document.getElementById("signup");
    newuser.addEventListener("submit", function(event){
        event.preventDefault();
        sendData(this);
    });

    // Delete User
    function deleteData( form ) {
        const sendRequest = new XMLHttpRequest();
        const deleteInfo = new URLSearchParams(new FormData( form ));
        sendRequest.addEventListener("error", function(event){
            alert('Deletion unsuccessful! Please try again.');
        });
        sendRequest.addEventListener("load", function(event){
            // alert('Your account was deleted!');
        });
        sendRequest.open("DELETE", "http://localhost:5000/app/deleting/user");
        sendRequest.send( deleteInfo );
    }

    const olduser = document.getElementById("delete");
    olduser.addEventListener("submit", function(event){
        event.preventDefault();
        deleteData(this);
    });

    // Updating User
    function updateData( form ) {
        const sendRequest = new XMLHttpRequest();
        const updateInfo = new URLSearchParams(new FormData( form ));
        sendRequest.addEventListener("error", function(event){
            alert('Changes were unsuccessful! Please try again.');
        });
        sendRequest.addEventListener("load", function(event){
            // alert('Your username was changed!');
        });
        sendRequest.open("PATCH", "http://localhost:5000/app/updating/user");
        sendRequest.send( updateInfo );
    }

    const updateUser = document.getElementById("changeName");
    updateUser.addEventListener("submit", function(event){
        event.preventDefault();
        updateData(this);
    });


    // Get List of Users
    function getUsers( form ) {
        const sendRequest = new XMLHttpRequest();
        sendRequest.addEventListener("error", function(event){
            alert('Accessing users unsuccessful! Please try again.');
        });

        sendRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // alert(sendRequest.responseText);
                document.getElementById("allUsers").innerHTML = sendRequest.responseText;
            }
        }
        sendRequest.open("GET", "http://localhost:5000/app/users");
        sendRequest.send();        
    };

    const allUsers = document.getElementById("usersButton");
    allUsers.addEventListener("click", function(event){
        event.preventDefault();
        getUsers(this)
    });


    // Get Personal Data
    function getUserdata( form ) {
        const sendRequest = new XMLHttpRequest();
        const userInfo = new URLSearchParams(new FormData( form ));
        sendRequest.addEventListener("error", function(event){
            alert('Accessing users unsuccessful! Please try again.');
        });

        sendRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // alert(sendRequest.responseText);
                document.getElementById("myData").innerHTML = sendRequest.responseText;
            }
        }
        sendRequest.open("POST", "http://localhost:5000/app/login/user");
        sendRequest.send( userInfo );
    };

    const selfUser = document.getElementById("loginForm");
    selfUser.addEventListener("submit", function(event){
        event.preventDefault();
        getUserdata(this);
    });
});