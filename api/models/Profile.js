module.exports = {
  attributes: {
    subject: {type: 'string', required: true, unique : true, maxLength: 128},
    firstName: {type: 'string', required: false, maxLength: 100},
    lastName: {type: 'string', required: false, maxLength: 100}
  }
};
