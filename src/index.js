#!/usr/bin/env node
const pretty = require('pretty');
const {resolve} = require('path');
const {readFile, pathExistsSync, outputFile} = require('fs-extra');
const [, , ...files] = process.argv;

files.map(path => path.startsWith('/') ? path : resolve(__dirname, path))
    .filter(path => pathExistsSync(path))
    .map(path => readFile(path).then(src => outputFile(path, pretty(String(src)))));
