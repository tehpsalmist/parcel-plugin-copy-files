# parcel-plugin-copy-files
Copies a list of files straight into your dist directory

## Usage

package.json

```js
{
  "files-to-copy": [
    {
      "source": "./assets/img.png",
      "target": "./assets/my-img.png"
    },
    "./node_modules/special-package/dist/worker.js"
  ]
}
```

Files will be placed in the dist folder at the top level, unless the object syntax is used, with a target that contains a name indicating a nested structure.

In the example above, the `dist` folder will end up with a `worker.js` file and an `/assets/my-img.png` file. The `target` string will be used to resolve the file from the `dist` directory, so you probably don't want to begin with a `/`. Either `./name` or `name` is likely what you're going for if you want the file to be created at `dist/name`.
