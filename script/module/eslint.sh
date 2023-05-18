#!/bin/bash

source $(dirname $0)/../util/print.sh
source $(dirname $0)/../util/remove_last_char.sh
source $(dirname $0)/../util/create_pattern.sh
source $(dirname $0)/../util/filter_array.sh
source $(dirname $0)/../util/add_files_staged.sh

function eslint_hook()
{
  eslint_autofix_flag=""

  ends_with_js_or_jsx=".*\.jsx?$"
  ends_with_ts_or_tsx=".*\.tsx?$"

  not_staged_js_jsx_files=$(git diff --diff-filter=b --name-only | grep -E "$ends_with_js_or_jsx")
  not_staged_ts_tsx_files=$(git diff --diff-filter=b --name-only | grep -E "$ends_with_ts_or_tsx")

  staged_js_jsx_files=$(git diff --cached --diff-filter=d --name-only | grep -E "$ends_with_js_or_jsx")
  staged_ts_tsx_files=$(git diff --cached --diff-filter=d --name-only | grep -E "$ends_with_ts_or_tsx")

  js_jsx_filter_regex=$(create_pattern "${not_staged_js_jsx_files[*]}")
  ts_tsx_filter_regex=$(create_pattern "${not_staged_ts_tsx_files[*]}")

  js_jsx_files_to_add_after_linting=$(filter_array_with_inverted_regEx "${staged_js_jsx_files[*]}" "${js_jsx_filter_regex}")
  ts_tsx_files_to_add_after_linting=$(filter_array_with_inverted_regEx "${staged_ts_tsx_files[*]}" "${ts_tsx_filter_regex}")

  if [ ${#js_jsx_files_to_add_after_linting} = ${#staged_js_jsx_files} ]; then
    eslint_autofix_flag="--fix"
  fi

  if [[ -n "$staged_js_jsx_files" ]] || [[ -n "$staged_ts_tsx_files" ]]; then
    print_info " Running eslint..."
    ./node_modules/.bin/eslint $staged_js_jsx_files $staged_ts_tsx_files --quiet $eslint_autofix_flag
    eslint_exit_code=$?

    if [ $eslint_exit_code != 0 ]; then
      print_error " Error during eslint linting"
      exit 1
    fi

    add_files_to_staged_tree "${js_jsx_files_to_add_after_linting[*]} ${ts_tsx_files_to_add_after_linting[*]}"
    print_success " Lint all ts/js files correctly"
  fi
}
