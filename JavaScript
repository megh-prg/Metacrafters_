// Create a variable to hold  NFT's
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, creator) {
  const newNFT = {
    name: name,
    description: description,
    creator: creator,
  };
  nftCollection.push(newNFT);
}

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1} - Name: ${nft.name}, Description: ${nft.description}, Creator: ${nft.creator}`);
  });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

// Mint three NFTs
mintNFT("NFT 1", "This is the first NFT", "Creator A");
mintNFT("NFT 2", "This is the second NFT", "Creator B");
mintNFT("NFT 3", "This is the third NFT", "Creator C");

// List all NFTs
listNFTs();

// Get the total supply of NFTs and print it to the console
console.log("Total NFTs minted: " + getTotalSupply());
