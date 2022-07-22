function swaggerUi(options) {
    window.ui = SwaggerUIBundle({
        url: options.url ,
        dom_id: options.domId,
        deepLinking: true,
        presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
        ],
        plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
        ],
        layout: "BaseLayout"
    });

}