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

// get button id
let playPauseBtn = document.getElementById("playPause");

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
<button id="backward" onclick="backwardBtn()">
    <i class="fa-solid fa-backward-step"></i>
</button>

<button id="forward" onclick="forwardBtn()">
    <i class="fa-solid fa-forward-step"></i>
</button>
```

**`script.js`**

```js
const forwardBtn = () => {
  if (MusicIndex < testPlayList.length - 1) {
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
