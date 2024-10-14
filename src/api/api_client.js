import axios from 'axios'
import Ville from '../models/ville'
import Vehicule from '../models/vehicule'
import Residence from '../models/residence'




class ApiClient {
    static apiUrl="http://localhost:8080";
    token;
    
    setToken=(newToken)=>{
        this.token=newToken
    }
    
    
    getVehicules=async(cityId)=>{
        let vehicules=await axios.get(this._getUrl(`vehicules?cityId=${cityId}`),{
            headers:{
                Authorization: `Bearer ${this.token}`
            }
        })
        return vehicules.data.vehicules.map((e)=>new Vehicule(e.id,e.modele,[]))
    }

    getResidences=async(cityId)=>{
        let residences=await axios.get(this._getUrl(`residences?cityId=${cityId}`),{
            headers:{
                Authorization: `Bearer ${this.token}`
            }
        })

        return residences.data.residences.map((e)=>new Residence(e.id,e.nom,e.description,e.prix,e.villeId,e.disponible,[]))
    }

    getCities=async()=>{
        let cities=await axios.get(this._getUrl('villes'),{
            headers:{
                Authorization: `Bearer ${this.token}`
            }
        })
        return cities.data.villes.map((e)=>new Ville(e["id"],e["name"],e["imageUrl"]))
    }

    submitReservation=async(reservation)=>{

        await axios.post(this._getUrl('reservations'),{
            
            headers:{
                Authorization: `Bearer ${this.token}`
            },
        })

    }


    payReservation=async(reservationId)=>{
        await axios.post(this._getUrl(`reservations/${reservationId}/payment`),{
            headers:{
                Authorization: `Bearer ${this.token}`
            },
        })
    }

    getReservations=async()=>{
        await axios.get(this._getUrl('reservations'),{
            headers:{
                Authorization: `Bearer ${this.token}`
            },
        })
    }
    
    
    _getUrl=(path)=>(`${ApiClient.apiUrl}/${path}`);
}

const apiClient=new ApiClient()

export default apiClient