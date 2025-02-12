#!/bin/bash
set -eu

SRC_DIR=$(cd $(dirname ${BASH_SOURCE:-$0})/../; pwd)
PATH=$PATH:$SRC_DIR/bin
hugo server --bind=0.0.0.0 --watch --minify --gc
