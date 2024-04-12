dev:
	yarn dev

build:
	yarn build
b: build

start:
	yarn start
s: start

test:
	yarn test
t: test
.PHONY: test

test-watch:
	yarn test:watch
tw: test-watch

test-update:
	yarn test -u
tu: test-update

coverage:
	yarn test:coverage
cov: coverage
test-coverage: coverage
tc: coverage
.PHONY: coverage

install:
	yarn install
i: install

reinstall:
	@echo Reinstalling dependencies...
	@yarn install --force
	@yarn clean
	@echo Done.
ri: reinstall
.PHONY: reinstall

clean:
	@echo Cleaning build directory...
	@yarn clean
	@echo Done.
c: clean

release:
	@echo Pushing to remote...
	@git push origin main && git push origin --tags && git push origin develop
	@echo Done. 
r: release

format:
	@yarn format
f: format

lint:
	@yarn lint
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
