const nameField = document.querySelector("#firstname");
const skillField = document.querySelector("#skills");
let skillInput = document.querySelector("#add");

function getandsetname(){
let namelocalstorage = localStorage.getItem("name");
if (namelocalstorage) {
    nameField.innerText = namelocalstorage;
    }else {
        let nameinput = prompt("Wie heisst du?");
        nameField.innerText = nameinput;
        localStorage.setItem("name", nameinput);
    }
}
function getSkills(){
    skillInput.addEventListener("change", function() {
        skills.push(skillInput.value);
        skillInput.value = ""; // Clear the input field after adding the skill
}
}


/*function getAndSetSkillInput(){
    let skills = [];
  skillInput.addEventListener("change", function() {
    skills.push(skillInput.value);
    console.log(skills);
    skillField.innerText = skills;
    skillInput.value = ""; // Clear the input field after adding the skill
    });
  
}*/
getandsetname();
getAndSetSkillInput();


