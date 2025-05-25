#!/usr/bin/env bash
set -eu

SRC_DIR=$(cd $(dirname ${BASH_SOURCE:-$0})/../; pwd)

. ${SRC_DIR}/.env

BUILD_COMMAND="build --minify --enableGitInfo --gc -d public"

if [ "$(uname -s)" = "Linux" ]; then
    docker run --rm -v /etc/group:/etc/group:ro -v /etc/passwd:/etc/passwd:ro -u $(id -u $USER):$(id -g $USER) -v ${PWD}:/src peaceiris/hugo:v${HUGO_VERSION} "" ${BUILD_COMMAND}
elif [ "$(uname -s)" = "Darwin" ]; then
    docker run --rm -v ${PWD}:/src peaceiris/hugo:v${HUGO_VERSION} "" ${BUILD_COMMAND}
fi
