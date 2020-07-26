class Modules {
    lazyLoadModule(callback) {
        let table_module_0 = await import(`/src/classes/Table.js`);
        return table_module_0;
    }

    lazyImportModule() {
        let table_module_0 = await import(`/src/classes/Table.js`);
        app.classes.push(new_loaded_module);
    }
}