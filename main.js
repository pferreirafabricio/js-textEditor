const boldEl = document.getElementById('bold');
const italicEl = document.getElementById('italic');
const strikethroughEl = document.getElementById('strikethrough');
const underlinedEl = document.getElementById('underlined');
const linkEl = document.getElementById('link');

const textAreaEl = document.querySelector('.inputText textarea');

var selectedText = '';

// setInterval(getSelectedText, 1000);

function getSelectedText() {
   return textAreaEl.value.substring(textAreaEl.selectionStart, textAreaEl.selectionEnd)
}

// console.log(text);

boldEl.addEventListener('click', () => {
    const boldTag = document.createElement('b');
});


// boldEl.addEventListener = () => {
//     console.log(selectedText);
// }

italicEl.onclick = () => {

}

strikethroughEl.onclick = () => {

}

underlinedEl.onclick = () => {

}

linkEl.onclick = () => {

}

