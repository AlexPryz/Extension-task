chrome.runtime.onMessage.addListener(
    function (message, sender) {
        executeFunction(message.context, {
            message,
            sender
        });
    }
);

var extensionValue = "Test value";

async function getBackgroundInfo({
    message,
    sender
}) {
    //For popup response
    chrome.extension.sendMessage(new ExtensionMessage(message.context, {
        extensionValue
    }));

    //for Content script response
    sendPageMessage(new ExtensionMessage(message.context, {
        extensionValue
    }), sender.tab.id);
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

})

//Homework is here. In the code below we create timer since extension was installed and track time in seconds by setInterval function, after that
//we can see time since instalation in the url
let timer = 0;
 
chrome.runtime.onInstalled.addListener((details) => {

    setInterval(function () {
        timer++;
        chrome.runtime.setUninstallURL("https://google.com?secondsPassedSinceInstalation=" + `${timer}`);
    }, 1000);
  
}); 
    
 
