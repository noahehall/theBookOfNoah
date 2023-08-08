```sh
  # @see https://nodejs.org/api/cli.html

  # previous (all versions)
  --experimental-loader=\"./node_modules/@nodeproto/configproto/src/node/loaders/flow.mjs\" --experimental-specifier-resolution=node --experimental-json-modules --experimental-top-level-await --experimental-vm-modules --experimental-import-meta-resolve node --enable-source-maps --heapsnapshot-near-heap-limit=3 --use-largepages=on --pending-deprecation --trace-sigint --trace-warnings --trace-exit --report-uncaught-exception --report-on-fatalerror --abort-on-uncaught-exception

  # current (16 & 17)
  --abort-on-uncaught-exception --diagnostic-dir=\"/var/.nodeproto/diagnostics\" --enable-source-maps --experimental-abortcontroller --experimental-modules --experimental-import-meta-resolve --experimental-json-modules --experimental-loader=\"./node_modules/@nodeproto/configproto/src/node/loaders/flow.mjs\" --experimental-specifier-resolution=node --experimental-top-level-await --experimental-vm-modules --pending-deprecation --report-compact --report-dir=\"/var/.nodeproto/reports\" --report-filename=nodeprotolog --report-on-fatalerror --report-on-signal --report-signal=SIGUSR2 --report-uncaught-exception --trace-deprecation --trace-exit --trace-sigint --trace-uncaught --trace-warnings --unhandled-rejections=throw --use-largepages=on --zero-fill-buffers --preserve-symlinks --preserve-symlinks-main

  # 17 only ----------------------------

  # notes --- --------------------------
    --experimental-abortcontroller # only required for 16, but we transpile to 16 so keep it on 17
    --report-dir # same thing --report-directory=path
    --preserve-symlinks # causes pnpm build to fail, just use --preserve-symlinks-main

  # as needed ------------------------
    --experimental-policy
    --conditions, -C
    --input-type
    --openssl-legacy-provider
    --insecure-http-parser
    --inspect-brk
    --inspect-port, --debug-port
    --inspect-publish-uid
    --inspect
    --max-http-header-size
    --dns-result-order
    --openssl-config=path
    --prof-process
    --require, -r
    --title=string
    --trace-event-categories
    --trace-event-file-pattern
    --trace-events-enabled
    --trace-sync-io
    --redirect-warnings=path
    --disallow-code-generation-from-strings
    --frozen-intrinsics
    --trace-atomics-wait

  # not needed -----------------------
    --disable-proto
    --enable-fips
    --force-fips

  # more research required -----------
    --v8-pool-size=0
    --heapsnapshot-near-heap-limit
    --heapsnapshot-signal
    --track-heap-objects
    --http-parser
    --icu-data-dir
    --policy-integrity
    --secure-heap-min
    --secure-heap
    --tls-cipher-list
    --tls-keylog
    --tls-max-v1.2
    --tls-max-v1.3
    --tls-min-v1.0
    --tls-min-v1.1
    --tls-min-v1.2
    --tls-min-v1.3
    --use-bundled-ca
    --use-openssl-ca
    --trace-tls
    --huge-max-old-generation-size
    --interpreted-frames-native-stack
    --jitless
    --max-old-space-size
    --perf-basic-prof-only-functions
    --perf-basic-prof
    --perf-prof-unwinding-info
    --perf-prof
    --stack-trace-limit

  # dont use
  --experimental-wasi-unstable-preview1
  --experimental-wasm-modules
  --force-context-aware
  --napi-modules
  --no-addons
  --no-deprecation
  --no-experimental-repl-await
  --no-extra-info-on-fatal-exception
  --no-force-async-hooks-checks
  --no-global-search-paths
  --no-warnings
  --node-memory-debug
  --throw-deprecation
```
