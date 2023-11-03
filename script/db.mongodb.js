use("producion")

db.cargos.insertMany([
  { _id:1, descripcion: 'Vendedor', sueldo_base: 1500000 },
  { _id:2, descripcion: 'Administrador', sueldo_base: 3000000 },
  { _id:3, descripcion: 'Diseñador', sueldo_base: 2500000 },
  { _id:4, descripcion: 'Costurero', sueldo_base: 1000000 },
  { _id:5, descripcion: 'Almacenista', sueldo_base: 800000 }
]);

// Colección "color"
use("producion")
db.color.insertMany([
  { _id:1, descripcion: 'Negro' },
  { _id:2, descripcion: 'Blanco' },
  { _id:3, descripcion: 'Rojo' },
  { _id:4, descripcion: 'Verde' },
  { _id:5, descripcion: 'Azul' },
  { _id:6, descripcion: 'Amarillo' },
  { _id:7, descripcion: 'Rosa' },
  { _id:8, descripcion: 'Morado' },
  { _id:9, descripcion: 'Gris' },
  { _id:10, descripcion: 'Beige' }
]);

// Colección "forma_pago"
use("producion")
db.forma_pago.insertMany([
  { _id:1, descripcion: 'Efectivo' },
  { _id:2, descripcion: 'Tarjeta de crédito' },
  { _id:3, descripcion: 'Tarjeta de débito' },
  { _id:4, descripcion: 'Transferencia bancaria' },
  { _id:5, descripcion: 'Paypal' }
]);

// Colección "genero"
use("producion")
db.genero.insertMany([
  { _id:1, descripcion: 'Masculino' },
  { _id:2, descripcion: 'Femenino' },
  { _id:3, descripcion: 'Unisex' }
]);

// Colección "insumo"
use("producion")
db.insumo.insertMany([
  { _id:1, nombre: 'Tela de algodón', valor_unit: 10000, stock_min: 100, stock_max: 1000 },
  { _id:2, nombre: 'Tela de poliéster', valor_unit: 20000, stock_min: 50, stock_max: 500 },
  { _id:3, nombre: 'Hilo', valor_unit: 5000, stock_min: 20, stock_max: 200 },
  { _id:4, nombre: 'Botones', valor_unit: 2000, stock_min: 10, stock_max: 100 },
  { _id:5, nombre: 'Cierres', valor_unit: 3000, stock_min: 5, stock_max: 50 }
]);

// Colección "pais"
use("producion")
db.pais.insertMany([
  { _id:1, nombre: 'Colombia' },
  { _id:2, nombre: 'México' },
  { _id:3, nombre: 'Estados Unidos' },
  { _id:4, nombre: 'España' },
  { _id:5, nombre: 'China' },
  { _id:6, nombre: 'Brasil' },
  { _id:7, nombre: 'Argentina' },
  { _id:8, nombre: 'India' },
  { _id:9, nombre: 'Francia' },
  { _id:10, nombre: 'Inglaterra' }
]);

// Colección "talla"
use("producion")
db.talla.insertMany([
  { _id:1, descripcion: 'XS - Extra pequeña' },
  { _id:2, descripcion: 'S - Pequeña' },
  { _id:3, descripcion: 'M - Mediana' },
  { _id:4, descripcion: 'L - Grande' },
  { _id:5, descripcion: 'XL - Extra grande' },
  { _id:6, descripcion: 'XXL - Extra extra grande' }
]);

// Colección "tipo_estado"
use("producion")
db.tipo_estado.insertMany([
  { _id:1, descripcion: 'Nuevo' },
  { _id:2, descripcion: 'En proceso' },
  { _id:3, descripcion: 'Listo para enviar' },
  { _id:4, descripcion: 'Enviado' },
  { _id:5, descripcion: 'Entregado' }
]);

// Colección "tipo_persona"
use("producion")
db.tipo_persona.insertMany([
  { _id:1, Nombre: 'Cliente' },
  { _id:2, Nombre: 'Proveedor' },
  { _id:3, Nombre: 'Empleado' }
]);

