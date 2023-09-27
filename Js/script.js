//! Get Id's
let back = document.getElementById("back");
let next = document.getElementById("next");
let playPause_btn = document.getElementById("playPause");
let musicTitle = document.getElementById("musicTitle");
let singerName = document.getElementById("singerName");
let audio_image = document.getElementById("audioImage");
let music_Slider = document.getElementById("musicSlider");
let mute_unmute = document.getElementById("mute_Unmute");
let currTime = document.getElementById("currTime");
let totalDuration = document.getElementById("totalDuration");
let vol_slider = document.getElementById("volume_slider");
let singer_name = document.getElementById("singerName");
let toggle_theme = document.getElementById("toggle-theme");
let theme_style_btn = document.getElementById("theme-style");
let all_music = document.getElementById("allMusic");
let repeatMusic = document.getElementById("repeatMusic");

//! Global Variable
let playPushOnOff = false;
let playList_index = 0;
let updateMusic;
let createAudio = document.createElement("audio");

const loadPlayList = () => {
  let randomIndex = Math.floor(Math.random() * playList.length);
  createAudio.src = playList[randomIndex].path;
  musicTitle.textContent = playList[randomIndex].name;
  singerName.textContent = playList[randomIndex].singer;
  audio_image.src = playList[randomIndex].audioImg;

  createAudio.load();

  updateMusic = setInterval(musicSliderUpdate, 1000);

  createAudio.addEventListener("ended", nextMusic);
};

function playPush() {
  !playPushOnOff ? musicOn() : musicOff();
}

function musicOn() {
  playPushOnOff = true;
  createAudio.play();
  playPause_btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function musicOff() {
  playPushOnOff = false;
  createAudio.pause();
  playPause_btn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function nextMusic() {
  if (playList_index < playList.length - 1) {
    playList_index += 1;
  } else {
    playList_index = 0;
  }

  loadPlayList(playList_index);
  musicOn();
}

function backMusic() {
  if (playList_index > 0) {
    playList_index -= 1;
  } else {
    playList_index = playList.length - 1;
  }

  loadPlayList(playList_index);
  musicOn();
}

function musicSlider() {
  let seekTo = createAudio.duration * (music_Slider.value / 100);
  createAudio.currentTime = seekTo;
}

function muteUnmute() {
  if (createAudio.muted === true) {
    createAudio.muted = false;
    mute_unmute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    createAudio.muted = true;
    mute_unmute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
}

function unmute() {
  createAudio.volume = createAudio.value / 100;
}

function mute() {
  // createAudio.muted = createAudio.value / 0;
  createAudio.volume = 0;
}

function musicSliderUpdate() {
  let sliderPosition = 0;

  if (!isNaN(createAudio.duration)) {
    sliderPosition = createAudio.currentTime * (100 / createAudio.duration);
    music_Slider.value = sliderPosition;

    let music_minutes = Math.floor(createAudio.currentTime / 60);
    let music_sec = Math.floor(createAudio.currentTime - music_minutes * 60);

    let total_minutes = Math.floor(createAudio.duration / 60);
    let total_seconds = Math.floor(createAudio.duration - total_minutes * 60);

    currTime.textContent = music_minutes + ":" + music_sec;
    totalDuration.textContent = total_minutes + ":" + total_seconds;
  }
}

function volumeSlider() {
  createAudio.volume = vol_slider.value / 100;
}

loadPlayList(playList_index);

// Ai generated Code

function shuffleMusic() {
  playList_index = Math.floor(Math.random() * playList.length);
  loadPlayList(playList_index);
  musicOn();
}

function repeatMusicBtn() {
  if (createAudio.loop === false) {
    createAudio.loop = true;
    repeatMusic.innerHTML = '<i class="fa-solid fa-repeat"></i>';
  } else {
    createAudio.loop = false;
    repeatMusic.innerHTML = '<i class="fa-solid fa-random"></i>';
  }
}

function fastForwardMusic() {
  createAudio.currentTime += 10;
}

function slowDownMusic() {
  createAudio.currentTime -= 10;
}

//! Render all music
(function () {
  const musicList = playList.map((e, index) => {
    return `
      <section class="renderMusicDetail flex items-center justify-between rounded-full p-2 my-3" id="musicLoop">
        <div class="flex justify-between items-center w-1/2">
          <div>
            <img src="${e.audioImg}" class="w-[40px] rounded-full" />
          </div>

          <div class="text-center w-fit m-auto">
            <p class="font-bold">${e.name}</p>
            <p>${e.singer}</p>            
          </div>
        </div>

        <div class="flex mr-4">      
          <div class="musicDuration mr-5">
            00:00
          </div>
          <button class="play-button" data-id="${index}" data-music-id="${e.path}">
            <i id="renderIcon" class="fa-solid fa-play"></i>
          </button>
        </div>
      </section>
    `;
  });

  let musicListRender = musicList.join("");
  all_music.innerHTML = musicListRender;

  const playButtons = document.querySelectorAll(".play-button");

  playButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let icon = button.children[0];
      let musicId = event.currentTarget.getAttribute("data-music-id");
      let musicToPlay = playList.find((e) => e.id === parseInt(musicId));

      if (!musicToPlay) {
        if (!createAudio.paused) {
          createAudio.musicOff;
          createAudio.src = musicId;
          musicOff();
          icon.className = "fa-solid fa-play";
        } else {
          createAudio.musicOn;
          createAudio.src = musicId;
          musicOn();
          icon.className = "fa-solid fa-pause";
        }
      }
    });
  });
})();

//! Theme Change
{
  function toggleTheme() {
    if (toggle_theme.getAttribute("href") === "./style/darkTheme.css") {
      toggle_theme.setAttribute("href", "./style/lightTheme.css");
      localStorage.setItem("theme", "dark");
      theme_style_btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      // console.log("dark");
    } else {
      toggle_theme.setAttribute("href", "./style/darkTheme.css");
      localStorage.setItem("theme", "light");
      theme_style_btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      // console.log("light");
    }
  }

  const storeTheme = localStorage.getItem("theme");
  if (storeTheme === "dark") {
    toggle_theme.setAttribute("href", "./style/lightTheme.css");
    theme_style_btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    toggle_theme.setAttribute("href", "./style/darkTheme.css");
    theme_style_btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  theme_style_btn.addEventListener("click", toggleTheme);
}
