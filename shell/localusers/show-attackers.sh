#!/bin/bash

# Counmt the number of failed logins by IP address.
# If there are any IPs with over LIMIT failures, display the count, IP, and locatin.

LIMIT='10'
LOG_FILE="${1}"

# Make sure a file was supplied as an argument.
if [[ ! -e "${LOG_FILE}" ]]
then
  echo "Cannot open log file: ${LOG_FILE}" >&2
  exit 1
fi

# Display the CSV header.
echo 'Count,Ip,Location';

# Loop through the list of fialed attempsts and corresponding IP addresses.
grep Failed syslog-sample | awk '{print $(NF - 3)}' | sort | uniq -c | sort -nr | while read COUNT IP
do
  # If the number of fialed attemps is graeter than the limit, display count, IP, and location.
  if [[ "${COUNT}" -gt "${LIMIT}" ]]
  then
    LOCATION=$(geoiplookup ${IP} | awk -F ', ' '{print $2}')
    echo "${COUNT},${IP},${LOCATION}"
  fi
done
exit 0
