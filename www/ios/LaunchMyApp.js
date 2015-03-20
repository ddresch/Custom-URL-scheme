"use strict";

function handleOpenURL(url) {
	console.log('LaunchMyApp handleOpenURL called.');
  setTimeout(function() {
  	if(Package['meteor']){
  		console.log('Meteor Package loaded.');
  	}
    alert("received url: " + url);
  }, 0);
}

/*
 Q: Why an empty file?
 A: iOS doesn't need plumbing to get the plugin to work, so..
    - Including no file would mean the import in index.html would differ per platform.
    - Also, using one version and adding a userAgent check for Android feels wrong.
    - And if you're not using PhoneGap Build, you could paste your handleOpenUrl JS function here.
*/
