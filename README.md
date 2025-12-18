# anshin-doc
Welcome to the official documentation for Anshin services.

## サイトの使い方
- **Browse:** 画面上部のナビゲーションバーを使って、App、Customer、Reserve、Updates などの各セクションを移動できます。サイドバーから各Anshinサービスに関連するドキュメントにアクセスできます。
- **Read:**  任意のトピックをクリックすると、詳細なガイド、FAQ、リファレンス情報を閲覧できます。
- **Feedback:** ドキュメントやページが役に立った場合は、ページ下部のフィードバックボタンをクリックしてご意見をお寄せください。

## main セクション
- **App:** app.anshin.care のドキュメント
- **Customer:** customer.anshin.care のドキュメント
- **Reserve:** reserve.anshin.care のドキュメント
- **Updates:** 最新の更新情報やリリースノート

## Docusaurus 開発の流れ
### プロジェクトのセットアップ
1.  **Docusaurus CLI のインストール**

    ``` bash
    cd anshin
    git clone git@github.com:HirotsuguMatsumoto/anshin-doc.git doc 
    cat .node-version
    npm install
    ```

    -   `classic` テンプレート で install している。`classic` には、Docs・Blog・Pages
        機能が含まれています。

2.  **開発サーバーの起動**

    ``` bash
    npm run start
    ```

    -   ホットリロード付きでプレビューが可能。
