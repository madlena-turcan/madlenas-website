$(document).ready(() => {
  // Hide all projects except the first one initially
  $("#project2").hide();
  $("#project3").hide();
  $("#project1-click").addClass("clickWork");

  // Project 1 click handler
  $("#project1-click").on("click", (event) => {
    $(event.currentTarget).addClass("clickWork");
    $("#project1").show();
    $("#project2").hide();
    $("#project3").hide();
    $("#project2-click").removeClass("clickWork");
    $("#project3-click").removeClass("clickWork");
  });

  // Project 2 click handler
  $("#project2-click").on("click", (event) => {
    $(event.currentTarget).addClass("clickWork");
    $("#project2").show();
    $("#project1").hide();
    $("#project3").hide();
    $("#project1-click").removeClass("clickWork");
    $("#project3-click").removeClass("clickWork");
  });

  // Project 3 click handler
  $("#project3-click").on("click", (event) => {
    $(event.currentTarget).addClass("clickWork");
    $("#project3").show();
    $("#project1").hide();
    $("#project2").hide();
    $("#project1-click").removeClass("clickWork");
    $("#project2-click").removeClass("clickWork");
  });

  // Mobile navigation
  $("#x-icon").hide();
  $("#burger-icon").on("click", () => {
    $(".nav-burger-menu-cnt").show();
    $("#burger-icon").hide();
    $("#x-icon").show();
    $("#image-logo").hide();
  });
  $("#x-icon").on("click", () => {
    $(".nav-burger-menu-cnt").hide();
    $("#burger-icon").show();
    $("#x-icon").hide();
    $("#image-logo").show();
  });
  $(".nav-item-burger").on("click", () => {
    $(".nav-burger-menu-cnt").hide();
    $("#burger-icon").show();
    $("#x-icon").hide();
    $("#image-logo").show();
  });
});
