  chrome.contextMenus.create({
    id: 'clipId',
    title: 'WebClip this',
    contexts: ['selection'] // show the menu item on the page and selected text
  });

  function getText()
  chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
        console.log(selectionText)
        getTextId(selectionText)
    }
  )
  

//   window.addEventListener('click', function(event) {
//     var selectedElement = event.target; // get the element that was clicked
//     var selectedElementId = selectedElement.id; // get the ID of the element
    
//     console.log('Selected element ID:', selectedElementId);
//   });

window.forEach(element => {
    element.addListener("mouseup", getText)
    
});

function getTextId(element) {
    const sleectedText = window.getSelection().toString()
    }
