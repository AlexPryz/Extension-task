init();

async function init() {
    chrome.runtime.sendMessage(new ExtensionMessage(config.keys.getBackgroundMessage, {
        message: "Data to background"
    }))
    //Money change happens here:
    //Try/catch is used to avoid error messages if there is no such element on the page
    try {
        
        //Here are defined elements which contain price
        let testElement = await elementAppear("#priceblock_ourprice");
        let secondTestElement = await elementAppear("#price_inside_buybox");

        /// Here are defined elements which contain special deal price   
        let thirdTestElement = document.querySelector("#priceblock_dealprice");
        let fourthTestElement = document.querySelector("#dealprice_savings > td.a-span12.a-color-price.a-size-base.priceBlockSavingsString");

        //Here we send request to background and get response
        let result = await requestBackground(new ExtensionMessage(config.keys.requestBackground, {
            message: `${secondTestElement.innerText}`
        }))
        //Here we assign new prices
        testElement.innerText = result[Object.keys(result)[0]];
        secondTestElement.innerText = result[Object.keys(result)[0]];
        thirdTestElement.innerText = result[Object.keys(result)[0]];
        fourthTestElement.innerText = result[Object.keys(result)[0]];
    } catch (e) {

    }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.context) {
        case config.keys.getContentMessage:
            console.log(message.data);
            break;
    }


});