# Anshin Doc AI routing

このrepositoryはAnshin公開文書のdelivery repositoryであり、governance又はproduct仕様の第二正本ではない。文書の意味、release規則及びAI運用はworkspace routing `../AGENTS.md`、canonical doc_id `anshin.governance.ai-driven-development`及び`anshin.governance.document-management`へ従う。

<!-- anshin-ai-driven-development-policy:v1 -->

- primary writerとhigh又はcritical変更に必要な別sessionの編集前review及びfixed-SHA独立reviewは、利用者がmodelを明示した場合はその指定を使用する。指定がない場合は利用可能な現行Sol系modelを`high`で使用し、point releaseを推測しない。
- instruction originは`MAC`又は`ANSHIN_UI`だけとし、画面確認はユーザー指定がない限りCodex右サイドのin-app browserを使う。
- 既存公開文書を変更する前に、authoring sourceのcanonical doc_id、source revision及び生成経路を確認する。delivery copyだけを独自に書き換えない。
- runtime secretを含む`.env`及び`.env.*`は作成・追跡せず、値を表示しない。repositoryが正本とする既知のexample/sampleはsecret-free確認後だけ追跡できる。
- dirty差分をrestore、stash、reset又は削除しない。同一入力のcanonical検証を反復せず、このrepositoryの既存selectorとbuild checkを使う。

<!-- anshin-release-plan-gate:v2 -->

## Production Release routing

Production releaseはcanonical doc_id `anshin.release.contract`及び既存hosting runbookへ従う。このrepositoryへのsource統合をproduction公開完了として扱わない。fixed artifact、ownerのUI確認と明示承認、rollback及び同じrelease IDを維持する。

<!-- anshin-document-governance:v2 -->

## 文書delivery

- authoring sourceと生成物を同じ変更束へbindし、sourceに無い仕様又は運用本文を追加しない。
- 質問又は調査だけの依頼では編集しない。変更時は既存生成・link・build consumerを確認する。
- 調査結果は結論、証拠、影響、未確認事項及び次actionを通常の回答で返す。不存在のguide又は独自JSON gateを要求しない。
