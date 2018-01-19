window.onload = function () {

  var formTrigger = document.getElementById("formTrigger");
  var formTriggerSvg = document.getElementById("svgTriggerIcon");
  var searchInput = document.getElementById("searchInput");
  var form = document.getElementById("searchForm");
  var searchZoom = document.getElementById("searchZoom");

  formTrigger.addEventListener("click", () => {

    formTrigger.classList.add("trigger-active");
    searchZoom.classList.add("loadedSearchZoom");
    searchInput.style.width = "200px";


    searchInput.addEventListener("focus", () => {
      searchInput.style.width = "200px";
    });

    searchInput.addEventListener("blur", () => {
      searchInput.style.width = "90px";
    });


    if (form.style.display = "none") {
      form.style.display = "inline";
      form.style.marginLeft = "10px";
    }

  });

};
