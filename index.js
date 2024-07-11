const form = document.getElementById('userForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
   if(validateForm()){
    createTable();
   }
});

function validateForm() {
    let isValid = true;
    let inputs = ['firstname','lastname','email'];
    inputs.forEach((id)=>{
        const input = document.getElementById(id);
        if(!input.value){
            isValid = false
            createSpan(`${id} is required.`,input)       
        }
    })
    return isValid;
}

function createSpan(message,input) {
    const span = document.createElement('span');
    span.textContent = message;
    span.className = 'error';
    input.parentNode.insertBefore(span,input.nextSibling)

}
function clearSpan() {
    const spans = document.querySelectorAll('.error');
    spans.forEach((span)=>{
        span.remove();
    })
}
function clearForm() {
    form.reset();
    clearSpan();
}
function createTable() {
    const table = document.createElement('table');

    let data = {
        'Field':'value',
        'First Name': document.getElementById('firstname').value,
         'last name' : document.getElementById('lastname').value,
         "Email": document.getElementById("email").value,
          "Checkbox": document.getElementById("checkbox").checked ? "Checked" : "Unchecked",
          "Radio": document.querySelector('input[name="radio"]:checked') ? document.querySelector('input[name="radio"]:checked').value : "Not selected",
          "Comment": document.getElementById("comment").value,
          "Dropdown": document.getElementById("dropdown").value
    }

    Object.entries(data).forEach(([field,value],index)=>{
        const row = table.insertRow(index);
        const fieldCell = row.insertCell(0);
        const valueCell = row.insertCell(1);
        fieldCell.textContent = field;
        valueCell.textContent = value;

    })
    document.body.appendChild(table);
}