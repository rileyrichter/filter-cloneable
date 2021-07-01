// Counting the number of items returned after the filter function, add the year to the copyright in the footer
var Webflow = Webflow || [];
Webflow.push(function () {
  let itemCount = $(".company-item").length;
  $("#item-count").html(itemCount);
  document.getElementById("year").innerHTML = new Date().getFullYear();
});

//Update item count on filter change
$(".button-filter").click(function () {
  setTimeout(function () {
    var allElems = document.getElementsByClassName("company-item");
    var count = 0;
    for (var i = 0; i < allElems.length; i++) {
      var thisElem = allElems[i];
      if (thisElem.style.display != "none") count++;
      document.getElementById("item-count").innerHTML = count;
    }
  }, 500);
});

//Update item count on filter reset
$(".filter-reset-main").click(function () {
  setTimeout(function () {
    var allElems = document.getElementsByClassName("company-item");
    var count = 0;
    for (var i = 0; i < allElems.length; i++) {
      var thisElem = allElems[i];
      if (thisElem.style.display != "none") count++;
      document.getElementById("item-count").innerHTML = count;
    }
  }, 500);
});

// F'in sweet CMS Library for Webflow

(function () {
  var fsComponent = new FsLibrary(".company-list");

  var myFilters = [
    {
      filterWrapper: ".filter-wrapper-1",
      filterType: "multi",
    },
    {
      filterWrapper: ".filter-wrapper-2",
      filterType: "multi",
    },
    {
      filterWrapper: ".filter-wrapper-3",
      filterType: "multi",
    },
  ];

  fsComponent.filter({
    filterArray: myFilters,
    activeClass: "button-filter-active",
    filterReset: ".filter-reset-main",
    animation: {
      enable: true,
      duration: 300,
      easing: "ease-in",
      effects: "fade ",
    },
  });
})();
