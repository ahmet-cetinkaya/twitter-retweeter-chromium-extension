let runningOnTabIds: number[] = [];

chrome.action.onClicked.addListener(onBadgeClicked);
chrome.alarms.onAlarm.addListener(onAlarmTriggered);
chrome.tabs.onActivated.addListener(onTabChanged);

function onBadgeClicked(tab: chrome.tabs.Tab) {
  chrome.alarms.get(tab.id!.toString(), (alarm) => {
    if (alarm) {
      console.log("Stopping retweeting on", tab.id);
      runningOnTabIds = runningOnTabIds.filter(id => id !== tab.id!);
      chrome.alarms.clear(tab.id!.toString());
      chrome.action.setBadgeText({ text: "OFF" });
      return;
    }

    console.log("Started retweeting on", tab.id);
    runningOnTabIds.push(tab.id!);
    chrome.action.setBadgeText({ text: "ON" });
    chrome.tabs.sendMessage(tab.id!, { type: "RETWEET_ALL" }, responseCallback);
    chrome.alarms.create(tab.id!.toString(), { periodInMinutes: 1 });
  });
}

function onAlarmTriggered(alarm: chrome.alarms.Alarm) {
  const tabId = Number(alarm.name);

  chrome.tabs.get(tabId).then((tab) => {
    if (tab === undefined) {
      console.log(`Tab that has ${tabId} id is not found. Stopping retweeting`);
      runningOnTabIds = runningOnTabIds.filter(id => id !== tabId);
      chrome.alarms.clear(alarm.name);
      return;
    }

    console.log("Retweeting on", tabId);
    chrome.tabs.sendMessage(tabId, { type: "RETWEET_ALL" }, responseCallback);
  });
}

function onTabChanged(tab: chrome.tabs.TabActiveInfo) {
  if (runningOnTabIds.includes(tab.tabId))
    chrome.action.setBadgeText({ text: "ON" });
  else chrome.action.setBadgeText({ text: "OFF" });
}

function responseCallback(response: any) {
  console.log(response);
}