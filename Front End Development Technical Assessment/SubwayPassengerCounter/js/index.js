let count = 0;
let firstSave = true;

const count_el = document.getElementById("count");
const entries_el = document.getElementById("entries");

function increment() {
    count++;
    count_el.textContent = count;
}

function save() {
    if (firstSave) {
        entries_el.textContent += " " + count;
        firstSave = false;
    } else {
        entries_el.textContent += " - " + count;
    }

    count = 0;
    count_el.textContent = count;
}
