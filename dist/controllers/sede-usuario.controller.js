"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedeUsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SedeUsuarioController = class SedeUsuarioController {
    constructor(sedeRepository) {
        this.sedeRepository = sedeRepository;
    }
    async find(id, filter) {
        return this.sedeRepository.usuarios(id).find(filter);
    }
    async create(id, usuario) {
        return this.sedeRepository.usuarios(id).create(usuario);
    }
    async patch(id, usuario, where) {
        return this.sedeRepository.usuarios(id).patch(usuario, where);
    }
    async delete(id, where) {
        return this.sedeRepository.usuarios(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/sedes/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Array of Sede has many Usuario',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Usuario) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedeUsuarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/sedes/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Sede model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuarioInSede',
                    //exclude: ['idUsuario'],
                    optional: ['sedeId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedeUsuarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sedes/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Sede.Usuario PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Usuario))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedeUsuarioController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sedes/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Sede.Usuario DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Usuario))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SedeUsuarioController.prototype, "delete", null);
SedeUsuarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SedeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SedeRepository])
], SedeUsuarioController);
exports.SedeUsuarioController = SedeUsuarioController;
//# sourceMappingURL=sede-usuario.controller.js.map