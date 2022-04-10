// ↑  ↑  ↓  ↓  ←  →  ←  →  B A
let konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightBA';
let keyPressed = [];

window.addEventListener('keydown', e => {
    console.log(e.key);
    keyPressed.push(e.key)
    keyPressed.splice(-konamiCode.length -1, keyPressed.length - konamiCode.length)
    console.log(keyPressed)

    if (keyPressed.join('').includes(konamiCode)) {
        cornify_add()
    }
    
})