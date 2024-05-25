var audio = new Audio();

function detenerAudio() {
  if (audio) {
    audio.currentTime = 0;
    audio.pause();
    audio = new Audio; // Limpia la variable de audio
  }
}

function opcion1() {
  document.getElementById("story").innerHTML = "<p>El mono encuentra un hermoso río. ¡Qué lugar tranquilo! Pero de repente, un cocodrilo emerge del agua y el mono tiene que correr para salvarse.</p>";
  document.getElementById("options").innerHTML = "<button onclick='final1()'>Escapar del cocodrilo</button><button onclick='final2()'>Enfrentar al cocodrilo</button><button onclick='final3()'>Esconderse en la selva</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://i.gifer.com/2m8z.gif')";
}

function opcion2() {
  document.getElementById("story").innerHTML = "<p>El mono se sube a los árboles en busca de frutas. Encuentra un montón de bananas, pero cuando está a punto de agarrar una, una serpiente aparece y lo sorprende.</p>";
  document.getElementById("options").innerHTML = "<button onclick='final4()'>Saltar lejos de la serpiente</button><button onclick='final5()'>Golpear a la serpiente con una rama</button><button onclick='final6()'>Hacerse el muerto</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://clipart-library.com/images/pTqKnRpgc.gif')";
}

function opcion3() {
  document.getElementById("story").innerHTML = "<p>El mono entra en una cueva oscura. Adentro, encuentra un antiguo cofre lleno de tesoros. Pero cuando trata de tomar algo, el cofre se cierra y una trampa lo atrapa dentro.</p>";
  document.getElementById("options").innerHTML = "<button onclick='final7()'>Buscar una salida</button><button onclick='final8()'>Esperar a que alguien lo rescate</button><button onclick='final9()'>Buscar una solución dentro del cofre</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://64.media.tumblr.com/tumblr_ls23k5pUNq1qm6oc3o1_500.gifv')";
}

function final1() {
  audio.src = 'Y2meta.app - Men At Work - Who Can It Be Now_ (Video Version) (128 kbps).mp3';
audio.currentTime = 2; // Iniciar en el segundo 2
  audio.addEventListener('canplaythrough', function() {
    
    audio.play();
  });

  document.getElementById("story").innerHTML = "<p>El mono corre velozmente y logra escapar del cocodrilo. Continúa su aventura ileso.</p><p>¡Felicidades! ¡Has completado la aventura con éxito!</p>";
  document.getElementById("options").innerHTML = "<button onclick='detenerAudio(); reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://media.tenor.com/mrV-kSEzQVcAAAAj/her-parther-monkey-name-mack-dance.gif')";
}

function final2() {
  document.getElementById("story").innerHTML = "<p>El mono intenta enfrentar al cocodrilo, pero el cocodrilo es demasiado fuerte y lo arrastra hacia el agua.</p><p>El mono lamentablemente no logra sobrevivir.</p><p>¡Fin del juego!</p>";
  document.getElementById("options").innerHTML = "<button onclick='reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://67.media.tumblr.com/08ac97386f9b26e6efa4af47de983dcd/tumblr_n6ijxnAypB1s0lpkco1_500.gif')";
}

function final3() {
  document.getElementById("story").innerHTML = "<p>El mono se esconde en la jungla y espera hasta que el cocodrilo se aleje. Después de un tiempo, continúa su aventura en la jungla.</p><p>¡Felicidades! ¡Has completado la aventura con éxito!</p>";
  document.getElementById("options").innerHTML = "<button onclick='reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://media0.giphy.com/media/4Tkdz39XtGaLACQAVA/giphy.gif?cid=6c09b9528k1bak1srbyk901912h0f42kh8l8y5r6kgsgihhi&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
}

function final4() {
  document.getElementById("story").innerHTML = "<p>El mono salta lejos de la serpiente y logra escapar. Continúa su aventura ileso.</p><p>¡Felicidades! ¡Has completado la aventura con éxito!</p>";
  document.getElementById("options").innerHTML = "<button onclick='reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://i.pinimg.com/originals/10/bc/e6/10bce661c453a93ca62753465ae9fd24.gif')";
}

function final5() {
  document.getElementById("story").innerHTML = "<p>El mono golpea a la serpiente con una rama y logra asustarla lo suficiente como para que huya. Continúa su aventura ileso.</p><p>¡Felicidades! ¡Has completado la aventura con éxito!</p>";
  document.getElementById("options").innerHTML = "<button onclick='reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://i.pinimg.com/originals/a2/97/65/a2976591ef2f81998d4524f938664a92.gif')";
}

function final6() {
  document.getElementById("story").innerHTML = "<p>El mono se hace el muerto y la serpiente, confundida, se aleja. Después de un rato, el mono se levanta y continúa su aventura.</p><p>¡Felicidades! ¡Has completado la aventura con éxito!</p>";
  document.getElementById("options").innerHTML = "<button onclick='reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://media0.giphy.com/media/Hd4wz4bFRklk5D62tc/giphy.gif?cid=6c09b952f73qwh5krrsrywks09116eaek6jdjaa9kpoop5hg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s')";
}


function final7() {
  audio.src = 'ABBA – Dancing Queen.mp3';

  audio.addEventListener('canplaythrough', function() {

    audio.play();
  });

  document.getElementById("story").innerHTML = "<p>El mono busca una salida de la cueva y finalmente logra encontrar una. Continúa su aventura ileso.</p><p>¡Felicidades! ¡Has completado la aventura con éxito!</p>";

  document.getElementById("options").innerHTML = "<button onclick='detenerAudio(); reiniciar()'>Volver a jugar</button>";

  document.getElementById("game-screen").style.backgroundImage = "url('https://www.english-study-cafe.ru/upload/monkey/data/images/img13.gif')";
}

function final8() {
  document.getElementById("story").innerHTML = "<p>El mono espera a que alguien lo rescate, pero nadie viene. El mono lamentablemente no logra sobrevivir.</p><p>¡Fin del juego!</p>";
  document.getElementById("options").innerHTML = "<button onclick='reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://media0.giphy.com/media/LVCf50LjnGH0XB2BlZ/giphy.gif?cid=6c09b952o8kpp6mcpjmyjfg924lo5dq57hgms7dgyf2819d8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s')";
}

function final9() {
  document.getElementById("story").innerHTML = "<p>El mono busca una solución dentro del cofre y encuentra una palanca para abrir la trampa. Logra escapar y continúa su aventura ileso.</p><p>¡Felicidades! ¡Has completado la aventura con éxito!</p>";
  document.getElementById("options").innerHTML = "<button onclick='reiniciar()'>Volver a jugar</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://s.yimg.com/cd/diminuendo/1.0/original/7b8095d680b4b3454380debbc02daa638172830c.gif')";
}



function reiniciar() {
  document.getElementById("story").innerHTML = "<p>Bienvenido a la aventura del mono en la jungla.</p>";
  document.getElementById("options").innerHTML = "<button onclick='opcion1()'>Explorar el río</button><button onclick='opcion2()'>Buscar frutas en los árboles</button><button onclick='opcion3()'>Investigar una cueva</button>";
  document.getElementById("game-screen").style.backgroundImage = "url('https://i.pinimg.com/originals/46/ab/19/46ab19bc3ccd28277f14e7c5c17d0652.gif')";
}
