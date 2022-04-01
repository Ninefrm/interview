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
function profileCard(profileData) {
    var result = "";
    if (profileDataNew?.name != "" && profileDataNew?.carrer != "" && profileDataNew?.description != "" && profileDataNew?.email_user != "" && profileDataNew?.phone_user != "" && profileDataNew?.username != "") {
    
    }
    return false;
}
module.exports = profileCard;