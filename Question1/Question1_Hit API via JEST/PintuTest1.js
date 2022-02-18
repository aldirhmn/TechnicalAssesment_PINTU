const superagent = require('superagent');
const transport = 'https://jsonplaceholder.typicode.com';

var resp;

var getJsonPlaceHolder = async(data) => {
    resp = await superagent.get(transport + '/posts')
    .set('accept', '*/*')
    .send({
        "data": data
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
    var hit = await getJsonPlaceHolder("data");
    //     if (hit.body) {
    //     console.log('success : ' + hit.statusCode);
    //     console.log(hit.body);
    // } else {
    //     console.log('error : ' + hit.response.statusCode);
    //     console.log(hit.response.body);
    // }
})();

module.exports = { getJsonPlaceHolder };