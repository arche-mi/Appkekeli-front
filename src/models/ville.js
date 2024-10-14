
export default class Ville {

    constructor(id,name,imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
    }

    static fromJson=(data)=>(new Ville(data["id"],data["name"],data["imageUrl"]))

    static toJson=(data)=>(new Ville(data["id"],data["name"],data["imageUrl"]))
}