// Colección "tipo_proteccion"
use("producion")
db.tipo_proteccion.insertMany([
  { _id:1, descripcion: 'Protección contra el sol' },
  { _id:2, descripcion: 'Protección contra el agua' },
  { _id:3, descripcion: 'Protección contra el frío' },
  { _id:4, descripcion: 'Protección contra el viento' },
  { _id:5, descripcion: 'Protección contra los insectos' }
]);

// Colección "departamento"
use("producion")
db.departamento.insertMany([
  { _id:1, nombre: 'Antioquia', IdPaisFk: 1 },
  { _id:2, nombre: 'Bogotá', IdPaisFk: 1 },
  { _id:3, nombre: 'Cundinamarca', IdPaisFk: 1 },
  { _id:4, nombre: 'Valle del Cauca', IdPaisFk: 1 },
  { _id:5, nombre: 'Buenos Aires', IdPaisFk: 2 },
  { _id:6, nombre: 'Ciudad de México', IdPaisFk: 3 },
  { _id:7, nombre: 'Miami', IdPaisFk: 4 },
  { _id:8, nombre: 'Londres', IdPaisFk: 5 },
  { _id:9, nombre: 'París', IdPaisFk: 6 },
  { _id:10, nombre: 'Tokio', IdPaisFk: 7 }
]);

/* -------------------------------------------------------------------------- */
/*                                   2 parte                                  */
/* -------------------------------------------------------------------------- */


use("producion")
db.municipio.insertMany([
  { _id:1, nombre: 'Medellín', IdDepartamentoFk: 1 },
  { _id:2, nombre: 'Bogotá, D.C.', IdDepartamentoFk: 2 },
  { _id:3, nombre: 'Zipaquirá', IdDepartamentoFk: 2 },
  { _id:4, nombre: 'Cali', IdDepartamentoFk: 4 },
  { _id:5, nombre: 'Buenos Aires', IdDepartamentoFk: 5 },
  { _id:6, nombre: 'Ciudad de México', IdDepartamentoFk: 6 },
  { _id:7, nombre: 'Miami', IdDepartamentoFk: 7 },
  { _id:8, nombre: 'Londres', IdDepartamentoFk: 8 },
  { _id:9, nombre: 'París', IdDepartamentoFk: 9 },
  { _id:10, nombre: 'Tokio', IdDepartamentoFk: 10 }
]);

// Colección "estado"
use("producion")
db.estado.insertMany([
  { _id:1, descripcion: 'Pendiente', IdTipoEstadoFk: 1 },
  { _id:2, descripcion: 'En proceso', IdTipoEstadoFk: 2 },
  { _id:3, descripcion: 'Listo para enviar', IdTipoEstadoFk: 3 },
  { _id:4, descripcion: 'Enviado', IdTipoEstadoFk: 4 },
  { _id:5, descripcion: 'Entregado', IdTipoEstadoFk: 5 }
]);

// Colección "cliente"
use("producion")
db.cliente.insertMany([
  { _id:1, nombre: 'Juan Pérez', IdCliente: '123456789', IdTipoPersonaFk: 1, fechaRegistro: '2023-07-20', IdMunicipioFk: 1 },
  { _id:2, nombre: 'María López', IdCliente: '987654321', IdTipoPersonaFk: 2, fechaRegistro: '2023-08-03', IdMunicipioFk: 2 },
  { _id:3, nombre: 'Sofía García', IdCliente: '321654987', IdTipoPersonaFk: 3, fechaRegistro: '2023-08-10', IdMunicipioFk: 3 },
  { _id:4, nombre: 'Pedro Gómez', IdCliente: '789456123', IdTipoPersonaFk: 1, fechaRegistro: '2023-08-17', IdMunicipioFk: 4 },
  { _id:5, nombre: 'Ana Sánchez', IdCliente: '234567891', IdTipoPersonaFk: 2, fechaRegistro: '2023-08-24', IdMunicipioFk: 5 },
  { _id:6, nombre: 'Carlos Hernández', IdCliente: '654987321', IdTipoPersonaFk: 3, fechaRegistro: '2023-08-31', IdMunicipioFk: 6 },
  { _id:7, nombre: 'Luisa Rodríguez', IdCliente: '9876543210', IdTipoPersonaFk: 1, fechaRegistro: '2023-09-07', IdMunicipioFk: 7 },
  { _id:8, nombre: 'Daniela Castillo', IdCliente: '1098765432', IdTipoPersonaFk: 2, fechaRegistro: '2023-09-14', IdMunicipioFk: 8 },
  { _id:9, nombre: 'Andrés Morales', IdCliente: '3210987654', IdTipoPersonaFk: 3, fechaRegistro: '2023-09-21', IdMunicipioFk: 9 },
  { _id:10, nombre: 'Camila Gutiérrez', IdCliente: '7654321098', IdTipoPersonaFk: 1, fechaRegistro: '2023-09-28', IdMunicipioFk: 10 }
]);

