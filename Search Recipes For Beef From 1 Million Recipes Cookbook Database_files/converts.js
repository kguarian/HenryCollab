/* Conversion Tool */
function convert(n) {
    if (n == 2)
        document.formcon.q0.value = document.formcon.q1.value * (document.formcon.m1.value.substring(1)) / (document.formcon.m0.value.substring(1));
    if (n == 1) {
        var j = document.formcon.m0.value.substring(0, 1);
        if (!j) {
            document.formcon.m0.selectedIndex = 0;
            j = document.formcon.m0.value.substring(0, 1);
        }
        if (j != document.formcon.m1.value.substring(0, 1)) {
            document.formcon.m1.length = 0;
            for (var i = 0; i < document.formcon.m0.length; i++) {
                if (document.formcon.m0.options[i].value.substring(0, 1) == j) {
                    document.formcon.m1.options[document.formcon.m1.length] = new Option(document.formcon.m0.options[i].text, document.formcon.m0.options[i].value);
                }
            }
            document.formcon.m1.selectedIndex = 0;
        }
    }
    document.formcon.q1.value = document.formcon.q0.value * (document.formcon.m0.value.substring(1)) / (document.formcon.m1.value.substring(1));
}