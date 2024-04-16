import {defineStore} from "pinia"
import {ref} from "vue"

export const useContadorStore = defineStore("count",()=>{
    let contador= ref(0)
    let nombre= ref("")
    const sumar =()=>{
        contador.value+=1
    }
    const cambiarNombre=(name)=>{
        nombre.value=name   
     }
    return {
        contador, nombre, sumar, cambiarNombre
    }
   
},

{
    persist:true,
}
)