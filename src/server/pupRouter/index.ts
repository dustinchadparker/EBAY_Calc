import * as express from "express";
const puppeteer = require("puppeteer");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //launches a new browser window
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: false,
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    });

    let USERNAME = "USERNAME";
    let PASSWORD = "PASSWORD";

    const page = await browser.newPage(); //creates new page
    await page.goto("https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&SortOrder=DESCEND&NewPeriod=CurrentMonth&&searchText=&Column=DATE_PURCHASED&pg=1&CurrentPage=LabelManagement&searchBy=NONE&COUNT=100&guest=1", {
      waitUntil: "domcontentloaded"
    });


    await page.waitFor(15000);


    let data: any = {
      currentMonthShip: 0,
      currentMonthItems: 0,
      lastMonthItems: 0,
      lastMonthShip: 0,
      currentMonthSoldFor: 0,
      lastMonthSoldFor: 0,
      index: []
    };

    //LOGIN
    await page.waitFor('#signin-form > div:nth-child(1) > div > div > label');
    await page.type('#signin-form > div:nth-child(1) > div > div > label', USERNAME);
    await page.click('#signin-continue-btn');
    await page.waitFor(3000);
    await page.waitFor('#pass');
    await page.type('#pass', PASSWORD);
    await page.click('#sgnBt');

    await page.waitFor(10000);



    //GET CURRENT MONTH SHIPPING COSTS
    let numItems = await page.$$eval("tbody > tr:nth-child(2) > td:nth-child(4)", (le: { length: number; }) => le.length);
    let iterations = 2;
    numItems = numItems - 1;
    //get shipping costs
    let currentMonthShip = 0;
    await page.waitFor(8000);
    while ((iterations - 1) <= numItems) {

      //IF SHIPPING LABEL HAS NOT BEEN VOIDED
      let shipStatus = await page.$eval(`tbody > tr:nth-child(${iterations}) > td:nth-child(7)`, (el: { innerText: string; }) => el.innerText);

      //CHECK IF VOIDED
      if (shipStatus.charAt(0) != 'V') {
        //ADD SHIPPING COST
        let TempCurrentMonthShip = await page.$eval(`tbody > tr:nth-child(${iterations}) > td:nth-child(4)`, (el: { innerText: string; }) => el.innerText.substring(1));
        currentMonthShip += parseFloat(TempCurrentMonthShip);
      }
      iterations++;
    }

    //SEND DATA TO MAIN
    data.currentMonthShip = currentMonthShip;

    /**GO TO GET PREV MONTH SHIP**/
    await page.goto("https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&CurrentPage=LabelManagement&NewPeriod=LastMonth&COUNT=100&pg=1&searchBy=NONE&searchText=&Column=DATE_PURCHASED&SortOrder=DESCEND", {
      waitUntil: "domcontentloaded"
    });

    //GET # OF ITEMS
    numItems = await page.$$eval("tbody > tr:nth-child(2) > td:nth-child(4)", (le: { length: number; }) => le.length);
    iterations = 2;
    numItems = numItems - 1;
    //get shipping costs
    let lastMonthShip = 0;
    await page.waitFor(8000);
    while ((iterations - 1) <= numItems) {

      //IF SHIPPING LABEL HAS NOT BEEN VOIDED
      let shipStatus = await page.$eval(`tbody > tr:nth-child(${iterations}) > td:nth-child(7)`, (el: { innerText: string; }) => el.innerText);
      if (shipStatus.charAt(0) != 'V') {
        //ADD SHIPPING COST
        let TempLastMonthShip = await page.$eval(`tbody > tr:nth-child(${iterations}) > td:nth-child(4)`, (el: { innerText: string; }) => el.innerText.substring(1));
        lastMonthShip += parseFloat(TempLastMonthShip);
      }
      iterations++;
    }

    //SEND DATA TO MAIN
    data.lastMonthShip = lastMonthShip;

    /**GO TO GET CURRENT MONTH SOLD**/
    await page.goto("https://www.ebay.com/sh/ord/?offset=0&limit=50&filter=status%3AALL_ORDERS%2Ctimerange%3ACURRENTMONTH", {
      waitUntil: "domcontentloaded"
    });

    numItems = await page.$$eval("#mod-main-cntr > div.throbber-container > table > tbody > tr", (le: { length: number; }) => le.length);
    data.currentMonthItems = numItems / 3;
    iterations = 1;

    //get current month SOLD FOR
    let currentMonthSoldFor = 0;

    while (iterations <= numItems) {
      //GET STATUS
      let shipStatus = await page.$eval(`#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(${iterations}) > td:nth-child(2)`, (el: { innerText: string; }) => el.innerText);

      if (shipStatus.charAt(0) != 'C') {
        //IF HAS NOT BEEN CANCELED
        currentMonthSoldFor += parseFloat(await page.$eval(`#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(${iterations}) > td:nth-child(5)`, (el: { innerText: string; }) => el.innerText.substring(1)));
      }
      iterations = iterations + 3;
    }

    //SEND DATA TO MAIN
    data.currentMonthSoldFor = currentMonthSoldFor;

    /**GO TO GET PREV MONTH SOLD**/
    await page.goto("https://www.ebay.com/sh/ord/?filter=status%3AALL_ORDERS%2Ctimerange%3APREVIOUSMONTH", {
      waitUntil: "domcontentloaded"
    });

    numItems = await page.$$eval("#mod-main-cntr > div.throbber-container > table > tbody > tr", (le: { length: number; }) => le.length);
    data.lastMonthItems = numItems / 3;
    iterations = 1;
    //get current month SOLD FOR
    let lastMonthSoldFor = 0;

    while (iterations <= numItems) {
      //GET STATUS
      let shipStatus = await page.$eval(`#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(${iterations}) > td:nth-child(2)`, (el: { innerText: string; }) => el.innerText);
      if (shipStatus.charAt(0) != 'C') {
        //IF NOT CANCELED
        lastMonthSoldFor += parseFloat(await page.$eval(`#mod-main-cntr > div.throbber-container > table > tbody > tr:nth-child(${iterations}) > td:nth-child(5)`, (el: { innerText: string; }) => el.innerText.substring(1)));
      }
      iterations = iterations + 3;
    }

    //SEND DATA TO MAIN
    data.lastMonthSoldFor = lastMonthSoldFor;

    console.log(data);

    data.index.push[0];
    res.send(JSON.stringify(data));
    browser.close();
  } catch (e) {
    throw e;
  }
});

export default router;
