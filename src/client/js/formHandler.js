import { baseUrl } from "../contants/index";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    return fetch(`${baseUrl}/sentiment?text=${formText}`)
        .then(res => res.json())
        .then(function(res) {

            document.getElementById('results').innerHTML = res.message
        })
        .catch((error) => {
            document.getElementById("results").innerHTML = error;
        });
}

export { handleSubmit }