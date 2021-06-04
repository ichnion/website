---
title: Get started
---

# Get started

Ichnion is about your personal data and aims to make it easy for everyone to obtain, inspect, analyze and control their personal data.

### Digital privacy

With Ichnion everyone can gain insight in the data that is stored about us, fostering transparency in a digital society.

To help you get a hold of your personal data, we developed a tool called Excavator. Excavator extracts, stores and visualizes your personal data exports.

### Installing Excavator

The easiest way to install Excavator is using a package registry like crates.io:

```sh
$ cargo install excavator
```

In case you are using MacOS you can also install the package from Homebrew:

```sh
$ brew tap ichnion/tap
$ brew install excavator
```

### How to use Excavator

You need to request and download your personal data first. If you want to know how, read the [Get your data](user/index.md) section in this manual.

Assuming that you already have your personal data archive available on your computer, running Exxcavator is as easy as

```sh
$ excavator read TakeOut
```

This will recusively find the applicable files from your `TakeOut` directory and extract the data.

Alternatively you can specify a single file like:

```sh
$ excavator read MyActivity.json
```

The extracted data will be stored into a SQLite database in the current directory.
