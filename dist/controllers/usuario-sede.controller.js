"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSedeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioSedeController = class UsuarioSedeController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async getSede(id) {
        return this.usuarioRepository.sede(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}/sede', {
        responses: {
            '200': {
                description: 'Sede belonging to Usuario',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Sede) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioSedeController.prototype, "getSede", null);
UsuarioSedeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioRepository])
], UsuarioSedeController);
exports.UsuarioSedeController = UsuarioSedeController;
//# sourceMappingURL=usuario-sede.controller.js.map