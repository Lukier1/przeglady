module.exports = {
  friendlyName: 'AllBuildings',

  description: 'Get all buildings',

  exits: {
    success: {
      description: 'All buildings returned.'
    }
  },


  fn: async function (inputs, exits) {
    var buildings = await Building.find({});

    return exits.json(buildings);
  }
};
