# 📓 Music Site

![logo](ico/ios-music.png)

- [simp-music_Site](https://simp-music.netlify.app/)

****
****

## 🔺 Loaded Music

**`script.js`**

```js
const playList = [
    {
        id: "1",
        name: "Bahon Mein Chale Aao",
        path: "./audio/Bahon_Mein_Chale_Aao.mp3",
        singer: "Lata Mangeshkar",
        audioImg: "../audioImage/Bahon_Mein_Chale_Aao.jpeg"
    },
    {
        id: "2",
        name: "Jab Koi Baat Bigad Jaye",
        path: "./audio/Jab_Koi_Baat_Bigad_Jaye.mp3",
        singer: "Kumar Sanu",
        audioImg: "../audioImage/Jab_Koi_Baat_Bigad_Jaye.jpeg"
    },
    {
        id: "3",
        name: "Pensees Mechta",
        path: "./audio/Coding_deep/Pensees_Mechta.mp3",
        singer: "Pensees",
        audioImg: "../audioImage/all-one.jpeg"
    },
];

/* Globally use variables */
// create new audio element
let loadedMusic = document.createElement("audio");
// as argument
let musicCondition = false;
// music index
let musicIndex = 0;
```

## 🔺 Random music Load (always reload)

- reloaded website end always deferent music.

```js
function musicHandler() {
  let randomIndex = Math.floor(math.random() * playList.length);
  loadedMusic.src = playList[randomIndex].path;  

  loadedMusic.load();
}

// declare function
musicHandler(musicIndex);
```

## 🔺 Set music title

**`index.html`**

```html
<!-- Music title is here -->
<p id="musicTitle"></p>
```

**`script.js`**

```js
let musicTitle = document.getElementById("musicTitle");
```

:- ***Add Condition inside `musicHandler`***

```js
function musicHandler() {
  let randomIndex = Math.floor(math.random() * playList.length);
  loadedMusic.src = playList[randomIndex].path;  

  /* */
  musicTitle.innerHTML = playList[randomIndex].name;
  /* */
  
  LoadedMusic.load();
};
```

## 🔺 Play Pause Method

**`index.html`**

```html
<!-- Play Pause btn -->
<button id="playPause" onclick="playPauseController()">
    <i class="fa-solid fa-play"></i>
</button>   
```

**`script.js`**

```js
// get button id
let playPauseBtn = document.getElementById("playPause");
```

```js
// Music Play function 
function playMusic() {    
    // argument true
    musicCondition = true;
    loadedMusic.play();
    // Change btn name
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
};

function pauseMusic() {
    // argument false
    musicCondition = false;
    loadedMusic.pause();
    // Change btn name
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
};

// Play Pause button
function playPauseController() {
    if (!musicCondition) {
        playMusic();
    } else {
        pauseMusic();
    };

    // Ternary operator
    // !musicCondition ? playMusic() : pauseMusic();
};
```

## 🔺 Backward & Forward Method

**`index.html`**

```html
<button onclick="backwardBtn()">
    <i class="fa-solid fa-backward-step"></i>
</button>

<button onclick="forwardBtn()">
    <i class="fa-solid fa-forward-step"></i>
</button>
```

**`script.js`**

```js
function forwardBtn() {
  if (MusicIndex < playList.length - 1) {
    MusicIndex += 1;
  } else {
    MusicIndex = 0;
  };

  musicHandler(MusicIndex);
  playMusic();
};

function backwardBtn() {
  if (MusicIndex > 0) {
    MusicIndex -= 1;
  } else {
    MusicIndex = testPlayList.length - 1;
  };

  musicHandler(MusicIndex);
  playMusic();
};
```

## 🔺 Next End Prevue method

**`index.html`**

```html
<button onclick="forwardMusic()">
    <i class="fa-solid fa-forward"></i>
</button>

<button onclick="backwardMusic()">
  <i class="fa-solid fa-backward"></i>
</button>
```

**`script.js`**

```js
function forwardMusic() {
  LoadedMusic.currentTime += 10;
}

function backwardMusic() {
  LoadedMusic.currentTime -= 10;
}
```

## 🔺 Auto Change Music Method

```js
function musicHandler(i) {
  let randomIndex = Math.floor(math.random() * playList.length);
  loadedMusic.src = playList[randomIndex].path;
  musicTitle.innerHTML = playList[randomIndex].name;

  LoadedMusic.load();

  /* */
  LoadedMusic.addEventListener("ended", forwardBtn);  
  /* */
}
```

## 🔺 Random Music play method

- Click end random music play.
- ⚠️ Do not use this method. use random music load logic

**`index.html`**

```html
<button onclick="randomMusicPlay()">
    <i class="fa-solid fa-random"></i>
</button>
```

**`script.js`**

```js
function randomMusicPlay() {
  MusicIndex = Math.floor(Math.random() * playList.length);
  musicHandler(MusicIndex);
  playMusic();
}
```

## 🔺 Loop repeat song method

**`index.html`**

```html
<button id="repeatMusic" onclick="repeatMusicBtn()">
    <i class="fa-solid fa-random"></i>
</button>
```

**`script.js`**

```js
let repeatMusic = document.getElementById("repeatMusic");
```

```js
function repeatMusicBtn() {
  if (LoadedMusic.loop === false) {
    LoadedMusic.loop = true;
    repeatMusic.innerHTML = '<i class="fa-solid fa-repeat"></i>';    
    console.log("repeat");
  } else {
    LoadedMusic.loop = false;
    repeatMusic.innerHTML = '<i class="fa-solid fa-random"></i>';
    console.log("no repeat");
  }
}
```

## 🔺 Mute Unmute Method

**`index.html`**

```html
<button id="muteUnmute" onclick="muteUnmuteBtn()">
    <i class="fa-solid fa-volume-high"></i>
</button>
```

**`script.js`**

```js
let muteUnmute = document.getElementById("muteUnmute");
```

```js
function muteUnmuteBtn() {
  if (LoadedMusic.muted === true) {
    LoadedMusic.muted = false;
    muteUnmute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    LoadedMusic.muted = true;
    muteUnmute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  };
};

function mute() {
  LoadedMusic.volume = LoadedMusic.value / 0;
};

function unMute() {
  LoadedMusic.volume = LoadedMusic.value / 100;
};
```

## 🔺 Volume Low Heigh input Method

**`index.html`**

```html
<input type="range" min="10" max="100" value="80" step="15" id="volumeController" onchange="volumeControllerSlider()">
```

**`script.js`**

```js
let volumeController = document.getElementById("volumeController");
```

```js
function volumeControllerSlider() {
  LoadedMusic.volume = volumeController.value / 100;
}
```

## 🔺 Audio Range Update End Timing Update.

**`index.html`**

```html
<p id="updateTime"></p>
<input type="range" id="musicSlider" onchange="musicSliderRange()">
<p id="defaultTime"></p>
```

**`script.js`**

```js
let musicSlider = document.getElementById("musicSlider");
```

```js
function musicSliderRange() {
  let seekTo = LoadedMusic.duration * (musicSlider.value / 100);
  LoadedMusic.currentTime = seekTo;
};

function MusicCountdown() {
  let sliderPosition = 0;

  if (!isNaN(LoadedMusic.duration)) {
    sliderPosition = LoadedMusic.currentTime * (100 / LoadedMusic.duration);
    musicSlider.value = sliderPosition;

    let musicMin = Math.floor(LoadedMusic.currentTime / 60);
    let musicSec = Math.floor(LoadedMusic.currentTime - musicMin * 60);

    let updatedMin = Math.floor(LoadedMusic.duration / 60);
    let updatedSec = Math.floor(LoadedMusic.duration - updatedMin * 60);

    defaultTime.innerHTML = musicMin + ":" + musicSec;
    updateTime.innerHTML = updatedMin + ":" + updatedSec;
  };
};
```

:- ***Add Condition inside `musicHandler`***

```js
function musicHandler() {
  let randomIndex = Math.floor(math.random() * playList.length);
  loadedMusic.src = playList[randomIndex].path;
  musicTitle.innerHTML = playList[randomIndex].name;

  LoadedMusic.load();    
  LoadedMusic.addEventListener("ended", forwardBtn);
  
  /* */
  slider = setInterval(MusicCountdown, 1000);
  /* */
};
```