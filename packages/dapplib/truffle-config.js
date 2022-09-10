require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn promote hockey climb outer struggle'; 
let testAccounts = [
"0x7bd186ff62b122f1c8fe91b9b3ed107d18fc90d3d1c5bf5a416c8064b8c19791",
"0x2bf8875f98d6a68ad109e694d7b3bd15c666162f441695b39eccba963ba2b7fb",
"0x2c83547c572f23861bf7141635ca54351baf3389c875536500184361a21722d6",
"0x69a4036dd1b700ca67edd11598eeba5320a281c32f811aa2b242f80e2c5481b1",
"0x77e9ea6be63543c289d90f2e5fc09e6ec88462f059918ab342244a778befa909",
"0x1c952bed1990d27f38b71727bdacec66586a30fffc4c9df305821d712711961a",
"0xd73cf76e3d2d8ecd6da7641db1836b5f7191a4a68c9ba4d352dafcb775966ae9",
"0x27af2a69e00b52028d63408100abe0a2528cd0497d8785fe1b3b93978f577ff9",
"0x0a4fdb644a0b666ba32071ebdef4451672cf076d49cf2cfaecdfaa7e1d6e062e",
"0x70d2c32e55b6681069f2281fc7adc64671976c198912e693062f7cf612d360dd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

