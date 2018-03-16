/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  
  console.log(context.body);
  console.log(context.secrets.slack_key);
  cb(null, { hello: context.query.name || 'Anonymous' });
};