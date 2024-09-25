// Get references
var form = document.getElementById('resume-form');
var resumedispalyElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-div');
var shareableLinkElement = document.getElementById('shareable-link');
var buttonToDownload = document.getElementById('download-pdf');
// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting inputs
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //saving data 
    var resumeData = {
        name: name,
        email: email,
        number: number,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //saving the date
    // Generating resume
    var resumeHtml = "<h2>Editable Resume </h2>\n    <h3> <b> Personal information </b> </h3>\n    <p> <b> Name:<span contenteditable=\"true\"> </b> ".concat(name, "</span> </p> \n    <p> <b> Email:<span contenteditable=\"true\"> </b> ").concat(email, "</span> </p> \n    <p> <b> Phone number:<span contenteditable=\"true\"> </b> ").concat(number, "</span></p> \n\n    <h3> Education </h3>\n    <p contenteditable=\"true\" > ").concat(education, " </p>\n\n    <h3> Experience </h3>\n    <p contenteditable=\"true\" > ").concat(experience, " </p>\n\n    <h3> Skills </h3>\n    <p contenteditable=\"true\" > ").concat(skills, " </p>");
    //generating user name display 
    resumedispalyElement.innerHTML = resumeHtml;
    //generating sharable URL
    var shareableURL = "".concat(window.location.origin, "?username =").concat(encodeURIComponent(username));
    //display shareble link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
    //handle PDF
    buttonToDownload.addEventListener('click', function () {
        window.print();
    });
    //prefilled the form 
    window.addEventListener('DOMContentLoaded', function () {
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');
    });
    if (username) {
        var savedResumedata = localStorage.getItem(username);
        if (savedResumedata) {
            var resumeData_1 = JSON.parse(savedResumedata);
            document.getElementById('username').value = username;
            document.getElementById('name').value =
                resumeData_1.name;
            document.getElementById('email').value =
                resumeData_1.email;
            document.getElementById('phone').value =
                resumeData_1.phone;
            document.getElementById('education').value =
                resumeData_1.education;
            document.getElementById('experience').value
                = resumeData_1.experience;
            document.getElementById('skills').value =
                resumeData_1.skills;
        }
    }
});
