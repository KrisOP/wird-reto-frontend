export class PokemonModel {
   id:number;
    name: string;
    urlImage: string;
    readyToBattle: boolean;

    constructor(){
      this.id = 0;
      this.name="nameDefault"
      this.urlImage="";
      this.readyToBattle=false;


    }
  }