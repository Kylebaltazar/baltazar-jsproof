/*
BALTAZAR,KYLE - 202011503 SEPTEMBER 10, 2023
Assessment Requirements
1.  Create a variable that can hold a number of NFT's. What type of variable might this be?
2.  Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
    The metadata values will be passed to the function as parameters. When the NFT is ready, 
    you will store it in the variable you created in step 1
3.  Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4.  For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const mintedNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(id,title,type){
    const NFT = {
        id: id,
        title: title,
        type: type
    };
    mintedNFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs(){
    for (i = 0; i < mintedNFTs.length; i++){
        console.log("\nID: " + mintedNFTs[i].id);
        console.log("Title: " + mintedNFTs[i].title);
        console.log("Type: " + mintedNFTs[i].type);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply(){
    console.log("Total number of Minted NFTs: " + mintedNFTs.length);
}

// call your functions below this line
mintNFT(123, "Bloody Chicago", "Art");
mintNFT(234, "Axie Not Finity", "Game");
mintNFT(456, "Shore", "Card");
listNFTs();
getTotalSupply();
