 // to generate hide/show button for skills

 const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
 const skills = document.getElementById('skills') as HTMLElement
 
 
 toggleButton.addEventListener('click',()=>{
     if(skills.style.display === 'none'){
         skills.style.display ='block'
     } else {
         skills.style.display = 'none'
     }
 });




// Get reference to the form and display area
const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;


// handle for submission

form.addEventListener('submit',  (event:Event) =>{
    event.preventDefault();   // prevent page reload


// collect input values

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
const name = (document.getElementById('name') as HTMLInputElement).value
const email = (document.getElementById('email') as HTMLInputElement).value
const phone = (document.getElementById('phone') as HTMLInputElement).value
const address = (document.getElementById('address') as HTMLInputElement).value
const education = (document.getElementById('education') as HTMLTextAreaElement).value
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
const skills = (document.getElementById('skills') as HTMLTextAreaElement).value


// Picture element
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


// Generate the resume content dynamically
const resumeOutput = `
<h2><b>Resume</b></h2>
${profilePictureURl ? `<img src=${profilePictureURl} alt="Profile Picture" class="profilePicture">`:''}
<h3><b>Personal Information</b></h3>
<p><b>Name:</b> <span id="edit-name" class="editable">${name}</span></p>
<p><b>Email:</b><span id="edit-email" class="editable">${email}</span></p>
<p><b>Phone:</b><span id="edit-phone" class="editable">${phone}</span></p>
<p><b>Address:</b><span id="edit-address" class="editable">${address}</span></p>

<h3>Education</h3>
<p id="edit-education" class="editable">${education}</p>

<h3>Experience</h3>
<p id="edit-experience" class="editable">${experience}</p>


<h3>Skills</h3>
<p id="edit-skills" class="editable">${skills}</p>
`;

// Display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeOutput;
    makeEditable();
}else{
    console.error('The resume display element is missing.')
}

});
function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement;
            const currentvalue = currentElement.textContent || "";

// replace content

if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
     const input = document.createElement('input')
     input.type = 'text'
     input.value = currentvalue
     input.classList.add('editing input')

     input.addEventListener('blur', function(){
      currentElement.textContent = input.value;
      currentElement.style.display = 'inline'
      input.remove()
     })


     currentElement.style.display = 'none'
     currentElement.parentNode?.insertBefore(input, currentElement)
     input.focus()

}


    })
})
}

