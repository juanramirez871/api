import "dotenv/config";
import Connect from "../config/db.js";
const salesCollection = Connect.getInstance().changeCollection("venta").connect();
const employeesCollection = Connect.getInstance().changeCollection("empleado").connect();
const cargosCollection = Connect.getInstance().changeCollection("cargos").connect();
const municipiosCollection = Connect.getInstance().changeCollection("municipio").connect();
const customersCollection = Connect.getInstance().changeCollection("cliente").connect();
const paymentMethodsCollection = Connect.getInstance().changeCollection("forma_pago").connect();
const ordersCollection = Connect.getInstance().changeCollection("orden").connect();
const productsCollection = Connect.getInstance().changeCollection("insumo").connect();
const companyCollection = Connect.getInstance().changeCollection("empresa").connect();
const clothingCollection = Connect.getInstance().changeCollection("prenda").connect();
const statesCollection = Connect.getInstance().changeCollection("estado").connect();
const personaTypeCollection = Connect.getInstance().changeCollection("tipo_persona").connect();

class Services {

  static async enpoint1(req, res) {
    const startDate = new Date("2023-07-01");
    const endDate = new Date("2023-07-31");
    const query = { Fecha: { $gte: startDate, $lte: endDate } };
    const data = await Venta.find(query).toArray();
    return res.json(data);
  }

  static async enpoint2(req, res){
    const data = await employeesCollection
    .aggregate([
      {
        $lookup: {
          from: 'cargos',
          localField: 'IdCargoFk',
          foreignField: '_id',
          as: 'cargo',
        },
      },
      {
        $lookup: {
          from: 'municipio',
          localField: 'IdMunicipioFk',
          foreignField: '_id',
          as: 'municipio',
        },
      },
    ]).toArray();

    res.json(data)
  }

  static async enpoint3(req, res){
    const data = await salesCollection
    .aggregate([
      {
        $lookup: {
          from: 'clientes',
          localField: 'IdClienteFk',
          foreignField: '_id',
          as: 'cliente',
        },
      },
      {
        $lookup: {
          from: 'forma_pago',
          localField: 'IdFormaPagoFk',
          foreignField: '_id',
          as: 'forma_pago',
        },
      },
    ])
    .toArray()

    res.json(data)
  }

  static async enpoint4(req, res){
    const orderDetails = await ordersCollection
      .aggregate([
        {
          $lookup: {
            from: 'empleados',
            localField: 'IdEmpleadoFk',
            foreignField: '_id',
            as: 'empleado',
          },
        },
        {
          $lookup: {
            from: 'clientes',
            localField: 'IdClienteFk',
            foreignField: '_id',
            as: 'cliente',
          },
        },
      ])
      .toArray();

      res.json(orderDetails);
  }

  static async enpoint5(req, res){
    const availableProducts = await productsCollection
      .aggregate([
        {
          $lookup: {
            from: 'tallas',
            localField: 'TallaID',
            foreignField: '_id',
            as: 'talla'
          }
        },
        {
          $lookup: {
            from: 'colores',
            localField: 'ColorID',
            foreignField: '_id',
            as: 'color'
          }
        },
        {
          $project: {
            Nombre: 1,
            'talla.Nombre': 1,
            'color.Nombre': 1
          }
        }
      ])
      .toArray();

    res.json(availableProducts)
  }

  static async enpoint6(req, res){

  }

  static async enpoint7(req, res){
    const salesPerEmployee = await salesCollection
    .aggregate([
      {
        $group: {
          _id: '$EmpleadoID',
          totalSales: { $sum: 1 }
        }
      }
    ])
    .toArray();

  const employeeSales = [];

  for (const entry of salesPerEmployee) {
    const employee = await employeesCollection.findOne({ _id: entry._id });
    employeeSales.push({ Employee: employee, TotalSales: entry.totalSales });
  }

  res.json(salesPerEmployee)
  }

  static async enpoint8(req, res){
    const orders = await ordersCollection.aggregate([
      {
        $match: { IdEstadoFk: 2 }, // Assuming 2 represents "En proceso" state
      },
      {
        $lookup: {
          from: 'cliente',
          localField: 'IdClienteFk',
          foreignField: '_id',
          as: 'client',
        },
      },
      {
        $lookup: {
          from: 'empleado',
          localField: 'IdEmpleadoFk',
          foreignField: '_id',
          as: 'employee',
        },
      },
      {
        $unwind: '$client',
      },
      {
        $unwind: '$employee',
      },
      {
        $project: {
          _id: 1,
          fecha: 1,
          'client.nombre': 1,
          'employee.nombre': 1,
        },
      },
    ]).toArray();

    res.json(orders)
  }

