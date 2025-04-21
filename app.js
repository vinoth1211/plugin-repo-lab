const fs = require("fs");

const pluginRegistry = require("./plugins.json").plugins;

pluginRegistry.forEach((plugin) => {
  try {
    const pluginModule = require(plugin.entry);
    console.log(`${plugin.name}: ${pluginModule.run()}`);
  } catch (err) {
    console.error(`Failed to load ${plugin.name}:`, err.message);
  }
});
