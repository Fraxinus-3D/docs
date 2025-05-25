#!/usr/bin/env bash
set -eu

SRC_DIR=$(cd $(dirname ${BASH_SOURCE:-$0})/../; pwd)

. ${SRC_DIR}/.env

SERVER_COMMAND="server --bind=0.0.0.0 --watch --minify --gc"

if [ "$(uname -s)" = "Linux" ]; then
    docker run --rm -v /etc/group:/etc/group:ro -v /etc/passwd:/etc/passwd:ro -u $(id -u $USER):$(id -g $USER) -p 1313:1313 -v ${PWD}:/src peaceiris/hugo:v${HUGO_VERSION} ${SERVER_COMMAND}
elif [ "$(uname -s)" = "Darwin" ]; then
    docker run --rm -p 1313:1313 -v ${PWD}:/src peaceiris/hugo:v${HUGO_VERSION} ${SERVER_COMMAND}
fi
