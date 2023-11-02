//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  var onIntNumberSelected = function(checkbox, inputField) {
    if (checkbox.checked) {
        inputField.value = "";
        inputField.disabled = true;
        inputField.classList.add("govuk-input--disabled");
    } else {
        inputField.disabled = false;
        inputField.classList.remove("govuk-input--disabled");
    }
};

function initEnterPhoneNumber() {
    var inputField = document.querySelector("#phoneNumber");
    var checkbox = document.querySelector("#hasInternationalPhoneNumber");
    if (inputField && checkbox) {
        checkbox.addEventListener("click", function(e) {
            onIntNumberSelected(e.currentTarget, inputField);
        });
        window.addEventListener("load", function() {
            onIntNumberSelected(checkbox, inputField);
        });
    }
}
initEnterPhoneNumber();

})
