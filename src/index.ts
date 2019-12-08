#!/usr/bin/env node
import { Default, Command, App, Param } from '@garygrossgarten/cli';
const open = require('open');
@App()
export class BlickCLI {
  @Default()
  @Command()
  default() {
    console.log('hey there from blick');
    // maybe open help here or blick.dev webapp
  }

  @Command()
  open(
    @Param({
      git: true,
      short: 'u',
      description: 'open url in blick.dev webapp'
    })
    url: string
  ) {
    if (url) return open(`https://blick.dev?url=${url}`);
    return open(`https://blick.dev`);
  }

  // @Command()
  // async test() {
  //   this.oof("call method oof");
  //   await exec('node . oof --param "exec method oof"');
  //   this.multiple("call", "method", "multiple");
  //   await exec("node . multiple --a exec --b method --c multiple");
  //   this.git("call method git");
  //   await exec('node . git "exec method git"');
  //   this.combined("call method", "combined");
  //   await exec('node . combined "exec" --param "method combined"');
  //   this.combinedReverse("call method", "combined reverse");
  //   await exec('node . combinedReverse --param "exec" "method combined"');
  // }

  // @Command()
  // multiple(@Param() a: string, @Param() b: string, @Param() c: string) {
  //   console.log(a, b, c);
  // }

  // @Command()
  // git(@Param({ git: true }) gitStyle: string) {
  //   console.log(gitStyle);
  // }

  // @Command()
  // combined(@Param({ git: true }) gitStyle: string, @Param() param: string) {
  //   console.log(gitStyle, param);
  // }

  // @Command()
  // combinedReverse(
  //   @Param() param: string,
  //   @Param({ git: true }) gitStyle: string
  // ) {
  //   console.log(param, gitStyle);
  // }
}
