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
            updateUI(res, formText);
            //document.getElementById('results').innerHTML = res.message
        })
        .catch((error) => {
            document.getElementById("results").innerHTML = error;
        });
}


function getList(list) {
    const listItems = [];
    if (list) {
        if (list.length > 0) {
            list.forEach((item) => {
                const htmlItem = `
                <tr>
                    <td>${item.form}</td>
                    <td>${item.type}</td>
                    <td>${item.score_tag}</td>
                </tr>
            `;
                listItems.push(htmlItem);
            });
        }
    }
    if (listItems.length > 0) {
        return `<div> $ {listItems.join(" ")}
        </div>`;
    } else {
        return "<span>No items found</span>";
    }
}

function updateUI(data, formText) {
    const sentimentedEntityList = `<div> ${getList(data.sentimented_entity_list)} </div>`;
    const sentimentedConceptList = `
    <div class='result-section'>
        <h2>Sentimented concept list</h2>
        ${getList(data.sentimented_concept_list)}
    </div>
    `;

    const htmlOutput = `
        ${sentimentedEntityList}
        ${sentimentedConceptList}
    `;
}
export { handleSubmit };