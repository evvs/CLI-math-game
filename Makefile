install: npm install

start: npx babel-node src/bin/brain-games.js

testpublish: npm publish --dry-run