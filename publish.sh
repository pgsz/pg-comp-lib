#!/bin/bash

echo "开始构建组件库"

npm run build

echo "组件库构建完成，现在发布"

npm publish --access public