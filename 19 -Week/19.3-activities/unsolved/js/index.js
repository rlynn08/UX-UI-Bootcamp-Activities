$(".toggle").click(function() {
    $(this).find(".toggleContainer").toggleClass(".active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass(".active");
    })

    function fade() {
        $('.preloader').fadeOut("slow");
        }
    setTimeout(fade, 3000);

$(".searchButton").on("click",function() {
$(".searchButton").toggleClass("active");

})

if ($(".searchButton").hasClass("active")) {
$(".searchBar").css("height", "100vh");
$("#searchForm").css("opacity", "1");
$(".searchIcon").removeClass("fa-search").addClass("fa-search");
}
else {
$(".searchBar").css("height","0");
$("#SearchForm").css("opacity","0");
$(".SearchIcon").removeClass("fa-times").addClass("fa-search");
}
