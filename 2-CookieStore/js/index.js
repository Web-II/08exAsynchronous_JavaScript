import * as helpers from '../modules/helpers.js';

function init() {
  const day = 24 * 60 * 60 * 1000;
  const promise = cookieStore.set({
    name: 'cookie1',
    value: 'cookie1-value',
    expires: Date.now() + day,
  });

  promise.then(() => {
    helpers.addMessage('cookie1 created');
  });
}

window.onload = init;
