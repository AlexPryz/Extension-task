chrome.runtime.onMessage.addListener(
    function(message, sender){
        executeFunction(message.context, {message, sender});
    }
);

var extensionValue = "Test value";

async function getBackgroundInfo({message, sender}){
    //For popup response
    chrome.extension.sendMessage(new ExtensionMessage(message.context, {extensionValue}));

    //for Content script response
    sendPageMessage(new ExtensionMessage(message.context, {extensionValue}), sender.tab.id);
};

async function getBackgroundMessage({message, sender}){
    //console.log(message.data)
    chrome.extension.sendMessage(new ExtensionMessage(config.keys.getPopupMessage, {message: "Data to popup"}))
};



async function requestBackground({message, sender}){
    //Money change happens here
    // We get string with price, remove $ sign, divide by 2, round it and send back with $ sign
    let money = parseFloat(message.data[Object.keys(message.data)[0]].substr(1)) / 2;
    money = money.toFixed(2);
    sendPageMessage(new ExtensionMessage(message.context, {message: `$${money}`}), sender.tab.id)
};