  static async enpoint9(req, res){
    const companiesInfo = await companyCollection.aggregate([
      {
        $lookup: {
          from: 'representanteLegal',
          localField: 'IdRepresentanteLegalFk',
          foreignField: '_id',
          as: 'legalRepresentative',
        },
      },
      {
        $lookup: {
          from: 'municipio',
          localField: 'IdMunicipioFk',
          foreignField: '_id',
          as: 'municipality',
        },
      },
      {
        $unwind: '$legalRepresentative',
      },
      {
        $unwind: '$municipality',
      },
      {
        $project: {
          _id: 1,
          nombre: 1,
          'legalRepresentative.nombre': 1,
          'municipality.nombre': 1,
        },
      },
    ]).toArray();

    res.json(companiesInfo)
  }

  static async enpoint10(req, res){
    const itemsStockInfo = await itemsCollection.aggregate([
      {
        $lookup: {
          from: 'stock',
          localField: '_id',
          foreignField: 'IdPrendaFk',
          as: 'stock',
        },
      },
      {
        $unwind: '$stock',
      },
      {
        $group: {
          _id: '$_id',
          nombre: { $first: '$nombre' },
          stockDisponible: { $sum: '$stock.cantidad' },
        },
      },
    ]).toArray();

    res.json(itemsStockInfo);
  }

  static async enpoint11(req, res){
    const targetDate = '2023-08-03';
    const result = await salesCollection
    .aggregate([
      {
        $match: {
          Fecha: targetDate,
        },
      },
      {
        $lookup: {
          from: 'cliente',
          localField: 'IdClienteFk',
          foreignField: '_id',
          as: 'customer',
        },
      },
      {
        $unwind: '$customer',
      },
      {
        $lookup: {
          from: 'detalle_venta',
          localField: '_id',
          foreignField: 'IdVentaFk',
          as: 'purchaseDetails',
        },
      },
      {
        $unwind: '$purchaseDetails',
      },
      {
        $group: {
          _id: '$customer.nombre',
          totalQuantity: {
            $sum: '$purchaseDetails.cantidad',
          },
        },
      },
      {
        $project: {
          _id: 0,
          customerName: '$_id',
          totalQuantity: 1,
        },
      },
    ])
    .toArray();
    res.json(result)
  }

  static async enpoint12(req, res){
    const currentDate = new Date();

    const result = await employeesCollection
      .find({})
      .toArray();

      const a = [];
    result.forEach((employee) => {
      const employmentStartDate = new Date(employee.fechaInicioTrabajo);
      const employmentDurationInYears = (currentDate - employmentStartDate) / (365 * 24 * 60 * 60 * 1000);
      a.push(`Name: ${employee.nombre}, Employment Duration: ${employmentDurationInYears.toFixed(2)} years`)
    });

    res.json(a)
  }

  static async enpoint13(req, res){
    const salesPipeline = [
      {
        $group: {
          _id: '$prendaId',
          totalSales: { $sum: '$valorVenta' },
        },
      },
    ];

    const salesResults = await salesCollection.aggregate(salesPipeline).toArray();
    const a = [];
    for (const sale of salesResults) {
      const clothingItem = await clothingCollection.findOne({ _id: sale._id });
      a.push(`Item: ${clothingItem.nombre}, Total Sales: $${sale.totalSales.toFixed(2)}`)
    }

    res.json(a);
  }

  static async enpoint14(req, res){
    const pipeline = [
      {
        $group: {
          _id: null,
          minInputs: { $min: '$insumos' },
          maxInputs: { $max: '$insumos' },
          items: { $push: { nombre: '$nombre', insumos: '$insumos' } },
        },
      },
    ];

    const result = await clothingCollection.aggregate(pipeline).toArray();
    const a = []
    if (result.length > 0) {
      const itemRange = result[0];
      console.log('Clothing Items and Their Input Ranges:');
      for (const item of itemRange.items) {
        a.push(`Item: ${item.nombre}, Min Inputs: ${itemRange.minInputs}, Max Inputs: ${itemRange.maxInputs}`)
      }
    } else {
      console.log('No data found.');
    }

    res.json(a)
  }

  static async enpoint15(req, res){
    const projection = {
      _id: 0,
      nombre: 1,
      cargo: 1,
      municipio: 1,
    };

    const a = []
    const employees = await employeesCollection.find({}, projection).toArray();

    if (employees.length > 0) {
      employees.forEach((employee) => {
        a.push(`Nombre: ${employee.nombre}, Cargo: ${employee.cargo}, Municipio: ${employee.municipio}`);
      });
    } else {
      console.log('No se encontraron datos.');
    }

    res.json(a)
  }

  static async enpoint16(req, res){
    const startDate = '2023-08-01';
    const endDate = '2023-08-15';

    const result = await ventaCollection
      .aggregate([
        {
          $match: {
            Fecha: {
              $gte: startDate,
              $lte: endDate,
            },
          },
        },
        {
          $lookup: {
            from: 'cliente',
            localField: 'IdClienteFk',
            foreignField: '_id',
            as: 'customer',
          },
        },
        {
          $unwind: '$customer',
        },
        {
          $project: {
            Fecha: 1,
            'customer.nombre': 1,
            FormaPago: 1,
          },
        },
      ])
      .toArray();
      res.json(result)
  }

