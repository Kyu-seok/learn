#!/bin/bash

# This script creates a new user on the local system.
# You must supply a username as an argument to the script.
# Optionally, you can also provide a comment for the account as an arguement.
# A password will be automatically generated for the account.
# The username, password, and host for the account will be displayed.

# Make usre the script is being executed with superuser privileges.
if [[ "${UID}" -ne 0 ]]
then 
  echo 'Please run with sudo or as root.'
  exit 1
fi

# If they don't supply at least one argument, then give them help.
if [[ "${#}" -lt 1 ]]
then
  echo "Usage: ${0} USER_NAME [COMMENT]..."i
  echo 'Create an account on the local system with the name of USER_NAME and a comments field of COMMENT.'
  exit 1
fi

# The first parameter is the user name
USER_NAME="${1}"

# The rest of the parameters are for the account comments.
shift
COMMENT="${@}"

