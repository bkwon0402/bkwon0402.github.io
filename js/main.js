/*
 * if viewport is MOBILE
 * ----------------------------------------------- */
function isMobile() {
    var breakpoint = 768;
    var isMobile = false;

    isMobile = updateIsMobile(breakpoint);

    window.addEventListener("DOMContentLoaded", function (event) {
        isMobile = updateIsMobile(breakpoint);
    });

    return isMobile;
}

function updateIsMobile(breakpoint) {
    return document.body.clientWidth < breakpoint;
}



/*
 *
 * ----------------------------------------------- */
$('.d-flex-media').each(function(index, value) {
    var all = $(this).find(".flex-grow-1 .title").map(function() {
        return this.innerHTML;
    }).get();

    if (isMobile()) {
        $(this).find(".flex-grow-1 .title").hide();
    }

    if (isMobile()) {
        $(this).find(".title-sp").html(all.join());
    }
});


(function() {

    var pl = "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";

    var submitPass = document.getElementById('submitPass');
    var passEl = document.getElementById('pass');
    var invalidPassEl = document.getElementById('invalidPass');
    var trycatcherror = document.getElementById('trycatcherror');
    var successEl = document.getElementById('success');
    var contentFrame = document.getElementById('contentFrame');

    // Sanity checks

    if (pl === "") {
        submitPass.disabled = true;
        passEl.disabled = true;
        alert("This page is meant to be used with the encryption tool. It doesn't work standalone.");
        return;
    }

    if (!isSecureContext) {
        document.querySelector("#passArea").style.display = "none";
        document.querySelector("#securecontext").style.display = "block";
        return;
    }

    if (!crypto.subtle) {
        document.querySelector("#passArea").style.display = "none";
        document.querySelector("#nocrypto").style.display = "block";
        return;
    }

    function str2ab(str) {
        var ustr = atob(str);
        var buf = new ArrayBuffer(ustr.length);
        var bufView = new Uint8Array(buf);
        for (var i=0, strLen=ustr.length; i < strLen; i++) {
            bufView[i] = ustr.charCodeAt(i);
        }
        return bufView;
    }

    async function deriveKey(salt, password) {
        const encoder = new TextEncoder()
        const baseKey = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            'PBKDF2',
            false,
            ['deriveKey'],
        )
        return await crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
            baseKey,
            { name: 'AES-GCM', length: 256 },
            true,
            ['decrypt'],
        )
    }

    async function doSubmit(evt) {
        submitPass.disabled = true;
        passEl.disabled = true;

        let iv, ciphertext, key;

        try {
            var unencodedPl = str2ab(pl);

            const salt = unencodedPl.slice(0, 32)
            iv = unencodedPl.slice(32, 32 + 16)
            ciphertext = unencodedPl.slice(32 + 16)

            key = await deriveKey(salt, passEl.value);
        } catch (e) {
            trycatcherror.style.display = "inline";
            console.error(e);
            return;
        }

        try {
            const decryptedArray = new Uint8Array(
                await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
            );

            let decrypted = new TextDecoder().decode(decryptedArray);

            if (decrypted === "") throw "No data returned";

            const basestr = '<base href="." target="_top">';
            const anchorfixstr = `
                    <script>
                        Array.from(document.links).forEach((anchor) => {
                            const href = anchor.getAttribute("href");
                            if (href.startsWith("#")) {
                                anchor.addEventListener("click", function(e) {
                                    e.preventDefault();
                                    const targetId = this.getAttribute("href").substring(1);
                                    const targetEl = document.getElementById(targetId);
                                    targetEl.scrollIntoView();
                                });
                            }
                        });
                    <\/script>
                `;

            // Set default iframe link targets to _top so all links break out of the iframe
            if (decrypted.includes("<head>")) decrypted = decrypted.replace("<head>", "<head>" + basestr);
            else if (decrypted.includes("<!DOCTYPE html>")) decrypted = decrypted.replace("<!DOCTYPE html>", "<!DOCTYPE html>" + basestr);
            else decrypted = basestr + decrypted;

            // Fix fragment links
            if (decrypted.includes("</body>")) decrypted = decrypted.replace("</body>", anchorfixstr + '</body>');
            else if (decrypted.includes("</html>")) decrypted = decrypted.replace("</html>", anchorfixstr + '</html>');
            else decrypted = decrypted + anchorfixstr;

            contentFrame.srcdoc = decrypted;

            successEl.style.display = "inline";
            setTimeout(function() {
                dialogWrap.style.display = "none";
            }, 1000);
        } catch (e) {
            invalidPassEl.style.display = "inline";
            passEl.value = "";
            submitPass.disabled = false;
            passEl.disabled = false;
            console.error(e);
            return;
        }
    }

    submitPass.onclick = doSubmit;
    passEl.onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        invalidPassEl.style.display = "none";
        if (keyCode == '13'){
            // Enter pressed
            doSubmit();
            return false;
        }
    }
})();
