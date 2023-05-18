#!/bin/bash

source $(dirname $0)/../util/print.sh

function tsc_hook()
{
  ts_exit_code=0

  ends_with_ts_or_tsx=".*\.tsx?$"

  not_staged_ts_tsx_files=$(git diff --diff-filter=b --name-only | grep -E "$ends_with_ts_or_tsx")

  staged_ts_tsx_files=$(git diff --cached --diff-filter=d --name-only | grep -E "$ends_with_ts_or_tsx")

  ts_tsx_filter_regex=$(create_pattern "${not_staged_ts_tsx_files[*]}")

  ts_tsx_files_to_add_after_linting=$(filter_array_with_inverted_regEx "${staged_ts_tsx_files[*]}" "${ts_tsx_filter_regex}")

  if [[ -n "$staged_ts_tsx_files" ]]; then
    print_info " Running tsc..."
    ./node_modules/.bin/tsc --pretty --noEmit
    ts_exit_code=$?

    if [ $ts_exit_code != 0 ]; then
      print_error " Couldn't commit, typescript erros in the file"
      exit 1
    fi

    add_files_to_staged_tree "${ts_tsx_files_to_add_after_linting[*]}"
    print_success " Typescript correctly"
  fi
}


