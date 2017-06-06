# PDF viewer
## Encrypted PDFs in Tableau dashboards
### Description
Depending libraries:
* openpgpjs:  https://github.com/openpgpjs/openpgpjs
* pdf.js:  https://github.com/mozilla/pdf.js

This visualization allows you to add encrypted PDFs to any Tableau Dashboards.

**Open the document**
To open the file, you have to add a list of the pdf to a dashboard. PDF viewer will listen to click events. If you select a file, a dialog window will be visible, where you have to give the private key, and the password to the PDF viewer (public key is optional for verification). If all the credentials are valid, the decrypted file will be shown in a modal dialog. You can scroll between pages, zoom in and out, and you can print the document either.
