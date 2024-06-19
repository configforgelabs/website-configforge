// eslint-disable-next-line @typescript-eslint/no-var-requires
const docsPluginExports = require("@docusaurus/plugin-content-docs");
const { default: docsPlugin } = docsPluginExports;

async function docPluginEnhanced(context, options) {
  const docsPluginInstance = await docsPlugin(context, options);

  return {
    ...docsPluginInstance,
    async contentLoaded({ content, allContent, actions }) {
      await docsPluginInstance.contentLoaded({
        content,
        allContent,
        actions,
      });

      // // Create your additional pages
      const { loadedVersions } = content;

      const { setGlobalData } = actions;

      const stagingVersions = loadedVersions && loadedVersions.length > 0 && loadedVersions[0].docs
        ? loadedVersions[0].docs
        : []


      setGlobalData({
        breadcrumbs: options.breadcrumbs,
        path: options.path,
        versions: loadedVersions,
        allDocs:
          stagingVersions,
      });
    },
  };
}

module.exports = Object.assign({}, docsPluginExports, {
  default: docPluginEnhanced,
});