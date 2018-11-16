module.exports = {
  attributes: {
    id: {type: 'number', required: true, unique: true},
    name: {type: 'string', required: true, maxLength: 100},
    city: {type: 'string', required: true, maxLength: 100},
    street: {type: 'string', required: true, maxLength: 100},
    streetNo: {type: 'number', required: true}
  }
};
