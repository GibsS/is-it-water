const http = require('https');
const PNG = require("pngjs").PNG;

const URL = "https://maps.googleapis.com/maps/api/staticmap?";

async function isItWater(lat, lon, access_token) {
    return new Promise((res, rej) => {
        const url = URL
            + "center=" + lat + "," + lon
            + "&zoom=14"
            + "&size=1x1"
            + "&style=feature:water|color:0xFFFFFF"
            + "&style=feature:road|visibility:off"
            + "&style=feature:poi|visibility:off"
            + "&style=feature:transit|visibility:off"
            + "&style=feature:administrative|visibility:off"
            + "&style=feature:landscape|visibility:off"
            + "&key=" + access_token;

        http.get(url, response => {
            response
                .pipe(new PNG({ filterType: 4 }))
                .on('parsed', function() {
                    res(this.data[0] == 255);
                })
                .on('error', function(err) {
                    const errorMessage = "Failed to check water. Make sure your google access token has permissions to google map static.";
                    console.error(errorMessage);
                    rej({ message: errorMessage});
                });
        })
    });
}

module.exports = isItWater;