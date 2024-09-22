// Get references
var form = document.getElementById('resume-form');
var resumedispalyElement = document.getElementById('resume-display');
// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value; // Corrected here
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value; // Corrected here
    var skills = document.getElementById('skills').value;
    // Generating resume
    var resumeHtml = "<h2> Resume </h2>\n    <h3> <b> Personal information </b> </h3>\n    <p> <b> Name: </b> ".concat(name, " </p> \n    <p> <b> Email: </b> ").concat(email, " </p> \n    <p> <b> Phone number: </b> ").concat(number, " </p> \n\n    <h3> Education </h3>\n    <p> ").concat(education, " </p>\n\n    <h3> Experience </h3>\n    <p> ").concat(experience, " </p>\n\n    <h3> Skills </h3>\n    <p> ").concat(skills, " </p>");
    if (resumedispalyElement) {
        resumedispalyElement.innerHTML = resumeHtml;
    }
    else {
        console.error('Something is missing');
    }
});
