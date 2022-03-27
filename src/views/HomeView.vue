<template>
  <div class="home">
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
            Pasteles
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
            Decoraciones
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
            Hacer pedido
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
          <Pasteles/>
        </div>
        <div
          class="tab-pane fade"
          id="Decoraciones"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
        <Decoracion/>
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
    <br>
    <br>
    <Info />
  </div>
</template>

<script>
import Info from "../components/cliente/info.vue";
import Pasteles from "../components/cliente/pasteles.vue";
import Decoracion from "../components/cliente/decoraciones.vue";
import Pedido from "../components/cliente/pedido.vue";
export default {
  name: "HomeView",
  components: {
    Info,
    Pasteles,
    Decoracion,
    Pedido
  },
};
</script>


<style>
</style>