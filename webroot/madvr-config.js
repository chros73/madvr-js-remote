/**
 * Global config variables for madVR JS remote v0.013
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
                {"label": "sLevel",  "key": "^+%i", "color": "#E67300"},
                {"label": "oLevel",  "key": "^+%y"},
            ],
            [
                {"label": "3DLUT",   "key": "^+3",  "color": "#2Eb82E"},
                {"label": "3DLUTs",  "key": "^+%3"},
            ],
            [
                {"label": "OSD",     "key": "^j",   "color": "#005CE6"},
                {"label": "rStats",  "key": "^r",   "color": "#E60000"},
            ],
            [
                {"label": "DTM",     "key": "^+%4", "color": "#E64D00"},
                {"label": "PTH",     "key": "^+%5"},
            ],
            [
                {"label": "CompOn",  "key": "^+%8"},
                {"label": "NoComp",  "key": "^+%9"},
            ],
            [
                {"label": "1080p",   "key": "^+%h"},
                {"label": "Default", "key": "^+%j", "color": "#E60073"},
                {"label": "720p",    "key": "^+%k"},
            ],
        ],
    },

    {
        "label": "Other",
        "rows": [
            [
                {"label": "sMatrix", "key": "^+%m", "color": "#E64D00"},
                {"label": "sPrimar", "key": "^+%p"},
            ],
            [
                {"label": "deInt",   "key": "^+%d", "color": "#005CE6"},
                {"label": "deIntF",  "key": "^+%f"},
                {"label": "deIntC",  "key": "^+%t"},
            ],
            [
                {"label": "rClock",  "key": "^+%{LEFT}"},
                {"label": "rClockR", "key": "^+%{RIGHT}"},
            ],
        ],
    },
];

