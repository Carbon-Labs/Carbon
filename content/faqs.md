+++
title = "FAQ | CARBON Token"
pagetitle = "Frequently Asked Questions"
Keywords = "CARBON,Token,cryptocurrency"
Description = "CARBON Token is not just another fork of a mineable token with a new name.  CARBON is a utility token which is going to offer services and products which will utilize CARBON as the primary source of currency."
type = ""
weight = 11
Comments = false
+++

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">

    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Why can't I see KIWI in my address on Etherscan?
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body">
        When you sucessfully mine KIWI, the contract adds you to its list of KIWI owners. This is held within the contract.
        However, there is no easy way for Etherscan to know that your account has KIWI until you either receive KIWI from
        another address or you send KIWI to another address.
      </div>
    </div>
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          How can I see how many KIWI I have?
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body">
        You can see how many KIWI you have in several different ways:
        <ol>
          <li>By adding the KIWI token to Metamask.</li>
          <li>By calling the contract function <mark>balanceOf</mark> on <a href="https://etherscan.io/address/0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d#readContract">etherscan</a>.
          </li>
          <li>By going to our homepage and looking at the wallet info box with Metamask turned on and the correct
          address chosen</li>
          <li>By visiting <a href="http://thekiwi.info">http://thekiwi.info</a> and looking at the top of the
          page</li>
          <li>If you have either received / sent KIWI from your address then you can visit <a href="http://etherscan.io">Etherscan</a> and see your KIWI
           balance.</li>
        </ol>  
      </div>
    </div>
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Are there any pools available for pool mining?
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body">
        At this stage there are no pools mining KIWI. When there are, we will have a dedicated page providing more
        information on how to mine in a pool and also list all available pools.  
      </div>
    </div>
    <div class="panel-heading" role="tab" id="headingFour">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Do I need to have Eth in my account to mine?
        </a>
      </h4>
    </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body">
        Yes, when you are solo mining you will need Eth. The Eth is used to pay for submitting your mining solutions.
        We advise creating a new account and sending across the amount of Eth you want to use for mining KIWI.  
      </div>
    </div>
    <div class="panel-heading" role="tab" id="headingFive">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          How much does it cost to mine KIWI?
        </a>
      </h4>
    </div>
    <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
      <div class="panel-body">
        This is impossible for us to tell you. The price depends on how much gwei you decide to pay.
        The actual transaction cost at <b>1 Gwei</b> is around <b>0.000094818 Ether</b>, however you will need to pay more than 1 Gwei to ensure your solution has a chance of winning.<br><br>
        To get an idea of how much Gwei you should use, you need to check in 2 places.
        <ol>
          <li><a href="https://ethgasstation.info/">ETH Gas Station</a>: This shows you what price on average people are
          paying for miners at the moment. If you set lower than this, it is likely to take awhile to be processed, and
          therefore most likely you will lose.</li>
          <li><a href="http://thekiwi.info">KIWI Stats Website</a>: Here you will be able to see how much gas the last winning
          transactions cost.
        </ol>
        So, a simple strategy would be to go 1 higher than the gas price shown on the Stats page if that price is the same or
        greater than the <em>Gas Price Std (Gwei)</em> price shown on Eth Gas Station. Otherwise, you need to set the same gas price as shown on Eth Gas Station.<br><br>
        <em>Please note: we do not guarantee that this strategy will win everytime, and there will be other that beat you or are using the same strategy. It is down to each one of you to decide with what price you are comfortable in paying.</em>
      </div>
    </div>
    <div class="panel-heading" role="tab" id="headingSix">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          My transaction failed! Why?
        </a>
      </h4>
    </div>
    <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
      <div class="panel-body">
        If you see a failed transaction on Etherscan, then that normally means that another solution from another miner won
        the KIWI for that round. In any given round, multiple miners can submit winning solutions. However, because of how
        the blockchain works, only 1 can be accepted as the correct answer.<br><br>
        <em>When your transaction fails, you do not lose all of the Eth that you paid for the transaction, only about 25%
        is lost.</em>
      </div>
    </div>
    <div class="panel-heading" role="tab" id="headingSeven">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSix">
          Where can I get more help?
        </a>
      </h4>
    </div>
    <div id="collapseSeven" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
      <div class="panel-body">
        The best place to ask is in our discord channel. <a href="https://discord.gg/8fm7Dyk">https://discord.gg/8fm7Dyk</a> - Please ask in the #support channel.
      </div>
    </div>
  </div>
</div>
