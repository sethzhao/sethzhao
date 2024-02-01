最近有开发币安小程序的需求，看了一下它的[文档](https://developers.binance.com/docs/mini-program/quick-start)，发现基本上是微信小程序的改版。

开发方式按照官方文档指导是用 [@binance/mp-cli](https://www.npmjs.com/package/@binance/mp-cli) 这个命令行工具创建项目，过程中可以选择用 React 或者 Vue2 开发，创建以后可以发现是一个 [Taro](https://docs.taro.zone/) 项目。

Taro 可以用 React、Vue 去开发各种平台的小程序。所以币安小程序基本就是把各种现成的东西拿来改吧改吧变成自己的。

我的问题是我想用 Vue3 来开发，但是币安的命令行工具创建的项目不支持。而 Taro 本身是支持 Vue3 的。

看了 Taro 的文档发现它支持通过编写端平台插件来扩展它能编译到的平台，显然币安小程序也是用这种方式来使得 Taro 能开发它的小程序。

我去看了 @binance/mp-cli 的源代码，其中确实有这部分代码，我把它提取出来，用 Taro 官方工具创建项目后把插件放进去，就实现了用 Vue3 开发币安小程序的需求。

提取出来的插件我发了个包：[taro-plugin-platform-binance](https://www.npmjs.com/package/taro-plugin-platform-binance)。

希望对同踩进这个坑的朋友有帮助吧。

