import { test } from 'qunit';
import moduleForAcceptance from 'phanlinks/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should redirect to about the company', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should redirect automatically');
  });
});

test('should link to become a provider', function(assert) {
  visit('/');
  click('a:contains("Become")');
  andThen(function() {
    assert.equal(currentURL(), '/become-provider', 'should navigate to become provider');
  });
});

test('should link to contact information', function(assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should link to product information', function(assert) {
  visit('/');
  click('a:contains("Works")');
  andThen(function() {
    assert.equal(currentURL(), '/how-it-works', 'should navigate to how it works');
  });
});

test('should link to registration', function(assert) {
  visit('/');
  click('a:contains("Registration")');
  andThen(function() {
    assert.equal(currentURL(), '/registration', 'should navigate to registration');
  });
});
