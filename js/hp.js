window.addEventListener("scroll", function () {
    let value = window.scrollY;

    let key = document.getElementById("img1");
    let vr = document.getElementById("img2");
    let person = document.getElementById("person");
    let intro = document.getElementById("intro");
    let text = document.getElementById("text");

    key.style.marginTop = value * -0.41 + "px";
    key.style.marginRight = value * -0.41 + "px";
    vr.style.marginTop = value * -0.87 + "px";
    vr.style.marginLeft = value * -0.625 + "px";
    text.style.marginBottom = value * -0.5 + "px";
    intro.style.marginRight = value * -5.5 + "px";



    var rotated = false;

    var keyboard = document.getElementById('img1'),
        deg = rotated ? 0 : 66;

    keyboard.style.transform = 'rotate(' + deg * value * -.0025 + 'deg)';
    vr.style.transform = 'rotate(' + deg * value * .001125 + 'deg)';


    rotated = !rotated;
})

