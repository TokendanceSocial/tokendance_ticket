# This Makefile aims to run hardhat command easyily.

clean:
	npx hardhat clean

compile: clean
	npx hardhat compile

test: compile
	npx hardhat test

deploy-ganache: test
	npx hardhat run --network ganache scripts/deploy.js

deploy-goeril: test
	npx hardhat run --network goeril scripts/deploy.js