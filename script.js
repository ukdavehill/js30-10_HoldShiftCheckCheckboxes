const items = document.querySelectorAll('.inbox input[type="checkbox"]');

// variable to keep track of last checked item
let lastChecked;

function handleCheck(e){
    // variable to monitor whether between current and last checked item
    let inBetween = false;
    // Check shift-key is held down when checking item
    if(e.shiftKey && this.checked){
        // loop over every item and amend inBetween variable appropriately and then check item if inBetween true
        items.forEach(item => {
            console.log(item);
            if(item === this || item === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                item.checked = true;
            }
        })
    }
    lastChecked = this;
}

items.forEach(item => {
        item.addEventListener('click', handleCheck);
    });







