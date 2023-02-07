chrome.runtime.onMessage.addListener(onMessageReceived);

function onMessageReceived(
  message: any,
  sender: chrome.runtime.MessageSender,
  sendResponse: CallableFunction
) {
  switch (message.type) {
    case "RETWEET_ALL":
      const tweets = document.body.querySelectorAll(
        'article[data-testid="tweet"]'
      );

      tweets.forEach((tweet) => {
        const retweetButton: any = tweet.querySelector(
          'div[data-testid="retweet"]'
        );
        if (!retweetButton) return;

        retweetButton.click();

        const confirmButton: any = document.body.querySelector(
          'div[data-testid="retweetConfirm"]'
        );
        if (!confirmButton) return;

        confirmButton.click();
      });
      break;
  }
}
