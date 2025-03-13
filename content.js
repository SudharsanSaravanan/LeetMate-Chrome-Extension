chrome.storage.sync.get("blockedSites", function(data) {
  var blockedSites = data.blockedSites;

  for (var i = 0; i < blockedSites.length; i++) {
    if (window.location.href.includes(blockedSites[i])) {
      document.documentElement.innerHTML = "";
    setTimeout(() => {
        window.location.href = "https://leetcode.com/";
    }, 2000);
    }
  }
});