document.getElementById('welcomeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const welcomeMessage = `Hi, ${firstName} ${lastName}, Welcome to this page. Hope you are doing good.`;
    document.getElementById('welcomeMessage').textContent = welcomeMessage;
});

function updateBannerAndTime() {
    const now = new Date();
    const hours = now.getHours();
    const banner = document.querySelector('.banner');
    const localTime = document.getElementById('localTime');
    localTime.textContent = now.toLocaleString();

    if (hours < 16) {
        banner.classList.add('day');
        banner.classList.remove('night');
    } else {
        banner.classList.add('night');
        banner.classList.remove('day');
    }
}

updateBannerAndTime();
setInterval(updateBannerAndTime, 60000);