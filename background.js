console.log("hello")
chrome.contextMenus.create({
    id: 'clipId',
    title: 'WebClip this',
    contexts: ['selection'], // show the menu item on the page and selected text
  });

  chrome.contextMenus.onClicked.addListener(
    ({selectionText, linkUrl}) => {
      console.log("Inside")
      console.log(selectionText)
      findText(selectionText)
      });

  function findText(selTxt)
  {
    console.log($(document).body)
  }
