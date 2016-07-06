/**
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.

You'll also need to add (or modify) the onclick attribute to your links. Use this example as a model for your own links:

<a href="http://www.example.com" onclick="trackOutboundLink('http://www.example.com'); return false;">Check out example.com</a>

*/
var trackOutboundLink = function(url) {
  if(typeof ga == 'function'){
    console.log("!!!!trackOutboundLink: " + url);   
    ga('send', 'event', 'outbound', 'click', url, {
       'transport': 'beacon',
       'hitCallback': function(){document.location = url;}
     });
  }else{
    window.location=url;
  }
}
