export default ({title, rootMarkup, payload}) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>${ title }</title>
      </head>
      <body>
        <div id='root'>${ rootMarkup }</div>
        <script>${ payload }</script>
        <script src="/static/index.js"></script>
      </body>
    </html>
  `;
};
