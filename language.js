// if you update this code and you're testing with edge load unpacked extension, you have to click reload for it to update
var getting = chrome.storage.sync.get("language", (result) => {
    const language = result.language || "Spanish";
    // go to the langauge of interest
    window.location.href = "#" + language;


    setTimeout(() => {
        // expand all tables
        for (const a of document.querySelectorAll("a")) {
            if (a.textContent.includes("show")) {
                a.click()
            }
        }
    }, 500);
});
