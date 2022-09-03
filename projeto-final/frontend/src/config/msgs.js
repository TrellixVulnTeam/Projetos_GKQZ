import Vue from "vue"
import toasted from "vue-toasted"

Vue.use(toasted, {
    iconPack: "fontawesome",
    duration: 3000
})

Vue.toasted.register(
    "defaultSuccess",
    success => !success.msg ? "Operação realizada com sucesso!" : success.msg,
    { type: "success", icon: "check" }
)

Vue.toasted.register(
    "defaultError",
    error => !error.msg ? "Ops... Erro inesperado. :(" : error.msg,
    { type: "error", icon: "times" }
)