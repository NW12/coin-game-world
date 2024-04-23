const Web3 = require("web3");
const config = require("../config");

const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${config.INFURA_API_KEY}`));

// @route   GET api/danishapitest
// @desc    Get the data from a random smart contract
// @access  Public

exports.fetchSmartContractInfo = async (req, res) => {
  try {
    const contractAddress = "0x49d8bf758D272FB5a593308c0bC76a81195076aA";
    const contractABI = [
      { inputs: [], stateMutability: "nonpayable", type: "constructor" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "admin", type: "address" },
          { indexed: false, internalType: "bool", name: "claimAllowed", type: "bool" },
        ],
        name: "ClaimAllowedChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "userAddress", type: "address" },
          { indexed: true, internalType: "address", name: "tokenAddress", type: "address" },
          { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "Deposited",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
          { indexed: true, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "withdrawalTime", type: "uint256" }], name: "WithdrawalTimeSet", type: "event" },
      {
        anonymous: false,
        inputs: [
          { indexed: true, internalType: "address", name: "userAddress", type: "address" },
          { indexed: true, internalType: "address", name: "tokenAddress", type: "address" },
          { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "Withdrawn",
        type: "event",
      },
      { inputs: [], name: "_claimAllowed", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" },
      {
        inputs: [
          { internalType: "address", name: "userAddress", type: "address" },
          { internalType: "address", name: "tokenAddress", type: "address" },
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      { inputs: [{ internalType: "address", name: "tokenAddress", type: "address" }], name: "claim", outputs: [], stateMutability: "nonpayable", type: "function" },
      {
        inputs: [
          { internalType: "address", name: "tokenAddress", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "depositERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      { inputs: [], name: "depositETH", outputs: [], stateMutability: "payable", type: "function" },
      { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
      { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
      { inputs: [{ internalType: "bool", name: "allowed", type: "bool" }], name: "setClaimAllowed", outputs: [], stateMutability: "nonpayable", type: "function" },
      { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
      {
        inputs: [
          { internalType: "address", name: "tokenAddress", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "withdrawERC1155",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "tokenAddress", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "withdrawERC20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "tokenAddress", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "withdrawERC721",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "withdrawETH",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      { stateMutability: "payable", type: "receive" },
    ];

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const owner = await contract.methods.owner().call();

    res.send(`Owner : ${owner}`);

  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Internal server error");
  }
};
