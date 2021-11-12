// this function creates html from the template and send mail to the user
// for user authentication on signup or forget password

const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendMailFunc = require("./sendMail");

function readHTMLFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: "utf-8" }, (err, html) => {
            if (err) reject(err);
            resolve(html);
        });
    });
}
async function sendSupplierMail({ filePath, replacements, to, subject, bcc }) {
    try {
        let htmlFile = await readHTMLFile(filePath);
        // console.log('html',filePath);
        let template = handlebars.compile(htmlFile);
        var htmlToSend = template(replacements);
        // console.log('replacements', replacements, htmlToSend);
        filePath = path.join(
            process.cwd(),
            "../uploads/suppliers",
            "file-1636724810020.pdf"
        );
        let info;
        fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
            if (!err) {
                console.log('i am inside error', err)
                let obj = {
                    to,
                    subject: subject || "Mail",
                    html: htmlToSend,
                    attachments: [
                        {
                            // use URL as an attachment
                            filename: "supplier.docx",
                            content: data,
                        },
                    ],
                };
                console.log("Sending Mail", process.env.NODE_ENV);
                info = sendMailFunc(obj);
                console.log("Email Function response", info);
            } else {
                console.log('i am inside data', data)
                console.log('error is ', err);
                let obj = {
                    to,
                    subject: subject || "Mail",
                    html: htmlToSend,
                };
                console.log("Sending Mail", process.env.NODE_ENV);
                info = sendMailFunc(obj);
                console.log("Email Function response", info);
            }
        });
        // if deployment dont send mail
        if (process.env && process.env.NODE_ENV === "development") {
            console.log("Dev server, not sending mail", process.env.NODE_ENV);
            return;
        }

        return info;
    } catch (e) {
        console.log("error", e);
    }
}

module.exports = sendSupplierMail;
