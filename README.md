# Script-For-Sending-Emails-With-Attachment
This script is used to send bulk emails with attachment for the core team members in DSC SASTRA Deemed to be University.

# Set Up
<ol>
  <li>Create a Spreadsheet and fill the columns</li>
  <li>Create a Script Project from same Spreadsheet</li>
  <li>Copy the code from <a href ="https://github.com/kavinraju/Script-For-Sending-Emails-With-Attachment/blob/master/Code.js">Code.js</a> into <b>Code.gs</b> (in App Script Console) and the <a href="https://github.com/kavinraju/Script-For-Sending-Emails-With-Attachment/blob/master/email_template.html">email_template.html</a></li>
  <li>Upload the certificates into <b>CoreTeamCertificates</b> folder in the Google Drive</li>
  <li>Run the app script, and give the permission required</li>
  <li>Run the app script from the spreadsheet</li>
  <li>Output</li>
</ol>

### 1. Create a Spreadsheet and fill the columns
This script works on a spreadsheet with the columns as specified in the below image.
![spreadsheet-creation](https://user-images.githubusercontent.com/24537737/91602875-a8ccb200-e989-11ea-905d-309463042d72.PNG)

### 2. Create a Script Project from same Spreadsheet
Click Script Editor from Tools Menu a new tab opens up with a new app script project.
![Screenshot (492)](https://user-images.githubusercontent.com/24537737/91603115-09f48580-e98a-11ea-8e43-a1b87be6cf4b.png)

### 3. Copy the code from this repo into the app script project created in the above step

### 4. Upload the certificates into CoreTeamCertificates folder in the Google Drive
Create a new folder <b>CoreTeamCertificates</b> in your Google Drive and upload all the genrated certificates there. <b>Certiface generation is not handled in this project.</b>

### 5. Run the app script, and give the permission required
#### Click the Run ( right filled-arrow ) button
![1](https://user-images.githubusercontent.com/24537737/91602497-14624f80-e989-11ea-9eba-25a202680453.PNG)
#### Click the Review Permissions
![auth 0](https://user-images.githubusercontent.com/24537737/91602501-14624f80-e989-11ea-8453-e083fb925c64.PNG)
#### Choose the account in which the spreadsheed has been created and certificates has been uploaded
![auth 1](https://user-images.githubusercontent.com/24537737/91602744-791daa00-e989-11ea-850c-82472296fd43.PNG)
#### Click Advanced
![auth 2](https://user-images.githubusercontent.com/24537737/91602508-16c4a980-e989-11ea-85f1-3342b9acc7a4.PNG)
#### Click Go to Team Certificate Distribution(unsafe)
![auth 3](https://user-images.githubusercontent.com/24537737/91602511-175d4000-e989-11ea-999e-c680a4936ef2.PNG)
#### Click Allow
![auth 4](https://user-images.githubusercontent.com/24537737/91602512-17f5d680-e989-11ea-828d-a2ca090c4748.PNG)

### 6. Run the app script from the spreadsheet
Click Send Certificates from Automation Menu
![Screenshot (494)](https://user-images.githubusercontent.com/24537737/91604228-edf1e380-e98b-11ea-8bc1-ddf2d32a48e5.png)
<br>
Make sure that you run the function <b>onOpen()</b> so that you can see the Automation Menu.
![1](https://user-images.githubusercontent.com/24537737/91602497-14624f80-e989-11ea-9eba-25a202680453.PNG)

### 7. Output
![sheets 1](https://user-images.githubusercontent.com/24537737/91602750-7ae76d80-e989-11ea-9d6a-7d5fcf0827ec.PNG)
