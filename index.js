
let entryInformation = document.querySelector('#entry-info');

entryInformation.addEventListener('submit', event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target);

    let firstName = ourFormData.get('user_name');

    let emailAddress = ourFormData.get('user_email');

    let message = ourFormData.get('user_message');

    let updatedHtmlContent = `
        <h2>Thank you, ${firstName}</h2>
        <p>I will reply to your message as soon as possible to this email: ${emailAddress}</p>
        <p>your information will never be shared</p>`

        let ourMainContent = document.querySelector('#contact-info')
        ourMainContent.innerHTML = updatedHtmlContent
})