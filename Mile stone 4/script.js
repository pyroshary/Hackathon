// Get references
var form = document.getElementById('resume-form');
var resumedispalyElement = document.getElementById('resume-display');
// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generating resume
    var resumeHtml = "<h2>Editable Resume </h2>\n    <h3> <b> Personal information </b> </h3>\n    <p> <b> Name:<span contenteditable=\"true\"> </b> ".concat(name, "</span> </p> \n    <p> <b> Email:<span contenteditable=\"true\"> </b> ").concat(email, "</span> </p> \n    <p> <b> Phone number:<span contenteditable=\"true\"> </b> ").concat(number, "</span></p> \n\n    <h3> Education </h3>\n    <p contenteditable=\"true\" > ").concat(education, " </p>\n\n    <h3> Experience </h3>\n    <p contenteditable=\"true\" > ").concat(experience, " </p>\n\n    <h3> Skills </h3>\n    <p contenteditable=\"true\" > ").concat(skills, " </p>");
    if (resumedispalyElement) {
        resumedispalyElement.innerHTML = resumeHtml;
    }
    else {
        console.error('Something is missing');
    }
});
