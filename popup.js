function sendClicks() {
    console.log("popup.js > sendClicks()");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            console.log(response.farewell);
        });
    });
}

$(function() {
    console.log("popup.js > OMD Extension ready");
    $('#send_message').click(function(){
        sendClicks();
    });
});
