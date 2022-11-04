import { Count, Filter, Where } from '@loopback/repository';
import { Usuario, Vehiculo } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioVehiculoController {
    protected usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    find(id: string, filter?: Filter<Vehiculo>): Promise<Vehiculo[]>;
    create(id: typeof Usuario.prototype.idUsuario, vehiculo: Omit<Vehiculo, 'idVehiculo'>): Promise<Vehiculo>;
    patch(id: string, vehiculo: Partial<Vehiculo>, where?: Where<Vehiculo>): Promise<Count>;
    delete(id: string, where?: Where<Vehiculo>): Promise<Count>;
}
