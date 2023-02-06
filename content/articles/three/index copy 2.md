---
title: "0から始めるthree.js入門"
description: "This description will be used for the article listing and search results on Google."
date: "2022-02-02"
banner:
  src: "../../images/articles/three/threejs.jpg"
  alt: "First Markdown Post"
  caption: ''
categories:
  - "three.js"
keywords:
  - "three.js"
---

## three.jsとは

[three.js](https://threejs.org/)とは、**手軽に3Dコンテンツを制作できる商用利用可能なJavaScriptライブラリ**。WebGLだけで3D表現をするためには、立方体1つ表示するだけでも多くのJavaScriptやGLSLコードを書く必要があり専門知識も必要です。three.jsを使えばJavaScriptの知識だけで簡単に3Dコンテンツが作成できるため、手軽に扱えるようになります。

もともと2000年代後半のFlashの時代から、ウェブの3D表現が人気を集めてきました。今では標準技術としてのWebGLが、ゲームやビジュアライゼーションなどの多くの場面で採用されています。**WebGLとThree.jsは実際に多くのサイトで使用されており**、ユーザーに印象に残るウェブコンテンツには欠かせない技術となっています。また、**JSライブラリの容量も126KB（GZIP）しかなく、とても軽量です**。

**本記事でthree.jsのコードをどのように書き始めていくかを学んでいきます**。

## Homebrewのインストール方法

下記のコマンドをターミナル（Terminal）に貼り付け実行します。

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```

ターミナル自体は、MacのSpotlight検索バーに「ターミナル」や「たーみなる」などと打ち込むことで立ち上げることができます。

上記のコマンドをターミナル（Terminal）に貼り付けEnterキーを押して実行してみてください。

途中、ターミナルに出力されるメッセージに従い進めてください。Enterキーを押す必要も環境によっては複数回ある場合があります。

### インストールされたかを確認する

インストールされたか確認するには、ターミナルに以下のコマンドを打ち込みます。

```
brew help
```

実行後、以下のような出力が出れば無事インストールされています。

```
Example usage:
  brew search TEXT|/REGEX/
  brew info [FORMULA|CASK...]
  brew install FORMULA|CASK...
  brew update
  brew upgrade [FORMULA|CASK...]
  brew uninstall FORMULA|CASK...
  brew list [FORMULA|CASK...]

Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA|CASK

Contributing:
  brew create URL [--no-fetch]
  brew edit [FORMULA|CASK...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh
```



