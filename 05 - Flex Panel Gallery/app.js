const panels = document.querySelectorAll('.panel');

function toggleOpenClass() {
    this.classList.toggle('open');
}

function toggleActiveClass(e) {
     if (e.propertyName.includes('flex')) {/*it makes ti compatible with sapari and other brewsers*/
        this.classList.toggle('active');
     }
}

panels.forEach( (panel) => {
    panel.addEventListener('click', toggleOpenClass)
});

panels.forEach( (panel) => {
    panel.addEventListener('transitionend', toggleActiveClass)
});