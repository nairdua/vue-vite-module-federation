## About

This repository is an example of module federation using the [Vite module federation plugin](https://github.com/originjs/vite-plugin-federation). It consists of two parts:

- `Root` (host)
- `Remote`

Additionally, it also demonstrates exposing Pinia state from the host, which is consumed in the remote.

## How to run

1. Clone this repository
2. Run `pnpm install`
3. Run `pnpm start`

> **NOTE**: Since I haven't figured out how to do HMR with module federation yet, you have to re-run `pnpm start` every time you make changes.
