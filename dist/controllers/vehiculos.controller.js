"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiculosController = class VehiculosController {
    constructor(vehiculoRepository) {
        this.vehiculoRepository = vehiculoRepository;
    }
    async create(vehiculo) {
        return this.vehiculoRepository.create(vehiculo);
    }
    async count(where) {
        return this.vehiculoRepository.count(where);
    }
    async find(filter) {
        return this.vehiculoRepository.find(filter);
    }
    async updateAll(vehiculo, where) {
        return this.vehiculoRepository.updateAll(vehiculo, where);
    }
    async findById(id, filter) {
        return this.vehiculoRepository.findById(id, filter);
    }
    async updateById(id, vehiculo) {
        await this.vehiculoRepository.updateById(id, vehiculo);
    }
    async replaceById(id, vehiculo) {
        await this.vehiculoRepository.replaceById(id, vehiculo);
    }
    async deleteById(id) {
        await this.vehiculoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/vehiculos'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, {
                    title: 'NewVehiculo',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Vehiculo]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehiculos/count'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Vehiculo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehiculos'),
    (0, rest_1.response)(200, {
        description: 'Array of Vehiculo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Vehiculo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vehiculos'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Vehiculo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Vehiculo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehiculos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vehiculo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Vehiculo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vehiculos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehiculo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vehiculo]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/vehiculos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehiculo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vehiculo]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/vehiculos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehiculo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculosController.prototype, "deleteById", null);
VehiculosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VehiculoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VehiculoRepository])
], VehiculosController);
exports.VehiculosController = VehiculosController;
//# sourceMappingURL=vehiculos.controller.js.map