  static async enpoint17(req, res){
    const result = await collection.find({}, { _id: 0, nombre: 1, valorDolar: 1, disponibilidad: 1 }).toArray();
    res.json(result)
  }

  static async enpoint18(req, res){
    const result = await customersCollection.aggregate([
      {
        $lookup: {
          from: 'venta',
          localField: '_id',
          foreignField: 'IdClienteFk',
          as: 'purchases',
        },
      },
      {
        $project: {
          _id: 1,
          nombre: 1,
          totalPurchases: { $size: '$purchases' },
        },
      },
    ]).toArray();

    rs.json(result)
  }

  static async enpoint19(req, res){
    const result = await ordersCollection
    .aggregate([
      {
        $lookup: {
          from: 'estado_orden',
          localField: 'IdEstadoOrdenFk',
          foreignField: '_id',
          as: 'status',
        },
      },
      {
        $unwind: '$status',
      },
      {
        $project: {
          _id: 0,
          orderId: '$_id',
          status: '$status.nombre',
          creationDate: '$FechaCreacion',
        },
      },
    ])
    .toArray();
    res.json(result)
  }

  static async enpoint20(req, res){
    const salaryThreshold = 2000000;

    const result = await cargosCollection
      .find({ "salario_base": { $gt: salaryThreshold } })
      .project({ nombre: 1, descripcion: 1, _id: 0 })
      .toArray();

      res.json(result)
  }

  static async enpoint21(req, res){
    const customersWithLocations = await customersCollection
    .aggregate([
      {
        $lookup: {
          from: 'municipio',
          localField: 'IdMunicipioFk',
          foreignField: '_id',
          as: 'municipality',
        },
      },
      {
        $unwind: '$municipality',
      },
      {
        $lookup: {
          from: 'pais',
          localField: 'municipality.IdPaisFk',
          foreignField: '_id',
          as: 'country',
        },
      },
      {
        $unwind: '$country',
      },
      {
        $project: {
          _id: 0,
          customerName: '$nombre',
          municipalityName: '$municipality.nombre',
          countryName: '$country.nombre',
        },
      },
    ])
    .toArray();
    res.json(customersWithLocations)
  }

  static async enpoint22(req, res){
    const result = await collection.aggregate([
      {
        $lookup: {
          from: 'garments',
          localField: '_id',
          foreignField: 'protection_type_id',
          as: 'garments',
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          garmentCount: { $size: '$garments' },
        },
      },
    ]).toArray();
    res.json(result)
  }

  static async enpoint23(req, res){
    const result = await employeesCollection
      .find()
      .sort({ FechaIngreso: -1 })
      .toArray();

      res.json(result)
  }

  static async enpoint24(req, res){
    const result = await cargosCollection.aggregate([
      {
        $lookup: {
          from: 'empleados',
          localField: '_id',
          foreignField: 'IdCargoFk',
          as: 'employees',
        },
      },
      {
        $project: {
          _id: 0,
          nombre: 1,
          descripcion: 1,
          cantidadEmpleados: { $size: '$employees' },
        },
      },
    ]).toArray();

    res.json(result);
  }

  static async enpoint25(req, res){
    const result = await statesCollection
    .aggregate([
      {
        $lookup: {
          from: 'prendas',
          localField: '_id',
          foreignField: 'IdEstadoFk',
          as: 'garments',
        },
      },
      {
        $project: {
          _id: 0,
          nombre: 1,
          descripcion: 1,
          cantidad_prendas: { $size: '$garments' },
        },
      },
    ])
    .toArray();

    res.json(result)
  }

  static async enpoint26(req, res){
    const pipeline = [
      {
        $lookup: {
          from: 'cliente',
          localField: '_id',
          foreignField: 'IdTipoPersonaFk',
          as: 'associatedCustomers',
        },
      },
      {
        $project: {
          _id: 0,
          typeName: '$nombre',
          typeDescription: '$descripcion',
          customerCount: { $size: '$associatedCustomers' },
        },
      },
    ];

    const result = await personaTypeCollection.aggregate(pipeline).toArray();
    res.json(result);
  }

  static async enpoint27(req, res){
    const result = await personaTypeCollection
      .aggregate([
        {
          $lookup: {
            from: 'prenda',
            localField: '_id',
            foreignField: 'IdTipoProteccionFk',
            as: 'items',
          },
        },
        {
          $project: {
            _id: 0,
            typeName: '$nombre',
            description: '$descripcion',
            itemCount: { $size: '$items' },
          },
        },
      ])
      .toArray();

      res.json(result)
  }

  static async enpoint28(req, res){

  }

  static async enpoint29(req, res){

  }

  static async enpoint30(req, res){

  }

  static async enpoint31(req, res){

  }

  static async enpoint32(req, res){

  }

  static async enpoint33(req, res){

  }


}

export default Services;
