import $ from 'jquery'
import './one.css';

const $value = $('#one>div>span');

const operate = {
    "+": () => { return $value.text(Number($value.text()) + 1) },
    "-": () => { return $value.text(Number($value.text()) - 1) },
    "×": () => { return $value.text(Number($value.text()) * 2) },
    "÷": () => { return $value.text(Number($value.text()) / 2) }
}

$('#one>button').on('click', (e) => {
    let x = operate[e.target.innerText]();
})