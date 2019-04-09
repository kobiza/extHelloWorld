chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");

        const container = document.querySelectorAll('[data-comp="mobile.core.components.Container"]')[0]
        const comp = container.querySelector('[data-comp]')

        if (request.type == "measureCompInContainer") {
            sendResponse({width: comp.offsetWidth, height: comp.offsetHeight});
        } else if (request.greeting == "hello") {
            sendResponse({farewell: "goodbye"});
        }


    }
);
