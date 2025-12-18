# Docusaurus 標準スタイル概要

Docusaurus には、[Infima](https://infima.dev/) デザインシステムに基づいた標準のスタイルや CSS ユーティリティクラスが用意されています。これらを使うことで、ドキュメントページやコンポーネント、Markdown コンテンツを簡単に整形できます。

---

## 見出し（Headings）

Docusaurus では Markdown の見出しが自動的にスタイリングされます：

```markdown
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6
```

- `# 見出し1` は通常ページタイトル（frontmatter から）に使われます。
- コンテンツ内では `##` 以降を使いましょう。

---

## 文字装飾（Typography）

- **太字:** `**太字**` → **太字**
- *イタリック:* `*イタリック*` → *イタリック*
- ~~取り消し線:~~ `~~テキスト~~` → ~~テキスト~~

---

## リスト（Lists）

- **箇条書きリスト:**
  - アイテム1
  - アイテム2

- **番号付きリスト:**
  1. 一つ目
  2. 二つ目

---

## 引用（Blockquotes）

> これは引用です。

---

## コード（Code Blocks & Inline Code）

- インラインコード: `` `コード` ``
- コードブロック:
  ```js
  console.log('Hello, Docusaurus!');
  ```

---

## アラート（Alerts）

組み込みのアドモニション構文を使います：

```markdown
:::tip
これは Tip です！
:::

:::info
これは Info アラートです。
:::

:::warning
これは Warning です！
:::

:::danger
これは Danger アラートです！
:::
```

---

## テーブル（Tables）

| カラム1   | カラム2   |
|-----------|-----------|
| 行1       | データ    |
| 行2       | データ    |

---

## 画像（Images）

```markdown
![Altテキスト](./img/example.png)
```

---

## スタイルのカスタマイズ

`src/css/custom.css` でスタイルを上書き・拡張できます。

---

## 参考リンク

- [Infima ドキュメント](https://infima.dev/docs/utilities/)
- [Docusaurus Markdown 機能](https://docusaurus.io/docs/markdown-features)
