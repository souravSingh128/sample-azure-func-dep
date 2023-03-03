module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.name || (req.body && req.body.name);
  responseMessage = `this is second function executed by ${name}`;

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
