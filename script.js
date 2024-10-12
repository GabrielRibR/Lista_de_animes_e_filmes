function changeVideo(videoUrl, videoId, title) {
    // Remove qualquer parâmetro extra do URL
    let cleanUrl = videoUrl.split('?')[0];

    // Muda o iframe para o novo vídeo
    document.getElementById("main-video").src = cleanUrl.replace("watch?v=", "embed/");
    document.getElementById("video-title").innerText = title;
    document.getElementById("video-tag").innerText = "#" + videoId;

    // Mover o vídeo anterior para a lista
    const previousVideo = document.querySelector('.categoria-videos a[data-active="true"]');
    if (previousVideo) {
        previousVideo.removeAttribute('data-active'); // Remove o atributo do vídeo anterior
        const previousVideoClone = previousVideo.cloneNode(true);
        previousVideoClone.removeAttribute('style'); // Remove qualquer estilo inline
        previousVideo.parentNode.removeChild(previousVideo); // Remove o vídeo anterior
        document.querySelector('.categoria-videos').appendChild(previousVideoClone); // Adiciona o vídeo anterior ao final da lista
    }

    // Marcar o novo vídeo como ativo
    const newActiveVideo = document.querySelector(`.categoria-videos a[href="${videoUrl}"]`);
    newActiveVideo.setAttribute('data-active', 'true'); // Marca o novo vídeo como ativo
    newActiveVideo.style.border = "3px solid red"; // Destaque o novo vídeo ativo
}
