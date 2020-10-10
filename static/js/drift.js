/*
if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
   var eth = new Eth(window.web3.currentProvider);
   console.log("full web3")
} else {
   var eth = new Eth(new Eth.HttpProvider("https://mainnet.infura.io/v3/c8e1c130a7a74802b54dc6f7c706675f"));
   console.log("warning: no web3 provider found, using infura.io as backup provider")
}

var contract_address = "0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D";
var account = "";
var token = eth.contract(tokenABI).at(contract_address);

var contractInfo = []; // stores current contract metrics

ethereum.enable();

*/

/*
eth.coinbase().then((result) => {
  console.log("ADAM");
   // display connected account
   el_safe('#zilAccount').innerHTML = result.substr(0, 30) + '...';
   account = result;
   //display Kiwi account owned by connected account
   token.balanceOf(result).then((balance) => {
       el_safe('#driftCount').innerHTML = (balance.balance / 100000000).toLocaleString('en-US', { minimumFractionDigits: 8 }) + ' KIWI';
   });

  }).catch((error) => {});

var seconds = 30
updateFromBlockchain(seconds);

$(function() {
  setInterval(function() {

    updateFromBlockchain(seconds);

  },seconds * 1000);
});

*/
/** FUNCTIONS **/
var el = function(id){ return document.querySelector(id); };
var el_safe = function(id) {
  let e = el(id);
    if (e) {
      return e;
    } else {
      return {};
    }
}


/* -- Wallet -- */
$("#send-drift-button").on('click',function( event ){
  event.preventDefault();
  amount = $('#transferAmount').val();
  addressto = $('#transferAddress').val();

  startTransfer(amount, addressto, function(error,response){
    console.log(response)
    //$('#messagebar').show();
  }).catch((error) => {

    console.log(error)
    if(error == 'invalid address') {
      $('#transferAddressGroup').addClass('has-error');
      alert('Address is invalid. Please check');
    }

  });

});

async function startTransfer(amount, addressTo, callback) {
  console.log("Start DRIFT TRANSFER");
  throw "TODO: not implemented";
}
