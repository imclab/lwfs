window.addEventListener(
    'load',
    function() {
        var qr = qrcode(10, 'M');
        qr.addData(window.location.href);
        qr.make();
        document.getElementById('qr').innerHTML = qr.createImgTag();
    },
    false);