// Colección "empleado"
use("producion")
db.empleado.insertMany([
  { _id:1, nombre: 'Juan Pérez', IdCargoFk: 1, fecha_ingreso: '2023-07-20', IdMunicipioFk: 1 },
  { _id:2, nombre: 'María López', IdCargoFk: 2, fecha_ingreso: '2023-08-03', IdMunicipioFk: 2 },
  { _id:3, nombre: 'Sofía García', IdCargoFk: 3, fecha_ingreso: '2023-08-10', IdMunicipioFk: 3 },
  { _id:4, nombre: 'Pedro Gómez', IdCargoFk: 1, fecha_ingreso: '2023-08-17', IdMunicipioFk: 4 },
  { _id:5, nombre: 'Ana Sánchez', IdCargoFk: 2, fecha_ingreso: '2023-08-24', IdMunicipioFk: 5 },
  { _id:6, nombre: 'Carlos Hernández', IdCargoFk: 3, fecha_ingreso: '2023-08-31', IdMunicipioFk: 6 },
  { _id:7, nombre: 'Luisa Rodríguez', IdCargoFk: 1, fecha_ingreso: '2023-09-07', IdMunicipioFk: 7 },
  { _id:8, nombre: 'Daniela Castillo', IdCargoFk: 2, fecha_ingreso: '2023-09-14', IdMunicipioFk: 8 },
  { _id:9, nombre: 'Andrés Morales', IdCargoFk: 3, fecha_ingreso: '2023-09-21', IdMunicipioFk: 9 },
  { _id:10, nombre: 'Camila Gutiérrez', IdCargoFk: 1, fecha_ingreso: '2023-09-28', IdMunicipioFk: 10 }
]);


/* -------------------------------------------------------------------------- */
/*                                   3 parte                                  */
/* -------------------------------------------------------------------------- */


// Colección "venta"
use("producion")
db.venta.insertMany([
  { _id: 1, Fecha: '2023-07-20', IdEmpleadoFk: 1, IdClienteFk: 1, IdFormaPagoFk: 1 },
  { _id: 2, Fecha: '2023-08-03', IdEmpleadoFk: 2, IdClienteFk: 2, IdFormaPagoFk: 2 },
  { _id: 3, Fecha: '2023-08-10', IdEmpleadoFk: 3, IdClienteFk: 3, IdFormaPagoFk: 3 },
  { _id: 4, Fecha: '2023-08-17', IdEmpleadoFk: 1, IdClienteFk: 4, IdFormaPagoFk: 1 },
  { _id: 5, Fecha: '2023-08-24', IdEmpleadoFk: 2, IdClienteFk: 5, IdFormaPagoFk: 2 },
  { _id: 6, Fecha: '2023-08-31', IdEmpleadoFk: 3, IdClienteFk: 6, IdFormaPagoFk: 3 },
  { _id: 7, Fecha: '2023-09-07', IdEmpleadoFk: 1, IdClienteFk: 7, IdFormaPagoFk: 1 },
  { _id: 8, Fecha: '2023-09-14', IdEmpleadoFk: 2, IdClienteFk: 8, IdFormaPagoFk: 2 },
  { _id: 9, Fecha: '2023-09-21', IdEmpleadoFk: 3, IdClienteFk: 9, IdFormaPagoFk: 3 },
  { _id: 10, Fecha: '2023-09-28', IdEmpleadoFk: 1, IdClienteFk: 10, IdFormaPagoFk: 1 }
]);

