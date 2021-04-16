install:
	npm ci

start:
	npm run start

build:
	npm run build

lint:
	npx eslint . --ext js,jsx

deploy:
	surge ./dist

.PHONY: test