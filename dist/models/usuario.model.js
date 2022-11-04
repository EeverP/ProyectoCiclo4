"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const sede_model_1 = require("./sede.model");
const vehiculo_model_1 = require("./vehiculo.model");
let Usuario = class Usuario extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "idUsuario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "telefono", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "fechaNacimiento", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "contrasenia", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => sede_model_1.Sede),
    tslib_1.__metadata("design:type", String)
], Usuario.prototype, "sedeId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => vehiculo_model_1.Vehiculo),
    tslib_1.__metadata("design:type", Array)
], Usuario.prototype, "vehiculos", void 0);
Usuario = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.model.js.map