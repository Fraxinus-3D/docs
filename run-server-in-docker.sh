#!/usr/bin/env bash
set -eu

SRC_DIR=$(cd $(dirname ${BASH_SOURCE:-$0}); pwd)

. ${SRC_DIR}/.env

docker run --rm -v /etc/group:/etc/group:ro -v /etc/passwd:/etc/passwd:ro -u $(id -u $USER):$(id -g $USER) -p 1313:1313 -v ${PWD}:/src peaceiris/hugo:${HUGO_VERSION} server --bind=0.0.0.0 --watch --minify --gc
