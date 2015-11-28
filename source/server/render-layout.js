export default ({ settings, rootMarkup, initialState }) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>${ settings.TITLE }</title>
      </head>
      <body>
        <div id='root'>${ rootMarkup }</div>
        <script>
          window.BOOTSTRAP_CLIENT_STATE = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/index.js"></script>
      </body>
    </html>
  `;
};
