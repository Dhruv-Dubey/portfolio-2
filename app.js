var i = 0;
var txt = 'Hello!';
var speed = 120;


window.onload = () => {
    typeWriter();
};

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("hello").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
