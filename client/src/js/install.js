const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    event = window.deferredPrompt
    butInstall.classList.toggle('hidden', false);
    console.log(`'beforeinstallprompt' event was fired.`)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const thisPrompt = window.deferredPrompt;
    if(!thisPrompt) return;
    // show the install prompt
    thisPrompt.prompt();
    // hide button on click
    butInstall.classList.toggle('hidden', true)
    // used the prompt so set as null
    window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;

});
