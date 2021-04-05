chrome.runtime.onMessage.addListener(
    function(message, sender){
        executeFunction(message.context, {message, sender});
    }
);

var extensionValue = "Test value";

async function getBackgroundInfo({message, sender}){
    // await forSeconds(2);

    // var value = message.data.value.split(" ")[0];
    // console.log(value);

    //For popup response
    chrome.extension.sendMessage(new ExtensionMessage(message.context, {extensionValue}));

    //for Content script response
    sendPageMessage(new ExtensionMessage(message.context, {extensionValue}), sender.tab.id);
};



  