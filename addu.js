$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function () {
    $("#openModalBtn").click(function () {
        $("#myModal").modal('show');
    });
});
function nameadd(){
    
    document.write("Your group");
    let html = document.getElementById("naMe").innerHTML;
document.getElementById("naMe").innerHTML = html;
}