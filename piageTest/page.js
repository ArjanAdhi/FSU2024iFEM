$(document).ready(function () {
    $('#book').turn({
        autoCenter: true
    });
});

function turnPage(pageNumber) {
    $('#book').turn('page', pageNumber);
}
