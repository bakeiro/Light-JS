class Modules {
    lazyLoad(callback) {
        let table_module_0 = await import(`/src/classes/Table.js`);
    }

    lazyLoadAdd() {
        let table_module_0 = await import(`/src/classes/Table.js`);
        app.classes.push(new_loaded_module);
    }
}