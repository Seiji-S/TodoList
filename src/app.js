App = {
  load: async () => {
    //Load application
    console.log('app loading');
  await App.loadWeb3();
  //load web3 to connect to the blockchain
  await App.loadAccount();
  //load account from ganache
  await App.loadContract();
  //load contracts
  }, 

  loadWeb3: async () => {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider
      web3 = new Web3(web3.currentProvider)
    } else {
      window.alert("Please connect to Metamask.")
    }
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(ethereum)
      try {
        // Request account access if needed
        await ethereum.enable()
        // Acccounts now exposed
        web3.eth.sendTransaction({/* ... */})
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
      // Acccounts always exposed
      web3.eth.sendTransaction({/* ... */})
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },

  loadAccount: async () => {
    App.account = web3.eth.accounts[0]
    console.log(App.account);
  },

  loadContract: async () => {
    const todoList = await $.getJSON('ToDoList.json');
    console.log(todoList);
  }

}

$(() => {
  $(window).load(()=> {
    App.load()
  })
})