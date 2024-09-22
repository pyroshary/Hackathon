// Get references
let form = document.getElementById('resume-form') as HTMLFormElement;
let resumedispalyElement = document.getElementById('resume-display') as HTMLDivElement;

// Form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collecting inputs
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let number = (document.getElementById('phone') as HTMLInputElement).value; 
    let education = (document.getElementById('education') as HTMLTextAreaElement).value;
    let experience = (document.getElementById('experience') as HTMLTextAreaElement).value; 
    let skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generating resume
    let resumeHtml = `<h2> Resume </h2>
    <h3> <b> Personal information </b> </h3>
    <p> <b> Name: </b> ${name} </p> 
    <p> <b> Email: </b> ${email} </p> 
    <p> <b> Phone number: </b> ${number} </p> 

    <h3> Education </h3>
    <p> ${education} </p>

    <h3> Experience </h3>
    <p> ${experience} </p>

    <h3> Skills </h3>
    <p> ${skills} </p>`;

    if (resumedispalyElement) {
        resumedispalyElement.innerHTML = resumeHtml;

    } else {
        console.error('Something is missing');
    }
});
