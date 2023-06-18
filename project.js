// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
  const nft = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling,
  };
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("Name: " + nft.name);
    console.log("Eye Color: " + nft.eyeColor);
    console.log("Shirt Type: " + nft.shirtType);
    console.log("Bling: " + nft.bling);
    console.log("---------------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// call your functions below this line

// Mint some NFTs
mintNFT("NFT1", "Blue", "T-Shirt", "Diamonds");
mintNFT("NFT2", "Green", "Hoodie", "Gold");
mintNFT("NFT3", "Red", "Tank Top", "Platinum");

// List all NFTs
listNFTs();

// Print the total supply
console.log("Total Supply: " + getTotalSupply());
