import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Sede, Vehiculo } from '../models';
import { SedeRepository } from './sede.repository';
import { VehiculoRepository } from './vehiculo.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.idUsuario, UsuarioRelations> {
    protected sedeRepositoryGetter: Getter<SedeRepository>;
    protected vehiculoRepositoryGetter: Getter<VehiculoRepository>;
    readonly sede: BelongsToAccessor<Sede, typeof Usuario.prototype.idUsuario>;
    readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Usuario.prototype.idUsuario>;
    constructor(dataSource: MongodbDataSource, sedeRepositoryGetter: Getter<SedeRepository>, vehiculoRepositoryGetter: Getter<VehiculoRepository>);
}
