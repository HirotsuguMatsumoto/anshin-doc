# スクリプト概要

このディレクトリには、ドキュメントコンテンツの管理、サニタイズ、自動化のためのユーティリティスクリプトが含まれています。ほとんどのスクリプトはプロジェクトルートからNode.jsで実行します。

---

## GitHubワークフローとDecap CMSとの統合

これらのスクリプトは手動利用だけでなく、サイトの自動化パイプラインにも統合されています：

- **Decap CMSプロセス:**
	- Decap CMSでドキュメントが追加・編集されると、`stg`から`cms`で始まる新しいブランチが作成されます（例：`cms/<collection-name>/<filename>`）。
	- 関連スクリプトがGitHub Actionsのワークフローで自動的に実行され、Markdownファイルのクリーンアップ、検証、インポート/コンポーネントの挿入が行われます。

- **GitHubワークフロー:**
	- `/anshin/.github/workflows`のワークフローが、プルリクエスト、マージ、プッシュ時にこれらのスクリプトを呼び出し、すべてのドキュメントファイルがプロジェクト基準を満たすようにします。
	- この自動化により一貫性が保たれ、手動ミスが防止され、コード・コンテンツ両方のコントリビューターにとって編集プロセスが効率化されます。

ワークフロー自動化とCI/CDの詳細は[ワークフロー概要](./workflows-overview-jp.md)をご覧ください。

---

## add-components.js

**目的:**  
Frontmatterの値に基づき、Reactコンポーネント（`<Head>`や`<Subtitle>`）をMarkdownファイルに挿入・削除します。  
- SEO（`noindex`）のための`<Head>`の追加・削除。
- サブタイトルがある場合は`<Subtitle>`の追加・削除。
- インポートの後にコンポーネントを挿入し、重複しないようにします。

**使い方:**  
```bash
node scripts/add-components.js path/to/file.md [more.md ...]
```

---

## add-imports.js

**目的:**  
Frontmatterに基づき、Markdownファイルのインポート文を管理します。  
- 必要に応じて`import Subtitle`や`import Head`を追加・削除。
- 必要な場合のみインポートを追加し、重複しないようにします。

**使い方:**  
```bash
node scripts/add-imports.js path/to/file.md [more.md ...]
```

---

## assign-sidebar-position.js

**目的:**  
新しいMarkdownファイルに自動的に`sidebar_position`を割り当て、サイドバーの正しい順序に表示されるようにします。  
- フォルダ内の最大値をスキャンし、次の値を割り当てます。
- 新規ファイルに対して実行します。

**使い方:**  
```bash
node scripts/assign-sidebar-position.js <added-file.md>
```

---

## clear-auto-region.js

**目的:**  
Markdownファイル内の特別なマーカーコメント間の自動生成領域をクリアし、マーカーのみを残します。  
- マーカーの存在と順序を検証。
- 自動コンテンツ挿入用のクリーンな領域を確保します。

**使い方:**  
```bash
node scripts/clear-auto-region.js path/to/file.md [more.md ...]
```

---

