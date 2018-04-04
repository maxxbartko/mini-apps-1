const $ = require('jquery');
let json;

window.onload = () => {
  document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    json = document.getElementById('json').value;
    console.log(json);
  });
}