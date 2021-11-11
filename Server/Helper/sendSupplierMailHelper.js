
// this function creates html from the template and send mail to the user
// for user authentication on signup or forget password

const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const sendMailFunc = require('./sendMail');

function readHTMLFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
            if (err) reject(err);
            resolve(html);
        });
    })
}
async function sendSupplierMail({ filePath, replacements, to, subject, bcc }) {
    try {
        let htmlFile = await readHTMLFile(filePath);
        // console.log('html',filePath);
        let template = handlebars.compile(htmlFile);
        var htmlToSend = template(replacements);
        // console.log('replacements', replacements, htmlToSend);

        let obj = {
            to,
            subject: subject || "Mail",
            html: htmlToSend,
            attachments: [
                {   // use URL as an attachment
                    filename: 'logo.png',
                    path: 'https://vishalconstructioncompany.com/static/media/vishal-logo.1dccbda9.png'
                }
            ]
        }
        // if deployment dont send mail
        if (process.env && process.env.NODE_ENV === 'development') {
            console.log("Dev server, not sending mail", process.env.NODE_ENV)
            return;
        }
        console.log("Sending Mail", process.env.NODE_ENV)
        let info = await sendMailFunc(obj);
        console.log("Email Function response", info)
        return info;
    }
    catch (e) {
        console.log('error', e);
    }
}

module.exports = sendSupplierMail;