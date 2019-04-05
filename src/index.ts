'use strict';

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        urlMatches: '.*'
                    },
                })
            ],
            actions: [
                new chrome.declarativeContent.ShowPageAction()
            ]
        }]);
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let isResponseAsync = false;

    if (request.popupMounted) {
        console.log('Popup.tsx has mounted.');
    }

    return isResponseAsync;
});
