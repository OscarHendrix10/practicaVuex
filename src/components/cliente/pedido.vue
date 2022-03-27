<template>
    <div class="text-center">
    <br>
    <h1 class="titulo">𝓒𝓸𝓶𝓹𝓻𝓪𝓻 𝔂 𝓭𝓮𝓬𝓸𝓻𝓪𝓻 𝓽𝓾 𝓹𝓪𝓼𝓽𝓮𝓵</h1>
      <br>
   <div class="container">
        <div class="mb-3">
            <div class="container">
                <div class="row">
                  <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Nombre del cliente</label>
                    <input type="text" v-model="$store.state.datapedido.nombre"  class="form-control" id="exampleInputPassword1">
                  </div>
                  <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Seleccionar Tipo de Pastel</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option value="1">Cupcakes $15</option>
                        <option value="2">Pay $80</option>
                        <option value="3">Pan Dulce $10</option>
                        <option value="4">Pastel de Chocolate $150</option>
                        <option value="5">Pastel de vainilla con fresas $175</option>
                        <option value="6">Pastel de ice cream $180</option>
                      </select>
                  </div>
                  <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Escriba la cantidad</label>
                    <input type="number" class="form-control" id="exampleInputPassword1">
                  </div>
                </div>
              </div>
        </div>
        <div class="mb-3">
            <div class="container">
                <div class="row">
                  <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Seleccionar ingrendiente</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option value="1">Merengue de Chocolates</option>
                        <option value="2">Merengue de Vainilla </option>
                        <option value="3">Merengue de rompope</option>
                        <option value="4">Merengue de fresa con chocolate</option>
                        <option value="5">Ninguno</option>
                      </select>
                  </div>
                  <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Seleccionar adorno</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option value="1">Chocolate</option>
                        <option value="2">Bombones</option>
                        <option value="3">Caramelos</option>
                        <option value="4">Lunetas</option>
                        <option value="5">Galletas</option>
                        <option value="6">Fruta</option>
                      </select>
                  </div>
                  <div class="col">
                    <label for="exampleInputPassword1" class="form-label">Seleccionar adorno extra</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione</option>
                        <option value="1">Chocolate $10 x 100g</option>
                        <option value="2">Bombones $10 x 150g</option>
                        <option value="3">Caramelos $5x 100g</option>
                        <option value="4">Lunetas $10 x 100g</option>
                        <option value="5">Galletas $15 X 100g</option>
                        <option value="6">Fruta $25 x 100g</option>
                      </select>
                  </div>
                </div>
              </div>
        </div>
        <h3>Total: $ </h3>
        <button 
        type="button"
        @click="$store.dispatch('setNombre')" 
        class="btn btn-primary">Enviar Pedido</button>
   </div>

</div>

</template>

<script>

export default {
    name: 'pedido',
}

</script>


<style scoped>
.titulo{
  color: #fad2dd;
}
</style>