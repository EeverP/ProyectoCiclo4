import { Entity } from '@loopback/repository';
export declare class Vehiculo extends Entity {
    idVehiculo: string;
    tipo: string;
    marca: string;
    modelo: string;
    cilindraje: string;
    numeroPasajeros: string;
    paisOrigen: string;
    descripcion?: string;
    usuarioId: string;
    constructor(data?: Partial<Vehiculo>);
}
export interface VehiculoRelations {
}
export declare type VehiculoWithRelations = Vehiculo & VehiculoRelations;
