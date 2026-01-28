const fs = require('fs');
const path = require('path');

function updateImports(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      updateImports(fullPath);
    } else if (file.name.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Fix imports from components (../../../../src/components/ -> ../../../components/)
      content = content.replace(
        /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/src\/components\//g,
        "from '../../components/"
      );

      // Fix imports from showcase-components (../../components/ -> ../../showcase-components/)
      content = content.replace(
        /from ['"]\.\.\/\.\.\/components\//g,
        "from '../../showcase-components/"
      );

      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed:', fullPath);
      }
    }
  }
}

updateImports('./src/showcase-demos');
console.log('Done!');
