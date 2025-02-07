window.onload = function() {
  // Build a system
  const ui = SwaggerUIBundle({
    url: "./swagger.json",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout",
  });

  window.ui = ui;
};