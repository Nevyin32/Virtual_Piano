const audioMap = {
    w : new Audio('/mp3Notes/c3.mp3'),
    3 : new Audio('/mp3Notes/c-3.mp3'),
    e : new Audio('/mp3Notes/d3.mp3'),
    4 : new Audio('/mp3Notes/d-3.mp3'),
    r : new Audio('/mp3Notes/e3.mp3'),
    t : new Audio('/mp3Notes/f3.mp3'),
    6 : new Audio('/mp3Notes/f-3.mp3'),
    y : new Audio('/mp3Notes/g3.mp3'),
    7 : new Audio('/mp3Notes/g-3.mp3'),
    u : new Audio('/mp3Notes/a4.mp3'),
    8 : new Audio('/mp3Notes/a-4.mp3'),
    i : new Audio('/mp3Notes/b3.mp3'),
    o : new Audio('/mp3Notes/c4.mp3'),
    z : new Audio('/mp3Notes/c4.mp3'),
    s : new Audio('/mp3Notes/c-4.mp3'),
    x : new Audio('/mp3Notes/d4.mp3'),
    d : new Audio('/mp3Notes/d-4.mp3'),
    c : new Audio('/mp3Notes/e4.mp3'),
    v : new Audio('/mp3Notes/f4.mp3'),
    g : new Audio('/mp3Notes/f-4.mp3'),
    b : new Audio('/mp3Notes/g4.mp3'),
    h : new Audio('/mp3Notes/g-4.mp3'),
    n : new Audio('/mp3Notes/a5.mp3'),
    j : new Audio('/mp3Notes/a-5.mp3'),
    m : new Audio('/mp3Notes/b5.mp3'),
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