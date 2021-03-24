---
title: Developer Guide
sidebar_label: Overview
slug: "/developer"
---

# Excavator contributing guide
Thank you for your interest in contributing to Excavator! This guide provides an overview of how to contribute to Cargo, how to dive into the code, and how the testing infrastructure works.

## Checkout the source
1. Fork the ichnion/excavator repository on GitHub to your personal account.
2. Clone your fork to your local machine using git clone.
3. Create a new branch and send a Pull Requests against the `develop` branch.

## Running Excavator
You need to install `rustc` and `cargo` for development.

Also prepare a file for parsing the data. If you want to parse `Google Takeout` data, download from [here](https://takeout.google.com/settings/takeout).

Please check the available files [here](https://ichnion.github.io/website/docs/).

You can pass a directory or a single file for an argument to parse.

```sh
$ excavator read TakeOut
```

Or you can parse the single file

```sh
$ excavator read Location History.json
```
