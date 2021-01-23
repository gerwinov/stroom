const fsp = require('fs').promises
const path = require('path')

const webpackAsset = async name => {
    const manifestData = await fsp.readFile(
        path.resolve(__dirname, '../dist/manifest.json'),
    )
    const manifest = JSON.parse(manifestData)

    return manifest[name];
}

module.exports = {
    webpackAsset,
}
