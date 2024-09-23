// to generate hide/show button for skills
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
// Get reference to the form and display area
var form = document.getElementById('resumeform');
var resumeDisplayElement = document.getElementById('resumeOutput');
// handle for submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // prevent page reload
    // collect input values
    var profilePictureInput = document.getElementById('profilePicture');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Picture element
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Generate the resume content dynamically
    var resumeOutput = "\n<h2><b>Resume</b></h2>\n".concat(profilePictureURl ? "<img src=".concat(profilePictureURl, " alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n<h3><b>Personal Information</b></h3>\n<p><b>Name:</b> <span id=\"edit-name\" class=\"editable\">").concat(name, "</span></p>\n<p><b>Email:</b><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n<p><b>Phone:</b><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n<p><b>Address:</b><span id=\"edit-address\" class=\"editable\">").concat(address, "</span></p>\n\n<h3>Education</h3>\n<p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n\n<h3>Skills</h3>\n<p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeOutput;
        makeEditable();
    }
    else {
        console.error('The resume display element is missing.');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
