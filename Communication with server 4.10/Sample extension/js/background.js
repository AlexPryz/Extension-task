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


// init()
 

// async function init(){

// }

async function requestBackground({message, sender}){
    //Here we get request from content, change currency and send it back

    //Here we get currency exchange rate and get value that we need
    let jsonCurr = await fetch("https://www.freeforexapi.com/api/live?pairs=USDGBP").then(async (res) =>  await res.json());
    let changeRate =   parseFloat(jsonCurr[Object.keys(jsonCurr)[0]][Object.keys(jsonCurr[Object.keys(jsonCurr)[0]])[0]][Object.keys(jsonCurr[Object.keys(jsonCurr)[0]][Object.keys(jsonCurr[Object.keys(jsonCurr)[0]])[0]] )[0]]);
    //Here we change price to GBP and send it back
    let money =   parseFloat(message.data[Object.keys(message.data)[0]].substr(1)) * changeRate;
    money = money.toFixed(2);
    sendPageMessage(new ExtensionMessage(message.context, {message: `${money} GBP`}), sender.tab.id)
};