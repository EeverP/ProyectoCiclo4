import { Count, Filter, Where } from '@loopback/repository';
import { Sede, Usuario } from '../models';
import { SedeRepository } from '../repositories';
export declare class SedeUsuarioController {
    protected sedeRepository: SedeRepository;
    constructor(sedeRepository: SedeRepository);
    find(id: string, filter?: Filter<Usuario>): Promise<Usuario[]>;
    create(id: typeof Sede.prototype.idSede, usuario: Omit<Usuario, 'idUsuario'>): Promise<Usuario>;
    patch(id: string, usuario: Partial<Usuario>, where?: Where<Usuario>): Promise<Count>;
    delete(id: string, where?: Where<Usuario>): Promise<Count>;
}
