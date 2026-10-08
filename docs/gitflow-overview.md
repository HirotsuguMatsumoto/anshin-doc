# Git統合とリリース

共通規程はcanonical doc_id `anshin.governance.ai-driven-development`、release契約は`anshin.release.contract`を参照する。本repositoryで別のrelease規定を定義しない。

作業はworktreeで分離し、複数の要望・変更・バグを同じworktreeで管理できる。リモートmainが絶対の正本であり、先行リリースを必ず優先する。編集前、review前と統合直前にfetch・rebaseし、必要なrepository-local検査の後に非強制pushする。

```bash
git fetch origin main
git rebase origin/main
git push origin HEAD:main
```

mainが進んだ場合は後続側で取り込む。stg branch経由の統合、統合receipt、固定deployment plan又はacceptance記録を通常releaseの必須条件にしない。CMS固有の編集branchと文書生成処理はrelease許可条件へ転用せず、公開する実source/artifactと既存hostingの結果を確認する。
