"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SedesController = class SedesController {
    constructor(sedeRepository) {
        this.sedeRepository = sedeRepository;
    }
    async create(sede) {
        return this.sedeRepository.create(sede);
    }
    async count(where) {
        return this.sedeRepository.count(where);
    }
    async find(filter) {
        return this.sedeRepository.find(filter);
    }
    async updateAll(sede, where) {
        return this.sedeRepository.updateAll(sede, where);
    }
    async findById(id, filter) {
        return this.sedeRepository.findById(id, filter);
    }
    async updateById(id, sede) {
        await this.sedeRepository.updateById(id, sede);
    }
    async replaceById(id, sede) {
        await this.sedeRepository.replaceById(id, sede);
    }
    async deleteById(id) {
        await this.sedeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/sedes'),
    (0, rest_1.response)(200, {
        description: 'Sede model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sede) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sede, {
                    title: 'NewSede',
                    //exclude: ['idSede'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sedes/count'),
    (0, rest_1.response)(200, {
        description: 'Sede model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Sede)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sedes'),
    (0, rest_1.response)(200, {
        description: 'Array of Sede model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Sede, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Sede)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sedes'),
    (0, rest_1.response)(200, {
        description: 'Sede PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sede, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Sede)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Sede, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sedes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Sede model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sede, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Sede, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sedes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sede PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sede, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sede]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/sedes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sede PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sede]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sedes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sede DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SedesController.prototype, "deleteById", null);
SedesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SedeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SedeRepository])
], SedesController);
exports.SedesController = SedesController;
//# sourceMappingURL=sedes.controller.js.map