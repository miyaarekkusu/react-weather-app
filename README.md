# React天気情報アプリ

Youtube動画を見ながら、Reactプロジェクトを作成し、Reactの基礎の実践的な練習

Reactプロジェクト作成
npm create vite@latest

// スタイル - Tailwind css
// データフェッチ - Tanstack Query (React Query)

データフェッチ　→　必要なデータを外部から取得
データベースやAPIから情報を取り出す動作

Tanstack Queryを利用すると、キャッシュ管理が管理が楽になる(自動化)。後、古くなったデータも自動更新可能になる。もう一つの利点は、ローディング・エラー状態が簡略化される(TanStack Queryはこれらを標準で提供)

isLoading: データ取得中かどうか
isError: 失敗したかどうか
など

Tanstackをりようするため、まず、Tanstackをインストールし、main.tsxにQueryClientとQueryClientProviderの設定が必要。

このプロジェクトではZODスキーマを使用
