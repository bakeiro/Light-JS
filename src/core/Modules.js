/**
 * Class for loading the modules through HTTP protocol, can be used for lazyloading modules and import it after that
 */
class Modules {

    /**
     * Loads a module dynamically
     * @param {*} path 
     */
    async lazyLoadModule(path) {
        let table_module_0 = await import(`${path}.js`);
        return table_module_0;
    }

    /**
     * Loads and imports a module through lazy loading
     */
    async lazyImportModule(path, module_name) {
        let loaded_module = await import(`${path}.js`);
        app.classes[module_name] = loaded_module;
        app.data[module_name] = [];
    }
}

export default Modules;