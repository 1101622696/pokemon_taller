import bienvenida from "../components/bienvenida.vue"
import busca from "../components/busca.vue"
import adivina from "../components/adivina.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes=[
{path:"/",component:bienvenida},
{path:"/busca",component:busca},
{path:"/adivina",component:adivina},
]
export const router=createRouter({
history:createWebHashHistory(),
routes
})