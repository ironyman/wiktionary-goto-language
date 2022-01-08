// This doesn't work. I even disabled browser action in manifest.json. still doesn't work.
chrome.browserAction.onClicked.addListener('click', function() {
    console.log("Browser action clicked");
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      window.open(chrome.runtime.getURL('options.html'));
    }
  });
  