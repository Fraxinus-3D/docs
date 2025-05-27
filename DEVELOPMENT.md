# 本サイトの開発について
## デプロイ

本プロジェクトはCloudflare Pagesでデプロイされています。`main`ブランチへのプッシュで自動的にデプロイが実行されます。

## 開発環境のセットアップ

ローカルで編集・プレビューできます。

### 必要なツール

- [Hugo](https://gohugo.io/) v0.144 or later
- [Node.js](https://nodejs.org/) v22 or later
- [Go](https://golang.org/) v1.24 or later

上記ツールのインストールには[mise](https://github.com/jdx/mise)を推奨

### 環境構築

1. リポジトリをクローン：
   ```bash
   git clone https://github.com/Fraxinus-3D/docs.git
   cd docs
   ```

2. 依存関係をインストール：
   ```bash
   npm install
   ```

3. 開発サーバーを起動：
   ```bash
   npm run dev
   ```
   または
   ```bash
   hugo server --bind=0.0.0.0 --watch --minify --gc --cleanDestinationDir
   ```

### ビルド

#### 本番用ビルド
```bash
npm run build
```

#### プレビュービルド
```bash
npm run preview
```

### その他のコマンド

- `npm run format`: コードフォーマット（Prettier）
- `npm run update-modules`: Hugo modulesの更新
- `npm run theme-setup`: テーマの初期設定
- `npm run update-theme`: テーマの更新
