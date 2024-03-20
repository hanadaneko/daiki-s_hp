## 開始方法

1. 下記コマンドを実行

```bash
npm install
npm run dev
```

2. [http://localhost:3000](http://localhost:3000)にアクセス

## 構成

```
root/
  ├─ public/           アイコン・画像等
  └─ src/
      ├─ app/          ペジネーション・head等
      ├─ component/    各種コンポーネント
      ├─ const/        各種定数（主にHP用コメント等）
      └─ style/        各種CSS・MUIテーマ
          └─muiTheme/
```

## MEMO

- Google Search Console をする
  - https://search.google.com/search-console/welcome?utm_source=about-page
- SEO 対策
- META データを決めてもらう

- IpadMINI が PC 版でよく見えるラインにする

## 命名規則

- 関数・コンポーネント名：アッパーキャメルケース
- 定数：全大文字
- Style
  - Styled+用途+pc/sp ＋部品名(StyledHeaderItemsPcTypograghy)
