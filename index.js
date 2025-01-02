const audioMap = {
    w : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesc3.mp3'),
    3 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesc-3.mp3'),
    e : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesd3.mp3'),
    4 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesd-3.mp3'),
    r : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notese3.mp3'),
    t : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesf3.mp3'),
    6 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesf-3.mp3'),
    y : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesg3.mp3'),
    7 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesg-3.mp3'),
    u : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesa4.mp3'),
    8 : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesa-4.mp3'),
    i : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesb3.mp3'),
    o : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesc4.mp3'),
    z : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesc4.mp3'),
    s : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesc-4.mp3'),
    x : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesd4.mp3'),
    d : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesd-4.mp3'),
    c : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notese4.mp3'),
    v : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesf4.mp3'),
    g : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesf-4.mp3'),
    b : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesg4.mp3'),
    h : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesg-4.mp3'),
    n : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesa5.mp3'),
    j : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesa-5.mp3'),
    m : new Audio('https://github.com/Nevyin32/Virtual_Piano/tree/main/mp3Notesb5.mp3'),
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