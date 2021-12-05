require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name rebel saddle honey grace drip furnace general'; 
let testAccounts = [
"0x4f3b3922f1fc72efc97e7f837d993365e2c4f51daf756649374bd49c26c5722d",
"0xe749d156418cf48bfc3b250267efbeb6152c6ebc4822d75b3fe7fc766f4bf2af",
"0x95cc3d966cb5aa80911b8bd1db5b35ad38700c6dd05a57c5a6217ea51b9eb733",
"0xf150c56123070dae83a212baecf801593b6cff6b784e2fd4c4e5ac809aa3df26",
"0x58c850cee0bbdb3dd0e83e24b84cfcdfdd71d93d7ffbc6fae7f701edc189ab65",
"0xf5b02c8336c5f01536db860c656d263c269138a236f8c47946afadbf227fced4",
"0x593f9b89db400f31d7ccaa15da52dc9c3655ea44fcf8f594e6fd945741ccb28f",
"0xe48efdab02c572413b4f14a77cd28a33f659e6486d492c31141377bdcc770ccc",
"0x3d4c5c996977a55e8701c40d940690494eda111d035822cf99347f7eb09f49f3",
"0xf4f47a8ac2990f86af57260c775b4539c87bfd64021ab493775124324897bbcb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

