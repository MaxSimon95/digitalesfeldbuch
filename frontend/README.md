## Einmalige Vorbereitung / Einrichtung Entwicklungsumgebung 
```
# Vue installieren (JS-Frontendframework)
npm install -g vue-cli

# Cordova installieren (Framework um aus JS/HTML/CSS Androidtaugliche Hybrid-Apps zu bauen )
npm install -g cordova

# Android SDK installieren
# http://www.androiddocs.com/sdk/installing/index.html
```
## Build Setup (ohne Anpassungen aus der ursprünglichen vue Readme übernommen)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Auf mobilen Endgeräten / AVD (Android Virtual Devices) testen, geht folgendermaßen:
```
# Einmal pro Zielplattform: Gewünschte Zielplattformen mittels cordova hinzufügen, z.B.:
cordova platform add android@6.x.x —-save

# Das Projekt bauen, siehe oben bei Build Setup
npm run build

# AVD im emulator starten: 
Android studio: AVD manager --> Actions --> grüner play button

# Cordova app in geöffneten android-emulator laden:
cordova emulate android

# Dann kann man sich die gebuildete App im AVD anschauen, oder im Browser via digitalesfeldbuch\www\dist\index.html
