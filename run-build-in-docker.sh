#!/usr/bin/env bash
set -eu

SRC_DIR=$(cd $(dirname ${BASH_SOURCE:-$0}); pwd)

. ${SRC_DIR}/.env

docker run --rm -v /etc/group:/etc/group:ro -v /etc/passwd:/etc/passwd:ro -u $(id -u $USER):$(id -g $USER) -v ${PWD}:/src peaceiris/hugo:${HUGO_VERSION} "" --minify --enableGitInfo --gc -d public
