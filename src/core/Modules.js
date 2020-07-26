/**
 * Class for loading the modules through HTTP protocol, can be used for lazyloading modules and import it after that
 */
class Modules {

    /**
     * Loads a module dynamically
     * @param {*} callback 
     */
    lazyLoadModule(callback) {
        let table_module_0 = await import(`/src/classes/Table.js`);
        return table_module_0;
    }

    /**
     * Loads and imports a module through lazy loading
     */
    lazyImportModule() {
        let table_module_0 = await import(`/src/classes/Table.js`);
        app.classes.push(new_loaded_module);
        app.data[new_loaded_module] = [];
    }
}