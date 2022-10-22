require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// 申请alchemy的api key
const ALCHEMY_API_KEY = "KEY";

//将此私钥替换为测试账号私钥
const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";
// GANACHE_PRIVATE_KEY, it will change but I'm trying to fix this.
const GANACHE_PRIVATE_KEY = "0x9e05d18b86fd1fcf60b614789d526be8ee4a0183ec19b80e79851f7cc0247301"

module.exports = {
  solidity: "0.8.17",
  networks: {
    ganache: {
      url: `http://127.0.0.1:8545/`,
      accounts: [GANACHE_PRIVATE_KEY]
    },
    // goerli: {
    //   url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [GOERLI_PRIVATE_KEY]
    // },
    // Make sure you have start ganache before deploy.
  }
};
