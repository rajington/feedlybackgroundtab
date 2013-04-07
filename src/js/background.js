/**
 * Background Processing Script
 *
 * This handles receiving the messages and opening up the new tab
 *
 * @author Aaron Saray (http://aaronsaray.com)
 * @author Rajarshi Nigam
 */

/**
 * The id of the target window to open new tabs in
 * @type {integer}
 * @private
 */
var windowId = chrome.windows.WINDOW_ID_NONE;

/**
 * Add message listener
 *
 * This will open up a new non-focused tab with the url it was sent
 */
chrome.extension.onMessage.addListener(
	function(messageObject) {
		// if there is currently no target window to open tabs in
		if( windowId == chrome.windows.WINDOW_ID_NONE){
			// create a target window
			chrome.windows.create({url: messageObject.url}, function(newWindow){
				// remember its id
				windowId = newWindow.id;
				
				// be notified when windows are closed
				chrome.windows.onRemoved.addListener(function(closedWindow){
					// if the target window is the one being closed
					if(windowId == closedWindow){
						// forget the target window's id
						windowId = chrome.windows.WINDOW_ID_NONE;
					}
				});
			});
		} else {
			// create a tab on the target window
			chrome.tabs.create({
				url: messageObject.url,
				windowId: windowId
			});
		}
	}
);

/**
 * Notify users of updates/installed versions
 */
chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason == 'update') {
		var url = '';
		switch (details.previousVersion) {
			case "0.1":
				// big update: added options and customized key
				url = 'data:text/html,<h1>FeedlyWindowTab Updated!</h1><p>Feedly Background Tab has been updated.  Please check the <a href="https://chrome.google.com/webstore/detail/feedly-background-tab/gjlijkhcebalcchkhgaiflaooghmoegk">extension page</a> for more information.</p>';
				break;
		}
		if (url) {
			chrome.tabs.create({
	            url: url
	        });
		}
	}
});