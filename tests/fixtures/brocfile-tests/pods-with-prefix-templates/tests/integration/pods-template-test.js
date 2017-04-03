import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import { module, test } from 'qunit';

module('pods based templates', {
  beforeEach() {
    this.application = startApp();
  },
  afterEach() {
    destroyApp(this.application);
  }
});


test('the application boots properly with pods based templates with a podModulePrefix set', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(function() {
    assert.equal(Ember.$('#title').text(), 'ZOMG, PODS WORKS!!');
  });
});
