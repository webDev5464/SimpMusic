# SimpMusic

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
let loadedMusic = document.createElement("audio")
// as argument
let musicCondition = false
// music index
let musicIndex = 0

const musicHandler = (i) => {
    // console.log((LoadedMusic.src = testPlayList[i].path));
    // in (loadedMusic) variable add src from (playlist) array-abject path.
    loadedMusic.src = playList[i].path;
    // end music load here
    loadedMusic.load()
}

// declare function
musicHandler(musicIndex)
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

```js
const musicHandler = (i) => {
  LoadedMusic.src = playList[i].path;

  /* */
  musicTitle.innerHTML = playList[i].name;
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
const playMusic = () => {    
    // argument true
    musicCondition = true
    loadedMusic.play()
    // Change btn name
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
}

const pauseMusic = () => {
    // argument false
    musicCondition = false;
    loadedMusic.pause();
    // Change btn name
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

// Play Pause button
const playPauseController =  () => {
    if (!musicCondition) {
        playMusic();
    } else {
        pauseMusic();
    }

    // Ternary operator
    // !musicCondition ? playMusic() : pauseMusic();
}
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
const forwardBtn = () => {
  if (MusicIndex < playList.length - 1) {
    MusicIndex += 1;
  } else {
    MusicIndex = 0;
  }

  musicHandler(MusicIndex);
  playMusic();
};

const backwardBtn = () => {
  if (MusicIndex > 0) {
    MusicIndex -= 1;
  } else {
    MusicIndex = testPlayList.length - 1;
  }

  musicHandler(MusicIndex);
  playMusic();
};
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
const muteUnmuteBtn = () => {
  if (LoadedMusic.muted === true) {
    LoadedMusic.muted = false;
    muteUnmute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  } else {
    LoadedMusic.muted = true;
    muteUnmute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  }
};

const mute = () => {
  LoadedMusic.volume = LoadedMusic.value / 0;
};

const unMute = () => {
  LoadedMusic.volume = LoadedMusic.value / 100;
};
```

## 🔺 Audio Range Update End Timing Update.

**`index.html`**

```html
<p id="updateTime">00:00</p>
<input type="range" id="musicSlider" onchange="musicSliderRange()">
<p id="defaultTime">00:00</p>
```

**`script.js`**

```js
let musicSlider = document.getElementById("musicSlider");
```

```js
const musicSliderRange = () => {
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
  }
}
```

:- ***Add Condition inside `musicHandler`***

```js
const musicHandler = (i) => {
  // console.log((LoadedMusic.src = playList[i].path));
  LoadedMusic.src = playList[i].path;
  musicTitle.textContent = playList[i].name;

  LoadedMusic.load();
  
  /* */
  slider = setInterval(MusicCountdown, 1000);
  /* */
};
```