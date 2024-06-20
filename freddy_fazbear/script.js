document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.querySelector('video');
    const jumpscareImage = document.createElement('img');
    const jumpscareAudio = document.getElementById('jumpscareAudio');

    jumpscareImage.src = '/image/jumpscare.jpg';
    jumpscareImage.style.position = 'fixed';
    jumpscareImage.style.top = '0';
    jumpscareImage.style.left = '0';
    jumpscareImage.style.width = '100%';
    jumpscareImage.style.height = '100%';
    jumpscareImage.style.zIndex = '1000';
    jumpscareImage.style.display = 'none';

    document.body.appendChild(jumpscareImage);

    videoElement.addEventListener('ended', function () {
        // Reproduz o som de jumpscare
        jumpscareAudio.play();

        jumpscareImage.style.display = 'block';
        setTimeout(function () {
            jumpscareImage.style.display = 'none';
        }, 2000); // Mostra a imagem por 2 segundos
    });
});

