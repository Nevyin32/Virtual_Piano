const audioMap = {
    w : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/c3.mp3?raw=true'),
    3 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/c-3.mp3?raw=true'),
    e : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/d3.mp3?raw=true'),
    4 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/d-3.mp3?raw=true'),
    r : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/e3.mp3?raw=true'),
    t : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/f3.mp3?raw=true'),
    6 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/f-3.mp3?raw=true'),
    y : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/g3.mp3?raw=true'),
    7 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/g-3.mp3?raw=true'),
    u : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/a4.mp3?raw=true'),
    8 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/a-4.mp3?raw=true'),
    i : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/b3.mp3?raw=true'),
    o : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/c4.mp3?raw=true'),
    z : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/c4.mp3?raw=true'),
    s : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/c-4.mp3?raw=true'),
    x : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/d4.mp3?raw=true'),
    d : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/d-4.mp3?raw=true'),
    c : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/e4.mp3?raw=true'),
    v : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/f4.mp3?raw=true'),
    g : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/f-4.mp3?raw=true'),
    b : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/g4.mp3?raw=true'),
    h : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/g-4.mp3?raw=true'),
    n : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/a5.mp3?raw=true'),
    j : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/a-5.mp3?raw=true'),
    m : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notes/b5.mp3?raw=true'),
}

const playNote = (e) => {
    const audioElement = audioMap[e];
    if(audioElement === undefined){
    }
    else {
        audioElement.currentTime = 0; 
        audioElement.play();
    }
}
const playSustain = (e) => {
    const audioElement = audioMap[e];
    if(audioElement === undefined){
    }
    else { 
        audioElement.loop = false;
        audioElement.play();
    }
}
let keysPressed = {}
document.addEventListener('keydown', (e) => {
    if (!keysPressed[e.key]) {
        playNote(e.key);
        keysPressed[e.key] = true;
    }
    const button1 = document.getElementById(e.key)
    const button2 = document.getElementById('o')
    if(button1 === null){
        if(e.key === "z"){
            button2.classList.add('Whiteactive')
        }
        else{
        }
    }
    else if(button1 === 'key white'){
        button1.classList.add('Whiteactive')
    }
    else{
        button1.classList.add('Blackactive')
    }
})
document.addEventListener('keyup', (e) => {
    keysPressed[e.key] = false;
    const button1 = document.getElementById(e.key)
    const button2 = document.getElementById('o')
    if(button1 === null){
        if(e.key === 'z'){
            button2.classList.remove('Whiteactive')
        }
        else{
        }
    }
    else if(button1.className === 'key white Whiteactive'){
        button1.classList.remove('Whiteactive')
    }
    else{
        button1.classList.remove('Blackactive')
    }
})
document.addEventListener('mousedown', (e) => {
    const event = e.target.id
    playNote(event)
})