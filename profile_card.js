const cardStyle = `
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<style>
body {
    font-family: 'Roboto', sans-serif;
    font-size: 1vw;
}

.column {
    float: left;
}

.left {
    width: 27%;
}

.right {
    width: 73%;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

.two-col {
    float: left;
    width: 49%;
    height: 50vh;
    padding-left: 1vh;
}

.three-col {
    float: left;
    width: 31.3%;
    height: 30vh;
    padding-left: 1vh;
}

.justify-text {
    text-align: justify;
}

.center-text {
    text-align: center;
}

.bottom-border {
    padding: 3vh;
    border-bottom: 5px solid;
}

.inline-icon {
    vertical-align: bottom;
    font-size: 2vw !important;
}

.circle-div {
    position: relative;
    width: 90%;
    padding-bottom: 90%;
    border-radius: 50%;
    overflow: hidden;
}

.profile-name {
    padding: 3vh 0;
    text-align: left;
    font-size: 5vw;
    font-weight: bold;
}

.profile-name-carrer {
    text-align: left;
    font-size: 2vw;
    font-weight: lighter;
}

.low-title {
    font-size: 2vw;
    font-weight: bold;
}

.profile-picture {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.input-container {
    display: -ms-flexbox;
    /* IE10 */
    display: flex;
    width: 100%;
    margin-bottom: 5vh;
}

.icon {
    padding: 3vw;
    background: grey;
    color: white;
    min-width: 3vw;
    text-align: center;
}

.input-field {
    width: 100%;
    padding: 3vw;
    outline: none;
}

.no-resize {
    resize: none;
}

.middle-icon {
    vertical-align: bottom;
    font-size: 7vw !important;
}

.middle-icon-text {
    font-size: 1vw;
    font-weight: bold;
}

.border-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.button-field {
    width: 30%;
    outline: none;
    font-size: 3vh;
    background: #26a69a;
    color: white;
    border: 0;
}
.icon-new {
    padding: 2vw;
    background: #26a69a;
    color: rgb(255, 255, 255);
    min-width: 3vw;
    text-align: center;
}
</style>
`


function createCard(profileData) {
    var cardTemplate = `<html>` +
        cardStyle +
        `<div class="border-card">` +
        `<div class="row bottom-border">` +
        `<div class="column left">` +
        `<div class="circle-div">` +
        `<img class="profile-picture" id="profile-picture" src="${profileData.picture}" alt="Profile picture">` +
        `</div>` +
        `</div>` +
        `<div class="column right">` +
        `<div class="profile-name">` +
        `<span id="profile-name">${profileData.name}</span>` +
        `<div class="profile-carrer">` +
        `<span id="profile-carrer">${profileData.carrer}</span>` +
        `</div>` +
        `</div>` +
        `</div>` +
        `</div>` +
        `<div class="row">` +

        `<div class="two-col">` +
        `<p class="low-title">PROFILE</p>` +
        `<p class="justify-text" id="profile-description">${profileData.profile_description}</p>` +
        `</div>` +
        `<div class="two-col">` +
        `<p class="low-title center-text">CONTACT</p>` +
        `<div class="row">` +
        `<div class="three-col">` +
        `<div class="center-text">` +
        `<i class="middle-icon material-icons">email</i>` +
        `<p class="middle-icon-text">` +
        `<a target="_blank"href="mailto:${profileData.email_user}?subject=Card contact" id="profile-email">${profileData.email_user}</a></p>` +
        `</div>` +
        `</div>` +
        `<div class="three-col">` +
        `<div class="center-text">` +
        `<i class="middle-icon material-icons">local_phone</i>` +
        `<p class="middle-icon-text"><a target="_blank"href="https://wa.me/${profileData.phone_user}" id="profile-phone">${profileData.phone_user}</a></p>` +
        `</div>` +
        `</div>` +
        `<div class="three-col">` +
        `<div class="center-text">` +
        `<a target="_blank"id="profile-linkedin" href="https://www.linkedin.com/in/${profileData.username}">` +
        `<svg viewBox="0 0 512 512" height="6.8vw">` +
        `<path fill="" d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683 C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615 c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915 s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z" />` +
        `</svg>` +
        `<p class="middle-icon-text" id="profile-username_user">${profileData.username}</p>` +
        `</a>` +
        `</div>` +
        `</div>` +
        `</div>` +
        `</div>` +
        `</div>` +
        `</div>` +
        `</html>`;
    return cardTemplate;
}

function checkProfileData(profileData){
    if(profileData?.name == undefined || profileData?.carrer == undefined || profileData?.profile_description == undefined || profileData?.email_user == undefined || profileData?.phone_user == undefined || profileData?.username == undefined) return false
    if(profileData.name == "" || profileData.carrer == "" || profileData.profile_description == "" || profileData.email_user == "" || profileData.phone_user == "" || profileData.username == "") return false
    return true
}

function writeToFile(profileData){
    const fs = require('fs')
    fs.writeFile('./' + profileData.name + '_card.html', createCard(profileData), err => {
        if (err) {
            console.error(err)
            return false;
        }
        return true;
    })
    return true;
}
function profileCard(profileData) {
    var result = "";
    if (checkProfileData(profileData)) {
        return writeToFile(profileData)
    }
    return false;
}
module.exports = profileCard;