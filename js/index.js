
document.getElementById('button').onclick = function () {
    profileData.name = "Juan Perez"
    console.log(profileData)
};

var profileData = {
    name: "Fonseca Romero Samuel Maximiliano",
    carrer: "COMPUTER SCIENCE ENGINNER",
    profile_description: "One of my greatest passions is making task easier for others, it`s amazing to think that any task can become automated. My interests are software development (software, web applications), data science and project management.",
    picture: "./images/profile.jpg",
    email_user: "maxfonseca.r@gmail.com",
    phone_user: "4625952031",
    username: "Ninefrm",
};

const cardTemplate = `<div class="row bottom-border">` +
    `<div class="column left">` +
    `<div class="circle-div">` +
    `<img class="profile-picture" src="${profileData.picture}" alt="Profile picture">` +
    `</div>` +
    `</div>` +
    `<div class="column right">` +
    `<div class="profile-name">` +
    `<span>${profileData.name}</span>` +
    `<div class="profile-name-carrer">` +
    `<span>${profileData.carrer}</span>` +
    `</div>` +
    `</div>` +
    `</div>` +
    `</div>` +
    `<div class="row">` +

    `<div class="two-col">` +
    `<p class="low-title">PROFILE</p>` +
    `<p class="justify-text">${profileData.profile_description}</p>` +
    `</div>` +
    `<div class="two-col">` +
    `<p class="low-title center-text">CONTACT</p>` +
    `<div class="row">` +
    `<div class="three-col">` +
    `<div class="center-text">` +
    `<i class="middle-icon material-icons">email</i>` +
    `<p class="middle-icon-text">` +
    `<a href="mailto:${profileData.email_user}?subject=Card contact">${profileData.email_user}</a></p>` +
    `</div>` +
    `</div>` +
    `<div class="three-col">` +
    `<div class="center-text">` +
    `<i class="middle-icon material-icons">local_phone</i>` +
    `<p class="middle-icon-text"><a href="https://wa.me/${profileData.phone_user}">${profileData.phone_user}</a></p>` +
    `</div>` +
    `</div>` +
    `<div class="three-col">` +
    `<div class="center-text">` +
    `<a href="https://www.linkedin.com/in/${profileData.username}">` +
    `<svg viewBox="0 0 512 512" height="6.8vw">` +
    `<path fill="" d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683 C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615 c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915 s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z" />` +
    `</svg>` +
    `<p class="middle-icon-text">${profileData.username}</p>` +
    `</a>` +
    `</div>` +
    `</div>` +
    `</div>` +
    `</div>` +
    `</div>`;
class profileCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = cardTemplate;
    }
}

customElements.define('profile-card', profileCard);

