---
title: "GatsbyJS入門"
description: "This description will be used for the article listing and search results on Google."
date: "2022-02-02"
banner:
  src: "../../images/articles/Gatsby/Gatsby.jpg"
  alt: "First Markdown Post"
  caption: ''
categories:
  - "Gatsby"
keywords:
  - "Gatsby"
---

## Gatsbyとは

GatsbyはStatic Site Generator(静的サイトジェネレーター)でReactをベースに開発されているフレームワークです。Gatsbyを理解するためにはJavaScriptだけではなくReact, GraphQLなどの基礎知識が必要となります。

Gatsbyではデータを取得する際にはGraphQLを利用します。GraphQLを使って内部リソースのMarkdownファイル、データベース、CSVファイルまたは外部リソースのContentfulやWordPressなどさまざまなリソースからデータを取得することができます。WordPressのテーマに対応するStarter(スターター)やPlugin(プラグイン)も豊富にあるため効率的にサイト構築を行うことができます。

Gatsbyを使いこなすためにはPluginにどのようなものがあるかも理解する必要があります。ファイルへのアクセスや画像の処理などすべてプラグインを追加することで機能を利用することができます。

Gatsbyを利用する主な理由にはサイトの高速化や画像の最適化、セキュリティ対策といったものがあります。

サイトの高速化は静的サイトジェネレターという機能で実現されています。WordPressのようにブラウザからアクセスがあった場合にデータベースに保存されている記事情報をSQLでデータベースから取得して動的にページ作成するのではなく静的ページを事前に作成（ビルド）しておくことで高速化を図ります。

最近はPCからだけではなくスマホやタブレットPCなどさまざまなデバイスからのアクセスがあります。サイトによってはスマホからのアクセスが大半を占めるサイトもあります。それぞれのデバイスに合わせて自動で画像を調整してくれる画像の最適化機能をGatsbyは持っており画像を調整するための煩雑な設定から開放されます。

Gatsbyでは事前に静的ページを作成するためにデータベースへのアクセスを行う必要がありません。またHeadless CMSのContentfullからデータを取得することもできるためGatsbyが稼働するサーバにデータを持たせないことも可能です。そのためGatsby経由でデータベースに保管されている重要なデータへアクセスされる可能性がなくセキュリティへの不安を下げることができます。
<br>

## GatsbyJSのインストール方法

本文書ではMac OSを利用して動作確認を行っています。Gatsbyをインストールするためには事前にnode.jsをインストールしておく必要があります。

GatsbyJSでのアプリケーションを開発するための準備は以下の3つのステップを実行することで開始することができます。

1.  npmコマンドでグローバルにgatsby-cliのインストール
2.  gatsbyコマンドを利用して新しいサイトを作成(gatsby new gatsby-site)
3.  開発サーバの起動(gatsby develop)

### gatsby cliのインストール

