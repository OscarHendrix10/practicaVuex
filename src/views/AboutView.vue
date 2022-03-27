<template>
  <div class="about">
    <br />
     <div class="container text-center">
      <img src="../assets/Pasteleria-removebg-preview.png" alt="" />
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#pasteles"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Inventario
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#Decoraciones"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Inventario A
          </button>
          <button
            class="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#pedidos"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Pedidos
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="pasteles"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <Inventario/>
        </div>
        <div
          class="tab-pane fade"
          id="Decoraciones"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
        <InventarioA/>
        </div>
        <div
          class="tab-pane fade"
          id="pedidos"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
         <Pedido/>
        </div>
      </div>
    </div>
    <Info/>
  </div>
</template>

<script>
import Inventario from '../components/pastelero/inventario.vue';
import InventarioA from '../components/pastelero/inventarioA.vue';
import Pedido from '../components/pastelero/pedidos.vue';
import Info from '../components/cliente/info.vue'


export default {

  name: "AboutView",
  components: {
    Inventario,
    InventarioA,
    Pedido,
    Info
  },
};
</script>



<style>
</style>