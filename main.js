onload = () =>{
    document.body.classList.remove("container");
    setTimeout(() => {
        animatedText.classList.add('show');
        typeWriter();
    }, 2000);
   
};

const text = "❤  Rukiye  ❤";
const animatedText = document.getElementById('animatedText');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 350); // Adjust the speed of typing here (200ms)
    }
}

typeWriter();

