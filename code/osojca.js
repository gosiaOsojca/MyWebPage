function sendMail() {
    var link = "mailto:gosia.osojca@gmail.com"
             + "?cc="
             + "&subject=" + escape(document.getElementById('name').value) + " - " +  escape(document.getElementById('email').value)
             + "&body=" + escape(document.getElementById('message').value)
    ;

    window.location.href = link;
}