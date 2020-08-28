/**
 * onOpen() function creates a the Menu and adds the item called 'Send Certificates'.
 * 'sendCertificates' is the function name sendCertificates()
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Automation')
      .addItem('Send Certificates', 'sendCertificates')
      .addToUi();
}

/**
 * sendCertificates() function gets the row and sheet of the spreadsheet to which 
 * the script is attached to.
 * last_row is used to interate till the last row of the sheet, 'Sheet1' here.
 */
function sendCertificates() {
  var row = SpreadsheetApp.getActiveSheet().getActiveCell().getRow();
  var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  var last_row = sheet.getDataRange().getLastRow();
  for(var row=2; row <= last_row; row++)
   {
    var isSent = sendEmailWithAttachment(row);
    // Update the status
    if(isSent)
      sheet.getRange(row,5).setValue("Email Sent."); // 5 indicates the E column
    else
      sheet.getRange(row,5).setValue("Failed."); // 5 indicates the E column
   }
}

/**
 * sendEmailWithAttachment(@param {*} row)
 * @param {*} row contains the single row data
 * 
 * This function gets the HTML template, email_template.html and 
 * file to be attached and sent mail to the 'email' ID in the row.
 */
function sendEmailWithAttachment(row){

  var client = getCoreTeamMemberInfo(row);
  var template = HtmlService
                   .createTemplateFromFile('email_template');
  template.client = client;
  var message = template.evaluate().getContent();
  
  console.log(client);
  
  var fileName  = client.certificateID + ".pdf";
  var file = getCertificateFile(fileName);
  if(file == null){
    console.error("File Not Found:" + fileName);
    return false;
  }
  
  // Update the File Name only if it's available
  var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  sheet.getRange(row,4).setValue(fileName);
  
  console.log("client.email: " + client.email);
  
  MailApp.sendEmail({
    to: client.email,
    subject: "Congratulations on completing the Core Team Member Tenure Successfully!",
    htmlBody: message,
    attachments: [file.getAs(MimeType.PDF)]
  });
  return true;
}

/**
 * getCoreTeamMemberInfo(@param {*} row)
 * @param {*} row contains the single row data
 * 
 * This function retrives the values in the row and store it as a Js object, member, and returns the same.
 */
function getCoreTeamMemberInfo(row){
  var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  var values = sheet.getRange(row, 1, row, 4).getValues();
  var record = values[0];
  
  var member = {
    certificateID: record[0], // 1st Column - A
    name: record[1], // 2nd Column - B
    email: record[2], // 3rd Column - C
    fileName: record[3] // 4th Column - D
  };
  return member;
}

/**
 * getCertificateFile(@param {*} fileName)
 * @param {*} fileName is the file name to be retrieved from Google Drive.
 * Return the found file
 * 
 * This function retrives the file with file name, @param fileName in the CoreTeamCertificates folder.
 */
function getCertificateFile(fileName){
  var folder = DriveApp.getFoldersByName("CoreTeamCertificates");
  var files = folder.next().getFiles();
  while(files.hasNext()) {
    var file = files.next();
    console.log("Name: " + file.getName());
    if(file.getName() == fileName){
      return file;
    }
  }
  
 return null;
}