---
title: Overview
slug: /
---

# Excavator
Excavator extracts and stores data from your personal data exports.

## Installing Excavator
### Compiling from source
You need to have a [package manager](https://doc.rust-lang.org/cargo/appendix/glossary.html#package-manager) called [cargo](https://doc.rust-lang.org/cargo/) in your local.

If you already have got `rustc` installed in your local, you also have `cargo` installed locally.

And then you can install with this command.

```sh
$ cargo install --git https://github.com/ichnion/excavator --branch rusqlite
```

### Install from crates.io
TBD

### Install from Homebrew
TBD

## How to use Excavator
### Prerequisite
Currently, we support *part of* `Google Takeout` and `Facebook` data.

You need to prepare the applicable data from [Google Takeout](https://takeout.google.com/settings/takeout) or [Facebook](https://www.facebook.com/help/972879969525875).

Supported files are below.

- Google Takout
  - `MyActivity.json`
  - `search-history.json`
  - `watch-history.json`
  - `Location History.json`
  - `Saved Place.json`
  - `Semantic Location History.json`

- Facebook
  - `device_location.json`
  - `primary_location.json`
  - `primary_public_location.json`

### Basic usage
Below is the basic example to use excavator. Which will extract the data from the file.

`$ excavator read SavedPlace.json`

Then it will store the data into database.
