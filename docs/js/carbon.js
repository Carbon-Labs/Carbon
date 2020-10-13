
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
