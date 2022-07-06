function getBuildVersion(url) {
    return new Promise((resolve, reject) => {
        let buildVersion = '';
        const specUrl = url + "/maven-metadata.xml";
        $.ajax({
            type: "get",
            url: specUrl,
            dataType: "xml",
            success: function (data) {
                let versions = data.getElementsByTagName('versioning')[0].getElementsByTagName('snapshotVersion');
                for (let i = 0; i < versions.length; i++) {
                    const classifier = versions[i].getElementsByTagName('classifier')[0]?.innerHTML;
                    const extension = versions[i].getElementsByTagName('extension')[0]?.innerHTML
                    const value = versions[i].getElementsByTagName('value')[0]?.innerHTML
                    if (classifier === 'swagger' && extension === 'json') {
                        buildVersion = value;
                        break;
                    }
                }
                resolve(buildVersion)
            },
            error: function (error) {
                reject(error);
            }
        })
    })
}

function swaggerUi(options) {
    let url = options.url + options.restModule + '/' + options.version;
    if (options.version.endsWith("-SNAPSHOT")) {
        getBuildVersion(url).then(buildVersion => {
            url = url + '/' + options.restModule + "-" + buildVersion;
            initSwaggerUIBundle(options.domId, url);
        });
    } else {
        url = url + '/' + options.restModule + "-" + options.version;
        initSwaggerUIBundle(options.domId, url);
    }
}

function initSwaggerUIBundle(domId, url) {
    window.ui = SwaggerUIBundle({
        url: url + "-swagger.json",
        dom_id: domId,
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