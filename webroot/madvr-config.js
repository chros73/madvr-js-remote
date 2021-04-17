/**
 * Global config variables for madVR JS remote v0.014
 */

/**
 * Relative URL/path of the handler script to the html file
 *
 * @var string
 */
var scriptURI = 'sendkeys.vbs';
//var scriptURI = 'http://192.168.1.87:13579/sendkeys.vbs';


/**
 * madVR buttons split into tabs and rows
 *
 * @var array
 */
var mButtons = [
    {
        "label": "Main",
        "rows": [
            [
                {"label": "sLevel",  "type": "key", "val": "^+%i", "color": "#99994D"},
                {"label": "oLevel",  "type": "key", "val": "^+%y"},
            ],
            [
                {"label": "3DLUT",   "type": "key", "val": "^+3",  "color": "#2Eb82E"},
                {"label": "3DLUTs",  "type": "key", "val": "^+%3"},
            ],
            [
                {"label": "OSD",     "type": "key", "val": "^j",   "color": "#005CE6"},
                {"label": "rStats",  "type": "key", "val": "^r",   "color": "#E60000"},
            ],
            [
                {"label": "DTM",     "type": "key", "val": "^+%4", "color": "#E64D00"},
                {"label": "PTH",     "type": "key", "val": "^+%5"},
            ],
            [
                {"label": "CompOn",  "type": "key", "val": "^+%8"},
                {"label": "NoComp",  "type": "key", "val": "^+%9"},
            ],
            [
                {"label": "1080p",   "type": "key", "val": "^+%h"},
                {"label": "Default", "type": "key", "val": "^+%j", "color": "#E60073"},
                {"label": "720p",    "type": "key", "val": "^+%k"},
            ],
        ],
    },

    {
        "label": "Misc",
        "rows": [
            [
                {"label": "sMatrix", "type": "key", "val": "^+%m", "color": "#E64D00"},
                {"label": "sPrimar", "type": "key", "val": "^+%p"},
            ],
            [
                {"label": "deInt",   "type": "key", "val": "^+%d", "color": "#005CE6"},
                {"label": "deIntF",  "type": "key", "val": "^+%f"},
                {"label": "deIntC",  "type": "key", "val": "^+%t"},
            ],
            [
                {"label": "rClock",  "type": "key", "val": "^+%{LEFT}"},
                {"label": "rClockR", "type": "key", "val": "^+%{RIGHT}"},
            ],
        ],
    },

    {
        "label": "Script",
        "rows": [
            [
                {"label": "Notify1", "type": "cmd", "val": "notify.cmd", "color": "#E64D00"},
            ],
            [],
            [],
            [],
            [],
            [],
            [],
            [
                {"label": "Notify2", "type": "cmd", "val": "misc\\\notify.cmd", "color": "#005CE6"},
            ],
        ],
    },
];

