const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    })

    document.getElementsById('buttons').appendChild(btn);
})

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.onpause();
        song.currentTime = 0;
    })
}