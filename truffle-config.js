const { privateKey } = require('./secrets.json')
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    main: {
      provider: () => new HDWalletProvider(privateKey, 'https://bsc-dataseed.binance.org'),
      network_id: 56,
      gas: 6000000,
      gasPrice: 20e9
    }
  },
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
