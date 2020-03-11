/**
 * Global config variables for madVR JS remote v0.007
 */

/**
 * Relative URL/path of the handler script to the html file
 *
 * @var string
 */
var scriptURI = 'sendkeys.vbs';
//var scriptURI = 'http://192.168.1.87:13579/sendkeys.vbs';


/**
 * madVR buttons split into rows
 *
 * @var array
 */
var mButtons = [
    {"row": [
        // Toggle 3DLUT (CTRL+SHIFT+3 = ^+3 = %5E%2B3)
        {"button": [{
            "id": "threedlut",
            "key": "^+3",
            "label": "3DLUT"
        }]},
        // Toggle Input level (CTRL+SHIFT+ALT+i = ^+%i = %5e%2b%25i)
        {"button": [{
            "id": "inputlevel",
            "key": "^+%i",
            "label": "iLevel"
        }]},
        // Reset stats (CTRL+r = ^r = %5Er)
        {"button": [{
            "id": "resetstats",
            "key": "^r",
            "label": "rStats"
        }]},
    ]},

    {"row": [
        // Toggle OSD (CTRL+j = ^j = %5Ej)
        {"button": [{
            "id": "onscreend",
            "key": "^j",
            "label": "OSD"
        }]},
    ]},

    {"row": [
        // Set dynamic tonemapping HDR profile (CTRL+SHIFT+ALT+4 = ^+%4 = %5e%2b%254)
        {"button": [{
            "id": "madvrdtm",
            "key": "^+%4",
            "label": "DTM"
        }]},
        // Set passthrough HDR profile (CTRL+SHIFT+ALT+5 = ^+%5 = %5e%2b%255)
        {"button": [{
            "id": "passthrough",
            "key": "^+%5",
            "label": "PTH"
        }]},
    ]},

    {"row": [
        // Set 3DLUT1 SDR profile (CTRL+SHIFT+ALT+6 = ^+%6 = %5e%2b%256)
        {"button": [{
            "id": "ndlut3dlut",
            "key": "^+%6",
            "label": "nDlut"
        }]},
        // Set 3DLUT2 SDR profile (CTRL+SHIFT+ALT+7 = ^+%7 = %5e%2b%257)
        {"button": [{
            "id": "ydlut3dlut",
            "key": "^+%7",
            "label": "yDlut"
        }]},
    ]},
];

