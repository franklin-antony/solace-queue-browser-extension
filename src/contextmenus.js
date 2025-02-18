var contextMenus = {};
contextMenus.findMessagesOnQueue =
    chrome.contextMenus.create({
            "title": "Find messages on queue"
        },
        function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    );
chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
    if (info.menuItemId === contextMenus.findMessagesOnQueue) {
        findMessages();
    }
}