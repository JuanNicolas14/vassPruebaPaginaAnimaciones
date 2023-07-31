import React, { useEffect } from 'react';
import './youtube.scss'

const YoutubeBackground = ({ videoId }) => {
  useEffect(() => {
    // Cargar la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Inicializar el reproductor cuando la API esté lista
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          playlist: videoId,
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autohide: 0,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
          },
        },
      });
    };
  }, [videoId]);

  return (
    <div className="youtube-background">
      <div id="youtube-player" />
      {/* Aquí puedes agregar contenido adicional en capas superiores */}
    </div>
  );
};

export default YoutubeBackground;