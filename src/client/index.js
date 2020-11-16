import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

//console.log(checkForName);

alert("I EXIST")
document
    .getElementById("user-form")
    .addEventListener("submit", function(event) {
        handleSubmit(event);
    });
export {
    handleSubmit
}