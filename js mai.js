var img= [ "imagen(2).png","imagen(3).png","imagen(5).png"];

var i=0;

function sig(){
    if(i<3) {
        document.getElementById("album").src= img[i];
        i++;
    }else {
        i=0;
    }
}
