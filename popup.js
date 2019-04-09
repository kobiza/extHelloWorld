function sendClicks() {
    console.log("popup.js > sendClicks()");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
        });
    });
}

$(function() {
    console.log("popup.js > ready");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "measureCompInContainer"}, function(response) {
            console.log(response);
        });
    });

    $('#send_message').click(function(){
        sendClicks();
    });
});
