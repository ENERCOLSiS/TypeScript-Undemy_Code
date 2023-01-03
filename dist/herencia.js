"use strict";
class DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
        this.fullDesc = undefined;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
}
//# sourceMappingURL=herencia.js.map