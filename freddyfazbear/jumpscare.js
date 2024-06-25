document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.querySelector('.scary_video'); // Seleciona o elemento de vídeo pela classe
    const jumpscareImage = document.createElement('img');
    const jumpscareAudio = document.createElement('audio');
    
    // Configuração da imagem de jumpscare
    jumpscareImage.src = 'image/jumpscare2.png'; // Caminho para a imagem de jumpscare
    jumpscareImage.style.position = 'fixed';
    jumpscareImage.style.top = '0';
    jumpscareImage.style.left = '0';
    jumpscareImage.style.width = '100%';
    jumpscareImage.style.height = '100%';
    jumpscareImage.style.zIndex = '1000';
    jumpscareImage.style.display = 'none';

    // Configuração do áudio de jumpscare
    jumpscareAudio.src = 'sound/_sound.mp3'; // Caminho para o áudio de jumpscare
    jumpscareAudio.autoplay = false;
    jumpscareAudio.preload = 'auto';

    document.body.appendChild(jumpscareImage);
    document.body.appendChild(jumpscareAudio);

    // Adiciona o evento de término do vídeo
    videoElement.addEventListener('ended', function () {
        // Pausa o vídeo para evitar reprodução acidental
        videoElement.pause();

        // Reproduz o áudio de jumpscare
        jumpscareAudio.play();

        // Exibe a imagem de jumpscare
        jumpscareImage.style.display = 'block';
        setTimeout(function () {
            jumpscareImage.style.display = 'none';
        }, 2000); // Mostra a imagem por 2 segundos

        // Reinicia o vídeo para que possa ser reproduzido novamente se necessário
        videoElement.currentTime = 0;
    });
});

