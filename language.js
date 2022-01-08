var getting = chrome.storage.sync.get("language", (result) => {
    window.location.href = "#" + result.language;
});
