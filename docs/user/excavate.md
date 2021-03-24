---
title: Excavation
---

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


## Sieve, sort & store

### macOS

After you downloaded the .json file of your data paste the following into your command line tool to excavate a specific file
`
$ excavator read MyActivity.json
`
make sure to point to the right directory of the file, for example if you stored the file in your "downloads" folder use
`
$ excavator read ~/Download/MyActivity.json
`

The data is now stored in the database.

## Assemble

To uncover the true value of your personal archives the digital data needs to be processed and aggregated. Our visualization tools will be available soon!
