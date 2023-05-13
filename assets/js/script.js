let buton = document.getElementById("send");

let mensaje = (event) => {
    event.preventDefault();
    let name = document.getElementById("form_name").value;
    let lastName = document.getElementById("form_lastname").value;
    let email = document.getElementById("form_email").value;
    let motive = document.getElementById("form_need").value;
    let message = document.getElementById("form_message").value;

    alert(`DE: ${name} ${lastName} (${email})
    - ASUNTO: ${motive}
    - MENSAJE:
    ${message}`)
};

buton.addEventListener("click", mensaje)