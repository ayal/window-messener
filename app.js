window.addEventListener('message', (event) => {
  if (event.data.pubsub) { // get a message on window from user and pass it to wix that publishes it to channel
    console.log('got message from user, passing it to wix for publishing to channel', event.data.pubsub);
    window.parent.postMessage({pubsub_to_wix: event.data.pubsub}, '*');
  }
  if (event.data.pubsub_from_wix) { // get a message on window from wix and pass it to user
    console.log('got message from wix, passing it to user', event.data.pubsub_from_wix);
    window.parent.parent.postMessage({pubsub: event.data.pubsub_from_wix}, '*');
  }
})
