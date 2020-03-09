const path = require('path')
const fs = require('fs')

module.exports = function (bundler) {
  const pkg = JSON.parse(fs.readFileSync('./package.json'))

  bundler.on('bundled', bundle => {
    const bundleDir = path.dirname(bundle.name || bundler.mainBundle.childBundles.values().next().value.name)

    for (const file of (pkg['files-to-copy'] || [])) {
      const filePath = path.resolve(process.cwd(), file.source || file)

      const targetPath = path.resolve(bundleDir, file.target || path.basename(file))

      fs.copyFile(file, targetPath, err => err && console.error(err))
    }

    for (const childBundle of bundle.childBundles) {
      bundler.watch(file, childBundle.entryAsset)
    }
  })
}
