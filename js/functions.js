const bodyEl = document.body;
const html = document.documentElement;
/* Get JSON contents */
var request = new XMLHttpRequest();
   request.open("GET", "contents.json", false);
   request.send(null)
   var JSON_contents = JSON.parse(request.responseText);

bodyEl.onload = function() {
  bodyEl.classList.add("loaded");
}

function loadContents(elem) {
  var elemId = elem.id;
  var categoryId = elemSelection.closest(".organisms-category");
  console.log(categoryId);
  console.log(JSON_contents.bacteria[elemId]);
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
