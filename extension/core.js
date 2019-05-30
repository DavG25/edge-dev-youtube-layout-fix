//	core.js
//		This file will handle the webRequest


//	Define the User-Agent header to use on working sites
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36";


//	Hook event to webRequest before the browser headers are sent
chrome.webRequest.onBeforeSendHeaders.addListener(
	//	Get request details
    function(details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
			//	Check if current detail header is User-Agent
            if (details.requestHeaders[i].name === 'User-Agent') {
				//	Change User-Agent header
                details.requestHeaders[i].value = UA;
                break;
            }
        }
		//	Return headers
        return {requestHeaders: details.requestHeaders};
    },
	//	Working sites list
	{urls: ['*://*.youtube.com/*']},
	//	Type of event
	['blocking', 'requestHeaders']
);