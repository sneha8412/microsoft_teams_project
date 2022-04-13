const notifyAll = document.getElementById('notify-button');
const checkPermission = document.getElementById('check-button');
const clearAll = document.getElementById('clear-button');
    
// For register.showNotification() API
notifyAll.addEventListener( 'click', () => {
	chrome.runtime.sendMessage( '', {
		type: 'persistent',
		message: text.value
	});
} );

clearAll.addEventListener( 'click', () => {
	chrome.runtime.sendMessage( '', {
		type: 'close-all'
	});
} );