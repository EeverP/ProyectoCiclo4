import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Sede, SedeRelations, Usuario } from '../models';
import { UsuarioRepository } from './usuario.repository';
export declare class SedeRepository extends DefaultCrudRepository<Sede, typeof Sede.prototype.idSede, SedeRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    readonly usuarios: HasManyRepositoryFactory<Usuario, typeof Sede.prototype.idSede>;
    constructor(dataSource: MongodbDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>);
}
