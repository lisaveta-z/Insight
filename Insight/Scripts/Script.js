
function showCover() {
    var coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';

    
    document.body.appendChild(coverDiv);

}

function hideCover() {
    document.body.removeChild(document.getElementById('cover-div'));
}

function show() {
    showCover();
    var photo = document.getElementById('photo1');
    var container = document.getElementById('photo-container');
    var closeButton = document.getElementById('button');
    var divPh = document.querySelector("#photo-container div");

    closeButton.addEventListener("click", function(e) {
        hideCover();
        container.style.display = 'none';
        
    })
    container.addEventListener("click", function (e) {
        if (e.target == this) {
            hideCover();
            container.style.display = 'none';
        }})
   


    container.style.display = 'block';

}



/*Array.prototype.forEach.call(document.querySelectorAll(".photo img"), function (item) {
    item.onclick = function displayPhoto(e) {
        alert('Нажато');
    }
})*/


var divPhoto = document.getElementById("ph");
divPhoto.addEventListener("click", show);