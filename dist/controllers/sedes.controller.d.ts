import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Sede } from '../models';
import { SedeRepository } from '../repositories';
export declare class SedesController {
    sedeRepository: SedeRepository;
    constructor(sedeRepository: SedeRepository);
    create(sede: Omit<Sede, 'idSede'>): Promise<Sede>;
    count(where?: Where<Sede>): Promise<Count>;
    find(filter?: Filter<Sede>): Promise<Sede[]>;
    updateAll(sede: Sede, where?: Where<Sede>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Sede>): Promise<Sede>;
    updateById(id: string, sede: Sede): Promise<void>;
    replaceById(id: string, sede: Sede): Promise<void>;
    deleteById(id: string): Promise<void>;
}
