chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlMatches: 'wixsite.com'},
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});