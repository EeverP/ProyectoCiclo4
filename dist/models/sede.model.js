"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sede = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuario_model_1 = require("./usuario.model");
let Sede = class Sede extends repository_1.Entity {
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
], Sede.prototype, "idSede", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sede.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sede.prototype, "ciudad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Sede.prototype, "direccion", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => usuario_model_1.Usuario),
    tslib_1.__metadata("design:type", Array)
], Sede.prototype, "usuarios", void 0);
Sede = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Sede);
exports.Sede = Sede;
//# sourceMappingURL=sede.model.js.map