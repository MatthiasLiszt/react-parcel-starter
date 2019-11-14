# react-parcel-starter and coffee drinking game 

A React parcel starter project

This repo implements a "coffee drinking game". You can click on the coffee cups to empty them and the coffee cups fill faster with time. 

The serviceworker has not been fully tested yet but I guess it should work as it doesn't anything extrodinary difficult. 

## QuickStart

You can skip installing and just go to the *dist directory* and run something like  
```bash
python -m SimpleHTTPServer 1234
```
to run the game at **localhost:1234** . 

## ServiceWorker - how to install it 

The serviceworker is in the serviceworker directory inside the src directory. It was manually added after the distribution was build with **npm run build**.
The register.js for registering the serviceworker was added with script-tags. The serviceworker.js file was copied into the *dist* directory.

You can check if the serviceworker is installed on the Chrome browser by *chrome://inspect/#service-workers*.

## Usage

Clone the repo and and do as being told in the **builiding section**. Afterwards the program or game should run on 
*localhost:1234* . Have fun with it! 

### Building

To start the development server with hot module reloading, run:

* `npm start`

To build for production

* first remove the folders `dist` and `.cache`
* then run: `npm run build`

## What's included

- Bundling with parcel
- Dev server with hot module replacement
- React 16
- styled-components

*Note, parcel is currently unable to support minfication os ES2015 code—github.com/parcel-bundler/parcel/issues/8*
