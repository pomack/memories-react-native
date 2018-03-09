#!/bin/bash

THISDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "PATH=${PATH}:${THISDIR}/node_modules/.bin:${THISDIR}/../node_modules/.bin"
