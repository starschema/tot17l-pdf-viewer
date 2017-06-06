 $(function() {

    $('body').append(`
        <script>
            function closeModal() {
                document.getElementById('pgpPDFViewer').style.display = 'none';
            }
            function printCanvas() {  
                var dataUrl = document.getElementById('the-canvas').toDataURL(); //attempt to save base64 string to server using this var  
                var windowContent = '<!DOCTYPE html>';
                windowContent += '<html>'
                windowContent += '<head><title>Print canvas</title></head>';
                windowContent += '<body>'
                windowContent += '<img src="' + dataUrl + '">';
                windowContent += '</body>';
                windowContent += '</html>';
                var printWin = window.open('','','width=340,height=260');
                printWin.document.open();
                printWin.document.write(windowContent);
                printWin.document.close();
                printWin.focus();
                
                setTimeout(function() {
                    printWin.print();
                    printWin.close();
                }, 1000);

                
            }
        </script>
        <div id="pgpPDFViewer" style="position: fixed;width: 100%;height: 100%; display: none; background: rgba(223,223,223,0.3);">
            <div id="pdfSheet" style="width: 800px; height: 90%; margin-left: auto; margin-right: auto; background: white; box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.75); margin-top: 30px; margin-bottom: 30px;">
                <button id="prev">Previous</button>
                <button id="next">Next</button> &nbsp; &nbsp;
                <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span> &nbsp; &nbsp;
                <button id="zoomout">-</button>
                <button id="zoomin">+</button>
                <button onclick="printCanvas()" style="margin-left: 20px;">Print</button>
                <button onclick="closeModal()" style="float: right;">Close</button>
                <div id="wrapperDiv" style="width: 700px; max-height: 90%; overflow:scroll; ">
                    <canvas id="the-canvas"></canvas>
                </div>
                
            </div>
        </div>
    `);

 });