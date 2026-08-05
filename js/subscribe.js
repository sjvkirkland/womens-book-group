document
.getElementById("subscribeForm")
.addEventListener("submit", async function(event){

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const response =
        await fetch("https://script.google.com/macros/s/AKfycbyshBSidrhqDFlLGVR4sI0PGdObQgYZXZkg50SPSgVXttuyoDmDxGEQqrhXsYHbUQSA/exec",{

            method:"POST",

            body:JSON.stringify({

                name:name,

                email:email

            })

        });

    if(response.ok){

        document.getElementById("message").innerHTML =
            "Thank you for joining our mailing list!";

        document.getElementById("subscribeForm").reset();

    }
    else{

        document.getElementById("message").innerHTML =
            "Sorry, something went wrong.";

    }

});