// Get references
let form = document.getElementById('resume-form') as HTMLFormElement;
let resumedispalyElement = document.getElementById('resume-display') as HTMLDivElement;
let shareableLinkContainer = document.getElementById('shareable-link-div') as HTMLDivElement;
let shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
let buttonToDownload = document.getElementById('download-pdf') as HTMLButtonElement;

// Form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collecting inputs
    let username = (document.getElementById('username') as HTMLInputElement).value;
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let number = (document.getElementById('phone') as HTMLInputElement).value; 
    let education = (document.getElementById('education') as HTMLTextAreaElement).value;
    let experience = (document.getElementById('experience') as HTMLTextAreaElement).value; 
    let skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    //saving data 

    let resumeData =  {
        name,
        email,
        number,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)) //saving the date

    // Generating resume
    let resumeHtml = `<h2>Editable Resume </h2>
    <h3> <b> Personal information </b> </h3>
    <p> <b> Name:<span contenteditable="true"> </b> ${name}</span> </p> 
    <p> <b> Email:<span contenteditable="true"> </b> ${email}</span> </p> 
    <p> <b> Phone number:<span contenteditable="true"> </b> ${number}</span></p> 

    <h3> Education </h3>
    <p contenteditable="true" > ${education} </p>

    <h3> Experience </h3>
    <p contenteditable="true" > ${experience} </p>

    <h3> Skills </h3>
    <p contenteditable="true" > ${skills} </p>`;

    //generating user name display 
    resumedispalyElement.innerHTML=resumeHtml;

    //generating sharable URL
    let shareableURL =`${window.location.origin}?username =${encodeURIComponent(username)}`

    //display shareble link

    shareableLinkContainer.style.display ='block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

    //handle PDF
    buttonToDownload.addEventListener('click' ,()=>{
        window.print();

    })

    //prefilled the form 
    window.addEventListener('DOMContentLoaded',() =>{
        let urlParams  = new URLSearchParams (window.location.search);
        const username = urlParams.get('username')

    })

    if(username)  {
        let savedResumedata = localStorage.getItem(username)
        if (savedResumedata) {
            let resumeData =JSON.parse(savedResumedata);
            (document.getElementById('username') as HTMLInputElement ).value= username;
            (document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});
        
    
