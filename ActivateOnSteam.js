ActivateSteam = function(selection){
	var query = selection.selectionText;
	chrome.tabs.create({url: "https://store.steampowered.com/account/registerkey?key=" + query});
};

chrome.extension.onRequest.addListener(function(request) {
	chrome.contextMenus.removeAll(function() {
		if(request.cmd == "mnu_create") {
			chrome.contextMenus.create({
				"title" : "Activate on Steam",
				"contexts" : ["selection"],
				"onclick" : ActivateSteam
			});
		}
	});
});