'use strict'
const path = require('path');

// 프로젝트 루트 기준으로 폴더 경로를 만들어줌
exports.resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}
