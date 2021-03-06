import { baseUrl } from "../contants/index";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
        // Client.checkForName(formText)

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
                    <br><td>${item.type}</td>
                    <td>${item.score_tag}</td>
                </tr>
            `;
                listItems.push(htmlItem);
                // listItems.join("\n");
            });
        }
    }
    if (listItems.length > 0) {
        return `<div> <br>${listItems.join('<br>')}
        </div>`;
    } else {
        return "<span>No items found</span>";
    }
}

function updateUI(data, formText) {
    const sentimentedEntityList = `<h2>Sentimented entity list</h2>
    <div> ${getList(data.sentimented_entity_list)} </div>`;
    const sentimentedConceptList = `
    <div class='result-section'>
        <h2>Sentimented concept list</h2>
        ${getList(data.sentimented_concept_list)}<br>
    </div>
    `;
    const htmlTable = `
    <div class="result-section">
        <h2>Overall results</h2>
            <tr>
                <th>Score tag</th>
                <th>Agreement</th>
            </tr>
            <tr>
                <td>${data.score_tag}</td>
                <td>${data.agreement}</td>
            </tr>
    </div>
    `;

    const htmlOutput = `
        ${htmlTable}
        ${sentimentedEntityList}
        ${sentimentedConceptList}
    `;
    document.getElementById("results").innerHTML = htmlOutput;
}
export { handleSubmit };