dev:
	pnpm dev

build:
	pnpm build
b: build

start:
	pnpm start
s: start

test:
	pnpm test
t: test
.PHONY: test

test-watch:
	pnpm test:watch
tw: test-watch

test-update:
	pnpm test -u
tu: test-update

coverage:
	pnpm test:coverage
cov: coverage
test-coverage: coverage
tc: coverage
.PHONY: coverage

install:
	pnpm install
i: install

reinstall:
	@echo Reinstalling dependencies...
	@pnpm install --force
	@pnpm clean
	@echo Done.
ri: reinstall
.PHONY: reinstall

clean:
	@echo Cleaning build directory...
	@pnpm clean
	@echo Done.
c: clean

release:
	@echo Pushing to remote...
	@git push origin main && git push origin --tags && git push origin develop
	@echo Done. 
r: release

format:
	@pnpm format
f: format

lint:
	@pnpm lint
l: lint

undo:
	@echo Undoing last commit...
	@git reset HEAD^
	@echo Done.

hist:
	@git log --oneline --graph --decorate --all

tags:
	@git tag -l

git-flow:
	@echo Initializing git-flow...
	@git flow init
	@echo Done.

git-flow-install:
	@echo Installing git-flow...
	@npm i -g git-flow
	@npm i -g git-flow-versionbumping
	@git config --global gitflow.versionbumping true
	@git config --global gitflow.path.hooks /path/to/git-flow-hooks
	@git config --global gitflow.hotfix.finish.message "Hotfix %tag%"
	@git config --global gitflow.release.finish.message "Release %tag%"
	@echo Done.
