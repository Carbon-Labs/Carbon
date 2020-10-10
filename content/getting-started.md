+++
pagetitle = "How to get CARBON: A Beginners Guide"
title = "Get Started | How to acquire CARBON via zilswap"
Keywords = "CARBON,Token,cryptocurrency"
Description = "Please follow the instructions showing how to mine CARBON Token solo or pool mining, one of the first ERC-20 / ERC-918 mineable tokens which offers tangible products being developed that will utilize CARBON token. Get some now before its too late!"
type = ""
weight = 10
+++
<!–– -->
<div class="md-modal md-effect-19" id="modal-1">
	<div class="md-content">
			<div>
		<iframe style="width: 100%;" width="854" height="480" src="https://www.youtube.com/embed/OzYqiPC7VhE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		</div>
					<button style="margin-top:7px" class="md-close btn btn-primary">Close me!</button>
					<div></div>
		</div>
</div>

<div class="md-modal md-effect-19" id="modal-2">
	<div class="md-content">
	<div>
		<iframe style="width: 100%;" width="854" height="480" src="https://www.youtube.com/embed/n573Fk8MIfY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
					<button style="margin-top:7px" class="md-close btn btn-primary">Close me!</button>
					<div></div>
	</div>
</div>
		<div class="md-overlay"></div>

<button class="md-trigger md-setperspective btn btn-primary btn-lg" data-modal="modal-1">Pool Mining Video</button>

<button class="md-trigger md-setperspective btn btn-primary btn-lg" data-modal="modal-2">Solo Mining Video</button>

Please note that CPU mining is no longer viable. You need to mine with GPU using instructions below.<br>
Also, solo mining is quickly becoming more and more difficult for smaller miners without a decent size rig.
#### Mining Software
To mine KIWI you need to download and run special software that has been built for the task of mining.<br>
Currently there are 2 miners that can mine KIWI.

1. MVis Token Miner - https://github.com/mining-visualizer/MVis-tokenminer/releases<br>
2. COSMiC - https://bitbucket.org/LieutenantTofu/cosmic-v3/downloads/

**We currently recommend MVis Token Miner and provide details below on how to set up for mining solo, and on a pool.**
##### Setting up MVis Token Miner

*These instructions are for GPU mining, it does not make sense to be CPU mining at this stage.*

  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#solomining">Solo Mine</a></li>
    <li><a data-toggle="tab" href="#poolmining">Pool Mining</a></li>
  </ul>
<div class="tab-content">
  <div id="solomining" class="tab-pane fade in active">
    <p>
		You need to have the following:

- An ethereum account with some ETH loaded on it.
- Your own infura.io url - signup at http://infura.io/signup
- And the MVis Token Miner - download from link above

*These instructions were written using [MVis-tokenminer 2.1.13](https://github.com/mining-visualizer/MVis-tokenminer/releases/download/v1.1.13/mvis-tokenminer-2.1.13-win64.zip)*
##### Step 1
Download and extract MVis Token Miner software to your computer.
##### Step 2
1. In the extracted folder you will see a folder called _tokenminer_, inside this folder
is a file called __tokenminer.ini__.
2. Open up this file with Notepad and add your information by finding the differnt places in the file. **DO NOT DELETE THE OTHER INFORMATION IN THIS FILE**, just replace where it asks.:
  1. Host=https://mainnet.infura.io/your_api_key
  2. RPCPort=8545
  3. MinerAcct=0x...................
  4. AcctPK=........................
  5. TokenContract=0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d
  6. GasPrice=5

**MinerAcct** is your Ethereum account that should have some ETH.
**AcctPK** is the private key of your Ethereum account.
You will need to adjust **GasPrice** as you see fit. Please see the FAQs page for more information.

##### Step 3<br>
Everything is ready to go. Time to get mining!<br>
<br>
1. Open up *cmd* window.<br>
2. Browse to where you extracted the miner.<br>
3. Run the following command: `tokenminer.exe -S -G -t 1`<br><br>

The command above is starting your miner in solo mode, using 1 GPU. You can adjust the number of cards by changing<br>
`-t 1` to the number of cards you want to mine with. `-t 2` for example will use 2 cards and double your hash power used for mining. MVIS currently only supports multiple cards of the same brand, you cant mix AMD and NVIDIA.
	</p>
  </div>
  <div id="poolmining" class="tab-pane fade"><p>
			You need to have the following:

- An ethereum account.
- And the MVis Token Miner - download from link above

*These instructions were written using [MVis-tokenminer 2.1.13](https://github.com/mining-visualizer/MVis-tokenminer/releases/download/v1.1.13/mvis-tokenminer-2.1.13-win64.zip)*<br>
*Wolfpool was one of the first pools for KIWI token and these instructions are how to connect them.*

##### Step 1
Download and extract MVis Token Miner software to your computer.

##### Step 2
1. In the extracted folder you will see a folder called _tokenminer_, inside this folder
is a file called __tokenminer.ini__.
2. Open up this file with Notepad and add your information by finding the differnt places in the file. **DO NOT DELETE THE OTHER INFORMATION IN THIS FILE**, just replace where it asks.:
  1. Host=http://kiwi.wolfpool.io
  2. RPCPort=8080
  3. MinerAcct=0x...................
  5. TokenContract=0x2bf91c18cd4ae9c2f2858ef9fe518180f7b5096d

**MinerAcct** is your Ethereum account. \

##### Step 3
Everything is ready to go. Time to get mining!

1. Open up *cmd* window.
2. Browse to where you extracted the miner.
3. Run the following command: `tokenminer.exe -P -G -t 1`

The command above is starting your miner in pool(-P) mode, using 1 GPU. You can adjust the number of cards by changing
`-t 1` to the number of cards you want to mine with. `-t 2` for example will use 2 cards and double your hash power used
for mining.	MVIS currently only supports multiple cards of the same brand, you cant mix AMD and NVIDIA.

 </p>
  </div>

</div>

Good Luck! If you need further help, please ask in the support channel of Discord - <a href="https://discord.gg/8fm7Dyk">https://discord.gg/8fm7Dyk</a>
