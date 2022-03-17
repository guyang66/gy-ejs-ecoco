#!/bin/sh
echo "============== initFilter =================="
cd `dirname $0`
cd ..
echo $PWD

ENTRY_FILTER=$1
RESULT="var entryFilters = [";

if [ "x$ENTRY_FILTER" = "x" ]; then
  RESULT=${RESULT}"'ALL_FILE',"
else
  for i in `echo ${ENTRY_FILTER} | sed 's/,/ /g'`
  do
    echo "${i}";
    RESULT=${RESULT}"'${i}',"
  done
fi
RESULT=${RESULT}"''];";
echo ${RESULT} > ./filter/entryFilters.js
echo "module.exports = entryFilters;" >> ./filter/entryFilters.js
