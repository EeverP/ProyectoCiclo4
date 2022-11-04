import { Entity } from '@loopback/repository';
import { Vehiculo } from './vehiculo.model';
export declare class Usuario extends Entity {
    idUsuario: string;
    nombre: string;
    telefono?: string;
    correo: string;
    fechaNacimiento?: string;
    contrasenia: string;
    sedeId: string;
    vehiculos: Vehiculo[];
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
