// helper function that sends mail to user

const axios = require('axios');

const configrations = {
    method: 'post',
    url: 'http://byebyesms.com/app/smsapi/index.php?',
    headers: {
        'Cookie': 'PHPSESSID=4h1s216t995mgr2e713v8jtsu6'
    }
}
async function sendsms(obj) {
    let key = process.env.SMS_GATEWAY_KEY;
    let campaign = process.env.SMS_GATEWAY_CAMPAIGN;
    let routeID = process.env.SMS_GATEWAY_ROUTEID;
    let senderID = process.env.SMS_GATEWAY_SENDERID;

    configrations.url = configrations.url + 'key=' + key + '&campaign=' + campaign + '&routeid=' + routeID +
        '&type=text&contacts=' + obj.mobile + '&senderid=' + senderID + '&msg=' + obj.message;
    let smsResponse = await axios(configrations);
    console.log('smsResponse is', smsResponse)

}
// sendsms({
//     mobile: 9802953333,
//     message: 'API TESTING From Node LOCAL'
// });


module.exports = sendsms;