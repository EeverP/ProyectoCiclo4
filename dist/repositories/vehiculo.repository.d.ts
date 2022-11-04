import { DefaultCrudRepository } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Vehiculo, VehiculoRelations } from '../models';
export declare class VehiculoRepository extends DefaultCrudRepository<Vehiculo, typeof Vehiculo.prototype.idVehiculo, VehiculoRelations> {
    constructor(dataSource: MongodbDataSource);
}
