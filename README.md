# Twitter Retweeter Chromium Extension

Twitter Retweeter automatically retweets posts from a page.

## How to use the Twitter Retweeter Extension?
Step 1. Login your Twitter account on twitter.com

Step 2. Search for a term or hashtag or user profile

Step 3. Click on the icon resembling a blue retweet to  start retweeting

# Install

- Download :
  - https://github.com/ahmet-cetinkaya/twitter-retweeter-chromium-extension/releases/tag/lastest
  - Chrome Store: Soon
<img src="https://user-images.githubusercontent.com/53148314/217337723-d3c60ce4-36ce-4d23-b08c-f1016d632811.png" width="500">
<img src="https://user-images.githubusercontent.com/53148314/217337733-dac6a5fd-79e5-4ffd-bed1-406133266a7c.png" width="500">
<img src="https://user-images.githubusercontent.com/53148314/217337781-66e41c51-d20c-4442-bb96-759167bdbcf7.png" width="500">
<img src="https://user-images.githubusercontent.com/53148314/217337788-d12ca034-c47b-4d46-a4d3-093d320e06fd.png" width="500">
<img src="https://user-images.githubusercontent.com/53148314/217337809-3b271e01-3863-436f-8b95-d14786283d8a.png" width="500">

# Project

## Prerequisites

- [node + npm](https://nodejs.org/) (Current Version)

## Option

- [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

- TypeScript
- Webpack
- React
- Jest
- Example Code
  - Chrome Storage
  - Options Version 2
  - content script
  - count up badge number
  - background

## Project Structure

- src/typescript: TypeScript source files
- src/assets: static files
- dist: Chrome Extension directory
- dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test

`npx jest` or `npm run test`
