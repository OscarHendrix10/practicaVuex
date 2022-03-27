<template>
<div class="container text-center">
<h3>Inventario de ingredietes</h3>

<div class="row">
    <div class="col-md-6">
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Agregar Ingrediente
</button>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Agregar nuevo ingrediente</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre ingrediente</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Marca de ingrediente</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Cantidad de ingrediente</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<br>
<br>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre de ingrediente</th>
      <th scope="col">Marca</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>
</div>
</template>