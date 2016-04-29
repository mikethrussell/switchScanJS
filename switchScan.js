
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var autoscan = getUrlParameter('autoscan');
if (getUrlParameter('timer')) {
    timer = getUrlParameter('timer')
}
else {
    timer = 1000;
}

$("#timer").attr("value", timer);
$("#timerN").html(timer / 1000..toFixed(1));

$('#timer').on("change mousemove", function() {
    timer = $(this).val();
    seconds = timer / 1000;
    seconds = seconds.toFixed(1);
    $("#timerN").html(seconds);
});

if (autoscan) {
    $("#autoscan").prop('checked', true);
}

function scanNext() {
    $(".scan a").eq(i).focus();
    i++;
    if (i == n) {
        i = 0
    }
}

function click() {
    $(document.activeElement)[0].click();
}

n = $(".scan").length;
maxScan = n * 3;
i = 0;
scanning = false;

shortcut.add("f8", function() {
    if ($('#autoscan').is(':checked')) {
        //donothing
    }
    else {
        scanNext()
    }
});

shortcut.add("f7", function() {

    if ($('#autoscan').is(':checked')) {

        // if already scanning, then f7 key becomes select

        if (scanning == true) {
            clearInterval(intervalID)
            scanning = false;
            click()
        }

        //auto scanning

        else {
            i = 0;
            timesRun = 0;
            scanNext()
            intervalID = setInterval(function() {
                scanNext();
                timesRun += 1;
                if (timesRun === maxScan) {
                    clearInterval(intervalID);
                    scanning = false;
                }

            }, timer);

            scanning = true;
        }
    }
    else {
        click()
    }
});