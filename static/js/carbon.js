var contract;
var zilliqa;

//const blockchain = window.zilPay.blockchain;
//const result = await blockchain.getBalance('zil1wl38cwww2u3g8wzgutxlxtxwwc0rf7jf27zace');

window.addEventListener("load", () => {
  console.log ("Ready...loading zil");
  if (!window.zilPay) {
    return null;
    console.log("zilPay not installed");
  } else if (!window.zilPay.wallet.isEnable) {
    console.log("zilPay not enabled");
    window.zilPay.wallet.connect();
  }

  zilliqa = window.zilPay;
  contract = zilliqa.contracts.at('zil1hau7z6rjltvjc95pphwj57umdpvv0d6kh2t8zk');



  //$('#zilAccount').text(window.zilPay.wallet.defaultAccount.bech32);

  $('#zilAccount').text(window.zilPay.wallet.defaultAccount.bech32); //@todo - this errors sometimes / doesn't load

  window.zilPay.wallet.observableAccount().subscribe(function (account) {
    // ... When user changed account
    $('#zilAccount').text(account.bech32);
    console.log(account);
  });

});



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
$("#send-carbon-button").on('click',function( event ){
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
  console.log("Start CARBON TRANSFER");
  throw "TODO: not implemented";
}
