document.getElementById('background').addEventListener('change', handleImageSelect, false);
function handleImageSelect(evt) {
    var file = evt.target.files[0];
    $("#bg-container").empty();
    var reader = new FileReader();
    reader.onload = function(e) {
        var fileContents = e.target.result;
        var img = new Image();
        img.src = fileContents;
        img.id = "bg-img";
        var container = document.getElementById('bg-container');
        container.appendChild(img);
    };
    reader.readAsDataURL(file);
}

var images = 0;
document.getElementById('asset').addEventListener('change', handleAssetSelect, false);
function handleAssetSelect(evt) {
    images++;
    $(document.body).append(`<br><br>Position of ${ evt.target.files[0].name }: (<span id="pos${images}">0, 0</span>)`);
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var fileContents = e.target.result;
        var img = new Image();
        img.src = fileContents;
        img.classList.add("img");
        img.id = images.toString();
        img.style.position = "absolute";
        var container = document.body;
        container.appendChild(img);
        $(`.img`).draggable({
            drag: handleDrag
            // stop for when dragging stops
        })
    };
    reader.readAsDataURL(file);
}
function handleDrag(event) {
    var id = event.target.id;
    $(`#pos${id}`).html(`left: ${Math.round($(`#${id}`).offset().left + 2)}px; top: ${Math.round($(`#${id}`).offset().top + 2)}px;`)
}