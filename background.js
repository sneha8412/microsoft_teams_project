chrome.runtime.onMessage.addListener( data => {
	if ( data.type === 'persistent' ) {
			
		const title = 'Tranferred by Contoso reception';
        const icon = './icons/pikachu-128.png';
		const options = {
		  body: 'Jane Smith is calling',
		  icon: './icons/pikachu-128.png',
		};

		registration.showNotification(title, icon, options);
	}

	// closes all service worker originated notifications via registration.showNotifications
	if (data.type == "close-all" )
	{
		// see: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/getNotifications
		if (registration !== null) {
			registration.getNotifications()
			  .then((resultList) => {
				console.log(`Clearing <b>${resultList.length}</b> notifications!`)
	  
				resultList.forEach((notification) => {
				  notification.close();
				});
			  }).catch((error) => {
				console.log(`getNotifications() failed: ${error}.`);
			  });
		  }
	}
});