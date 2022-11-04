import { Usuario, Sede } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioSedeController {
    usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    getSede(id: typeof Usuario.prototype.idUsuario): Promise<Sede>;
}
