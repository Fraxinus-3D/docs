#!/bin/bash
set -e

BASE_URL="https://fraxinus.jp/"
if [[ $HUGO_ENV != "production" ]] && [[ -n $CF_PAGES_URL ]]; then
  BASE_URL="$CF_PAGES_URL"
fi

echo "Using base url: $BASE_URL"

hugo --cleanDestinationDir --minify --enableGitInfo --gc --templateMetrics --templateMetricsHints --forceSyncStatic \
    --baseURL "$BASE_URL" -d public
