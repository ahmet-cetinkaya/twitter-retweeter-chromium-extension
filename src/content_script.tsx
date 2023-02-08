chrome.runtime.onMessage.addListener(onMessageReceived);

function onMessageReceived(message: any, sender: chrome.runtime.MessageSender, sendResponse: CallableFunction) {
  switch (message.type) {
    case "RETWEET_ALL":
      const tweets = document.body.querySelectorAll('article[data-testid="tweet"]');
      let retweetCount = 0;

      tweets.forEach((tweet) => {
        const retweetButton: any = tweet.querySelector('div[data-testid="retweet"]');
        if (!retweetButton) return;
        retweetButton.click();

        const confirmButton: any = document.body.querySelector('div[data-testid="retweetConfirm"]');
        if (!confirmButton) return;
        confirmButton.click();

        ++retweetCount;
      });
      sendResponse(`Retweeted ${retweetCount} tweets`);

      sendResponse(`Getting new tweets`);
      window.scrollTo(0, document.body.scrollHeight);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
      break;
  }
}
