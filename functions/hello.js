//we can use netlify functions to create APIs as seen below in items array
/* const items = [
    {id:1, name:'John'},
    {id:2, name:'Dennis'}
] */

//domain/.netlify/functions/hello

exports.handler = async function(event,context) {
    return {
        statusCode:200,
        body:'Hello World', //body: JSON.stringify(items);
    }
}