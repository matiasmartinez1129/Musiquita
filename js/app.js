const audio1 = document.getElementById('audio1');
      const audio2 = document.getElementById('audio2');
      const audio3 = document.getElementById('audio3');
      const audio4 = document.getElementById('audio4');
      const audio5 = document.getElementById('audio5');
      const audio6 = document.getElementById('audio6');
      const audio7 = document.getElementById('audio7');
      const audio8 = document.getElementById('audio8');
      const audio9 = document.getElementById('audio9');
      const audio10 = document.getElementById('audio10');

      // EL KUELGUE
      audio1.addEventListener('ended', () => {
          audio2.play();
      });

      audio2.addEventListener('ended', () => {
          audio3.play();
      });

      audio3.addEventListener('ended', () => {
          audio4.play();
      });
      audio4.addEventListener('ended', () => {
        audio5.play();
    });
    audio5.addEventListener('ended', () => {
        audio6.play();
    });
    audio6.addEventListener('ended', () => {
        audio7.play();
    });
    audio7.addEventListener('ended', () => {
        audio8.play();
    });
    audio8.addEventListener('ended', () => {
        audio9.play();
    });
    audio9.addEventListener('ended', () => {
        audio10.play();
    });
    audio10.addEventListener('ended', () => {
        audio1.play(); 
    });
 