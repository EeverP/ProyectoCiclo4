"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SedeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SedeRepository = class SedeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuarioRepositoryGetter) {
        super(models_1.Sede, dataSource);
        this.usuarioRepositoryGetter = usuarioRepositoryGetter;
        this.usuarios = this.createHasManyRepositoryFactoryFor('usuarios', usuarioRepositoryGetter);
        this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
    }
};
SedeRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongodb')),
    tslib_1.__param(1, repository_1.repository.getter('UsuarioRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongodbDataSource, Function])
], SedeRepository);
exports.SedeRepository = SedeRepository;
//# sourceMappingURL=sede.repository.js.map