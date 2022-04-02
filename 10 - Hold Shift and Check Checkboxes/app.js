const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheckd = checkboxes[0];

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handle));

function handle(e) {
    
    let between = false;

    if (e.shiftKey && this.checked) {

        checkboxes.forEach((checkbox) => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastCheckd) {
                between = !between;
                console.log('start')
            }
            if (between) {
                checkbox.checked = true;
            }
        })

    }

    lastCheckd = this;
};