# anshin-doc
Document repositories such as app.anshin.care, customer.anshin.care, and reserve.anshin.care.

<br >
<br >

# Docusaurus 開発の流れ

<br >
<br >

## 1. プロジェクトのセットアップ

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

------------------------------------------------------------------------

## 2. ドキュメントの追加・管理

-   **Markdown/MDX を利用**
    -   `docs/`
        フォルダにファイルを追加すると自動的にルーティングされます。\
    -   例: `docs/intro.md`
        - *以下のような構成にできたら嬉しい？*
            - `docs/app` app.anshin.care のドキュメント
            - `docs/customer` customer.anshin.care のドキュメント
            - `docs/reserve` reserve.anshin.care のドキュメント
-   **サイドバー設定** (`sidebars.js`)
    -   ドキュメントの並び順や階層を管理。\
    -   自動生成モードもサポート。

------------------------------------------------------------------------

## 3. ページ・カスタムコンポーネント

-   **固定ページ**: `src/pages/` に配置。React コンポーネントや Markdown で作成可能。
    - *`ads.anshin.care` を こちらに移行できる？*
-   **MDX で拡張**: Markdown 内で React コンポーネントを埋め込み可能。

------------------------------------------------------------------------

## 4. テーマ・スタイリング

-   **テーマカスタマイズ**
    -   `docusaurus.config.js`
        でテーマ・ナビゲーション・フッターを設定。\
    -   `src/theme/` をオーバーライドしてデザインを拡張。
-   **Tailwind や CSS Modules** の統合も可能。

------------------------------------------------------------------------

## 5. プラグイン活用

-   **公式プラグイン**: 検索（Algolia DocSearch）、ブログ、i18n など。\
-   **カスタムプラグイン**: データ取得やビルド時処理を追加可能。

------------------------------------------------------------------------

## 6. ビルドとデプロイ

1.  **ビルド**

    ``` bash
    npm run build
    ```

    -   `build/` ディレクトリに静的ファイルが出力。

2.  **デプロイ**

    -   GitHub Pages, Vercel, Netlify などでホスティング可能。\
    -   Docusaurus の公式 CLI にも `npm run deploy` が用意されています。

------------------------------------------------------------------------

## 7. 開発フローの例

-   **GitHub Flow / Git Flow** と組み合わせて運用するのが一般的。
    1.  新しいドキュメントやページを `feature/docs-xxx` ブランチで作成\
    2.  プレビュー環境で確認\
    3.  Pull Request → Review → main にマージ\
    4.  main ブランチにマージされたら CI/CD で自動デプロイ
