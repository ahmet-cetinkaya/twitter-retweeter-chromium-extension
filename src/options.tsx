import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Options = () => {
  useEffect(() => {
    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    chrome.storage.sync.get({}, (items) => {});
  }, []);

  const saveOptions = () => {
    // Saves options to chrome.storage.sync.
    chrome.storage.sync.set({}, () => {
      // Update status to let user know options were saved.
    });
  };

  return <></>;
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);
