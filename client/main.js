import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//If serviceWorker supports, then register it.
if ("serviceWorker" in navigator) {
navigator.serviceWorker.register('./serviceWorker.js', { scope: "./" }) //setting scope of sw
.then(function (registration) {
  console.info('Service worker is registered!');
})
.catch(function (error) {
  console.error('Service worker failed ', error);
});
}

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
