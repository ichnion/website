---
title: Other visualization
---

In order to view and use the extracted data placed into a SQLite database file when the extraction process was executed, the `DB Browser for SQLite` (available in the Mac App Store) desktop application can be used. With it all the past activities stored by Google, Twitter, and Facebook can be browsed and reviewed by moving into the `Browse Data` tab and choosing the desired table. 

![Screen Shot 2021-03-25 at 13 56 41](https://user-images.githubusercontent.com/68265868/112421662-cf619880-8d72-11eb-8467-0737a5bd71d9.png)


To view and analyze the extracted Location Information from the different services, the GIS desktop application `QGIS` (available in Homebrew for Macs) can also be used. The loaction table in SQLite has to be converted first into a CSV file using the DB Browser in order for QGIS to be able to create a Map Layer from the data. 

![image](https://user-images.githubusercontent.com/68265868/112423648-64b25c00-8d76-11eb-8a8f-f0a318d4f651.png)


Once the CSV file from the location table has been created, the data can be viewed in QGIS by doing **Layer -> Add Layer -> Add Vector Layer** .

![image](https://user-images.githubusercontent.com/68265868/112424576-04bcb500-8d78-11eb-8e1c-e1afc42cda84.png)
 
 Then choose the Delimited Text option and enter the CSV filename. Afterwards, chooce **Point Coordinates** and set the X field to **lng** and the Y field to **lat** column names of the CSV file. 
 
 
 ![Screen Shot 2021-03-25 at 14 42 53](https://user-images.githubusercontent.com/68265868/112425021-ba880380-8d78-11eb-84ca-e466ab416e04.png)

 Once the required information has been entered, QGIS should now be able to visualize the location information in a map.
 
![Screen Shot 2021-03-24 at 16 50 27](https://user-images.githubusercontent.com/68265868/112420563-c1127d00-8d70-11eb-8d58-23930f47284f.png)

