init();
async function init() {
    // In testElement we get the first name and the last name of the profile. 
    // Try/catch is used to hide errors on extension page if there is no testElement on this LinkedIn page.

    try {
        let testElement = await elementAppear("#ember47 > div.ph5.pb5 > div.display-flex.mt2.pv-top-card--reflow > div.flex-1.mr5.pv-top-card__list-container > ul.pv-top-card--list.inline-flex.align-items-center > li");
        console.log(testElement.innerText);
        testElement.innerText = testElement.innerText + ' ' + 'Just for test';
    } catch (e) {

    }

}
