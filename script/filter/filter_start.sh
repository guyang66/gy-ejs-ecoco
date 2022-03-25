#!/bin/bash
cd `dirname $0`

while getopts ":f:c:e:s:" arg
do
  case $arg in
    f)
      ENTRY_FILTER=$OPTARG
    ;;
  esac
done

echo "====================="

if [ "x${ENTRY_FILTER}" = "x" ];
then
  ENTRY_FILTER="ALL_FILE"
fi

#
sh ./initFilter.sh ${ENTRY_FILTER}
node ./prepare.js
npm run run