npmコマンドを使ってGatsbyJSのCLI(コマンドラインインターフェイス）のインストールを行います。GatsbyJSのCLIをインストールするとgatsbyコマンドを利用することができます。管理者としてインストールするためにsudoをつけて実行します。sudoで実行するとパスワードが必要になるので事前に準備をしておく必要があります。

```
 $ sudo npm install -g gatsby-cli
```

インストール終了後、gatsby –helpを実行してメッセージが表示されたらインストールは正常に完了しています。

### サイトの作成

サイトの作成はインストールを行なったgatsbyコマンドで行います。gatsbyコマンドの書式は下記の通りです。

```
 gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]
```
SITE\_DIRECTORY\_NAMEには任意の名前のディレクトリ名をつけます。任意の名前のディレクトリ下にGatsbyに関連するファイルがインストールされます。

サイトの作成はgatsby newコマンドを実行することで対話的に行うことも可能です。対話では2つの質問に答えるだけです。１つはプロジェクトの名前を、2つ目はどのスターターを使ってサイト構築を開始するかです。

Gatsbyには作成したいサイトの目的に応じたテンプレートであるstarter(スターター)がいくつもアップされており、starterを利用することで短時間で目的のサイトを作成することができます。starterを指定したい場合は、URL\_OF\_STARTER\_GITHUB\_REPOにgithubのURLを指定します。指定しない場合はdefault starter(デフォルトスターター)を元にサイトが作成されます。

starter(スターター)は[h](https://www.gatsbyjs.org/starters/?v=2)[ttps://www.gatsbyjs.org/starters/?v=2](https://www.gatsbyjs.org/starters/?v=2)から見つけることができます。

default starterの中身はhttps://github.com/gatsbyjs/gatsby-starter-defaultで確認することができます。自分の目的にあったスターターを見つけることができれば短時間でサイトの構築、デプロイまで可能です。スターターでどのようなプラグインを使っているかなど参考になる情報も公開されているので活用してください。

### 開発サーバの起動

サイトの作成が完了したらインストールディレクトリに移動して、gatsby developコマンドを実行します。起動後のメッセージhttp://localhost:8000/とあるように開発用のサーバはローカルのPCのポート番号8000で起動します。ブラウザでhttp://localhost:8000/にアクセスします。

```
 $ cd gatsby-site/
 $ gatsby develop
　・
You can now view gatsby-starter-hello-world in the browser.
⠀
  http://localhost:8000/
　・ 
```

画面にHello World!が表示されることを確認してください。Hello World!が表示されたらここまでの設定は問題なく行われています。

Hello World!が記述されているファイルははsrc/pagesの下のindex.jsファイルです。このファイルを更新するとトップページの内容を書き換えることができます。

【参考】Blog Starterでサイト作成
----------------------

もしブログ用のstarterを利用したい場合はどのように行うのか確認しておきます。gatsby newコマンドのGithubのURLには https://github.com/gatsbyjs/gatsby-starter-blog を指定します。

```
 $ gatsby new gatsby-blog https://github.com/gatsbyjs/gatsby-starter-blog 
```

インストール後gatsby-blogディレクトリに移動してdevelopコマンドを実行します。

```
 $ cd gatsby-blog/
 $ gatsby develop 
```

マシンのスペックによるgatsby developに時間がかかる場合があります。

ブラウザで確認するとブログ用のスターターなのでブログのトップページと3つの記事へのリンクが表示されています。

blog starterの初期画面

記事を変更したい場合には、インストールディレクトリのcontent¥blogの下のタイトル名のディレクトリの下にMarkdown(マークダウン)で記述されたindex.mdファイルが入っているでそのファイルを更新すると即座に変更が反映されます。

実際にhello-worldディレクトリのindex.mdのtitleをHello WorldからHello Gatsbyに変更すると下記のように反映されます。

```
 ---
title: Hello Gatsby
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

This is my first post on my new fake blog! How exciting! 
```



記事の更新

新しい記事を作成したい場合はcontent¥blogの下にタイトル名のフォルダを作成し、index.mdファイルに記事の内容を記述すると記事を追加することが可能です。


このようにstarterを利用するとReactやGraphQLの知識がなかったとしても記事の更新や追加を行うことができます。

ブログサイトの構築
---------

hello-worldのstarterで作成したサイトを更新しながらブログサイトを構築していきます。ファイルの更新を行う場合は必ず下記のコマンドを実行しておきます。

```
 $ gatsby develop 
```

### トップページの変更

src¥pagesディレクトリにあるindex.jsファイルを下記のように更新します。

```
 import React from "react"

const BlogPage = () => {
    return (
        <div>
            <h1>Gatsby Blog Site</h1>
        </div>
    )
}

export default BlogPage 
```

更新すると手動でリロードすることなくブラウザに変更内容が更新されます。これはホットリロードと呼ばれており効率的に追加した内容をチェックするこができます。更新を行った内容Gatsby Blog Siteが表示されます。


トップページの変更

returnの中にdivタグやh1タグが入っているので通常のHTMLのように感じてしまいますが、これはJavaScriptの中でもHTMLを扱えるようにしたJSXという拡張機能を利用しています。JSXの中ではclassやstyleの記述方法が通常のHTMLとは異なります。



### aboutページの追加

index.jsファイルを元にabout.jsファイルをsrc¥pagesディレクトリの下に作成します。

```
 import React from "react"

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    )
}

export default AboutPage 
```

ブラウザで/aboutページにアクセスするとAboutページが表示されます。

aboutページを追加したように他にも追加したいページがある場合は同様の方法で行うことができます。

関数の記述方法は下記の形式でも問題はありません。慣れている方法で記述してください。

```
 import React from "react"

export default function AboutPage() {
  return (
        <div>
            <h1>About Page</h1>
        </div>
  )
} 
```

### 404ページ

/(ルート)と/aboutページにブラウザからアクセスすることができますが、ユーザがそれ以外のページにアクセスした場合には下記のページが表示されます。


Gatby Development 404 Page

“Preview custom 404 page”のボタンをクリックすると”A custom 404 page wasn’t detected – if you would like to add one, create a component in your site directory at `src/pages/404.js`.”を表示されます。

src/pages/404.jsのページを作成するとカスタムページが作成できると記述されているのでsrc/pages/の下に404.jsファイルを作成します。

```
 import React from "react"

const NotFound = () => {
  return (
    <div>
      <p>アクセスしたページは存在しません。</p>
    </div>
  )
}

export default NotFound 
```

再度存在しないURLにアクセスすると先ほどと同じ画面が表示されますが、”Preview custom 404 page”ボタンをクリックすると404.jsで記述したエラーの内容が表示されます。


カスタムエラーページ

開発環境ではGatsby.js Development 404 Pageが表示されますが本番環境では直接作成した404ページの内容が表示されます。確認したい場合はgatsby buildコマンドを実行してビルドを行いgatsby serveを実行してください。Gatsbyが正常に起動した場合は存在しないURLにアクセスすると404ページが表示されます。

### ページ間にリンクを貼る

トップページとaboutページを作成しましたが、現時点ではaboutページにアクセスするためにブラウザのURLに/aboutを入力する必要があります。通常のHTMLのようにaタグをつけてリンクを貼ることができますが、Gatsbyではこの方法は使いません。

Gatsbyでリンクを貼るためにはLinkコンポーネントを利用します。Linkコンポーネントをgatsbyからimportします。

```
 import { Link } from "gatsby" 
```

index.jsファイルからaboutページへのリンクを貼るためにLinkタグを下記のように記述します。toにAboutページのurlを指定します。

```
 import React from "react"
import { Link } from "gatsby"

const BlogPage = () => {
    return (
        <div>
            <ul>
                <Link to="/about">About</Link>
            </ul>
            <h1>Gatsby Blog Site</h1>
        </div>
    )
}

export default BlogPage 
```

ブラウザで確認するとAboutページへのリンクが貼られます。クリックするとAboutページ全体の読み込みが行われずスムーズにAbout Pageが表示されることが確認できます。


aboutページへのリンク

通常のaタグを利用した場合はリンクをクリックするとページ全体の再読み込みが行われますがしLinkタグを利用してページを移動した場合はページ内の更新が必要な箇所のみ更新が行われます。確認したい場合はブラウザのデベロッパーツールを起動してElementsタブを開いてリンクをクリックしてください。

外部のページにリンクを貼りたい場合は通常通りaタグを利用してリンクを貼ってください。


### ヘッダーとフッターコンポーネントの作成

ブログサイトのようにページ内で表示が異なる部分は投稿の記事部分である場合、ヘッダー、フッターまたサイドバー（ある場合）はすべてのページで共通です。この場合はページ毎に同じコードを記述するのではなくコンポーネントとして部品化してすべてのページで共有して利用します。

ここまでの作業ではindex.jsとabout.jsページの2つしかありませんが、2つのページのリンクを表示するためにHeaderコンポーネントを追加します。srcディレクトリの下にcomponentsディレクトリを作成します。

componentsディレクトリ作成後その下にheader.jsファイルを作成します。

header.jsファイルには各ページへのリンクを追加します。

```
 import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">top</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header 
```

index.jsでは作成したHeaderコンポーネントをimportします。index.jsでは直接Linkコンポーネントを利用しないのでLinkのimportを削除します。

```
 import React from "react"
import Header from "../components/header.js"

const BlogPage = () => {
    return (
        <div>
            <Header/>
            <h1>Gatsby Blog Site</h1>
        </div>
    )
}

export default BlogPage 
```

Aboutページもindex.jsと同様にHeaderコンポーネントをimportして利用します。

```
 import React from "react"
import Header from "../components/header.js"

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <h1>About Page</h1>
        </div>
    )
}

export default AboutPage 
```

Aboutページの上部にリンクが表示され、リンクをクリックするとページが更新されます。トップページも同様に表示されます。

上部にリンクが表示

Footerコンポーネントの作成も行います。header.jsと同様にcomonentsディレクトリの下にfooter.jsファイルを作成します。西暦を自動表示できるように(new Date()).getFullYear()を行なっています。

```
 import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div>© Gatsby Blog Site { (new Date()).getFullYear() }</div>
        </footer>
    )
}

export default Footer 
```

Headerコンポーネントと同様にFooterコンポーネントもimportします。

```
 import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

const BlogPage = () => {
    return (
        <div>
            <Header/>
            <h1>Gatsby Blog Site</h1>
            <Footer/>
        </div>
    )
}

export default BlogPage 
```

ブラウザで確認すると上部にHeaderコンポーネントの要素、下部にFooterコンポーネントの要素が表示されることが確認できます。


HeaderとFooterが表示

### Layoutコンポーネントの作成

HeaderとFooterコンポーネントを作成しましたが、これらのコンポーネントを含むLayoutコンポーネントを作成します。各ページはLayoutコンポーネントを使ってコンテンツ以外を共通化します。

まだLayoutコンポーネントの作成は完了してませんが、index.jsファイルにLayoutコンポーネントをimportし下記のようにLayoutタグで囲みます。

```
 import React from "react"
import Layout from "../components/layout.js"

const BlogPage = () => {
    return (
        <div>
            <Layout>
            <h1>Gatsby Blog Site</h1>
            </Layout>
        </div>
    )
}

export default BlogPage 
```

次にlayout.jsファイルに以下を記述します。これまではHeader、Footerコンポーネントは各ファイルからimportしていましたが、Layoutコンポーネントの中でimportします。index.jsファイルでLayoutタグの間にコンテンツを入れていましたが、コンテンツはpropsを使って受け取ることができます。

Reactでは親コンポーネントから子コンポーネントにデータを渡す際にpropsを利用します。


```
 import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ( props ) => {
    return (
        <div>
            <Header/>
                { props.children }
            <Footer/>
        </div>
    )
}

export default Layout 
```

Layoutコンポーネントを追加しましたが、ブラウザからは先程までと同じ内容が表示されます。



HeaderとFooterが表示

CSSの適用
------

Gatsyに限らずフレームワークを使ってアプリケーションを構築する際に一番難しい選択の一つがCSSです。CSSはさまざまな種類がありどれもできることは同じですが人によって好みがわかれるためです。

Gatsbyの公式のホームページでも3つのタイプの説明が行われています。

*   Global CSS Files
*   Modular Stylesheets
*   CSS-in-JS

Gatsbyでもどのタイプを利用するかのリコメンドはなくGatsbyは開発者が選ぶスタイリングの方法についての意見はないと言っています。（Gatsby doesn’t have an opinion about which styling approach you choose.）

本文書ではCSSを知っている人ならだれでも困ることのないGlobal CSSファイルを利用します。

src¥componentsディレクトリの下にlayout.cssファイルを作成して、titleクラスを追加します。文字色を赤にする設定です。

```
 .title {
  color: red;
} 
```

作成したlayout.cssファイルをlayout.jsファイルからimportします。

```
 import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
//略 
```

titleクラスを適用したいindex.jsファイルを開いてdivタグにclassNameでtitleを設定します。要素にclassを設定したい場合Reactではclass属性ではなくclassName属性を設定する必要があります。

```
 import React from "react"
import Layout from "../components/layout.js"

const BlogPage = () => {
  return (
    <div>
      <Layout>
        <h1 className="title">Gatsby Blog Site</h1>
      </Layout>
    </div<
  )
}
export default BlogPage 
```

ブラウザで確認し文字の色が赤になっていればCSSは適用されています。


CSS適用の確認

まとめ
---

レイアウトが作成できたので次の文書ではGraphQLのqueryを使ってローカルファイルシステムへのアクセスとMarkdownファイルの内容の取得を確認していきます。

