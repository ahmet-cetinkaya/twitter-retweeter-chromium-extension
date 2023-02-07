const interval: any = {};
const runningOnTabIds: number[] = [];

chrome.action.onClicked.addListener(onBadgeClicked);
chrome.tabs.onActivated.addListener(onTabChanged);

function onBadgeClicked(tab: chrome.tabs.Tab) {
  if (
    interval[tab.id!.toString()] === undefined ||
    interval[tab.id!.toString()] === null
  ) {
    console.log("Started retweeting on", tab.id);

    chrome.action.setBadgeText({ text: "ON" });

    interval[tab.id!.toString()] = setInterval(() => {
      console.log("Retweeting on", tab.id);

      runningOnTabIds.push(tab.id!);
      chrome.tabs.sendMessage(tab.id!, { type: "RETWEET_ALL" });
    }, 1000); // 30 *
  } else {
    console.log("Stopping on", tab.id);

    chrome.action.setBadgeText({ text: "OFF" });
    clearInterval(interval[tab.id!.toString()]);
    interval[tab.id!.toString()] = null;
  }
}

function onTabChanged(tab: chrome.tabs.TabActiveInfo) {
  if (runningOnTabIds.includes(tab.tabId))
    chrome.action.setBadgeText({ text: "ON" });
  else chrome.action.setBadgeText({ text: "OFF" });
}
