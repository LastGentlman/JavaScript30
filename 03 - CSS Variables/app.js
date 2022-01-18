const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach( (input) => {
    input.addEventListener('input', handleUpdate) /*input is better than change, it replace also mousemove/
});

/*
inputs.forEach( (input) => {
    input.addEventListener('mousemove', handleUpdate)
}); */