const bodyEl = document.body;
const html = document.documentElement;
var navPathogensContainer = document.querySelector('.organisms');
var JSON_contents;

/* Get JSON contents */
var request = new XMLHttpRequest();
  request.open("GET", "contents.json", false);
  request.send(null)
  var JSON_contents = JSON.parse(request.responseText);

  //for(var key in JSON_contents.jsonData) {
  //  for (var key1 in JSON_contents.jsonData[key]) {
  //    console.log(JSON_contents.jsonData[key][key1].id);
  //  }
  //}

/* Build contents from JSON */
function loadContents(elem) {
  var elemId = elem.id;
  var elemSelection = document.querySelector('#'+elemId);
  var categoryBlock = elemSelection.closest(".organisms-list");
  var categoryId = categoryBlock.id;
  var category;
  if (categoryId=="bacteria") {
    category = JSON_contents.bacteria[elemId];
  }
  if (categoryId=="patcat") {
    category = JSON_contents.patcat[elemId];
  }

  // define dom variable
  var pathongenHead = document.querySelector('.pathogen-name');
  var pathongenCategory = pathongenHead.querySelector('h3');
  var pathongenName = pathongenHead.querySelector('h1');
  var pathongenVisual = document.querySelector('.visual');
  var pathongenIncubationPeriod = document.querySelector('.incubation-period p');
  var pathongenDescription = document.querySelector('.pathogen-content-description p');
  var pathongenSymptoms = document.querySelector('.pathogen-content-symptoms p');
  var pathongenTransmission = document.querySelector('.pathogen-transmission');
  var pathongenTransmissionContents = pathongenTransmission.querySelector('.pathogen-content-transmission p');
  // define contents
  pathongenCategory.innerHTML = categoryId;
  pathongenName.innerHTML = category.name;
  pathongenIncubationPeriod.innerHTML = category.incubation;
  pathongenVisual.getElementsByTagName("img")[0].src = category.cover["src"];
  pathongenVisual.getElementsByTagName("img")[0].alt = category.cover["alt"];
  pathongenDescription.innerHTML = category.description;
  pathongenSymptoms.innerHTML = category.symptoms;
  pathongenTransmission.getElementsByTagName("img")[0].src = category.mtimage["src"];
  pathongenTransmission.getElementsByTagName("img")[0].alt = category.mtimage["alt"];
  pathongenTransmissionContents.innerHTML = category.transmission;
  // show loadContents
  bodyEl.classList.toggle("show-contents");
}

function backToMenu() {
  bodyEl.classList.remove("show-contents");
}

bodyEl.onload = function() {
  bodyEl.classList.add("loaded");
}

function showModal(elem) {
  var elemParentId = elem.parentNode.parentNode.id;
  var pathogenBlock = document.querySelector('#'+elemParentId);
  //Get card contents
  var title = pathogenBlock.querySelector('h5');
  var titleValue = title.innerHTML;
  var visual = pathogenBlock.querySelector('.pathogen-info-item-illustration');
  var visualSrc = visual.getElementsByTagName("img")[0].src;
  var visualAlt = visual.getElementsByTagName("img")[0].alt;
  var content = pathogenBlock.querySelector('.pathogen-content');
  var contentValue = content.innerHTML;
  //Set modal contents
  var modal = document.querySelector('.modal');
  var modalVisual = document.querySelector('.modal-visual');
  var modalTitle = document.querySelector('.modal-title');
  var modalContent = document.querySelector('.modal-content');
  modalVisual.getElementsByTagName("img")[0].src = visualSrc;
  modalVisual.getElementsByTagName("img")[0].alt = visualAlt;
  modalTitle.innerHTML = "<h2>"+titleValue+"</h2>";
  modalContent.innerHTML = contentValue;
  //Set styles
  modal.id = "modal-"+elemParentId;
  bodyEl.classList.add("show-modal");
}

function closeModal(elem) {
  bodyEl.classList.remove("show-modal");
}
