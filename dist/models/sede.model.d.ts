import { Entity } from '@loopback/repository';
import { Usuario } from './usuario.model';
export declare class Sede extends Entity {
    idSede: string;
    nombre: string;
    ciudad: string;
    direccion?: string;
    usuarios: Usuario[];
    constructor(data?: Partial<Sede>);
}
export interface SedeRelations {
}
export declare type SedeWithRelations = Sede & SedeRelations;
