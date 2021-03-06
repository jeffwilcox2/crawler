// Copyright (c) Microsoft Corporation. All rights reserved.
// SPDX-License-Identifier: MIT

const config = require('painless-config');
const defaults = require(config.get('CRAWLER_OPTIONS') || './config/cdConfig');
const run = require('ghcrawler').run;
const searchPath = [require('./providers')];
const VisitorMap = require('ghcrawler').visitorMap;
const maps = require('./config/map');

run(defaults, searchPath, maps);
