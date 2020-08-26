class PetAvailability {
	public availablePets: Pet [] = [];
	enquiries: PetRequest [] = [];

	dogCount = 0;
	catCount = 0;
	parrotCount = 0;

	availSwitch = true;

	constructor(){
		
	}
	 
	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	insertPets(){
		for (let index = 0; index < 5; index++) {
			if(index%2 == 0){
				this.availSwitch = true;
			}else{
				this.availSwitch = false;
			}
			this.availablePets.push(new Pet(`Dog ${index + 1}`,'Dog',this.getRandomInt(10000,19999),this.availSwitch));
			this.availablePets.push(new Pet(`Cat ${index + 1}`,'Cat',this.getRandomInt(20000,29999),this.availSwitch));
			this.availablePets.push(new Pet(`Parrot ${index + 1}`,'Parrot',this.getRandomInt(30000,39999),this.availSwitch));
		  }
	}

	getCountOfDifferentPets(){
		this.dogCount = 0;
		this.catCount = 0;
		this.parrotCount = 0;
		console.log("available pets length : "+this.availablePets.length);
		
		this.availablePets.forEach((element) => {
			if(element.type == "Dog"){
				this.dogCount++;
			}else if(element.type == "Cat"){
				this.catCount++;
			}else if(element.type == "Parrot"){
				this.parrotCount++;
			}
		});

		console.log("dogCount : "+this.dogCount);
		console.log("catCount : "+this.catCount);
		console.log("parrotCount : "+this.parrotCount);
	}

	public getAvailablePets(){
		return this.availablePets;
	}
}

class PetRequest extends PetAvailability{
	type:string;
	totalRequestedPets: Pet [] = [];
	//totalRequestedPets: any[];
	tempPet;
	element;
	availPets = this.availablePets;
	totalMatchedPets:number;
	totalMatchedPetsAvailable:number;

	constructor(){
		super();
	}

	insertIncomingEnquiries(enquiry:Pet [] = []){
		this.totalRequestedPets.push(...enquiry);
	}

	getStatus(){
		console.log("inside get status method");
		//this.availPets = this.availablePets;
		//console.log(this.availablePets.length);
		//console.log(this.availablePets);
		console.log(this.availPets.length);
		console.log(this.availPets);
		for(let i = 0  ; i  < 5 ; i ++){				
				this.element = this.totalRequestedPets[i];
				//this.availPets = this.getAvailablePets;
				
				console.log("iterating through requsted pets");			
				//console.log(this.availPets.length);

				for(let j = 0 ; j < this.availablePets.length ; j++) {
					console.log("iterating through each evailable pet");
					if(this.availablePets[j].name == this.element.name){
						this.tempPet = this.element;
						console.log("This pet is there in shop");
						if(this.tempPet.currentStatus){
							console.log("This pet is available right now");
						}else{
							console.log("This pet is not available right now");
						}
						console.log("current status : "+this.element.currentStatus);
					}else{
						console.log("This pet is not there in shop");
					}
				}		
		}
	}

	mapRequestData(){
		this.totalRequestedPets.forEach(element => {
				for(let j = 0 ; j < this.availablePets.length ; j++) {
					if(this.availablePets[j].name == this.element.name){
						this.tempPet = this.element;
						this.totalMatchedPets++;
						if(this.tempPet.currentStatus){
							this.totalMatchedPetsAvailable++;
						}else{
							//do nothing
						}
					}else{
						//do nothing
					}
				}
				console.log(this.totalMatchedPets);
				console.log(this.totalMatchedPetsAvailable);
		});
	}
}

class Pet{
	name:string;
	type:string;
	RFID:number;
	currentStatus:boolean;

	constructor(petName:string,petType:string,rfid:number,status:boolean){
		this.name = petName;
		this.type = petType;
		this.RFID = rfid;
		this.currentStatus = status;
	}
}

let avail = new PetAvailability();
avail.insertPets();

avail.getCountOfDifferentPets();

let request = new PetRequest();

let insertPetRequests: Pet [] = [];

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let index = 0; index < 5; index++) {
	let availSwitch = true;
	if(index%2 == 0){
		availSwitch = true;
	}else{
		availSwitch = false;
	}
	insertPetRequests.push(new Pet(`Dog ${index + 1}`,'Dog',getRandomInt(10000,19999),availSwitch));
}

request.insertIncomingEnquiries(insertPetRequests);

request.getStatus();
