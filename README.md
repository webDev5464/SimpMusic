# SimpMusic

![logo](ico/ios-music.png)

- [simp-music_Site](https://simp-music.netlify.app/)

****
****

## 📌 Create First Music Array Object

- Create new directory end download selected music's.

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
```

**`index.html`**

```html
<!-- Create Play-Pause button -->
<button id="playPause" onclick="playPauseController()">Play</button>
```

**`script.js`**

**Music Play & pause method**

```js
// get button id
let playPauseBtn = document.getElementById("playPause");

// create new audio element
let loadedMusic = document.createElement("audio")
// as argument
let musicCondition = false
// music index
let musicIndex = 0

const musicHandler = (i) => {
    // in (loadedMusic) variable add src from (playlist) array-abject path.
    loadedMusic.src = playList[i].path;
    // end music load here
    loadedMusic.load()
}

// declare function
musicHandler(musicIndex)

// Music Play function 
const playMusic = () => {    
    // argument true
    musicCondition = true
    loadedMusic.play()
    // Change btn name
    playPauseBtn.innerHTML = 'Pause'
}

const pauseMusic = () => {
    // argument false
    musicCondition = false;
    loadedMusic.pause();
    // Change btn name
    playPauseBtn.innerHTML = 'Play';
}

// Play Pause button
const playPauseController =  () => {
    if (!musicCondition) {
        playMusic();
    } else {
        pauseMusic();
    }
}

```
