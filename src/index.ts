#!/usr/bin/env node
import {
  Default,
  Command,
  App,
  Param,
  exec,
  color,
  Colors
} from '@garygrossgarten/cli';
import open = require('open');
@App()
export class BlickCLI {
  @Default()
  @Command()
  default() {
    console.log('hey there from blick.');
    // maybe open help here or blick.dev webapp
    console.log(
      `Use ${color(
        Colors.Yellow,
        'blick open <$URL>'
      )} to open the electron app.`
    );
    console.log(
      `Use ${color(Colors.Yellow, 'blick browser <$URL>')} to open the web app.`
    );
  }

  @Command()
  async open(
    @Param({
      git: true,
      short: 'u',
      description: 'open url in blick.dev electron app'
    })
    url: string
  ) {
    if (process.mainModule) {
      try {
        const isInstalledGlobally = require('is-installed-globally');
        const path = process.mainModule.filename.split('/');
        let base = isInstalledGlobally
          ? path.slice(0, path.length - 2).join('/')
          : path.slice(0, path.length - 5).join('/');
        if (url)
          return await exec(
            `${base}/node_modules/.bin/electron ${base}/node_modules/@blick.dev/app/dist/index.js --url ${url}`
          );
        return await exec(
          `${base}/node_modules/.bin/electron ${base}/node_modules/@blick.dev/app/dist/index.js`
        );
      } catch (err) {
        console.error(err);
      }
    }
  }

  @Command()
  async browser(
    @Param({
      git: true,
      short: 'u',
      description: 'open url in blick.dev webapp'
    })
    url: string
  ) {
    try {
      if (url) return await open(`https://blick.dev?url=${url}`);
      return await open(`https://blick.dev`);
    } catch (err) {
      console.error(err);
    }
  }
}