// Colección "prenda"
use("producion")
db.prenda.insertMany([
  { _id: 1, Nombre: 'Camiseta de algodón manga corta', ValorUnitCop: 20000, ValorUnitUsd: 5, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR001' },
  { _id: 2, Nombre: 'Camisa de manga larga', ValorUnitCop: 30000, ValorUnitUsd: 7.5, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR002' },
  { _id: 3, Nombre: 'Pantalón de mezclilla', ValorUnitCop: 40000, ValorUnitUsd: 10, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR003' },
  { _id: 4, Nombre: 'Vestido de algodón', ValorUnitCop: 50000, ValorUnitUsd: 12.5, IdEstadoFk: 1, IdTipoProteccion: 2, IdGeneroFk: 1, Codigo: 'PR004' },
  { _id: 5, Nombre: 'Zapatos casuales', ValorUnitCop: 60000, ValorUnitUsd: 15, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR005' },
  { _id: 6, Nombre: 'Gafas de sol', ValorUnitCop: 10000, ValorUnitUsd: 2.5, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR006' },
  { _id: 7, Nombre: 'Chaqueta de cuero', ValorUnitCop: 150000, ValorUnitUsd: 37.5, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR007' },
  { _id: 8, Nombre: 'Traje de baño', ValorUnitCop: 50000, ValorUnitUsd: 12.5, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR008' },
  { _id: 9, Nombre: 'Gorra', ValorUnitCop: 10000, ValorUnitUsd: 2.5, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR009' },
  { _id: 10, Nombre: 'Medias', ValorUnitCop: 5000, ValorUnitUsd: 1.25, IdEstadoFk: 1, IdTipoProteccion: 1, IdGeneroFk: 1, Codigo: 'PR010' }
]);

// Colección "inventario"
use("producion")
db.inventario.insertMany([
  { _id: 1, CodInv: 'INV001', IdPrendaFk: 1, ValorVtaCop: 25000, ValorVtaUsd: 6.25 },
  { _id: 2, CodInv: 'INV002', IdPrendaFk: 2, ValorVtaCop: 37500, ValorVtaUsd: 9.375 },
  { _id: 3, CodInv: 'INV003', IdPrendaFk: 3, ValorVtaCop: 50000, ValorVtaUsd: 12.5 },
  { _id: 4, CodInv: 'INV004', IdPrendaFk: 4, ValorVtaCop: 62500, ValorVtaUsd: 15.625 },
  { _id: 5, CodInv: 'INV005', IdPrendaFk: 5, ValorVtaCop: 75000, ValorVtaUsd: 18.75 },
  { _id: 6, CodInv: 'INV006', IdPrendaFk: 6, ValorVtaCop: 12500, ValorVtaUsd: 3.125 },
  { _id: 7, CodInv: 'INV007', IdPrendaFk: 7, ValorVtaCop: 187500, ValorVtaUsd: 46.875 },
  { _id: 8, CodInv: 'INV008', IdPrendaFk: 8, ValorVtaCop: 62500}
]);


/* -------------------------------------------------------------------------- */
/*                                   4 parte                                  */
/* -------------------------------------------------------------------------- */


// Colección "detalle_venta"
use("producion")
db.detalle_venta.insertMany([
  { _id: 1, IdVentaFk: 1, IdProductoFk: 1, IdTallaFk: 1, cantidad: 2, valor_unit: 25000 },
  { _id: 2, IdVentaFk: 2, IdProductoFk: 2, IdTallaFk: 2, cantidad: 1, valor_unit: 37500 },
  { _id: 3, IdVentaFk: 3, IdProductoFk: 3, IdTallaFk: 3, cantidad: 3, valor_unit: 50000 },
  { _id: 4, IdVentaFk: 4, IdProductoFk: 4, IdTallaFk: 4, cantidad: 4, valor_unit: 62500 },
  { _id: 5, IdVentaFk: 5, IdProductoFk: 5, IdTallaFk: 5, cantidad: 5, valor_unit: 75000 },
  { _id: 6, IdVentaFk: 6, IdProductoFk: 6, IdTallaFk: 6, cantidad: 6, valor_unit: 12500 }
]);

// Colección "orden"
use("producion")
db.orden.insertMany([
  { _id: 1, fecha: '2023-07-20', IdEmpleadoFk: 1, IdClienteFk: 1, IdEstadoFk: 1 },
  { _id: 2, fecha: '2023-08-03', IdEmpleadoFk: 2, IdClienteFk: 2, IdEstadoFk: 2 },
  { _id: 3, fecha: '2023-08-10', IdEmpleadoFk: 3, IdClienteFk: 3, IdEstadoFk: 3 },
  { _id: 4, fecha: '2023-08-17', IdEmpleadoFk: 1, IdClienteFk: 4, IdEstadoFk: 4 },
  { _id: 5, fecha: '2023-08-24', IdEmpleadoFk: 2, IdClienteFk: 5, IdEstadoFk: 5 }
]);

// Colección "detalle_orden"
use("producion")
db.detalle_orden.insertMany([
  { _id: 1, IdOrdenFk: 1, IdPrendaFk: 1, PrendaId: 1, cantidad_producir: 10, IdColorFk: 1, cantidad_producida: 5, IdEstadoFk: 1 },
  { _id: 2, IdOrdenFk: 2, IdPrendaFk: 2, PrendaId: 2, cantidad_producir: 5, IdColorFk: 2, cantidad_producida: 3, IdEstadoFk: 2 },
  { _id: 3, IdOrdenFk: 3, IdPrendaFk: 3, PrendaId: 3, cantidad_producir: 3, IdColorFk: 3, cantidad_producida: 3, IdEstadoFk: 3 },
  { _id: 4, IdOrdenFk: 4, IdPrendaFk: 4, PrendaId: 4, cantidad_producir: 2, IdColorFk: 4, cantidad_producida: 2, IdEstadoFk: 4 },
  { _id: 5, IdOrdenFk: 5, IdPrendaFk: 5, PrendaId: 5, cantidad_producir: 1, IdColorFk: 5, cantidad_producida: 1, IdEstadoFk: 5 }
]);

// Colección "empresa"
use("producion")
db.empresa.insertMany([
  { _id: 1, nit: '900000000-1', razon_social: 'Empresa de Ropa S.A.S.', representante_legal: 'Juan Pérez', FechaCreacion: '2023-01-01', IdMunicipioFk: 1 },
  { _id: 2, nit: '900000000-2', razon_social: 'Empresa de Calzado S.A.S.', representante_legal: 'María Rodríguez', FechaCreacion: '2023-02-02', IdMunicipioFk: 2 },
  { _id: 3, nit: '900000000-3', razon_social: 'Empresa de Accesorios S.A.S.', representante_legal: 'Pedro Gómez', FechaCreacion: '2023-03-03', IdMunicipioFk: 3 },
  { _id: 4, nit: '900000000-4', razon_social: 'Empresa de Textiles S.A.S.', representante_legal: 'Ana García', FechaCreacion: '2023-04-04', IdMunicipioFk: 4 },
  { _id: 5, nit: '900000000-5', razon_social: 'Empresa de Confección S.A.S.', representante_legal: 'Carlos Hernández', FechaCreacion: '2023-05-05', IdMunicipioFk: 5 }
]);

// Colección "insumo_prendas"
use("producion")
db.insumo_prendas.insertMany([
  { _id: 1, IdInsumoFk: 1, IdPrendaFk: 1, Cantidad: 2 },
  { _id: 2, IdInsumoFk: 2, IdPrendaFk: 2, Cantidad: 1 },
  { _id: 3, IdInsumoFk: 3, IdPrendaFk: 3, Cantidad: 3 },
  { _id: 4, IdInsumoFk: 4, IdPrendaFk: 4, Cantidad: 2 },
  { _id: 5, IdInsumoFk: 5, IdPrendaFk: 5, Cantidad: 1 },
  { _id: 6, IdInsumoFk: 6, IdPrendaFk: 6, Cantidad: 10 },
  { _id: 7, IdInsumoFk: 7, IdPrendaFk: 7, Cantidad: 5 },
  { _id: 8, IdInsumoFk: 8, IdPrendaFk: 8, Cantidad: 3 },
  { _id: 9, IdInsumoFk: 9, IdPrendaFk: 9, Cantidad: 2 },
  { _id: 10, IdInsumoFk: 10, IdPrendaFk: 10, Cantidad: 1 }
]);

// Colección "inventario_talla"
use("producion")
db.inventario_talla.insertMany([
  { _id: 1, IdInvFk: 1, IdTallaFk: 1 },
  { _id: 2, IdInvFk: 2, IdTallaFk: 2 },
  { _id: 3, IdInvFk: 3, IdTallaFk: 3 },
  { _id: 4, IdInvFk: 4, IdTallaFk: 4 },
  { _id: 5, IdInvFk: 5, IdTallaFk: 5 }
]);

// Colección "proveedor"
use("producion")
db.proveedor.insertMany([
  { _id: 1, NitProveedor: '900000000-1', Nombre: 'Proveedor 1', IdTipoPersona: 1, IdMunicipioFk: 1 },
  { _id: 2, NitProveedor: '900000000-2', Nombre: 'Proveedor 2', IdTipoPersona: 2, IdMunicipioFk: 2 },
  { _id: 3, NitProveedor: '900000000-3', Nombre: 'Proveedor 3', IdTipoPersona: 3, IdMunicipioFk: 3 },
  { _id: 4, NitProveedor: '900000000-4', Nombre: 'Proveedor 4', IdTipoPersona: 1, IdMunicipioFk: 4 },
  { _id: 5, NitProveedor: '900000000-5', Nombre: 'Proveedor 5', IdTipoPersona: 2, IdMunicipioFk: 5 }
]);

// Colección "insumo_proveedor"
use("producion")
db.insumo_proveedor.insertMany([
  { _id: 1, IdInsumoFk: 1, IdProveedorFk: 6 },
  { _id: 2, IdInsumoFk: 2, IdProveedorFk: 7 },
  { _id: 3, IdInsumoFk: 3, IdProveedorFk: 8 },
  { _id: 4, IdInsumoFk: 4, IdProveedorFk: 9 },
  { _id: 5, IdInsumoFk: 5, IdProveedorFk: 10 }
]);



// Listar todas las ventas que se realizaron en el mes de julio de 2023

use("producion")
db.empleado.aggregate([
  {
    $lookup: {
      from: "cargos", // Colección de cargos
      localField: "IdCargoFk",
      foreignField: "_id",
      as: "cargo"
    }
  },
  {
    $lookup: {
      from: "municipio", // Colección de municipios
      localField: "IdMunicipioFk",
      foreignField: "_id",
      as: "municipio"
    }
  },
  {
    $project: {
      _id: 1,
      nombre: 1,
      "cargo.descripcion": 1, // Accede al campo "descripcion" de la colección de cargos
      "municipio.nombre": 1 // Accede al campo "nombre" de la colección de municipios
    }
  }
])



use("producion")
db.venta.aggregate([
  {
    $lookup: {
      from: "cliente", // Colección de clientes
      localField: "IdClienteFk",
      foreignField: "_id",
      as: "cliente"
    }
  },
  {
    $lookup: {
      from: "forma_pago", // Colección de formas de pago
      localField: "IdFormaPagoFk",
      foreignField: "_id",
      as: "forma_pago"
    }
  },
  {
    $project: {
      _id: 1,
      Fecha: 1,
      "cliente.nombre": 1, // Accede al campo "nombre" de la colección de clientes
      "cliente.IdTipoPersonaFk": 1, // Accede al campo "IdTipoPersonaFk" de la colección de clientes
      "forma_pago.descripcion": 1 // Accede al campo "descripcion" de la colección de formas de pago
    }
  }
])