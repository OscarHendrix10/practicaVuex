import { createStore } from 'vuex'

export default createStore({
  state: {
    datapedido: {
        nombre: '',
        Tipo_pastel: '',
        cantidad: 0,
        ingrediente: '',
        adorno: '',
        adorno_extra: '',
    }
  },
  getters: {
  },
  mutations: {
    setNombre(state, datapedido) {
      state.datapedido.nombre = datapedido
      console.log(datapedido)
    }
  },
  actions: {
  },
  modules: {
  }
})
