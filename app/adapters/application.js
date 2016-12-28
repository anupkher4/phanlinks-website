import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://api.phanlinks.com',
  headers: {
    'Content-Type': 'application/json'
  }
});
