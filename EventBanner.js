function init(){
AutoBanner();
};

window.onload = init;

function AutoBanner(){
    const foto = [];
    foto[0] = "photo.png";
    foto[1] =  "photo2.png";
    foto[2] = "photo1.png";
    FNumber = 0;
    FTotal = 3;

    setInterval(function(){
        document.IMGbanner.src = foto[FNumber];
        FNumber++ 
    if(FNumber == FTotal){
        FNumber = 0
    }
    },1000)
};
function Foto(){
    document.IMGbanner.src = "photo.png"
};
function Foto1(){
    document.IMGbanner.src = "photo1.png"
};
function Foto2(){
    document.IMGbanner.src = "photo2.png"
};