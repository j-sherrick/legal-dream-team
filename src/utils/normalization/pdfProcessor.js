import { readFileSync } from 'fs';
import Pdf from 'pdf-parse';
const mypath = '../../../data/raw/pdf/ilcs-index.pdf';
const inputPdf = readFileSync(mypath);

if(inputPdf) console.log('PDF file was loaded into buffer');

const ilcs = await Pdf(inputPdf);
if(ilcs) {
    console.log(`Congratulations on your recent success! ${ilcs.numpages} pdf pages are at your disposal.`);
    console.log(`Here is some information about the file:\n${ilcs.text}`);
}
else console.log('something has gone wrong');