// Block Chain of Farmers and Manufacturing Industries
let ourRevenue = 0;
let Farmers = []
let Companies = []
class Farmer {
    constructor(name, areaOfSepcialty){
        this.name = name
        this.areaOfSepcialty = areaOfSepcialty
    }
    id = `F${Farmers.length + 1}`
    Wallet = 0
    Transactions = []
}
class Company {
    constructor(name){
        this.name = name
    }
    id = `C${Companies.length + 1}`
    Wallet = 5000
    transactNow = (senderID, receiversID, amount) => {
        if(this.Wallet >= amount + 10){
            for(let i = 0; i < Farmers.length; i++){
                Farmers[i].Transactions.push(new Transaction(senderID, receiversID, amount))
            }
            for(i in Company){
                Company[i].Transactions.push(new Transaction(senderID, receiversID, amount))
            }
            ourRevenue += 10
            this.Wallet -= parseInt(amount) + 10
            for(let i = 0; i < Farmers.length; i++){
                if(Farmers[i].id === receiversID){
                    Farmers[i].Wallet += amount
                }
                else{
                    console.log('Invalid ID supplied')
                }
            }
        }
        else{
            console.log(`You currently do not have enough coins to complete this transaction`);
        }
    }
    Transactions = []
}
class Transaction {
    constructor(send, accept, amount){
        this.senderID = send
        this.receiversID = accept
        this.amount = amount
    }
    Details = `${this.senderID} sent ${this.amount} to ${this.receiversID}`
}
function FarmerSignIn(name, area){
    cane = null
    for (i in Farmers){
        if(Farmers[i].name === name){
            cane = true
            break
        }
        else{
            cane = false
            break
        }
    }
    if (!cane) {
        Farmers.push(new Farmer(name, area))
        console.log(`Farmer successfully created`);
    }
    else {
        console.log(`This Farmer already exists`);
    }
}
function CompanySignIn(name){
    cane = null
    for (i in Companies){
        if(Companies[i].name === name){
            cane = true
            break
        }
        else{
            cane = false
            break
        }
    }
    if (!cane) {
        Companies.push(new Company(name))
        console.log(`Company created successfully`);
    }
    else {
        console.log(`This Farmer already exists`);
    }
}
FarmerSignIn(`John`, `millet`)
CompanySignIn(`06 Solutions`)
Companies[0].transactNow('C1', 'F1', 3000)
console.log(Companies[0].Wallet)
console.log(Farmers[0].Wallet);
console.log(ourRevenue);