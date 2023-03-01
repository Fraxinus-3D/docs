#!/usr/bin/env bash
set -eu

PUBLISH_DATE=$(date '+%Y-%m-%dT%H:%M:%S%z' | sed -E 's/0900$/09:00/g')

echo "$1 ($PUBLISH_DATE)"
sed -E 's/lastmod: [0-9]{4}-.*\+[0-9]{2}:[0-9]{2}/lastmod: '$PUBLISH_DATE'/g' $1 > /tmp/temp.md
cp /tmp/temp.md $1

# 使用例
# $ ./scripts/update_lastmod_date.sh ./content/docs/assembly/step1.md