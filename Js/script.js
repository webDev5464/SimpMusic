let back = document.getElementById("back");
let next = document.getElementById("next");
let playPause_btn = document.getElementById("playPause");
let musicTitle = document.getElementById("musicTitle");
let singerName = document.getElementById("singerName")
let audio_image = document.getElementById("audioImage")
let music_Slider = document.getElementById("musicSlider");
let mute_unmute = document.getElementById("mute_Unmute");
let currTime = document.getElementById("currTime");
let totalDuration = document.getElementById("totalDuration");
let vol_slider = document.getElementById("volume_slider");
let singer_name = document.getElementById("singerName");
let toggle_theme = document.getElementById("toggle-theme")
let theme_style_btn = document.getElementById("theme-style")
let all_music = document.getElementById("allMusic")

let playPushOnOff = false;
let playList_index = 0;
let updateMusic;

let createAudio = document.createElement("audio");

const loadPlayList = (playList_index) => {
  createAudio.src = playList[playList_index].path;
  musicTitle.textContent = playList[playList_index].name;
  singerName.textContent = playList[playList_index].singer;
  audio_image.src = playList[playList_index].audioImg


  createAudio.load();

  updateMusic = setInterval(musicSliderUpdate, 1000);

  createAudio.addEventListener('ended', nextMusic)
};

const playPush = () => {
  !playPushOnOff ? musicOn() : musicOff();
};

const musicOn = () => {
  playPushOnOff = true;
  createAudio.play();
  playPause_btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
};

const musicOff = () => {
  playPushOnOff = false;
  createAudio.pause();
  playPause_btn.innerHTML = '<i class="fa-solid fa-play"></i>';
};

const nextMusic = () => {
  if (playList_index < playList.length - 1) {
    playList_index += 1;
  } else {
    playList_index = 0;
  }

  loadPlayList(playList_index);
  musicOn();
};

const backMusic = () => {
  if (playList_index > 0) {
    playList_index -= 1;
  } else {
    playList_index = playList.length - 1;
  }

  loadPlayList(playList_index);
  musicOn();
};

const musicSlider = () => {
  let seekto = createAudio.duration * (music_Slider.value / 100);
  createAudio.currentTime = seekto;
};

const muteUnmute = () => {
  if (createAudio.muted === true) {
    createAudio.muted = false;
    mute_unmute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    createAudio.muted = true;
    mute_unmute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
};

const unmute = () => {
  createAudio.volume = createAudio.value / 100;
};

const mute = () => {
  createAudio.muted = createAudio.value / 0;
};

const musicSliderUpdate = () => {
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
};

const volumeSlider = () => {
  createAudio.volume = vol_slider.value / 100;
};

loadPlayList(playList_index);

// Ai generated Code

const shuffleMusic = () => {
  playList_index = Math.floor(Math.random() * playList.length);
  loadPlayList(playList_index);
  musicOn();
};

const repeatMusic = () => {
  loadPlayList(playList_index);
  musicOn();
};

const fastForwardMusic = () => {
  createAudio.currentTime += 10;
};

const slowDownMusic = () => {
  createAudio.currentTime -= 10
};

// Theme Change

const toggleTheme = () => {
  if (toggle_theme.getAttribute("href") === "./style/darkTheme.css") {
    toggle_theme.setAttribute("href", "./style/lightTheme.css")
    localStorage.setItem("theme", "dark")
    theme_style_btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    console.log("dark");
  } else {
    toggle_theme.setAttribute("href", "./style/darkTheme.css")
    localStorage.setItem("theme", "light")
    theme_style_btn.innerHTML = '<i class="fa-solid fa-sun"></i>'
    console.log("light");
  }
}

const storeTheme = localStorage.getItem("theme")
if (storeTheme === "dark") {
  toggle_theme.setAttribute("href", "./style/lightTheme.css")
  theme_style_btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
} else {
  toggle_theme.setAttribute("href", "./style/darkTheme.css")
  theme_style_btn.innerHTML = '<i class="fa-solid fa-sun"></i>'
}

theme_style_btn.addEventListener("click", toggleTheme)

// Render all music

const renderMusic = () => {
  const musicList = playList.map((e) => {
    return `
      <section class="my-3 flex items-center p-2 rounded-full">
        <div>
          <img src="${e.audioImg}" class="w-[40px] rounded-full" />
        </div>
        <div>
          <p>${e.name}</p>
        </div>
      </section>
    `
  })

  let musicListRender = musicList.join('')
  all_music.innerHTML = musicListRender
}

renderMusic()