// Hero Section Code Starts from here




var currentIndex = 0;

var arrowright = document.getElementById("arrow-right");
var arrowleft = document.getElementById("arrow-left");

var images = [
    "assets/pvsgt-shop.png",
    "assets/img2.png",
    "assets/img5.png",
    "assets/img8.png"
];


var rimages = [
    "assets/img6.png",
    "assets/pvsgt-shop.png",
    "assets/img2.png",
    "assets/img5.png"
]


var color = [
    "#497d6e",
    "#1483b0",
    "#1483b0",
    "#eeeee4",
];

var rcolor = [
    "#497d6e",
    "#497d6e",
    "#1483b0",
    "#1483b0"
]



var content = [
    `<p>New Fat 1</p><h3>1g</h3><p>New Sodium 1</p><h3>1g</h3><p>New Carbs 1</p><h3>70g</h3><p>New Fiber 1</p><h3>10g</h3><p>New Sugar 1</p><h3>5g</h3><p>New Protein 1</p><h3>6g</h3><p>New Calcium 1</p><h3>200g</h3><p>New Iron 1</p><h3>20mg</h3><p>New Potassium 1</p><h3>500mg</h3>`,
    `<p>New Fat 2</p><h3>1.2g</h3><p>New Sodium 2</p><h3>1.1g</h3><p>New Carbs 2</p><h3>60g</h3><p>New Fiber 2</p><h3>9g</h3><p>New Sugar 2</p><h3>4g</h3><p>New Protein 2</p><h3>7g</h3><p>New Calcium 2</p><h3>210g</h3><p>New Iron 2</p><h3>22mg</h3><p>New Potassium 2</p><h3>520mg</h3>`,
    `<p>New Fat 3</p><h3>1.5g</h3><p>New Sodium 3</p><h3>1.3g</h3><p>New Carbs 3</p><h3>50g</h3><p>New Fiber 3</p><h3>8g</h3><p>New Sugar 3</p><h3>3g</h3><p>New Protein 3</p><h3>8g</h3><p>New Calcium 3</p><h3>220g</h3><p>New Iron 3</p><h3>24mg</h3><p>New Potassium 3</p><h3>540mg</h3>`,
    `<p>New Fat 4</p><h3>2g</h3><p>New Sodium 4</p><h3>1.4g</h3><p>New Carbs 4</p><h3>40g</h3><p>New Fiber 4</p><h3>7g</h3><p>New Sugar 4</p><h3>2g</h3><p>New Protein 4</p><h3>9g</h3><p>New Calcium 4</p><h3>230g</h3><p>New Iron 4</p><h3>26mg</h3><p>New Potassium 4</p><h3>560mg</h3>`,
    `<p>New Fat 5</p><h3>2.5g</h3><p>New Sodium 5</p><h3>1.5g</h3><p>New Carbs 5</p><h3>30g</h3><p>New Fiber 5</p><h3>6g</h3><p>New Sugar 5</p><h3>1g</h3><p>New Protein 5</p><h3>10g</h3><p>New Calcium 5</p><h3>240g</h3><p>New Iron 5</p><h3>28mg</h3>`
];


function changeContent(){
    var detailsdev = document.getElementById("details");
    detailsdev.innerHTML = content[currentIndex];

    if(window.innerWidth > 830){
    var last = document.getElementById("last");
    last.style.backgroundColor = color[currentIndex];
    }

    var big2image = document.getElementById("big2-img");
    big2image.src = images[currentIndex];


    var circles = document.getElementsByClassName('circle');
    circles[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % circles.length;
    circles[currentIndex].classList.add("active");


    if (currentIndex >= 4) {
        arrowright.style.visibility = 'hidden';
    } else {
        arrowright.style.visibility = 'visible';
    }

    if (currentIndex <= 0) {
        arrowleft.style.visibility = 'hidden';
    } else {
        arrowleft.style.visibility = 'visible';
    }

};

function reverseContent() {
    var circles = document.getElementsByClassName('circle');
    circles[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + circles.length) % circles.length;
    circles[currentIndex].classList.add("active");

    var detailsdev = document.getElementById("details");
    detailsdev.innerHTML = content[currentIndex];

    if(window.innerWidth > 830){
    var last = document.getElementById("last");
    last.style.backgroundColor = rcolor[currentIndex];
    }

    var big2image = document.getElementById("big2-img");
    big2image.src = rimages[currentIndex];

    if (currentIndex >= 4) {
        arrowright.style.visibility = 'hidden';
    } else {
        arrowright.style.visibility = 'visible';
    }

    if (currentIndex <= 0) {
        arrowleft.style.visibility = 'hidden';
    } else {
        arrowleft.style.visibility = 'visible';
    }
}




arrowright.onclick = () => {
    changeContent();
}



arrowleft.onclick = () => {
    reverseContent();
}




// Code For Menu Bar


var menubar = document.getElementById("image");
var cross = document.getElementById("cross");

menubar.onclick = () => {
    details.style.display = 'block';
    details.style.color = 'black';
    details.style.margin = '8px';
    menubar.style.display = 'none';
    cross.style.display = 'block';
    details.style.position = 'absolute';
    details.style.right = '0';
}


cross.onclick = () => {
    details.style.display = 'none';
    menubar.style.display = 'block';
    cross.style.display = 'none';
}


// Code For Listing The Product 
const imgs = [
    ['assets/img2.png', 'assets/img3.png', 'assets/img5.png'],
    ['assets/img7.png', 'assets/img5.png', 'assets/img2.png'],
    ['assets/img4.png', 'assets/img8.png', 'assets/img6.png']
];

let current = 0;

function updateImages() {
    const slides = document.querySelectorAll('.middle .half1 img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].src = imgs[current][i];
    }
}

document.getElementById("next").addEventListener('click', () => {
    current = (current + 1) % imgs.length;
    updateImages();
    let circles = document.getElementsByClassName('circle');
    circles[current].classList.remove("active");
    current = (current + 1) % circles.length;
    circles[current].classList.add("active");
});

document.getElementById("prev").addEventListener('click', () => {
    current = (current - 1 + imgs.length) % imgs.length;
    updateImages();
});

// Initialize the slider
updateImages();
