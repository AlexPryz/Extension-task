

async function init(){
   let result = await requestBackground(
       new ExtensionMessage(config.keys.getBackgroundInfo, {})
       );

       let testElement = await elementAppear("#content");
       testElement.textContent = JSON.stringify(result); 
   
}

init();