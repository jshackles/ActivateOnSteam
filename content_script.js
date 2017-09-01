document.addEventListener("mousedown", function(event){
	var selection = window.getSelection().toString();
	if(selection.match(/\w{5}\-\w{5}\-\w{5}/) || selection.match(/\w{5}\-\w{5}\-\w{5}\-\w{5}\-\w{5}/) || selection.match(/\w{15} \w{2}/)) {
		chrome.extension.sendRequest({cmd: "mnu_create"});
	} else {
		chrome.extension.sendRequest({cmd: "mnu_del"});
	}
}, true);