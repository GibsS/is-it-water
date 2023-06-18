# Google Maps Static API, am I in water?

A simple way of checking if a lat long coordinate is in water.

**Caution: This is a hacky way of checking for water using Google Maps Static API, we do not guarantee this is the best way to do it in a live environment.**

**This is ideal for one off polling of a few hundred or a few thousand data points.**

**To do these types of requests in a live environment, seek alternatives such as hosting your own Open Street Map server.**

# Setup

To use this package, you need access to the Google Maps Static API. Follow this guide here to get an access token: https://developers.google.com/maps/documentation/maps-static/get-api-key

Then install the package using:

```bash
npm install --save is-it-water
```

# Use

To check if a given lat long coordinate sits in water, simply run the following:

```js
const isItWater = require("is-it-water");

const inWater = await isItWater(lat, lon, your_google_maps_static_access_token);
```
