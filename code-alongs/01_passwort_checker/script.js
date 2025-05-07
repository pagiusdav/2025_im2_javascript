console.log('hi script.js')
let password = prompt('Bitte gib dein Passwort ein: ');
let username = prompt('Bitte gib dein Passwort ein: ');
checkStringLength(password, 12);
checkStringLength(username, 7);
function checkPassword(pw) {
if (pw.length >= 12) {
    console.log('Das Passwort ist lang genug!');
} else {
    console.log('Bitte verwende ein längeres Passwort!');
}
}

function checkStringLength(testString, testlength) {
    if (testString.length >= testlength) {
        console.log('Der Text ist lang genug!');
    } else {
        console.log('Bitte verwende einen längeren Text!');
    }
}