import puppeteer, { Page } from 'puppeteer';


/**
 * @param { Page } page `ilga.gov/legislation/ilcs/ilcs.asp` or any subpages
 *  
 * @returns { Array } of strings representing an index of chapters or acts on the page
 */
async function getArrayOfChapters(page) {
    let index = await page.$eval('td ul', el => el.innerText);
    return index.split('\n').filter((el) => el !== '');
}

/**
 * @param { Page } page `ilga.gov/legislation/ilcs/ilcs.asp` or any subpages listing chapters or acts
 * 
 * @returns { Array } of strings representing all the topical links on a ilga ilcs page
 */
async function getArrayOfLinks(page) {
    let links = await page.$$eval('td ul a', (els) => els.map((el) => {
        return {
            text: el.innerText,
            href: el.href
        }
    }));
    return links;
}

/**
 * @param { Array } index is the index returned from getPageIndex(),
 * but can be any array of strings formatted the same way as on the ilga website
 * 
 * @returns { Array } filtered to just the major topics of legislation 
 */
function getMajorTopics(index) {
    return index.filter((el) => !el.includes('CHAPTER'));
}


/**
 * @param { Array } index is the index returned from getPageIndex(),
 * @returns { Array } filtered to just chapter numbers
 */
function getChapterNumbers(index) {
    return index
            .filter((el) => el.includes('CHAPTER'))
            .map((el) => el.match(/\d+/)[0]);
}


/**
 * @param { Array } index is the index returned from getPageIndex(),
 * @returns { Array } filtered to just the chapter topics
 */
function getChapterTopics(index) {
    let chapters = index.filter((el) => el.includes('CHAPTER'));

    // there should be a more concise way to do this
    chapters = chapters.map((el) => el.replace('CHAPTER', '').trim().substring(4).trim() );

    // here's some other ways I tried that didn't work
    // chapters = chapters.map((el) => el.slice(2));
    // chapters = chapters.map((el) => el.join(' '));

    return chapters;
}


const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.ilga.gov/legislation/ilcs/ilcs.asp');

let index = await getArrayOfChapters(page);
let links = await getArrayOfLinks(page);
console.log(links);

let topics = getMajorTopics(index);
let chapters = getChapterTopics(index);
let chapterNumbers = getChapterNumbers(index);


console.log(topics, chapters, chapterNumbers);

await browser.close();