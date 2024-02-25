function handleVideo(containerId, buttonId) {
    const videoContainer = document.getElementById(containerId);
    const buttonContainer = document.getElementById(buttonId);
    const video = videoContainer.querySelector("video");

    buttonContainer.style.display = 'none';
    videoContainer.style.display = 'flex';

    video.play();
    video.controls = true;
}

const scrollToTop = (() => window.scrollTo({top: 0, behavior: "smooth"}));

const sendEmail = () => {
    const password = '64805AB4521364122E394734B5FBD16A812A';
    const host = 'smtp.elasticemail.com';
    const port = 2525;
    const myEmail = 'maorlinkedin@gmail.com'
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    Email.send({
        Host     : host,
        Username : myEmail,
        Password : password,
        To       : myEmail,
        From     : email,
        Subject  : 'New Job Email',
        Body :  "Name: " + name + "<br> Email: " + email + "<br> Message: " + message
    }).then(
      message => alert(message)
    );
}


// function handleVideoHover(containerId) {
//     const videoContainer = document.getElementById(containerId);
//     const video = videoContainer.querySelector("video");

//     videoContainer.addEventListener("mouseenter", () => {
//         video.play();
//         video.controls = true;
//     });

//     videoContainer.addEventListener("mouseleave", () => {
//         video.pause();
//         video.controls = false;
//         video.currentTime = 0;
//     });
// }

// handleVideoHover('video-container')
// handleVideoHover('video-container2')
// handleVideoHover('video-container3')
// handleVideoHover('video-container4')