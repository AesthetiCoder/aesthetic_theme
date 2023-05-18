#!/bin/bash

function remove_last_char_if_not_empty()
{
  container=("$@")
  if [[ -n "$container" ]]; then
    container=${container::-1}
  fi
  echo "$container"
}
