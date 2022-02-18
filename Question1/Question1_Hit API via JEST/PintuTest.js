const superagent = require('superagent');
const transport = 'https://jsonplaceholder.typicode.com';

var resp;

var getJsonPlaceHolder = async(title, body, userId) => {
    resp = await superagent.post(transport + '/posts')
    .set('accept', '*/*')
    .send({
        "title": title,
        "body": body,
        "userId": userId
    })
        .then(res => {
            console.log('API Request: \n', JSON.stringify(res.request, null, 4));
            console.log('API Response : \n', res.statusCode, ' \n ', res.body);
            return res;
        })
        .catch(err => {
            console.log('API Request: \n', JSON.stringify(err.response.request, null, 4));
            console.log('API Response : \n', err.response.statusCode, ' \n ', err.response.body);
            return err;
        })
    return resp;
}

(async() => {
    var hit = await getJsonPlaceHolder("recommendation", "motorcycle", 12);
})();

module.exports = { getJsonPlaceHolder };