const credentials = {
    apiKey: process.env.AFRICA_TALKING_API,
    username: process.env.AFRICA_TALKING_USERNAME
}

const AfricasTalking = require('africastalking')(credentials);
const airtime = AfricasTalking.AIRTIME

exports.sendAirtime = (options)=>{
    airtime.send(options).then(res=>{
        console.log('Airtime Sent');
    }).catch(err=>{
        console.log('Error sending airtime: ',err);
    })
}