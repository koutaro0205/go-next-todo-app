# ~~~~~~~~~~~~~~ フロントエンド ~~~~~~~~~~~~~~

# ローカル開発環境起動
dev:
	cd frontend && pnpm run dev

# Storybookを開く
sb:
	cd frontend && pnpm run sb

# ESLintチェック
lint:
	cd frontend && npx eslint --ext .ts,.tsx,.json,.js,.jsx src/

# 型チェック
tsc:
	cd frontend && npx tsc --noEmit

# テスト
test:
	cd frontend && npm run test

# Scaffdog (コード自動生成)
sd:
	cd frontend && pnpm run scaffdog


# ~~~~~~~~~~~~~~ バックエンド ~~~~~~~~~~~~~~

run:
	cd backend && docker-compose exec app go run main.go

start:
	cd backend && docker-compose up -d

stop:
	cd backend && docker-compose down
