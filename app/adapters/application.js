import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://api.phanlinks.com',
  headers: {
    'Content-Type': 'application/json'
  },
  handleResponse: function(status, headers, payload, requestData) {
    if (this.isInvalid(...arguments)) {
      payload.errors = DS.errorsHashToArray(payload.errors);
    }

    return this._super(...arguments);
  }
});
