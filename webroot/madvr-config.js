/**
 * Global config variables for madVR JS remote v0.010
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
        "id": "main",
        "label": "Main",
        "rows": [
            [
                {"id": "sourcelevel",   "label": "sLevel",  "key": "^+%i"},
                {"id": "outputlevel",   "label": "oLevel",  "key": "^+%y"},
            ],
            [
                {"id": "threedlut",     "label": "3DLUT",   "key": "^+3"},
                {"id": "threedluts",    "label": "3DLUTs",  "key": "^+%3"},
            ],
            [
                {"id": "onscreend",     "label": "OSD",     "key": "^j"},
                {"id": "resetstats",    "label": "rStats",  "key": "^r"},
            ],
            [
                {"id": "madvrdtm",      "label": "DTM",     "key": "^+%4"},
                {"id": "passthrough",   "label": "PTH",     "key": "^+%5"},
            ],
            [
                {"id": "compenson",     "label": "CompOn",  "key": "^+%8"},
                {"id": "compensoff",    "label": "NoComp",  "key": "^+%9"},
            ],
            [
                {"id": "180p25",        "label": "1080p",   "key": "^+%h"},
                {"id": "default",       "label": "Default", "key": "^+%j"},
                {"id": "720p25",        "label": "720p",    "key": "^+%k"},
            ],
        ],
    },

    {
        "id": "other",
        "label": "Other",
        "rows": [
            [
                {"id": "sourcematrix",  "label": "sMatrix", "key": "^+%m"},
                {"id": "sourceprimar",  "label": "sPrimar", "key": "^+%p"},
            ],
            [
                {"id": "deint",         "label": "deInt",   "key": "^+%d"},
                {"id": "deintfield",    "label": "deIntF",  "key": "^+%f"},
                {"id": "deintcontent",  "label": "deIntC",  "key": "^+%t"},
            ],
            [
                {"id": "rotateclock",   "label": "rClock",  "key": "^+%{LEFT}"},
                {"id": "rotateclockr",  "label": "rClockR", "key": "^+%{RIGHT}"},
            ],
        ],
    },
];

