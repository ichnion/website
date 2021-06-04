---
title: Excavation
---

### Prerequisite
CCurrently, we support *part of* `Google Takeout` and `Facebook` data. You need to prepare the applicable data from [Google Takeout](takeout/google.md) or [Facebook](takeout/facebook.md). See the full and up-to-date list on each takeout page.

## Sieve, sort & store

### macOS

After you downloaded the .json file of your data paste the following into your command line tool to excavate a specific file

```sh
$ excavator read MyActivity.json
```

make sure to point to the right directory of the file, for example if you stored the file in your "downloads" folder use

```sh
$ excavator read ~/Download/MyActivity.json
```

The data is now stored in the database.

## Assemble

To uncover the true value of your personal archives the digital data needs to be processed and aggregated.
See the *Visualization* chapter for how to proceed and display the extracted data!
