
class EmailService {

    constructor() {}

    async sendEmailRequest(event) {
        try 
        {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const responseMessage = 'Thanks you i will back to you soon.';

            if(!name || !email || !message) return alert('You Need To Fill All The Fields.')

            const method = "POST";
            const headers = { "Accept":"Application/json", "Content-Type": "Application/json"};

            const body = JSON.stringify({ name, email, message });

            const response = await fetch('/email/sendEmail', { method, headers, body });
            const response_json = await response.json();
            console.log(response)

            const { code } = response_json;

            if(code === 200) return alert(responseMessage);
        } 
        catch (err) 
        {
            console.error(err);
            throw new Error(err.message);
        }
    }
}


window.EmailService = EmailService;