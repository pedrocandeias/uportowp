/*
 Plugin Name:   BrowserSelector
 Written by:    Okler Themes - (http://www.okler.net)
 Version:       4.9.1
 */

(function($) {
    $.extend({

        browserSelector: function() {

            // jQuery.browser.mobile (http://detectmobilebrowser.com/)
            (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

            // Touch
            var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

            var u = navigator.userAgent,
                ua = u.toLowerCase(),
                is = function (t) {
                    return ua.indexOf(t) > -1;
                },
                g = 'gecko',
                w = 'webkit',
                s = 'safari',
                o = 'opera',
                h = document.documentElement,
                b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

            c = b.join(' ');

            if ($.browser.mobile) {
                c += ' mobile';
            }

            if (hasTouch) {
                c += ' touch';
            }

            h.className += ' ' + c;

            // IE11 Detect
            var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;

            if (isIE11) {
                $('html').removeClass('gecko').addClass('ie ie11');
                return;
            }
        }

    });

    $.browserSelector();

})(jQuery);

/*
 Plugin Name:   waitForImages
 Written by:    https://github.com/alexanderdickson/waitForImages
 */

/*! waitForImages jQuery Plugin - v2.0.2 - 2015-05-05
 * https://github.com/alexanderdickson/waitForImages
 * Copyright (c) 2015 Alex Dickson; Licensed MIT */
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS / nodejs module
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    // Namespace all events.
    var eventNamespace = 'waitForImages';

    // CSS properties which contain references to images.
    $.waitForImages = {
        hasImageProperties: [
            'backgroundImage',
            'listStyleImage',
            'borderImage',
            'borderCornerImage',
            'cursor'
        ],
        hasImageAttributes: ['srcset']
    };

    // Custom selector to find `img` elements that have a valid `src`
    // attribute and have not already loaded.
    $.expr[':'].uncached = function (obj) {
        // Ensure we are dealing with an `img` element with a valid
        // `src` attribute.
        if (!$(obj).is('img[src][src!=""]')) {
            return false;
        }

        return !obj.complete;
    };

    $.fn.waitForImages = function () {

        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();

        var finishedCallback;
        var eachCallback;
        var waitForAll;

        // Handle options object (if passed).
        if ($.isPlainObject(arguments[0])) {

            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished;

        } else {

            // Handle if using deferred object and only one param was passed in.
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0];
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2];
            }

        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }

        this.each(function () {
            // Build a list of all imgs, dependent on what images will
            // be considered.
            var obj = $(this);
            var allImgs = [];
            // CSS properties which may contain an image.
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            // Element attributes which may contain an image.
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            // To match `url()` references.
            // Spec: http://www.w3.org/TR/CSS2/syndata.html#value-def-uri
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;

            if (waitForAll) {

                // Get all elements (including the original), as any one of
                // them could have a background image.
                obj.find('*').addBack().each(function () {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in
                    // case it has a background image too.
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function (i, property) {
                        var propertyValue = element.css(property);
                        var match;

                        // If it doesn't contain this property, skip.
                        if (!propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        }
                    });

                    $.each(hasImageAttributes, function (i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;

                        // If it doesn't contain this property, skip.
                        if (!attributeValue) {
                            return true;
                        }

                        // Check for multiple comma separated images
                        attributeValues = attributeValue.split(',');

                        $.each(attributeValues, function(i, value) {
                            // Trim value and get string before first
                            // whitespace (for use with srcset).
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            });
                        });
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj.find('img:uncached')
                    .each(function () {
                        allImgs.push({
                            src: this.src,
                            element: this
                        });
                    });
            }

            allImgsLength = allImgs.length;
            allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0]);
            }

            $.each(allImgs, function (i, img) {

                var image = new Image();
                var events =
                    'load.' + eventNamespace + ' error.' + eventNamespace;

                // Handle the image loading and error with the same callback.
                $(image).one(events, function me (event) {
                    // If an error occurred with loading the image, set the
                    // third argument accordingly.
                    var eachArguments = [
                        allImgsLoaded,
                        allImgsLength,
                        event.type == 'load'
                    ];
                    allImgsLoaded++;

                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);

                    // Unbind the event listeners. I use this in addition to
                    // `one` as one of those events won't be called (either
                    // 'load' or 'error' will be called).
                    $(this).off(events, me);

                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false;
                    }

                });

                image.src = img.src;
            });
        });

        return deferred.promise();

    };
}));

/*!
 * Lightweight URL manipulation with JavaScript
 * This library is independent of any other libraries and has pretty simple
 * interface and lightweight code-base.
 * Some ideas of query string parsing had been taken from Jan Wolter
 * @see http://unixpapa.com/js/querystring.html
 *
 * @license MIT
 * @author Mykhailo Stadnyk <mikhus@gmail.com>
 */
(function (ns) {
    'use strict';

    // mapping between what we want and <a> element properties
    var map = {
        protocol: 'protocol',
        host: 'hostname',
        port: 'port',
        path: 'pathname',
        query: 'search',
        hash: 'hash'
    };

    // jscs: disable
    /**
     * default ports as defined by http://url.spec.whatwg.org/#default-port
     * We need them to fix IE behavior, @see https://github.com/Mikhus/jsurl/issues/2
     */
    // jscs: enable
    var defaultPorts = {
        ftp: 21,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    };

    function parse (self, url) {
        var currUrl, link, i, auth;

        if (typeof document === 'undefined' && typeof require === 'function') {
            currUrl = 'file://' +
                (process.platform.match(/^win/i) ? '/' : '') +
                require('fs').realpathSync('.');

            if (url && url.charAt(0) !== '/' && !url.match(/^\w+:\/\//)) {
                url = currUrl + require('path').sep + url;
            }

            link = require('url').parse(url || currUrl);
        }

        else {
            currUrl = document.location.href;
            link = document.createElement('a');
            link.href = url || currUrl;
        }

        auth = (url || currUrl).match(/\/\/(.*?)(?::(.*?))?@/) || [];

        for (i in map) {
            self[i] = link[map[i]] || '';
        }

        // fix-up some parts
        self.protocol = self.protocol.replace(/:$/, '');
        self.query = self.query.replace(/^\?/, '');
        self.hash = decode(self.hash.replace(/^#/, ''));
        self.user = decode(auth[1] || '');
        self.pass = decode(auth[2] || '');
        self.port = (
            // loosely compare because port can be a string
            defaultPorts[self.protocol] == self.port || self.port == 0
            ) ? '' : self.port; // IE fix, Android browser fix

        if (!self.protocol && !/^([a-z]+:)?\/\/\/?/.test(url)) {
            // is IE and path is relative
            var base = new Url(currUrl.match(/(.*\/)/)[0]);
            var basePath = base.path.split('/');
            var selfPath = self.path.split('/');
            var props = ['protocol', 'user', 'pass', 'host', 'port'];
            var s = props.length;

            basePath.pop();

            for (i = 0; i < s; i++) {
                self[props[i]] = base[props[i]];
            }

            while (selfPath[0] == '..') { // skip all "../
                basePath.pop();
                selfPath.shift();
            }

            self.path =
                (url.charAt(0) != '/' ? basePath.join('/') : '') +
                    '/' + selfPath.join('/')
            ;
        }

        else {
            // fix absolute URL's path in IE
            self.path = self.path.replace(/^\/?/, '/');
        }

        self.paths((self.path.charAt(0) == '/' ?
            self.path.slice(1) : self.path).split('/')
        );

        self.query = new QueryString(self.query);
    }

    function encode (s) {
        return encodeURIComponent(s).replace(/'/g, '%27');
    }

    function decode (s) {
        s = s.replace(/\+/g, ' ');

        s = s.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,
            function (code, hex1, hex2, hex3) {
                var n1 = parseInt(hex1, 16) - 0xE0;
                var n2 = parseInt(hex2, 16) - 0x80;

                if (n1 === 0 && n2 < 32) {
                    return code;
                }

                var n3 = parseInt(hex3, 16) - 0x80;
                var n = (n1 << 12) + (n2 << 6) + n3;

                if (n > 0xFFFF) {
                    return code;
                }

                return String.fromCharCode(n);
            }
        );

        s = s.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,
            function (code, hex1, hex2) {
                var n1 = parseInt(hex1, 16) - 0xC0;

                if (n1 < 2) {
                    return code;
                }

                var n2 = parseInt(hex2, 16) - 0x80;

                return String.fromCharCode((n1 << 6) + n2);
            }
        );

        return s.replace(/%([0-7][0-9a-f])/gi,
            function (code, hex) {
                return String.fromCharCode(parseInt(hex, 16));
            }
        );
    }

    /**
     * Class QueryString
     *
     * @param {string} qs - string representation of QueryString
     * @constructor
     */
    function QueryString (qs) {
        var re = /([^=&]+)(=([^&]*))?/g;
        var match;

        while ((match = re.exec(qs))) {
            var key = decodeURIComponent(match[1].replace(/\+/g, ' '));
            var value = match[3] ? decode(match[3]) : '';

            if (!(this[key] === undefined || this[key] === null)) {
                if (!(this[key] instanceof Array)) {
                    this[key] = [this[key]];
                }

                this[key].push(value);
            }

            else {
                this[key] = value;
            }
        }
    }

    /**
     * Converts QueryString object back to string representation
     *
     * @returns {string}
     */
    QueryString.prototype.toString = function () {
        var s = '';
        var e = encode;
        var i, ii;

        for (i in this) {
            if (this[i] instanceof Function || this[i] === null) {
                continue;
            }

            if (this[i] instanceof Array) {
                var len = this[i].length;

                if (len) {
                    for (ii = 0; ii < len; ii++) {
                        s += s ? '&' : '';
                        s += e(i) + '=' + e(this[i][ii]);
                    }
                }

                else {
                    // parameter is an empty array, so treat as
                    // an empty argument
                    s += (s ? '&' : '') + e(i) + '=';
                }
            }

            else {
                s += s ? '&' : '';
                s += e(i) + '=' + e(this[i]);
            }
        }

        return s;
    };

    /**
     * Class Url
     *
     * @param {string} [url] - string URL representation
     * @constructor
     */
    function Url (url) {
        parse(this, url);
    }

    /**
     * Clears QueryString, making it contain no params at all
     *
     * @returns {Url}
     */
    Url.prototype.clearQuery = function () {
        for (var key in this.query) {
            if (!(this.query[key] instanceof Function)) {
                delete this.query[key];
            }
        }

        return this;
    };

    /**
     * Returns total number of parameters in QueryString
     *
     * @returns {number}
     */
    Url.prototype.queryLength = function () {
        var count = 0;
        var key;

        for (key in this) {
            if (!(this[key] instanceof Function)) {
                count++;
            }
        }

        return count;
    };

    /**
     * Returns true if QueryString contains no parameters, false otherwise
     *
     * @returns {boolean}
     */
    Url.prototype.isEmptyQuery = function () {
        return this.queryLength() === 0;
    };

    /**
     *
     * @param {Array} [paths] - an array pf path parts (if given will modify
     *                          Url.path property
     * @returns {Array} - an array representation of the Url.path property
     */
    Url.prototype.paths = function (paths) {
        var prefix = '';
        var i = 0;
        var s;

        if (paths && paths.length && paths + '' !== paths) {
            if (this.isAbsolute()) {
                prefix = '/';
            }

            for (s = paths.length; i < s; i++) {
                paths[i] = !i && paths[i].match(/^\w:$/) ? paths[i] :
                    encode(paths[i]);
            }

            this.path = prefix + paths.join('/');
        }

        paths = (this.path.charAt(0) === '/' ?
            this.path.slice(1) : this.path).split('/');

        for (i = 0, s = paths.length; i < s; i++) {
            paths[i] = decode(paths[i]);
        }

        return paths;
    };

    /**
     * Performs URL-specific encoding of the given string
     *
     * @method Url#encode
     * @param {string} s - string to encode
     * @returns {string}
     */
    Url.prototype.encode = encode;

    /**
     * Performs URL-specific decoding of the given encoded string
     *
     * @method Url#decode
     * @param {string} s - string to decode
     * @returns {string}
     */
    Url.prototype.decode = decode;

    /**
     * Checks if current URL is an absolute resource locator (globally absolute
     * or absolute path to current server)
     *
     * @returns {boolean}
     */
    Url.prototype.isAbsolute = function () {
        return this.protocol || this.path.charAt(0) === '/';
    };

    /**
     * Returns string representation of current Url object
     *
     * @returns {string}
     */
    Url.prototype.toString = function () {
        return (
            (this.protocol && (this.protocol + '://')) +
                (this.user && (
                    encode(this.user) + (this.pass && (':' + encode(this.pass))
                        ) + '@')) +
                (this.host && this.host) +
                (this.port && (':' + this.port)) +
                (this.path && this.path) +
                (this.query.toString() && ('?' + this.query)) +
                (this.hash && ('#' + encode(this.hash)))
            );
    };

    ns[ns.exports ? 'exports' : 'Url'] = Url;
}(typeof module !== 'undefined' && module.exports ? module : window));

// check browser language
var RtlDetectLib = {

    // Private functions - star
    _escapeRegExpPattern: function (str) {
        if (typeof str !== 'string') {
            return str;
        }
        return str.replace(/([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g, '\\$1');
    },
    _toLowerCase: function (str, reserveReturnValue) {
        if (typeof str !== 'string') {
            return reserveReturnValue && str;
        }
        return str.toLowerCase();
    },
    _toUpperCase: function (str, reserveReturnValue) {
        if (typeof str !== 'string') {
            return reserveReturnValue && str;
        }
        return str.toUpperCase();
    },
    _trim: function (str, delimiter, reserveReturnValue) {
        var patterns = [],
            self = this,
            regexp,
            addPatterns = function (pattern) {
                // Build trim RegExp pattern and push it to patterns array
                patterns.push('^' + pattern + '+|' + pattern + '+$');
            };

        // fix reserveReturnValue value
        if (typeof delimiter === 'boolean') {
            reserveReturnValue = delimiter;
            delimiter = null;
        }

        if (typeof str !== 'string') {
            return reserveReturnValue && str;
        }

        // Trim based on delimiter array values
        if (Array.isArray(delimiter)) {
            // Loop through delimiter array
            delimiter.map(function(item) {
                // Escape delimiter to be valid RegExp Pattern
                var pattern = self._escapeRegExpPattern(item);
                // Push pattern to patterns array
                addPatterns(pattern);
            });
        }

        // Trim based on delimiter string value
        if (typeof delimiter === 'string') {
            // Escape delimiter to be valid RegExp Pattern
            var patternDelimiter = self._escapeRegExpPattern(delimiter);
            // push pattern to patterns array
            addPatterns(patternDelimiter);
        }

        // If delimiter  is not defined, Trim white spaces
        if (!delimiter) {
            // Push white space pattern to patterns array
            addPatterns('\\s');
        }

        // Build RegExp pattern
        var pattern = '(' + patterns.join('|') + ')';
        // Build RegExp object
        regexp = new RegExp(pattern, 'g');

        // trim string for all patterns
        while(str.match(regexp)) {
            str = str.replace(regexp, '');
        }

        // Return trim string
        return str;
    },

    _parseLocale : function (strLocale) {
        // parse locale regex object
        var self = this,
            regex = /^([a-zA-Z]*)([_\-a-zA-Z]*)$/,
            matches =  regex.exec(strLocale), // exec regex
            parsedLocale,
            lang,
            countryCode;

        if (!strLocale || !matches) {
            return;
        }

        // fix countryCode string by trimming '-' and '_'
        matches[2] = self._trim(matches[2], ['-', '_']);

        lang = self._toLowerCase(matches[1]);
        countryCode = self._toUpperCase(matches[2]) || countryCode;

        // object with lang, countryCode properties
        parsedLocale = {
            lang: lang,
            countryCode: countryCode
        };

        // return parsed locale object
        return parsedLocale;
    },
    // Private functions - End

    // Public functions - star
    isRtlLang: function (strLocale) {
        var self = this, objLocale = self._parseLocale(strLocale);
        if (!objLocale) {
            return;
        }
        // return true if the intel string lang exists in the BID RTL LANGS array else return false
        return (self._BIDI_RTL_LANGS.indexOf(objLocale.lang) >= 0);
    },

    getLangDir: function (strLocale) {
        var self = this;
        // return 'rtl' if the intel string lang exists in the BID RTL LANGS array else return 'ltr'
        return self.isRtlLang(strLocale) ? 'rtl' : 'ltr';
    }

    // Public functions - End
};

// Const BIDI_RTL_LANGS Array
// BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
Object.defineProperty(RtlDetectLib, '_BIDI_RTL_LANGS', {
    value: [
        'ar', /* 'العربية', Arabic */
        'arc', /* Aramaic */
        'bcc', /* 'بلوچی مکرانی', Southern Balochi */
        'bqi', /* 'بختياري', Bakthiari */
        'ckb', /* 'Soranî / کوردی', Sorani */
        'dv', /* Dhivehi */
        'fa', /* 'فارسی', Persian */
        'glk', /* 'گیلکی', Gilaki */
        'he', /* 'עברית', Hebrew */
        'ku', /* 'Kurdî / كوردی', Kurdish */
        'mzn', /* 'مازِرونی', Mazanderani */
        'pnb', /* 'پنجابی', Western Punjabi */
        'ps', /* 'پښتو', Pashto, */
        'sd', /* 'سنڌي', Sindhi */
        'ug', /* 'Uyghurche / ئۇيغۇرچە', Uyghur */
        'ur', /* 'اردو', Urdu */
        'yi' /* 'ייִדיש', Yiddish */
    ],
    writable: false,
    enumerable: true,
    configurable: false
});

(function($) {
    if (RtlDetectLib.isRtlLang(window.navigator.userLanguage || window.navigator.language)) {
        $('html').addClass('browser-rtl');
    }
}).apply(this, [jQuery]);

/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 */
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {
        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;
        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;
            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }
            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}
                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);

/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            data_srcset     : "srcset",
            skip_invisible  : false,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    ($this.closest('.owl-carousel').length || !$.rightoffold(this, settings))) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function(e) {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute),
                                srcset = $self.attr("data-" + settings.data_srcset);
                            $self.hide().addClass('no-transition');
                            if ($self.is("img")) {
                                $self.attr("src", original);
                                if(srcset) {
                                    $self.attr("srcset", srcset);
                                }
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed, function() {
                              $self.removeClass('no-transition');
                            });

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }

            if ($self.is(":hidden") && !self.loaded) {
                $self.trigger("appear");
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(root.jQuery);
  }
})(this, function($) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @const
   * @type {String}
   */
  var PLUGIN_NAME = 'vide';

  /**
   * Default settings
   * @private
   * @const
   * @type {Object}
   */
  var DEFAULTS = {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%',
    posterType: 'detect',
    resizing: true,
    bgColor: 'transparent',
    className: ''
  };

  /**
   * Not implemented error message
   * @private
   * @const
   * @type {String}
   */
  var NOT_IMPLEMENTED_MSG = 'Not implemented';

  /**
   * Parse a string with options
   * @private
   * @param {String} str
   * @returns {Object|String}
   */
  function parseOptions(str) {
    var obj = {};
    var delimiterIndex;
    var option;
    var prop;
    var val;
    var arr;
    var len;
    var i;

    // Remove spaces around delimiters and split
    arr = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',').split(',');

    // Parse a string
    for (i = 0, len = arr.length; i < len; i++) {
      option = arr[i];

      // Ignore urls and a string without colon delimiters
      if (
        option.search(/^(http|https|ftp):\/\//) !== -1 ||
        option.search(':') === -1
      ) {
        break;
      }

      delimiterIndex = option.indexOf(':');
      prop = option.substring(0, delimiterIndex);
      val = option.substring(delimiterIndex + 1);

      // If val is an empty string, make it undefined
      if (!val) {
        val = undefined;
      }

      // Convert a string value if it is like a boolean
      if (typeof val === 'string') {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string') {
        val = !isNaN(val) ? +val : val;
      }

      obj[prop] = val;
    }

    // If nothing is parsed
    if (prop == null && val == null) {
      return str;
    }

    return obj;
  }

  /**
   * Parse a position option
   * @private
   * @param {String} str
   * @returns {Object}
   */
  function parsePosition(str) {
    str = '' + str;

    // Default value is a center
    var args = str.split(/\s+/);
    var x = '50%';
    var y = '50%';
    var len;
    var arg;
    var i;

    for (i = 0, len = args.length; i < len; i++) {
      arg = args[i];

      // Convert values
      if (arg === 'left') {
        x = '0%';
      } else if (arg === 'right') {
        x = '100%';
      } else if (arg === 'top') {
        y = '0%';
      } else if (arg === 'bottom') {
        y = '100%';
      } else if (arg === 'center') {
        if (i === 0) {
          x = '50%';
        } else {
          y = '50%';
        }
      } else {
        if (i === 0) {
          x = arg;
        } else {
          y = arg;
        }
      }
    }

    return { x: x, y: y };
  }

  /**
   * Search a poster
   * @private
   * @param {String} path
   * @param {Function} callback
   */
  function findPoster(path, callback) {
    var onLoad = function() {
      callback(this.src);
    };

    $('<img src="' + path + '.gif">').on('load', onLoad);
    $('<img src="' + path + '.jpg">').on('load', onLoad);
    $('<img src="' + path + '.jpeg">').on('load', onLoad);
    $('<img src="' + path + '.png">').on('load', onLoad);
  }

  /**
   * Vide constructor
   * @param {HTMLElement} element
   * @param {Object|String} path
   * @param {Object|String} options
   * @constructor
   */
  function Vide(element, path, options) {
    this.$element = $(element);

    // Parse path
    if (typeof path === 'string') {
      path = parseOptions(path);
    }

    // Parse options
    if (!options) {
      options = {};
    } else if (typeof options === 'string') {
      options = parseOptions(options);
    }

    // Remove an extension
    if (typeof path === 'string') {
      path = path.replace(/\.\w*$/, '');
    } else if (typeof path === 'object') {
      for (var i in path) {
        if (path.hasOwnProperty(i)) {
          path[i] = path[i].replace(/\.\w*$/, '');
        }
      }
    }

    this.settings = $.extend({}, DEFAULTS, options);
    this.path = path;

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      this.init();
    } catch (e) {
      if (e.message !== NOT_IMPLEMENTED_MSG) {
        throw e;
      }
    }
  }

  /**
   * Initialization
   * @public
   */
  Vide.prototype.init = function() {
    var vide = this;
    var path = vide.path;
    var poster = path;
    var sources = '';
    var $element = vide.$element;
    var settings = vide.settings;
    var position = parsePosition(settings.position);
    var posterType = settings.posterType;
    var $video;
    var $wrapper;

    // Set styles of a video wrapper
    $wrapper = vide.$wrapper = $('<div>')
      .addClass(settings.className)
      .css({
        position: 'absolute',
        'z-index': -1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        'background-color': settings.bgColor,
        'background-repeat': 'no-repeat',
        'background-position': position.x + ' ' + position.y
      });

    // Get a poster path
    if (typeof path === 'object') {
      if (path.poster) {
        poster = path.poster;
      } else {
        if (path.mp4) {
          poster = path.mp4;
        } else if (path.webm) {
          poster = path.webm;
        } else if (path.ogv) {
          poster = path.ogv;
        }
      }
    }

    // Set a video poster
    if (posterType === 'detect') {
      findPoster(poster, function(url) {
        $wrapper.css('background-image', 'url(' + url + ')');
      });
    } else if (posterType !== 'none') {
      $wrapper.css('background-image', 'url(' + poster + '.' + posterType + ')');
    }

    // If a parent element has a static position, make it relative
    if ($element.css('position') === 'static') {
      $element.css('position', 'relative');
    }

    $element.prepend($wrapper);

    if (typeof path === 'object') {
      if (path.mp4) {
        sources += '<source src="' + path.mp4 + '.mp4" type="video/mp4">';
      }

      if (path.webm) {
        sources += '<source src="' + path.webm + '.webm" type="video/webm">';
      }

      if (path.ogv) {
        sources += '<source src="' + path.ogv + '.ogv" type="video/ogg">';
      }

      $video = vide.$video = $('<video>' + sources + '</video>');
    } else {
      $video = vide.$video = $('<video>' +
        '<source src="' + path + '.mp4" type="video/mp4">' +
        '<source src="' + path + '.webm" type="video/webm">' +
        '<source src="' + path + '.ogv" type="video/ogg">' +
        '</video>');
    }

    // https://github.com/VodkaBears/Vide/issues/110
    try {
      $video

        // Set video properties
        .prop({
          autoplay: settings.autoplay,
          loop: settings.loop,
          volume: settings.volume,
          muted: settings.muted,
          defaultMuted: settings.muted,
          playbackRate: settings.playbackRate,
          defaultPlaybackRate: settings.playbackRate
        });
    } catch (e) {
      throw new Error(NOT_IMPLEMENTED_MSG);
    }

    // Video alignment
    $video.css({
      margin: 'auto',
      position: 'absolute',
      'z-index': -1,
      top: position.y,
      left: position.x,
      '-webkit-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-ms-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      '-moz-transform': 'translate(-' + position.x + ', -' + position.y + ')',
      transform: 'translate(-' + position.x + ', -' + position.y + ')',

      // Disable visibility, while loading
      visibility: 'hidden',
      opacity: 0
    })

    // Resize a video, when it's loaded
    .one('canplaythrough.' + PLUGIN_NAME, function() {
      vide.resize();
    })

    // Make it visible, when it's already playing
    .one('playing.' + PLUGIN_NAME, function() {
      $video.css({
        visibility: 'visible',
        opacity: 1
      });
      $wrapper.css('background-image', 'none');
    });

    // Resize event is available only for 'window'
    // Use another code solutions to detect DOM elements resizing
    $element.on('resize.' + PLUGIN_NAME, function() {
      if (settings.resizing) {
        vide.resize();
      }
    });

    // Append a video
    $wrapper.append($video);
  };

  /**
   * Get a video element
   * @public
   * @returns {HTMLVideoElement}
   */
  Vide.prototype.getVideoObject = function() {
    return this.$video[0];
  };

  /**
   * Resize a video background
   * @public
   */
  Vide.prototype.resize = function() {
    if (!this.$video) {
      return;
    }

    var $wrapper = this.$wrapper;
    var $video = this.$video;
    var video = $video[0];

    // Get a native video size
    var videoHeight = video.videoHeight;
    var videoWidth = video.videoWidth;

    // Get a wrapper size
    var wrapperHeight = $wrapper.height();
    var wrapperWidth = $wrapper.width();

    if (wrapperWidth / videoWidth > wrapperHeight / videoHeight) {
      $video.css({

        // +2 pixels to prevent an empty space after transformation
        width: wrapperWidth + 2,
        height: 'auto'
      });
    } else {
      $video.css({
        width: 'auto',

        // +2 pixels to prevent an empty space after transformation
        height: wrapperHeight + 2
      });
    }
  };

  /**
   * Destroy a video background
   * @public
   */
  Vide.prototype.destroy = function() {
    delete $[PLUGIN_NAME].lookup[this.index];
    this.$video && this.$video.off(PLUGIN_NAME);
    this.$element.off(PLUGIN_NAME).removeData(PLUGIN_NAME);
    this.$wrapper.remove();
  };

  /**
   * Special plugin object for instances.
   * @public
   * @type {Object}
   */
  $[PLUGIN_NAME] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @param {Object|String} path
   * @param {Object|String} options
   * @returns {JQuery}
   * @constructor
   */
  $.fn[PLUGIN_NAME] = function(path, options) {
    var instance;

    this.each(function() {
      instance = $.data(this, PLUGIN_NAME);

      // Destroy the plugin instance if exists
      instance && instance.destroy();

      // Create the plugin instance
      instance = new Vide(this, path, options);
      instance.index = $[PLUGIN_NAME].lookup.push(instance) - 1;
      $.data(this, PLUGIN_NAME, instance);
    });

    return this;
  };

  $(document).ready(function() {
    var $window = $(window);

    // Window resize event listener
    $window.on('resize.' + PLUGIN_NAME, function() {
      for (var len = $[PLUGIN_NAME].lookup.length, i = 0, instance; i < len; i++) {
        instance = $[PLUGIN_NAME].lookup[i];

        if (instance && instance.settings.resizing) {
          instance.resize();
        }
      }
    });

    // https://github.com/VodkaBears/Vide/issues/68
    $window.on('unload.' + PLUGIN_NAME, function() {
      return false;
    });

    // Auto initialization
    // Add 'data-vide-bg' attribute with a path to the video without extension
    // Also you can pass options throw the 'data-vide-options' attribute
    // 'data-vide-options' must be like 'muted: false, volume: 0.5'
    $(document).find('[data-' + PLUGIN_NAME + '-bg]').each(function(i, element) {
      var $element = $(element);
      var options = $element.data(PLUGIN_NAME + '-options');
      var path = $element.data(PLUGIN_NAME + '-bg');

      $element[PLUGIN_NAME](path, options);
    });
  });
});

/**
 * Smart Resize
 */
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


/* easing */
jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  }
});

/*
 Name: Porto Theme Javascript
 Writtern By: SW-THEMES
 Javascript Version: 1.2
 */

// Theme
window.theme = {};

// Configuration
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        rtl: js_porto_vars.rtl == '1' ? true : false,
        rtl_browser: $('html').hasClass('browser-rtl'),

        ajax_url: js_porto_vars.ajax_url,
        request_error: js_porto_vars.request_error,

        change_logo: js_porto_vars.change_logo == '1' ? true : false,

        show_sticky_header: js_porto_vars.show_sticky_header == '1' ? true : false,
        show_sticky_header_tablet: js_porto_vars.show_sticky_header_tablet == '1' ? true : false,
        show_sticky_header_mobile: js_porto_vars.show_sticky_header_mobile == '1' ? true : false,

        category_ajax: js_porto_vars.category_ajax == '1' ? true : false,
        prdctfltr_ajax: js_porto_vars.prdctfltr_ajax == '1' ? true : false,

        container_width: parseInt(js_porto_vars.container_width),
        grid_gutter_width: parseInt(js_porto_vars.grid_gutter_width),
        screen_lg: parseInt(js_porto_vars.screen_lg),
        slider_loop: js_porto_vars.slider_loop == '1' ? true : false,
        slider_autoplay: js_porto_vars.slider_autoplay == '1' ? true : false,
        slider_autoheight: js_porto_vars.slider_autoheight == '1' ? true : false,
        slider_speed: js_porto_vars.slider_speed ? js_porto_vars.slider_speed : 5000,
        slider_nav: js_porto_vars.slider_nav == '1' ? true : false,
        slider_nav_hover: js_porto_vars.slider_nav_hover == '1' ? true : false,
        slider_margin: js_porto_vars.slider_margin == '1' ? 40 : 0,
        slider_dots: js_porto_vars.slider_dots == '1' ? true : false,
        slider_animatein: js_porto_vars.slider_animatein ? js_porto_vars.slider_animatein : '',
        slider_animateout: js_porto_vars.slider_animateout ? js_porto_vars.slider_animateout : '',
        product_thumbs_count: js_porto_vars.product_thumbs_count ? js_porto_vars.product_thumbs_count : 4,
        product_zoom: js_porto_vars.product_zoom == '1' ? true : false,
        product_zoom_mobile: js_porto_vars.product_zoom_mobile == '1' ? true : false,
        product_image_popup: js_porto_vars.product_image_popup == '1' ? 'fadeOut' : false,

        hoverIntentConfig: {
            sensitivity: 2,
            interval: 0,
            timeout: 0
        },

        owlConfig: {
            rtl: js_porto_vars.rtl == '1' ? true : false,
            loop : js_porto_vars.slider_loop == '1' ? true : false,
            autoplay : js_porto_vars.slider_autoplay == '1' ? true : false,
            autoHeight : js_porto_vars.slider_autoheight == '1' ? true : false,
            autoplayTimeout: js_porto_vars.slider_speed ? js_porto_vars.slider_speed : 5000,
            autoplayHoverPause : true,
            lazyLoad: true,
            nav: js_porto_vars.slider_nav == '1' ? true : false,
            navText: ["", ""],
            dots: js_porto_vars.slider_dots == '1' ? true : false,
            stagePadding: (js_porto_vars.slider_nav_hover != '1' && js_porto_vars.slider_margin == '1') ? 40 : 0,
            animateOut: js_porto_vars.slider_animateout ? js_porto_vars.slider_animateout : '',
            animateIn: js_porto_vars.slider_animatein ? js_porto_vars.slider_animatein : ''
        },

        mfpConfig: {
            tClose: js_porto_vars.popup_close,
            tLoading: '<div class="porto-ajax-loading"><i class="porto-loading-icon"></i></div>',
            gallery: {
                tPrev: js_porto_vars.popup_prev,
                tNext: js_porto_vars.popup_next,
                tCounter: js_porto_vars.mfp_counter
            },
            image: {
                tError: js_porto_vars.mfp_img_error
            },
            ajax: {
                tError: js_porto_vars.mfp_ajax_error
            },
            callbacks: {
                open: function() {
                    $('body').addClass('lightbox-opened');
                    var fixed = this.st.fixedContentPos;
                    if (fixed) {
                        $('#header.sticky-header .header-main.sticky, #header.sticky-header .main-menu-wrap, .fixed-header #header.sticky-header .header-main, .fixed-header #header.sticky-header .main-menu-wrap').css(theme.rtl_browser?'left':'right', theme.getScrollbarWidth());
                    }
                    /* D3-Ahsan - Start */
                    var that = $(this._lastFocusedEl);
                    if ( ( that.closest('.portfolios-lightbox').hasClass('with-thumbs') ) && $(document).width() >= 1024 ){

                        var portfolio_lightbox_thumbnails_base = that.closest('.portfolios-lightbox.with-thumbs').find('.porto-portfolios-lighbox-thumbnails').clone(),
                            magnificPopup = $.magnificPopup.instance;

                        $('body').prepend( portfolio_lightbox_thumbnails_base );

                        var $portfolios_lightbox_thumbnails = $( 'body > .porto-portfolios-lighbox-thumbnails'),
                            $portfolios_lightbox_thumbnails_carousel = $portfolios_lightbox_thumbnails.children('.owl-carousel');
                        $portfolios_lightbox_thumbnails_carousel.themeCarousel( $portfolios_lightbox_thumbnails_carousel.data('plugin-options') );
                        $portfolios_lightbox_thumbnails_carousel.trigger('refresh.owl.carousel');

                        var $carousel_items_wrapper = $portfolios_lightbox_thumbnails_carousel.find('.owl-stage');

                        $carousel_items_wrapper.find('.owl-item').removeClass('current');
                        $carousel_items_wrapper.find('.owl-item').eq( magnificPopup.currItem.index ).addClass('current');

                        $.magnificPopup.instance.next = function() {
                            var magnificPopup = $.magnificPopup.instance;
                            $.magnificPopup.proto.next.call(this);
                            $carousel_items_wrapper.find('.owl-item').removeClass('current');
                            $carousel_items_wrapper.find('.owl-item').eq( magnificPopup.currItem.index ).addClass('current');
                        };

                        $.magnificPopup.instance.prev = function() {
                            var magnificPopup = $.magnificPopup.instance;
                            $.magnificPopup.proto.prev.call(this);
                            $carousel_items_wrapper.find('.owl-item').removeClass('current');
                            $carousel_items_wrapper.find('.owl-item').eq( magnificPopup.currItem.index ).addClass('current');
                        };

                        $carousel_items_wrapper.find('.owl-item').on( 'click', function(){
                            $carousel_items_wrapper.find('.owl-item').removeClass('current');
                            $.magnificPopup.instance.goTo( $(this).index() );
                            $(this).addClass('current');
                        });

                    }
                    /* End - D3-Ahsan */
                },
                close: function() {
                    $('body').removeClass('lightbox-opened');
                    var fixed = this.st.fixedContentPos;
                    if (fixed) {
                        $('#header.sticky-header .header-main.sticky, #header.sticky-header .main-menu-wrap, .fixed-header #header.sticky-header .header-main, .fixed-header #header.sticky-header .main-menu-wrap').css(theme.rtl_browser?'left':'right', '');
                    }
                    $('.owl-carousel .owl-stage').each(function() {
                        var $this = $(this),
                            w = $this.width() + parseInt($this.css('padding-left')) + parseInt($this.css('padding-right'));

                        $this.css({'width': w + 200});
                        setTimeout(function() {
                            $this.css({'width': w});
                        }, 0);
                    });
                    /* D3-Ahsan - Start */
                    var that = $(this._lastFocusedEl);
                    if( ( that.parents('.portfolios-lightbox').hasClass('with-thumbs') ) && $(document).width() >= 1024 ){
                        $(' body > .porto-portfolios-lighbox-thumbnails').remove();
                    }
                    /* End - D3-Ahsan */
                }
            }
        },

        sticky_nav_height: 0,

        getScrollbarWidth: function() {
            // thx David
            if (this.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                this.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return this.scrollbarSize;
        },

        isTablet: function() {
            if ($(window).width() < 992 - theme.getScrollbarWidth())
                return true;
            return false;
        },

        isMobile: function() {
            if ($(window).width() <= 480 - theme.getScrollbarWidth())
                return true;
            return false;
        },

        refreshVCContent: function($elements) {
            if ($elements) {
                $(window).trigger('resize');
            }
            theme.refreshStickySidebar(true);

            if (typeof window.vc_js == 'function')
                window.vc_js();

//            if ("undefined" != typeof $.fn.waypoint) {
//                if (typeof window.vc_waypoints == 'function')
//                    window.vc_waypoints();
//                if (typeof window.vc_progress_bar == 'function')
//                    window.vc_progress_bar();
//            }
            $(document.body).trigger('porto_refresh_vc_content', [$elements]);
        },

        adminBarHeight: function() {
            var $admin_bar = $('#wpadminbar'),
                adminbar_height = 0;

            if ($admin_bar.get(0) && $admin_bar.is(':visible')) {
                adminbar_height = $('#wpadminbar').css('position') == 'fixed' ? $('#wpadminbar').height() : 0;
            }

            return parseInt(adminbar_height);
        },

        refreshStickySidebar: function(timeout) {
            var $sticky_sidebar = $('.sidebar [data-plugin-sticky]');
            if ($sticky_sidebar.get(0)) {
                if (timeout) {
                    setTimeout(function() {
                        $sticky_sidebar.trigger('recalc.pin');
                    }, 400);
                } else {
                    $sticky_sidebar.trigger('recalc.pin');
                }
            }
        },

        scrolltoContainer: function( $container ) {
            if ($container.get(0)) {
                var winWidth = $(window).width();
                if (winWidth <= 991 - theme.getScrollbarWidth()) {
                    $('.sidebar-overlay').click();
                }
                $('html, body').stop().animate({
                    scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 18
                }, 600, 'easeOutQuad');
            }
        }
    });

}).apply(this, [window.theme, jQuery]);

// Accordion
(function(theme, $) {
    theme = theme || {};
    var instanceName = '__accordion';
    var Accordion = function($el, opts) {
        return this.initialize($el, opts);
    };
    Accordion.defaults = {
    };
    Accordion.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);
            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Accordion.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.collapse))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper,
                $collapse = $el.find('.collapse'),
                collapsible = $el.data('collapsible'),
                active_num = $el.data('active-tab');

            if ( $collapse.length > 0 ) {
                if ( collapsible == 'yes' ) {
                    $collapse.collapse({toggle: false, parent: '#' + $el.attr('id')});
                } else if ( !isNaN(active_num) && active_num == parseInt(active_num) && $el.find('.collapse').length > active_num ) {
                    $el.find('.collapse').collapse({toggle: false, parent: '#' + $el.attr('id')});
                    $el.find('.collapse').eq(active_num-1).collapse('toggle');
                } else {
                    $el.find('.collapse').collapse({parent: '#' + $el.attr('id')});
                }
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Accordion: Accordion
    });

    // jquery plugin
    $.fn.themeAccordion = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Accordion($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Accordion Menu
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__accordionMenu';

    var AccordionMenu = function($el, opts) {
        return this.initialize($el, opts);
    };

    AccordionMenu.defaults = {

    };

    AccordionMenu.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, AccordionMenu.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper;

            $el.find('li.menu-item.active').each(function() {
                var $this = $(this);

                if ($this.find('> .arrow').get(0))
                    $this.find('> .arrow').click();
            });

            $el.find('.arrow').on('click', function() {
                var $this = $(this),
                    $parent = $this.closest('li');
                if (typeof self.options.open_one != 'undefined') {
                    $parent.siblings('.open').children('.arrow').next().hide();
                    $parent.siblings('.open').removeClass('open');
                    $this.next().stop().toggle();
                } else {
                    $this.next().stop().slideToggle();
                }
                if ($parent.hasClass('open')) {
                    $parent.removeClass('open');
                } else {
                    $parent.addClass('open');
                }
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        AccordionMenu: AccordionMenu
    });

    // jquery plugin
    $.fn.themeAccordionMenu = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.AccordionMenu($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Animate
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__animate';

    var Animate = function($el, opts) {
        return this.initialize($el, opts);
    };

    Animate.defaults = {
        accX: 0,
        accY: -150,
        delay: 1,
        duration: 1000
    };

    Animate.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Animate.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                delay = 0,
                duration = 0;

            $el.addClass('appear-animation');

            if (!$('html').hasClass('no-csstransitions') && $(window).width() > (767 - theme.getScrollbarWidth()) && $.isFunction($.fn.appear)) {

                $el.appear(function() {

                    delay = Math.abs($el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay);
                    if (delay > 1) {
                        $el.css('animation-delay', delay + 'ms');
                    }

                    duration = Math.abs($el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration);
                    if (duration != 1000) {
                        $el.css('animation-duration', duration + 'ms');
                    }

                    $el.addClass($el.attr('data-appear-animation'));

                    setTimeout(function() {
                        $el.addClass('appear-animation-visible');
                    }, delay);

                }, {
                    accX: self.options.accX,
                    accY: self.options.accY
                });

            } else {

                $el.addClass('appear-animation-visible');

            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Animate: Animate
    });

    // jquery plugin
    $.fn.themeAnimate = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Animate($this, opts);
            }

        });
    };

}).apply(this, [window.theme, jQuery]);


// Carousel
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__carousel';

    var Carousel = function($el, opts) {
        return this.initialize($el, opts);
    };

    Carousel.defaults = $.extend({}, {
        loop: true,
        navText: [],
        themeConfig: false,
        lazyLoad: true,
        lg: 0,
        md: 0,
        sm: 0,
        xs: 0,
        responsive: {},
        single: false,
        rtl: theme.rtl
    });

    // Add default responsive options
    var scrollWidth = theme.getScrollbarWidth(),
        w_sm = 576 - scrollWidth,
        w_md = 768 - scrollWidth,
        w_lg = 992 - scrollWidth,
        w_xl = theme.screen_lg - scrollWidth,
        w_sl = 1400 - scrollWidth;

    Carousel.defaults.responsive[0] = {items: 1};
    Carousel.defaults.responsive[w_sm] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_md] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_lg] = {items: 1, mergeFit: false};
    Carousel.defaults.responsive[w_xl] = {items: 1, mergeFit: false};

    Carousel.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            if ((opts && opts.themeConfig) || !opts) {
                this.options = $.extend(true, {}, Carousel.defaults, theme.owlConfig, opts, {
                    wrapper: this.$el,
                    themeConfig: true
                });
            } else {
                this.options = $.extend(true, {}, Carousel.defaults, opts, {
                    wrapper: this.$el
                });
            }

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.owlCarousel))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper,
                loop = this.options.loop,
                lg = this.options.lg ? this.options.lg : this.options.items,
                md = this.options.md ? this.options.md : this.options.items,
                sm = this.options.sm ? this.options.sm : this.options.items,
                xs = this.options.xs ? this.options.xs : this.options.items,
                single = this.options.single,
                zoom = $el.find('.zoom').get(0),
                responsive = {},
                items,
                count = $el.find('> *').length,
                fullscreen = typeof this.options.fullscreen == 'undefined' ? false : this.options.fullscreen;

            if (fullscreen) {
                $el.children().width($(window).width());
                $el.children().height($el.closest('.fullscreen-carousel').length ? $el.closest('.fullscreen-carousel').height() : $(window).height());
                $el.children().css('max-height', '100%');
                $(window).on('resize', function() {
                    $el.find('.owl-item').children().width($(window).width());
                    $el.find('.owl-item').children().height($el.closest('.fullscreen-carousel').length ? $el.closest('.fullscreen-carousel').height() : $(window).height());
                    $el.find('.owl-item').children().css('max-height', '100%');
                });
            }

            if (single) {
                items = 1;
            } else {
                items = this.options.items ? this.options.items : (lg ? lg : 1);
                if (this.options.xl) {
                    responsive[w_sl] = { items: this.options.xl, loop: (loop && count > this.options.xl) ? true : false, mergeFit: this.options.mergeFit };
                }
                responsive[w_xl] = { items: items, loop: (loop && count > items) ? true : false, mergeFit: this.options.mergeFit };
                if (lg) responsive[w_lg] = { items: lg, loop: (loop && count > lg) ? true : false, mergeFit: this.options.mergeFit_lg };
                if (md) responsive[w_md] = { items: md, loop: (loop && count > md) ? true : false, mergeFit: this.options.mergeFit_md };
                if (sm) responsive[w_sm] = { items: sm, loop: (loop && count > sm) ? true : false, mergeFit: this.options.mergeFit_sm };
                if (xs) responsive[0] = { items: xs, loop: (loop && count > xs) ? true : false, mergeFit: this.options.mergeFit_xs };
            }

            if (!$el.hasClass('show-nav-title') && this.options.themeConfig && theme.slider_nav && theme.slider_nav_hover)
                $el.addClass('show-nav-hover');

            this.options = $.extend(true, {}, this.options, {
                items: items,
                loop: (loop && count > items) ? true : false,
                responsive: responsive,
                onInitialized: function() {
                    $el.find('.owl-stage-outer').css({
                        'margin-left': this.options.stagePadding,
                        'margin-right': this.options.stagePadding
                    });
                    if ($el.hasClass('show-dots-title') && ($el.prev('.porto-u-heading, .vc_custom_heading, .slider-title').length || $el.closest('.slider-wrapper').prev('.porto-u-heading, .vc_custom_heading, .slider-title').length || $el.closest('.porto-recent-posts').prev('.porto-u-heading, .vc_custom_heading, .slider-title').length)) {
                        var $obj = $el.prev('.porto-u-heading, .vc_custom_heading, .slider-title');
                        if (!$obj.length) {
                            $obj = $el.closest('.slider-wrapper').prev('.porto-u-heading, .vc_custom_heading, .slider-title');
                        }
                        if (!$obj.length) {
                            $obj = $el.closest('.porto-recent-posts').prev('.porto-u-heading, .vc_custom_heading, .slider-title');
                        }
                        try {
                            var innerWidth = $obj.css('display', 'inline-block').width();
                            $obj.css('display', '');
                            if (innerWidth + 15 + $el.find('.owl-dots').width() <= $obj.width()) {
                                $el.find('.owl-dots').css('left', innerWidth + 15 + ($el.width() - $obj.width()) / 2);
                                $el.find('.owl-dots').css('top', -1 * $obj.height() / 2 - parseInt($obj.css('margin-bottom')) - $el.find('.owl-dots').height() / 2 + 2);
                            } else {
                                $el.find('.owl-dots').css('position', 'static');
                            }
                        } catch(e) {}
                    }
                },
                touchDrag: (count == 1) ? false : true,
                mouseDrag: (count == 1) ? false : true
            });

            // Auto Height Fixes
            if (this.options.autoHeight) {
                function calcOwlHeight() {
                    var h = 0;
                    $el.find('.owl-item.active').each(function() {
                        if (h < $(this).height())
                            h = $(this).height();
                    });
                    $el.find('.owl-stage-outer').height( h );
                }
                $(window).on('resize', function() {
                    calcOwlHeight();
                });

                $(window).on('load', function() {
                    calcOwlHeight();
                });
            }

            if (zoom) {
                var links = [],
                    i = 0;

                $el.find('.zoom').each(function() {
                    var slide = {},
                        $zoom = $(this);

                    slide.src = $zoom.data('src');
                    slide.title = $zoom.data('title');
                    links[i] = slide;
                    $zoom.data('index', i);
                    i++;
                });
            }

            if ($el.hasClass('show-nav-title')) {
                this.options.stagePadding = 0;
            } else {
                if (this.options.themeConfig && theme.slider_nav && theme.slider_nav_hover)
                    $el.addClass('show-nav-hover');
                if (this.options.themeConfig && !theme.slider_nav_hover && theme.slider_margin)
                    $el.addClass('stage-margin');
            }
            $el.owlCarousel(this.options);

            if (zoom && links) {
                $el.on('click', '.zoom', function(e) {
                    e.preventDefault();
                    $.magnificPopup.close();
                    $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                        items: links,
                        gallery: {
                            enabled: true
                        },
                        type: 'image'
                    }), $(this).data('index'));
                    return false;
                });
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Carousel: Carousel
    });

    // jquery plugin
    $.fn.themeCarousel = function(opts, zoom) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Carousel($this, opts, zoom);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Chart Circular
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__chartCircular';

    var ChartCircular = function($el, opts) {
        return this.initialize($el, opts);
    };

    ChartCircular.defaults = {
        accX: 0,
        accY: -150,
        delay: 1,
        barColor: '#0088CC',
        trackColor: '#f2f2f2',
        scaleColor: false,
        scaleLength: 5,
        lineCap: 'round',
        lineWidth: 13,
        size: 175,
        rotate: 0,
        animate: ({
            duration: 2500,
            enabled: true
        })
    };

    ChartCircular.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, ChartCircular.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.appear)) || !($.isFunction($.fn.easyPieChart))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper,
                value = ($el.attr('data-percent') ? $el.attr('data-percent') : 0),
                percentEl = $el.find('.percent');

            if (!value) value = 1;
            var labelValue = this.options.labelValue ? this.options.labelValue : value;

            $.extend(true, self.options, {
                onStep: function(from, to, currentValue) {
                    percentEl.html(parseInt(labelValue * currentValue / value));
                }
            });

            $el.attr('data-percent', 0);

            $el.appear(function() {

                $el.easyPieChart(self.options);

                setTimeout(function() {

                    $el.data('easyPieChart').update(value);
                    $el.attr('data-percent', value);

                }, self.options.delay);

            }, {
                accX: self.options.accX,
                accY: self.options.accY
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        ChartCircular: ChartCircular
    });

    // jquery plugin
    $.fn.themeChartCircular = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.ChartCircular($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Fit Video
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__fitVideo';

    var FitVideo = function($el, opts) {
        return this.initialize($el, opts);
    };

    FitVideo.defaults = {

    };

    FitVideo.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, FitVideo.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.fitVids))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper;

            $el.fitVids();
            $(window).on('resize', function() {
                $el.fitVids();
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        FitVideo: FitVideo
    });

    // jquery plugin
    $.fn.themeFitVideo = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.FitVideo($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

/* Porto Video Background */
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__videobackground';

    var PluginVideoBackground = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginVideoBackground.defaults = {
        overlay: true,
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        posterType: 'detect'
    };

    PluginVideoBackground.prototype = {
        initialize: function($el, opts) {
            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginVideoBackground.defaults, opts, {
                path: this.$el.data('video-path'),
                wrapper: this.$el
            });

            return this;
        },

        build: function() {

            if (!($.isFunction($.fn.vide)) || (!this.options.path)) {
                return this;
            }

            if (this.options.overlay) {
                this.options.wrapper.prepend(
                    $('<div />').addClass('video-overlay')
                );
            }

            this.options.wrapper.vide(this.options.path, this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginVideoBackground: PluginVideoBackground
    });

    // jquery plugin
    $.fn.themePluginVideoBackground = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginVideoBackground($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Word Rotate
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__wordRotate';

    var PluginWordRotate = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginWordRotate.defaults = {
        delay: 2000,
        animDelay: 500,
        pauseOnHover: true,
    };

    PluginWordRotate.prototype = {
        initialize: function($el, opts) {
            if ( $el.data( instanceName ) ) {
                return this;
            }

            this.$el = $el;

            this.setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginWordRotate.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                itemsWrapper = $el.find(".word-rotate-items"),
                items = itemsWrapper.find("> span"),
                firstItem = items.eq(0),
                firstItemClone = firstItem.clone().removeClass('active'),
                currentItem = 1,
                currentTop = 0,
                itemWidth = 0,
                intervalId = null;

            itemsWrapper
                .width(firstItem.width() + "px")
                .append(firstItemClone);

            var setTimer = function() {

                currentTop = (currentItem * $el.height());
                currentItem++;

                items.removeClass('active').addClass('inactive');
                if(currentItem <= items.length) {
                    itemWidth = items.eq(currentItem-1).width();
                    items.eq(currentItem-1).removeClass('inactive').addClass('active');
                } else {
                    itemWidth = items.eq(0).width();
                    items.eq(0).removeClass('inactive').addClass('active');
                }

                itemsWrapper.animate({
                    top: -(currentTop) + "px",
                    width: itemWidth + "px"
                }, self.options.animDelay, "easeOutQuad", function() {

                    if(currentItem > items.length) {

                        itemsWrapper.css("top", 0);
                        currentItem = 1;

                    }

                });

            };

            if (self.options.pauseOnHover) {
                itemsWrapper.on('mouseenter', function() {
                    if (intervalId != null) {
                        clearInterval(intervalId);
                    }
                }).on('mouseleave', function() {
                    intervalId = setInterval(setTimer, self.options.delay);
                });
            }

            $el.addClass("active");

            intervalId = setInterval(setTimer, self.options.delay);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginWordRotate: PluginWordRotate
    });

    // jquery plugin
    $.fn.themePluginWordRotate = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginWordRotate($this, opts);
            }

        });
    }

}).apply(this, [ window.theme, jQuery ]);

// Flickr Zoom
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__flickrZoom';

    var FlickrZoom = function($el, opts) {
        return this.initialize($el, opts);
    };

    FlickrZoom.defaults = {

    };

    FlickrZoom.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, FlickrZoom.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                links = [],
                i = 0,
                $flickr_links = $el.find('.flickr_badge_image > a');

            $flickr_links.each(function() {
                var slide = {},
                    $image = $(this).find('> img');

                slide.src = $image.attr('src').replace('_s.', '_b.');
                slide.title = $image.attr('title');
                links[i] = slide;
                i++;
            });

            $flickr_links.on('click', function(e) {
                e.preventDefault();
                $.magnificPopup.close();
                $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                    items: links,
                    gallery: {
                        enabled: true
                    },
                    type: 'image'
                }), $flickr_links.index($(this)));
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        FlickrZoom: FlickrZoom
    });

    // jquery plugin
    $.fn.themeFlickrZoom = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.FlickrZoom($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Lazy Load
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__lazyload';

    var PluginLazyLoad = function($el, opts) {
        return this.initialize($el, opts);
    };

    PluginLazyLoad.defaults = {
        effect: 'show',
        appearEffect: '',
        appear: function(elements_left, settings) {

        },
        load: function(elements_left, settings) {
            $(this).addClass($.trim('lazy-load-loaded ' + settings.appearEffect));
        }
    };

    PluginLazyLoad.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PluginLazyLoad.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.lazyload))) {
                return this;
            }

            var self = this;
            self.options.wrapper.lazyload(this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PluginLazyLoad: PluginLazyLoad
    });

    // jquery plugin
    $.fn.themePluginLazyLoad = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new PluginLazyLoad($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);

// Lightbox
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__lightbox';

    var Lightbox = function($el, opts) {
        return this.initialize($el, opts);
    };

    Lightbox.defaults = {
        callbacks: {
            open: function() {
                $('body').addClass('lightbox-opened');
            },
            close: function() {
                $('body').removeClass('lightbox-opened');
            }
        }
    };

    Lightbox.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Lightbox.defaults, theme.mfpConfig, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.magnificPopup))) {
                return this;
            }

            this.options.wrapper.magnificPopup(this.options);

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Lightbox: Lightbox
    });

    // jquery plugin
    $.fn.themeLightbox = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Lightbox($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Loading Overlay
(function(theme, $) {

    'use strict';

    theme = theme || {};

    var loadingOverlayTemplate = [
        '<div class="loading-overlay">',
        '<div class="loader"></div>',
        '</div>'
    ].join('');

    var LoadingOverlay = function( $wrapper, options ) {
        return this.initialize( $wrapper, options );
    };

    LoadingOverlay.prototype = {

        options: {
            css: {}
        },

        initialize: function( $wrapper, options ) {
            this.$wrapper = $wrapper;

            this
                .setVars()
                .setOptions( options )
                .build()
                .events();

            this.$wrapper.data( 'loadingOverlay', this );
        },

        setVars: function() {
            this.$overlay = this.$wrapper.find('.loading-overlay');

            return this;
        },

        setOptions: function( options ) {
            if ( !this.$overlay.get(0) ) {
                this.matchProperties();
            }
            this.options     = $.extend( true, {}, this.options, options );
            this.loaderClass = this.getLoaderClass( this.options.css.backgroundColor );

            return this;
        },

        build: function() {
            if ( !this.$overlay.closest(document.documentElement).get(0) ) {
                if ( !this.$cachedOverlay ) {
                    this.$overlay = $( loadingOverlayTemplate ).clone();

                    if ( this.options.css ) {
                        this.$overlay.css( this.options.css );
                        this.$overlay.find( '.loader' ).addClass( this.loaderClass );
                    }
                } else {
                    this.$overlay = this.$cachedOverlay.clone();
                }

                this.$wrapper.append( this.$overlay );
            }

            if ( !this.$cachedOverlay ) {
                this.$cachedOverlay = this.$overlay.clone();
            }

            return this;
        },

        events: function() {
            var _self = this;

            if ( this.options.startShowing ) {
                _self.show();
            }

            if ( this.$wrapper.is('body') || this.options.hideOnWindowLoad ) {
                $( window ).on( 'load error', function() {
                    _self.hide();
                });
            }

            if ( this.options.listenOn ) {
                $( this.options.listenOn )
                    .on( 'loading-overlay:show beforeSend.ic', function( e ) {
                        e.stopPropagation();
                        _self.show();
                    })
                    .on( 'loading-overlay:hide complete.ic', function( e ) {
                        e.stopPropagation();
                        _self.hide();
                    });
            }

            this.$wrapper
                .on( 'loading-overlay:show beforeSend.ic', function( e ) {
                    e.stopPropagation();
                    _self.show();
                })
                .on( 'loading-overlay:hide complete.ic', function( e ) {
                    e.stopPropagation();
                    _self.hide();
                });

            return this;
        },

        show: function() {
            this.build();

            this.position = this.$wrapper.css( 'position' ).toLowerCase();
            if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
                this.$wrapper.css({
                    position: 'relative'
                });
            }
            this.$wrapper.addClass( 'loading-overlay-showing' );
        },

        hide: function() {
            var _self = this;

            this.$wrapper.removeClass( 'loading-overlay-showing' );
            setTimeout(function() {
                if ( this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed' ) {
                    _self.$wrapper.css({ position: '' });
                }
            }, 500);
        },

        matchProperties: function() {
            var i,
                l,
                properties;

            properties = [
                'backgroundColor',
                'borderRadius'
            ];

            l = properties.length;

            for( i = 0; i < l; i++ ) {
                var obj = {};
                obj[ properties[ i ] ] = this.$wrapper.css( properties[ i ] );

                $.extend( this.options.css, obj );
            }
        },

        getLoaderClass: function( backgroundColor ) {
            if ( !backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit' ) {
                return 'black';
            }

            var hexColor,
                r,
                g,
                b,
                yiq;

            var colorToHex = function( color ){
                var hex,
                    rgb;

                if( color.indexOf('#') >- 1 ){
                    hex = color.replace('#', '');
                } else {
                    rgb = color.match(/\d+/g);
                    hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
                }

                if ( hex.length === 3 ) {
                    hex = hex + hex;
                }

                return hex;
            };

            hexColor = colorToHex( backgroundColor );

            r = parseInt( hexColor.substr( 0, 2), 16 );
            g = parseInt( hexColor.substr( 2, 2), 16 );
            b = parseInt( hexColor.substr( 4, 2), 16 );
            yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

            return ( yiq >= 128 ) ? 'black' : 'white';
        }

    };

    // expose to scope
    $.extend(theme, {
        LoadingOverlay: LoadingOverlay
    });

    // expose as a jquery plugin
    $.fn.loadingOverlay = function( opts ) {
        return this.each(function() {
            var $this = $( this );

            var loadingOverlay = $this.data( 'loadingOverlay' );
            if ( loadingOverlay ) {
                return loadingOverlay;
            } else {
                var options = opts || $this.data( 'loading-overlay-options' ) || {};
                return new LoadingOverlay( $this, options );
            }
        });
    }

    // auto init
    $(function() {
        $('[data-loading-overlay]').loadingOverlay();
    });

}).apply(this, [window.theme, jQuery]);


// Masonry
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__masonry';

    var Masonry = function($el, opts) {
        return this.initialize($el, opts);
    };

    Masonry.defaults = {
        itemSelector: 'li',
        isOriginLeft : !theme.rtl
    };

    Masonry.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Masonry.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.isotope))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper;
            $el.isotope(this.options);
            if (this.options.callback) {
                $el.isotope('on', 'layoutComplete', function() {
                    if (typeof this.options.callback == 'function') {
                        this.options.callback.call();
                    }
                    $el.find('.porto-lazyload:not(.lazy-load-loaded)').trigger('appear');
                });
            }
            $el.isotope('layout');
            self.resize();
            $(window).on('resize', function() {
                self.resize()
            });

            return this;
        },

        resize: function() {
            var self = this,
                $el = this.options.wrapper;

            if (self.resizeTimer)
                clearTimeout(self.resizeTimer);

            self.resizeTimer = setTimeout(function() {
                if ($el.data('isotope')) {
                    $el.isotope('layout');
                }
                delete self.resizeTimer;
            }, 600);
        }
    };

    // expose to scope
    $.extend(theme, {
        Masonry: Masonry
    });

    // jquery plugin
    $.fn.themeMasonry = function(opts) {
        return this.map(function() {
            var $this = $(this);

            $this.waitForImages(function() {
                if ($this.data(instanceName)) {
                    return $this.data(instanceName);
                } else {
                    return new theme.Masonry($this, opts);
                }
            });

        });
    }

}).apply(this, [window.theme, jQuery]);


// Preview Image
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__previewImage';

    var PreviewImage = function($el, opts) {
        return this.initialize($el, opts);
    };

    PreviewImage.defaults = {

    };

    PreviewImage.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, PreviewImage.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper,
                image = $el.data('image');

            if (image) {
                $el.css('background-image', 'url(' + image + ')');
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        PreviewImage: PreviewImage
    });

    // jquery plugin
    $.fn.themePreviewImage = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.PreviewImage($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Refresh Video Sizes
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__refreshVideoSize';

    var RefreshVideoSize = function($el, opts) {
        return this.initialize($el, opts);
    };

    RefreshVideoSize.defaults = {

    };

    RefreshVideoSize.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, RefreshVideoSize.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                resizeTimer = false;

            setTimeout(function() {
                self.refresh();
            }, 100);

            $(window).on('resize', function() {
                if (resizeTimer) {
                    clearTimeout(resizeTimer);
                }
                resizeTimer = setTimeout(function() {
                    self.refresh();
                }, 100);
            });

            return this;
        },

        refresh: function() {
            var self = this,
                $el = this.options.wrapper,
                $video = $el.find('video'),
                w = $el.width(),
                h = $el.height();

            if (!$video.get(0)) {
                return;
            }

            $video.css('width', '100%').css('height', 'auto');

            var vw = $video.width(), vh = $video.height();

            if (vh < h) {
                $video.css('height', h);
                $video.css('width', h / vh * 100 + '%');
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        RefreshVideoSize: RefreshVideoSize
    });

    // jquery plugin
    $.fn.themeRefreshVideoSize = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.RefreshVideoSize($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Toggle
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__toggle';

    var Toggle = function($el, opts) {
        return this.initialize($el, opts);
    };

    Toggle.defaults = {

    };

    Toggle.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Toggle.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.wrapper;

            if ($el.hasClass('active'))
                $el.find("> div.toggle-content").stop().slideDown(350, function() {
                    $(this).attr('style', '').show();
                });

            $el.on('click', "> label", function(e) {
                var parentSection = $(this).parent(),
                    parentWrapper = $(this).closest("div.toogle"),
                    parentToggles = $(this).closest(".porto-toggles"),
                    isAccordion = parentWrapper.hasClass("toogle-accordion"),
                    toggleContent = parentSection.find("> div.toggle-content");

                if (isAccordion && typeof(e.originalEvent) != "undefined") {
                    parentWrapper.find("section.toggle.active > label").trigger("click");
                }

                // Preview Paragraph
                if(!parentSection.hasClass("active")) {
                    if (parentToggles.length) {
                        if (parentToggles.data('view') == 'one-toggle') {
                            parentToggles.find('.toggle').each(function() {
                                $(this).removeClass('active');
                                $(this).find("> div.toggle-content").stop().slideUp(350, function() {
                                    $(this).attr('style', '').hide();
                                });
                            });
                        }
                    }
                    toggleContent.stop().slideDown(350, function() {
                        $(this).attr('style', '').show();
                        theme.refreshVCContent(toggleContent);
                    });
                    parentSection.addClass("active");
                } else {
                    if (!parentToggles.length || parentToggles.data('view') != 'one-toggle') {
                        toggleContent.stop().slideUp(350, function() {
                            $(this).attr('style', '').hide();
                        });
                        parentSection.removeClass("active");
                    }
                }
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Toggle: Toggle
    });

    // jquery plugin
    $.fn.themeToggle = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Toggle($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Parallax
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__parallax';

    var Parallax = function($el, opts) {
        return this.initialize($el, opts);
    };

    Parallax.defaults = {
        speed: 1.5,
        horizontalPosition: '50%',
        offset: 0
    };

    Parallax.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Parallax.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $window = $(window),
                offset,
                yPos,
                bgpos;

            self.options.wrapper.removeAttr('style');
            if (typeof self.options.wrapper.data('image-src') != 'undefined')
                self.options.wrapper.css('background-image', 'url(' + self.options.wrapper.data('image-src') + ')');

            if (!$.browser.mobile) {

                $window.on('scroll resize', function() {
                    offset = self.options.wrapper.offset();
                    yPos = -($window.scrollTop() - offset.top) / self.options.speed + (self.options.offset);
                    bgpos = self.options.horizontalPosition + ' ' + yPos + 'px';
                    self.options.wrapper.css('background-position', bgpos);
                });

                $window.trigger('scroll');

            } else {
                self.options.wrapper.addClass('parallax-disabled');
            }

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Parallax: Parallax
    });

    // jquery plugin
    $.fn.themeParallax = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.Parallax($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Visual Composer Image Zoom

// VcImageZoom
(function(theme, $) {

    theme = theme || {};

    var instanceName = '__toggle';

    var VcImageZoom = function($el, opts) {
        return this.initialize($el, opts);
    };

    VcImageZoom.defaults = {

    };

    VcImageZoom.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, VcImageZoom.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            var self = this,
                $el = this.options.container;
            $el.parent().magnificPopup($.extend(true, {}, theme.mfpConfig, {
                delegate: ".porto-vc-zoom",
                gallery: {
                    enabled: true
                },
                mainClass: 'mfp-with-zoom',
                zoom: {
                    enabled: true,
                    duration: 300
                },
                type: 'image'
            }));

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        VcImageZoom: VcImageZoom
    });

    // jquery plugin
    $.fn.themeVcImageZoom = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                return $this.data(instanceName);
            } else {
                return new theme.VcImageZoom($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Sticky
(function(theme, $) {

    // jQuery Pin plugin
    $.fn.themePin = function (options) {
        var scrollY = 0, lastScrollY = 0, elements = [], disabled = false, $window = $(window), fixedSideTop = [], fixedSideBottom = [], prevDataTo = [];

        options = options || {};

        var recalculateLimits = function () {
            for (var i=0, len=elements.length; i<len; i++) {
                var $this = elements[i];

                if (options.minWidth && $window.width() <= options.minWidth) {
                    if ($this.parent().is(".pin-wrapper")) { $this.unwrap(); }
                    $this.css({width: "", left: "", top: "", position: ""});
                    if (options.activeClass) { $this.removeClass(options.activeClass); }
                    $this.removeClass('sticky-transition');
                    $this.removeClass('sticky-absolute');
                    disabled = true;
                    continue;
                } else {
                    disabled = false;
                }

                var $container = options.containerSelector ? ( $this.closest(options.containerSelector).length ? $this.closest(options.containerSelector) : $(options.containerSelector) ) : $(document.body);
                var offset = $this.offset();
                var containerOffset = $container.offset();

                if (typeof containerOffset == 'undefined') {
                    continue;
                }

                var parentOffset = $this.parent().offset();

                if (!$this.parent().is(".pin-wrapper")) {
                    $this.wrap("<div class='pin-wrapper'>");
                }

                var pad = $.extend({
                    top: 0,
                    bottom: 0
                }, options.padding || {});

                var pt = parseInt($this.parent().parent().css('padding-top')), pb = parseInt($this.parent().parent().css('padding-bottom'));

                if (options.autoInit) {
                    if ($('#header').hasClass('header-side')) {
                        pad.top = theme.adminBarHeight();
                        if ($('.page-top.fixed-pos').length) {
                            pad.top += $('.page-top.fixed-pos').height();
                        }
                    } else {
                        pad.top = theme.adminBarHeight();
                        if ($('#header > .main-menu-wrap').length || !$('#header').hasClass('sticky-menu-header')) {
                            pad.top += theme.StickyHeader.sticky_height;
                        }
                    }
                    if (typeof options.paddingOffsetTop != 'undefined') {
                        pad.top += parseInt(options.paddingOffsetTop, 10);
                    } else {
                        pad.top += 18;
                    }
                    if (typeof options.paddingOffsetBottom != 'undefined') {
                        pad.bottom = parseInt(options.paddingOffsetBottom, 10);
                    } else {
                        pad.bottom = 0;
                    }
                }

                var bb = $this.css('border-bottom'), h = $this.outerHeight();
                $this.css('border-bottom', '1px solid transparent');
                var o_h = $this.outerHeight() - h - 1;
                $this.css('border-bottom', bb);
                $this.css({width: $this.outerWidth() <= $this.parent().width() ? $this.outerWidth() : $this.parent().width()});
                $this.parent().css("height", $this.outerHeight() + o_h);

                if ( (!options.autoFit && !options.fitToBottom) || $this.outerHeight() <= $window.height()) {
                    $this.data("themePin", {
                        pad: pad,
                        from: (options.containerSelector ? containerOffset.top : offset.top) - pad.top + pt,
                        pb: pb,
                        parentTop: parentOffset.top - pt,
                        offset: o_h
                    });
                } else {
                    $this.data("themePin", {
                        pad: pad,
                        fromFitTop: (options.containerSelector ? containerOffset.top : offset.top) - pad.top + pt,
                        from: (options.containerSelector ? containerOffset.top : offset.top) + $this.outerHeight() - $(window).height() + pt,
                        pb: pb,
                        parentTop: parentOffset.top - pt,
                        offset: o_h
                    });
                }
            }
        };

        var onScroll = function () {
            if (disabled) { return; }

            scrollY = $window.scrollTop();

            var window_height = window.innerHeight || $window.height();

            for (var i=0, len=elements.length; i<len; i++) {
                var $this = $(elements[i]),
                    data  = $this.data("themePin"),
                    sidebarTop;

                if (!data) { // Removed element
                    continue;
                }

                var $container = options.containerSelector ? ( $this.closest(options.containerSelector).length ? $this.closest(options.containerSelector) : $(options.containerSelector) ) : $(document.body),
                    isFitToTop = (!options.autoFit && !options.fitToBottom) || ($this.outerHeight() + data.pad.top) <= window_height;
                data.end = $container.offset().top + $container.height();
                if (isFitToTop) {
                    data.to = $container.offset().top + $container.height() - $this.outerHeight() - data.pad.bottom - data.pb;
                } else {
                    data.to = $container.offset().top + $container.height() - window_height - data.pb;
                    data.to2 = $container.height() - $this.outerHeight() - data.pad.bottom - data.pb;
                }

                if ( prevDataTo[i] === 0 ) {
                    prevDataTo[i] = data.to;
                }

                if (isFitToTop) {
                    var from = data.from - data.pad.bottom,
                        to = data.to - data.pad.top - data.offset;
                    if (typeof data.fromFitTop != 'undefined' && data.fromFitTop) {
                        from = data.fromFitTop - data.pad.bottom;
                    }

                    if (from + $this.outerHeight() > data.end || from >= to) {
                        $this.css({position: "", top: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                        continue;
                    }
                    if (scrollY > from && scrollY < to) {
                        !($this.css("position") == "fixed") && $this.css({
                            left: $this.offset().left,
                            top: data.pad.top
                        }).css("position", "fixed");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    } else if (scrollY >= to) {
                        $this.css({
                            left: "",
                            top: to - data.parentTop + data.pad.top
                        }).css("position", "absolute");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                        $this.addClass('sticky-absolute');
                    } else {
                        $this.css({position: "", top: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    }
                } else if (options.fitToBottom) {
                    var from = data.from,
                        to = data.to;
                    if (data.from + window_height > data.end || data.from >= to) {
                        $this.css({position: "", top: "", bottom: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                        continue;
                    }
                    if (scrollY > from && scrollY < to) {
                        !($this.css("position") == "fixed") && $this.css({
                            left: $this.offset().left,
                            bottom: data.pad.bottom,
                            top: ""
                        }).css("position", "fixed");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    } else if (scrollY >= to) {
                        $this.css({
                            left: "",
                            top: data.to2,
                            bottom: ""
                        }).css("position", "absolute");
                        if (options.activeClass) { $this.addClass(options.activeClass); }
                        if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                        $this.addClass('sticky-absolute');
                    } else {
                        $this.css({position: "", top: "", bottom: "", left: ""});
                        if (options.activeClass) { $this.removeClass(options.activeClass); }
                        $this.removeClass('sticky-transition');
                        $this.removeClass('sticky-absolute');
                    }
                } else { // auto fit
                    if ( prevDataTo[i] != data.to ) {
                        if (fixedSideBottom[i] && $this.height() + $this.offset().top + data.pad.bottom < scrollY + window_height) {
                            fixedSideBottom[i] = false;
                        }
                    }
                    if ( ( $this.height() + data.pad.top + data.pad.bottom ) > window_height || fixedSideTop[i] || fixedSideBottom[i] ) {
                        var padTop = parseInt($this.parent().parent().css('padding-top'));
                        // Reset the sideSortables style when scrolling to the top.
                        if ( scrollY + data.pad.top - padTop <= data.parentTop ) {
                            $this.css({position: "", top: "", bottom: "", left: ""});
                            fixedSideTop[i] = fixedSideBottom[i] = false;
                        } else if ( scrollY >= data.to ) {
                            $this.css({
                                left: "",
                                top: data.to2,
                                bottom: ""
                            }).css("position", "absolute");
                            if (options.activeClass) { $this.addClass(options.activeClass); }
                            if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                            $this.addClass('sticky-absolute');
                        } else {

                            // When scrolling down.
                            if ( scrollY >= lastScrollY ) {
                                if ( fixedSideTop[i] ) {

                                    // Let it scroll.
                                    fixedSideTop[i] = false;
                                    sidebarTop = $this.offset().top - data.parentTop;

                                    $this.css({
                                        left: "",
                                        top: sidebarTop,
                                        bottom: ""
                                    }).css("position", "absolute");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                                    $this.addClass('sticky-absolute');
                                } else if ( ! fixedSideBottom[i] && $this.height() + $this.offset().top + data.pad.bottom < scrollY + window_height ) {
                                    // Pin the bottom.
                                    fixedSideBottom[i] = true;

                                    !($this.css("position") == "fixed") && $this.css({
                                        left: $this.offset().left,
                                        bottom: data.pad.bottom,
                                        top: ""
                                    }).css("position", "fixed");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    $this.removeClass('sticky-transition');
                                    $this.removeClass('sticky-absolute');
                                }

                            // When scrolling up.
                            } else if ( scrollY < lastScrollY ) {
                                if ( fixedSideBottom[i] ) {
                                    // Let it scroll.
                                    fixedSideBottom[i] = false;
                                    sidebarTop = $this.offset().top - data.parentTop;

                                    /*if ($this.css('position') == 'absolute' && sidebarTop > data.to2) {
                                        sidebarTop = data.to2;
                                    }*/
                                    $this.css({
                                        left: "",
                                        top: sidebarTop,
                                        bottom: ""
                                    }).css("position", "absolute");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    if ($this.hasClass('sticky-absolute')) $this.addClass('sticky-transition');
                                    $this.addClass('sticky-absolute');
                                } else if ( ! fixedSideTop[i] && $this.offset().top >= scrollY + data.pad.top ) {
                                    // Pin the top.
                                    fixedSideTop[i] = true;

                                    !($this.css("position") == "fixed") && $this.css({
                                        left: $this.offset().left,
                                        top: data.pad.top,
                                        bottom: ''
                                    }).css("position", "fixed");
                                    if (options.activeClass) { $this.addClass(options.activeClass); }
                                    $this.removeClass('sticky-transition');
                                    $this.removeClass('sticky-absolute');
                                }
                            }
                        }
                    } else {
                        // If the sidebar container is smaller than the viewport, then pin/unpin the top when scrolling.
                        if ( scrollY >= ( data.parentTop - data.pad.top ) ) {
                            $this.css( {
                                position: 'fixed',
                                top: data.pad.top
                            } );
                        } else {
                            $this.css({position: "", top: "", bottom: "", left: ""});
                        }

                        fixedSideTop[i] = fixedSideBottom[i] = false;
                    }
                }

                prevDataTo[i] = data.to;
            }

            lastScrollY = scrollY;
        };

        var update = function () { recalculateLimits(); onScroll(); };

        this.each(function () {
            var $this = $(this),
                data  = $(this).data('themePin') || {};

            if (data && data.update) { return; }
            elements.push($this);
            $("img", this).one("load", recalculateLimits);
            data.update = update;
            $(this).data('themePin', data);
            fixedSideTop.push(false);
            fixedSideBottom.push(false);
            prevDataTo.push(0);
        });

        $(window).on('touchmove scroll', onScroll);
        recalculateLimits();

        $window.on('load', update);

        $(this).on('recalc.pin', function() {
            recalculateLimits();
            onScroll();
        });

        return this;
    };

    theme = theme || {};

    var instanceName = '__sticky';

    var Sticky = function($el, opts) {
        return this.initialize($el, opts);
    };

    Sticky.defaults = {
        autoInit: false,
        minWidth: 767,
        activeClass: 'sticky-active',
        padding: {
            top: 0,
            bottom: 0
        },
        offsetTop: 0,
        offsetBottom: 0,
        autoFit: false,
        fitToBottom: false
    };

    Sticky.prototype = {
        initialize: function($el, opts) {
            if ($el.data(instanceName)) {
                return this;
            }

            this.$el = $el;

            this
                .setData()
                .setOptions(opts)
                .build();

            return this;
        },

        setData: function() {
            this.$el.data(instanceName, this);

            return this;
        },

        setOptions: function(opts) {
            this.options = $.extend(true, {}, Sticky.defaults, opts, {
                wrapper: this.$el
            });

            return this;
        },

        build: function() {
            if (!($.isFunction($.fn.themePin))) {
                return this;
            }

            var self = this,
                $el = this.options.wrapper;

            this.options.minWidth -= theme.getScrollbarWidth();

            if ($el.hasClass('porto-sticky-nav')) {
                this.options.padding.top = theme.StickyHeader.sticky_height + theme.adminBarHeight();
                this.options.activeClass = 'sticky-active';
                this.options.containerSelector = '.main-content-wrap';
                theme.sticky_nav_height = $el.outerHeight();
                if (this.options.minWidth > $(window).width())
                    theme.sticky_nav_height = 0;
            }

            $el.themePin(this.options);

            $(window).smartresize(function() {
                setTimeout(function() {
                    $el.trigger('recalc.pin');
                }, 800);

                var $parent = $el.parent();

                $el.outerWidth($parent.width());
                if ($el.css('position') == 'fixed') {
                    $el.css('left', $parent.offset().left);
                }

                if ($el.hasClass('porto-sticky-nav')) {
                    theme.sticky_nav_height = $el.outerHeight();
                    if (self.options.minWidth > $(window).width())
                        theme.sticky_nav_height = 0;
                }
            });

            return this;
        }
    };

    // expose to scope
    $.extend(theme, {
        Sticky: Sticky
    });

    // jquery plugin
    $.fn.themeSticky = function(opts) {
        return this.map(function() {
            var $this = $(this);

            if ($this.data(instanceName)) {
                $this.trigger('recalc.pin');
                setTimeout(function() {
                    $this.trigger('recalc.pin');
                }, 800);
                return $this.data(instanceName);
            } else {
                return new theme.Sticky($this, opts);
            }

        });
    }

}).apply(this, [window.theme, jQuery]);


// Mobile Panel
(function(theme, $) {

    $(function() {
        $(document.body).on('click', '.mobile-toggle', function(e) {
            if ($('#nav-panel').length > 0) {
                $('#nav-panel').stop().slideToggle();
            } else if ($('#side-nav-panel').length > 0) {
                if ($('html').hasClass('panel-opened')) {
                    $('html').removeClass('panel-opened');
                    $('.panel-overlay').removeClass('active');
                } else {
                    $('html').addClass('panel-opened');
                    $('.panel-overlay').addClass('active');
                }
            }
        });

        $('.panel-overlay').on('click', function() {
            $('html').removeClass('panel-opened');
            $(this).removeClass('active');
        });

        $('#side-nav-panel .side-nav-panel-close').on('click', function(e) {
            e.preventDefault();
            $('.panel-overlay').click();
        });

        $(window).on('resize', function() {
            if ($(window).width() > 991 - theme.getScrollbarWidth()) {
                $('#nav-panel').hide();
                $('.panel-overlay').click();
            }
        });
    });

}).apply(this, [window.theme, jQuery]);


// Portfolio Like
(function(theme, $) {

    $(function() {
        $(document).on('click', '.portfolio-like', function(e) {
            e.preventDefault();
            var $this = $(this),
                $parent = $this.parent(),
                portfolio_id = $this.attr('data-id');

            $.post(
                theme.ajax_url, {
                    portfolio_id: portfolio_id,
                    action: 'porto_portfolio-like'
                },
                function(data) {
                    if (data) {
                        $this.remove();
                        $parent.html(data);
                        $parent.find("data-tooltip").tooltip();
                    }
                }
            );
            return false;
        });
    });

}).apply(this, [window.theme, jQuery]);

// Blog Like
(function(theme, $) {

    $(function() {
        $(document).on('click', '.blog-like', function(e) {
            e.preventDefault();
            var $this = $(this),
                $parent = $this.parent(),
                blog_id = $this.attr('data-id');
            if ($this.hasClass('updating')) {
                return false;
            }
            $this.addClass('updating').text('...');
            $.post(
                theme.ajax_url, {
                    blog_id: blog_id,
                    action: 'porto_blog-like'
                },
                function(data) {
                    if (data) {
                        $this.remove();
                        $parent.html(data);
                        $parent.find("data-tooltip").tooltip();
                    }
                }
            );
            return false;
        });
    });

}).apply(this, [window.theme, jQuery]);


// Scroll to Top

//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
//** Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
//** v1.1 (April 7th, 09'):
//** 1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
//** 2) Fixes scroll animation not working in Opera.


var scrolltotop={
    //startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
    //scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
    setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
    controlHTML: '<img src="assets/img/up.png" style="width:40px; height:40px" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
    controlattrs: {offsetx:10, offsety:10}, //offset of control relative to right/ bottom of window corner
    anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

    state: {isvisible:false, shouldvisible:false},

    scrollup:function(){
        if (!this.cssfixedsupport) //if control is positioned using JavaScript
            this.$control.css({opacity:0}); //hide control immediately after clicking it
        var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto);
        if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists
            dest=jQuery('#'+dest).offset().top;
        else
            dest=0;
        this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
    },

    keepfixed:function(){
        var $window=jQuery(window);
        var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
        var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({left:controlx+'px', top:controly+'px'})
    },

    togglecontrol:function(){
        var scrolltop=jQuery(window).scrollTop();
        if (!this.cssfixedsupport)
            this.keepfixed();
        this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false;
        if (this.state.shouldvisible && !this.state.isvisible){
            this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0]);
            this.state.isvisible=true
        }
        else if (this.state.shouldvisible==false && this.state.isvisible){
            this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1]);
            this.state.isvisible=false
        }
    },

    init:function(){
        jQuery(document).ready(function($){
            var mainobj=scrolltotop;
            var iebrws=document.all;
            mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
            mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body');
            mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
                .css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, opacity:0, cursor:'pointer'})
                .attr({title:''})
                .click(function(){mainobj.scrollup(); return false})
                .appendTo('body');
            if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
                mainobj.$control.css({width:mainobj.$control.width()}); //IE6- seems to require an explicit width on a DIV containing text
            mainobj.togglecontrol();
            $('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
                mainobj.scrollup();
                return false
            });
            $(window).bind('scroll resize', function(e){
                mainobj.togglecontrol();
            });
        })
    }
};

//scrolltotop.init()

(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        ScrollToTop: {

            defaults: {
                html: '<i class="fa fa-chevron-up"></i>',
                offsetx: 10,
                offsety: 0
            },

            initialize: function(html, offsetx, offsety) {
                this.html = (html || this.defaults.html);
                this.offsetx = (offsetx || this.defaults.offsetx);
                this.offsety = (offsety || this.defaults.offsety);

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                if (typeof scrolltotop !== 'undefined') {
                    // scroll top control
                    scrolltotop.controlHTML = self.html;
                    scrolltotop.controlattrs = {offsetx: self.offsetx, offsety: self.offsety};
                    scrolltotop.init();
                }

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Mega Menu
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        MegaMenu: {

            defaults: {
                menu: $('.mega-menu')
            },

            initialize: function($menu) {
                this.$menu = ($menu || this.defaults.menu);

                this.build()
                    .events();

                return this;
            },

            popupWidth: function() {
                var winWidth = $(window).width() + theme.getScrollbarWidth();
                var popupWidth = $(window).width() - theme.grid_gutter_width * 2;
                if (!$('body').hasClass('wide')) {
                    if (winWidth >= theme.container_width + theme.grid_gutter_width - 1)
                        popupWidth = theme.container_width - theme.grid_gutter_width;
                    else if (winWidth >= 992)
                        popupWidth = 960 - theme.grid_gutter_width;
                    else if (winWidth >= 768)
                        popupWidth = 720 - theme.grid_gutter_width;
                }
                return popupWidth;
            },

            calcMenuPosition: function(menu_obj) {
                var menu = menu_obj,
                    menuContainerWidth = $("#header .header-main .container").outerWidth() - parseInt($("#header .header-main .container").css('padding-left')) - parseInt($("#header .header-main .container").css('padding-right'));
                if (menuContainerWidth < 900) return;
                var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - theme.getScrollbarWidth(),
                    menuLeftPos = menu.offset().left - (browserWidth - menuContainerWidth) / 2;
                if (window.theme.rtl) {
                    menuLeftPos = $(window).width() - (menu.offset().left + menu.outerWidth() ) - (browserWidth - menuContainerWidth) / 2;
                }
                var menuWidth = menu.width(),
                    remainWidth = menuContainerWidth - (menuLeftPos+menuWidth),
                    l = false;
                if (menuLeftPos > remainWidth && menuLeftPos < menuWidth ) {
                    l = (menuLeftPos + remainWidth) / 3;
                }
                if (remainWidth < 0) {
                    l = -remainWidth;
                }
                return l;
            },

            build: function() {
                var self = this;

                self.$menu.each( function() {
                    var $menu = $(this);
                    var $menu_container = $menu.closest('.container');
                    var container_width = self.popupWidth();
                    var offset = 0;

                    if ($menu_container.length) {
                        if (theme.rtl) {
                            offset = ($menu_container.offset().left + $menu_container.width()) - ($menu.offset().left + $menu.width()) + parseInt($menu_container.css('padding-right'));
                        } else {
                            offset = $menu.offset().left - $menu_container.offset().left - parseInt($menu_container.css('padding-left'));
                        }
                        offset = (offset == 1) ? 0 : offset;
                    }

                    var $menu_items = $menu.find('> li');

                    $menu_items.each( function() {
                        var $menu_item = $(this);
                        var $popup = $menu_item.find('> .popup');
                        if ($popup.length > 0) {
                            $popup.css('display', 'block');
                            if ($menu_item.hasClass('wide')) {
                                $popup.css('left', 0);
                                var padding = parseInt($popup.css('padding-left')) + parseInt($popup.css('padding-right')) +
                                    parseInt($popup.find('> .inner').css('padding-left')) + parseInt($popup.find('> .inner').css('padding-right'));

                                var row_number = 4;

                                if ($menu_item.hasClass('col-2')) row_number = 2;
                                if ($menu_item.hasClass('col-3')) row_number = 3;
                                if ($menu_item.hasClass('col-4')) row_number = 4;
                                if ($menu_item.hasClass('col-5')) row_number = 5;
                                if ($menu_item.hasClass('col-6')) row_number = 6;

                                if ($(window).width() < 992 - theme.scrollbarWidth)
                                    row_number = 1;

                                var col_length = 0;
                                $popup.find('> .inner > ul > li').each(function() {
                                    var cols = parseFloat($(this).attr('data-cols'));
                                    if (cols <= 0)
                                        cols = 1;

                                    if (cols > row_number)
                                        cols = row_number;

                                    col_length += cols;
                                });

                                if (col_length > row_number) col_length = row_number;

                                var popup_max_width = $popup.find('.inner').css('max-width');
                                var col_width = container_width / row_number;
                                if ('none' !== popup_max_width && popup_max_width < container_width) {
                                    col_width = parseInt(popup_max_width) / row_number;
                                }

                                $popup.find('> .inner > ul > li').each(function() {
                                    var cols = parseFloat($(this).attr('data-cols'));
                                    if (cols <= 0)
                                        cols = 1;

                                    if (cols > row_number)
                                        cols = row_number;

                                    if ($menu_item.hasClass('pos-center') || $menu_item.hasClass('pos-left') || $menu_item.hasClass('pos-right'))
                                        $(this).css('width', (100 / col_length * cols) + '%');
                                    else
                                        $(this).css('width', (100 / row_number * cols) + '%');
                                });

                                if ($menu_item.hasClass('pos-center')) { // position center
                                    $popup.find('> .inner > ul').width(col_width * col_length - padding);
                                    var left_position = $popup.offset().left - ($(window).width() - col_width * col_length) / 2;
                                    $popup.css({
                                        'left': -left_position
                                    });
                                } else if ($menu_item.hasClass('pos-left')) { // position left
                                    $popup.find('> .inner > ul').width(col_width * col_length - padding);
                                    $popup.css({
                                        'left': -15
                                    });
                                } else if ($menu_item.hasClass('pos-right')) { // position right
                                    $popup.find('> .inner > ul').width(col_width * col_length - padding);
                                    $popup.css({
                                        'left': 'auto',
                                        'right': -15
                                    });
                                } else { // position justify
                                    $popup.find('> .inner > ul').width(container_width - padding);
                                    if (theme.rtl) {
                                        $popup.css({
                                            'right': 0,
                                            'left': 'auto'
                                        });
                                    }
                                    var left_position = self.calcMenuPosition($popup);
                                    if (theme.rtl) {
                                        $popup.css({
                                            'right': -15,
                                            'left': 'auto'
                                        });
                                        if (left_position) {
                                            $popup.css({
                                                'right': -left_position,
                                                'left': 'auto'
                                            });
                                        }
                                    } else {
                                        $popup.css({
                                            'left': -15,
                                            'right': 'auto'
                                        });
                                        if (left_position) {
                                            $popup.css({
                                                'left': -left_position,
                                                'right': 'auto'
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    });
                });

                return self;
            },

            events: function() {
                var self = this;

                $(window).on('resize', function() {
                    self.build();
                });

                setTimeout(function() {
                    self.build();
                }, 400);

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Sidebar Menu
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        SidebarMenu: {

            defaults: {
                menu: $('.sidebar-menu:not(.side-menu-accordion)'),
                toggle: $('.widget_sidebar_menu .widget-title .toggle'),
                menu_toggle: $('#main-toggle-menu .menu-title')
            },

            rtl: theme.rtl,

            initialize: function($menu, $toggle, $menu_toggle) {
                this.$menu = ($menu || this.defaults.menu);
                this.$toggle = ($toggle || this.defaults.toggle);
                this.$menu_toggle = ($menu_toggle || this.defaults.menu_toggle);

                this.build()
                    .events();

                return this;
            },

            isRightSidebar: function($menu) {
                var flag = false;
                if (this.rtl) {
                    flag = !($('#main').hasClass('column2-right-sidebar') || $('#main').hasClass('column2-wide-right-sidebar'));
                } else {
                    flag = $('#main').hasClass('column2-right-sidebar') || $('#main').hasClass('column2-wide-right-sidebar');
                }

                if ($menu.closest('#main-toggle-menu').length) {
                    if (this.rtl) {
                        flag = true;
                    } else {
                        flag = false;
                    }
                }

                if ($header_wrapper = $menu.closest('.header-wrapper')) {
                    if ($header_wrapper.length && $header_wrapper.hasClass('header-side-nav')) {
                        if (this.rtl) {
                            flag = true;
                        } else {
                            flag = false;
                        }
                        if( $('.page-wrapper').hasClass('side-nav-right') ){
                            if( this.rtl ){
                                flag = false;
                            }else{
                                flag = true;
                            }
                        }
                    }
                }

                return flag;
            },

            popupWidth: function() {
                var winWidth = $(window).width() + theme.getScrollbarWidth();
                var popupWidth = $(window).width() - theme.grid_gutter_width * 2;
                if (!$('body').hasClass('wide')) {
                    if (winWidth >= theme.container_width + theme.grid_gutter_width - 1)
                        popupWidth = theme.container_width - theme.grid_gutter_width;
                    else if (winWidth >= 992)
                        popupWidth = 960 - theme.grid_gutter_width;
                    else if (winWidth >= 768)
                        popupWidth = 720 - theme.grid_gutter_width;
                }
                return popupWidth;
            },

            build: function() {
                var self = this;

                if (!self.$menu.hasClass('side-menu-slide')) {
                    self.$menu.each( function() {
                        var $menu = $(this);
                        var $menu_container = $menu.closest('.container');
                        var container_width;
                        if ($(window).width() < 992 - theme.getScrollbarWidth())
                            container_width = self.popupWidth();
                        else
                            container_width = self.popupWidth() - $menu.width() - 45;

                        var is_right_sidebar = self.isRightSidebar($menu);

                        var $menu_items = $menu.find('> li');

                        $menu_items.each( function() {
                            var $menu_item = $(this);
                            var $popup = $menu_item.find('> .popup');
                            if ($popup.length > 0) {
                                $popup.css('display', 'block');
                                if ($menu_item.hasClass('wide')) {
                                    $popup.css('left', 0);
                                    var padding = parseInt($popup.css('padding-left')) + parseInt($popup.css('padding-right')) +
                                        parseInt($popup.find('> .inner').css('padding-left')) + parseInt($popup.find('> .inner').css('padding-right'));

                                    var row_number = 4;

                                    if ($menu_item.hasClass('col-2')) row_number = 2;
                                    if ($menu_item.hasClass('col-3')) row_number = 3;
                                    if ($menu_item.hasClass('col-4')) row_number = 4;
                                    if ($menu_item.hasClass('col-5')) row_number = 5;
                                    if ($menu_item.hasClass('col-6')) row_number = 6;

                                    if ($(window).width() < 992 - theme.getScrollbarWidth())
                                        row_number = 1;

                                    var col_length = 0;
                                    $popup.find('> .inner > ul > li').each(function() {
                                        var cols = parseFloat($(this).attr('data-cols'));
                                        if (cols <= 0)
                                            cols = 1;

                                        if (cols > row_number)
                                            cols = row_number;

                                        col_length += cols;
                                    });

                                    if (col_length > row_number) col_length = row_number;

                                    var popup_max_width = $popup.find('.inner').css('max-width');
                                    var col_width = container_width / row_number;
                                    if ('none' !== popup_max_width && popup_max_width < container_width) {
                                        col_width = parseInt(popup_max_width) / row_number;
                                    }

                                    $popup.find('> .inner > ul > li').each(function() {
                                        var cols = parseFloat($(this).attr('data-cols'));
                                        if (cols <= 0)
                                            cols = 1;

                                        if (cols > row_number)
                                            cols = row_number;

                                        if ($menu_item.hasClass('pos-center') || $menu_item.hasClass('pos-left') || $menu_item.hasClass('pos-right'))
                                            $(this).css('width', (100 / col_length * cols) + '%');
                                        else
                                            $(this).css('width', (100 / row_number * cols) + '%');
                                    });

                                    $popup.find('> .inner > ul').width(col_width * col_length + 1);
                                    if (is_right_sidebar) {
                                        $popup.css({
                                            'left': 'auto',
                                            'right': $(this).width()
                                        });
                                    } else {
                                        $popup.css({
                                            'left': $(this).width(),
                                            'right': 'auto'
                                        });
                                    }
                                }

                                $popup.css('display', 'none');
                                if ($menu.hasClass('side-menu-accordion')) {

                                } else if ($menu.hasClass('side-menu-slide')) {

                                } else {

                                    $menu_item.hoverIntent(
                                        $.extend({}, theme.hoverIntentConfig, {
                                            over: function(){
                                                $menu_items.find('.popup').hide();
                                                $popup.show();
                                                $popup.parent().addClass('open');
                                            },
                                            out: function(){
                                                $popup.hide();
                                                $popup.parent().removeClass('open');
                                            }
                                        })
                                    );
                                }
                            }
                        });
                    });
                }

                return self;
            },

            events: function() {
                var self = this;

                self.$toggle.on('click', function() {
                    var $widget = $(this).parent().parent();
                    var $this = $(this);
                    if ($this.hasClass('closed')) {
                        $this.removeClass('closed');
                        $widget.removeClass('closed');
                        $widget.find('.sidebar-menu-wrap').stop().slideDown(400, function() {
                            $(this).attr('style', '').show();
                            self.build();
                        });
                    } else {
                        $this.addClass('closed');
                        $widget.addClass('closed');
                        $widget.find('.sidebar-menu-wrap').stop().slideUp(400, function() {
                            $(this).attr('style', '').hide();
                        });
                    }
                });

                this.$menu_toggle.on('click', function() {
                    var $toggle_menu = $(this).parent();
                    var $this = $(this);
                    if ($this.hasClass('closed')) {
                        $this.removeClass('closed');
                        $toggle_menu.removeClass('closed');
                        $toggle_menu.find('.toggle-menu-wrap').stop().slideDown(400, function() {
                            $(this).attr('style', '').show();
                        });

                        self.build();

                    } else {
                        $this.addClass('closed');
                        $toggle_menu.addClass('closed');
                        $toggle_menu.find('.toggle-menu-wrap').stop().slideUp(400, function() {
                            $(this).attr('style', '').hide();
                        });
                    }
                });

                // slide menu
                if (self.$menu.hasClass('side-menu-slide')) {
                    var slideNavigation = {
                        $mainNav: self.$menu,
                        $mainNavItem: self.$menu.find('li'),

                        build: function(){
                            var self = this;

                            self.menuNav();
                        },
                        menuNav: function(){
                            var self = this;

                            self.$mainNav.find('.menu-item-has-children > a.nolink').removeClass('nolink').attr('href', '');

                            self.$mainNav.find('.menu-item-has-children > a:not(.go-back)').on('click', function(e) {
                                e.stopImmediatePropagation();
                                e.preventDefault();
                                var currentMenu         = $(this).closest('ul');
                                    nextMenu            = $(this).parent().find('ul').first(),
                                    prevMenu            = $(this).closest('.next-menu');

                                if (nextMenu.children('.menu-item').children('.go-back').length < 1) {
                                    nextMenu.prepend('<li class="menu-item"><a class="go-back" href="#">' + js_porto_vars.submenu_back + '</a></li>');
                                }

                                var nextMenuHeightDiff  = nextMenu.find('> li').length * nextMenu.find('> li').outerHeight() - nextMenu.outerHeight(),
                                    prevMenuHeightDiff  = prevMenu.find('> li').length * prevMenu.find('> li').outerHeight() - prevMenu.outerHeight();

                                currentMenu.addClass('next-menu');

                                nextMenu.addClass('visible');
                                currentMenu.css({
                                    overflow: 'visible',
                                    'overflow-y': 'visible'
                                });

                                if (nextMenuHeightDiff > 0) {
                                    nextMenu.css({
                                        overflow: 'hidden',
                                        'overflow-y': 'scroll'
                                    });
                                }

                                //for (i = 0; i < nextMenu.find('> li').length; i++) {
                                    if( nextMenu.outerHeight() < (nextMenu.closest('.header-main').outerHeight() - 100) ) {
                                        nextMenu.css({
                                            height: nextMenu.outerHeight() + nextMenu.find('> li').outerHeight()
                                        });
                                    }
                               // }

                                nextMenu.css({
                                    'padding-top': nextMenuHeightDiff + 'px'
                                });
                            });
                            self.$mainNav.on('click', '.go-back', function(e) {
                                e.preventDefault();
                                var prevMenu            = $(this).closest('.next-menu'),
                                    prevMenuHeightDiff  = prevMenu.find('> li').length * prevMenu.find('> li').outerHeight() - prevMenu.outerHeight();

                                prevMenu.removeClass('next-menu');
                                $(this).closest('ul').removeClass('visible');

                                if( prevMenuHeightDiff > 0 ) {
                                    prevMenu.css({
                                        overflow: 'hidden',
                                        'overflow-y': 'scroll'
                                    });
                                }
                            })
                        }
                    }

                    slideNavigation.build();
                }

                $(window).on('resize', function() {
                    self.build();
                });

                setTimeout(function() {
                    self.build();
                }, 400);

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);

// Sticky Header
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        StickyHeader: {

            defaults: {
                header: $('#header')
            },

            initialize: function($header) {
                this.$header = ($header || this.defaults.header);
                this.sticky_height = 0;
                this.sticky_offset = 0;
                this.sticky_pos = 0;
                this.change_logo = theme.change_logo;

                if (!theme.show_sticky_header || !this.$header.length || $('.side-header-narrow-bar').length)
                    return this;

                var self = this;

                var $header_top = self.$header.find('> .header-top');
                if ($header_top.length) {
                    self.$header_top = $header_top;
                    self.top_height = $header_top.height();
                } else {
                    self.$header_top = false;
                }

                var $menu_wrap = self.$header.find('> .main-menu-wrap');
                if ($menu_wrap.length) {
                    self.$menu_wrap = $menu_wrap;
                    self.menu_height = $menu_wrap.height();
                } else {
                    self.$menu_wrap = false;
                }

                self.$header_main = self.$header.find('.header-main');

                self.reveal = self.$header.parents('.header-wrapper').hasClass('header-reveal');

                self.is_sticky = false;

                self.reset()
                    .build()
                    .events();

                return self;
            },

            build: function() {
                var self = this;

                if (!self.is_sticky && ($(window).height() + self.header_height + theme.adminBarHeight() + parseInt(self.$header.css('border-top-width')) >= $(document).height())) {
                    return self;
                }

                if ($(window).height() > $('body').height())
                    window.scrollTo(0, 0);

                var scroll_top = $(window).scrollTop();

                if (self.$menu_wrap && !theme.isTablet()) {

                    self.$header_main.stop().css('top', 0);

                    if (self.$header.parent().hasClass('fixed-header'))
                        self.$header.parent().attr('style', '');

                    if (scroll_top > self.sticky_pos) {
                        if (!self.$header.hasClass('sticky-header')) {
                            var header_height = self.$header.outerHeight();
                            self.$header.addClass('sticky-header').css('height', header_height);
                            self.$menu_wrap.stop().css('top', theme.adminBarHeight());

                            var selectric = self.$header.find('.header-main .searchform select').data('selectric');
                            if (selectric && typeof selectric.close != 'undefined')
                                selectric.close();

                            if (self.$header.parent().hasClass('fixed-header')) {
                                self.$header_main.hide();
                                self.$header.css('height', '');
                            }

                            if (!self.init_toggle_menu) {
                                self.init_toggle_menu = true;
                                theme.MegaMenu.build();
                                if ($('#main-toggle-menu').length) {
                                    if ($('#main-toggle-menu').hasClass('show-always')) {
                                        $('#main-toggle-menu').data('show-always', true);
                                        $('#main-toggle-menu').removeClass('show-always');
                                    }
                                    $('#main-toggle-menu').addClass('closed');
                                    $('#main-toggle-menu .menu-title').addClass('closed');
                                    $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                }
                            }
                            self.is_sticky = true;
                        }
                    } else {
                        if (self.$header.hasClass('sticky-header')) {
                            self.$header.removeClass('sticky-header');
                            self.$header.css('height', '');
                            self.$menu_wrap.stop().css('top', 0);
                            self.$header_main.show();

                            var selectric = self.$header.find('.main-menu-wrap .searchform select').data('selectric');
                            if (selectric && typeof selectric.close != 'undefined')
                                selectric.close();

                            if (self.init_toggle_menu) {
                                self.init_toggle_menu = false;
                                theme.MegaMenu.build();
                                if ($('#main-toggle-menu').length) {
                                    if ($('#main-toggle-menu').data('show-always')) {
                                        $('#main-toggle-menu').addClass('show-always');
                                        $('#main-toggle-menu').removeClass('closed');
                                        $('#main-toggle-menu .menu-title').removeClass('closed');
                                        $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                    }
                                }
                            }
                            self.is_sticky = false;
                        }
                    }
                } else {
                    self.$header_main.show();
                    if (self.$header.parent().hasClass('fixed-header') && $('#wpadminbar').length && $('#wpadminbar').css('position') == 'absolute') {
                        self.$header.parent().css('top', ($('#wpadminbar').height() - scroll_top) < 0 ? -$('#wpadminbar').height() : -scroll_top);
                    } else if (self.$header.parent().hasClass('fixed-header')) {
                        self.$header.parent().attr('style', '');
                    } else {
                        if (self.$header.parent().hasClass('fixed-header'))
                            self.$header.parent().attr('style', '');
                    }
                    if (self.$header.hasClass('sticky-menu-header') && !theme.isTablet()) {
                        self.$header_main.stop().css('top', 0);
                        if (self.change_logo) self.$header_main.removeClass('change-logo');
                        self.$header_main.removeClass('sticky');
                        self.$header.removeClass('sticky-header');
                        self.is_sticky = false;
                        self.sticky_height = 0;
                        self.sticky_offset = 0;
                    } else {
                        if (self.$menu_wrap)
                            self.$menu_wrap.stop().css('top', 0);
                        if (scroll_top > self.sticky_pos && (!theme.isTablet() || (theme.isTablet() && (!theme.isMobile() && theme.show_sticky_header_tablet) || (theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile)))) {
                            if (!self.$header.hasClass('sticky-header')) {
                                var header_height = self.$header.outerHeight();
                                self.$header.addClass('sticky-header').css('height', header_height);
                                self.$header_main.addClass('sticky');
                                if (self.change_logo) self.$header_main.addClass('change-logo');
                                self.$header_main.stop().css('top', theme.adminBarHeight());

                                if (!self.init_toggle_menu) {
                                    self.init_toggle_menu = true;
                                    theme.MegaMenu.build();
                                    if ($('#main-toggle-menu').length) {
                                        if ($('#main-toggle-menu').hasClass('show-always')) {
                                            $('#main-toggle-menu').data('show-always', true);
                                            $('#main-toggle-menu').removeClass('show-always');
                                        }
                                        $('#main-toggle-menu').addClass('closed');
                                        $('#main-toggle-menu .menu-title').addClass('closed');
                                        $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                    }
                                }
                                self.is_sticky = true;
                            }
                        } else {
                            if (self.$header.hasClass('sticky-header')) {
                                if (self.change_logo) self.$header_main.removeClass('change-logo');
                                self.$header_main.removeClass('sticky');
                                self.$header.removeClass('sticky-header');
                                self.$header.css('height', '');
                                self.$header_main.stop().css('top', 0);

                                if (self.init_toggle_menu) {
                                    self.init_toggle_menu = false;
                                    theme.MegaMenu.build();
                                    if ($('#main-toggle-menu').length) {
                                        if ($('#main-toggle-menu').data('show-always')) {
                                            $('#main-toggle-menu').addClass('show-always');
                                            $('#main-toggle-menu').removeClass('closed');
                                            $('#main-toggle-menu .menu-title').removeClass('closed');
                                            $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                        }
                                    }
                                }
                                self.is_sticky = false;
                            }
                        }
                    }
                }

                if (!self.$header.hasClass('header-loaded'))
                    self.$header.addClass('header-loaded');

                if (!self.$header.find('.logo').hasClass('logo-transition'))
                    self.$header.find('.logo').addClass('logo-transition');

                if (self.$header.find('.overlay-logo').get(0) && !self.$header.find('.overlay-logo').hasClass('overlay-logo-transition'))
                    self.$header.find('.overlay-logo').addClass('overlay-logo-transition');

                return self;
            },

            reset: function() {
                var self = this;

                if (self.$header.find('.logo').hasClass('logo-transition'))
                    self.$header.find('.logo').removeClass('logo-transition');

                if (self.$header.find('.overlay-logo').get(0) && self.$header.find('.overlay-logo').hasClass('overlay-logo-transition'))
                    self.$header.find('.overlay-logo').removeClass('overlay-logo-transition');

                if (self.$menu_wrap && !theme.isTablet()) {
                    // show main menu
                    self.$header.addClass('sticky-header sticky-header-calc');
                    self.$header_main.addClass('sticky');
                    if (self.change_logo) self.$header_main.addClass('change-logo');

                    self.sticky_height = self.$menu_wrap.height() + parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));
                    self.sticky_offset = parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));

                    if (self.change_logo) self.$header_main.removeClass('change-logo');
                    self.$header_main.removeClass('sticky');
                    self.$header.removeClass('sticky-header sticky-header-calc');
                    self.header_height = self.$header.height() + parseInt(self.$header.css('margin-top'));
                    self.menu_height = self.$menu_wrap.height() + parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));
                    self.sticky_pos = (self.header_height - self.sticky_height) + $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));

                    if (self.reveal) {
                        self.sticky_pos += self.menu_height + 30;
                    }
                } else {
                    // show header main
                    self.$header.addClass('sticky-header sticky-header-calc');
                    self.$header_main.addClass('sticky');
                    if (self.change_logo) self.$header_main.addClass('change-logo');
                    self.sticky_main_height = self.$header_main.height();

                    if (self.change_logo) self.$header_main.removeClass('change-logo');
                    self.$header_main.removeClass('sticky');
                    self.$header.removeClass('sticky-header sticky-header-calc');
                    self.header_height = self.$header.height() + parseInt(self.$header.css('margin-top'));
                    self.main_height = self.$header_main.height();

                    self.sticky_height = self.sticky_main_height;
                    self.sticky_offset = self.main_height - self.sticky_main_height;

                    if (!(!theme.isTablet() || (theme.isTablet() && (!theme.isMobile() && theme.show_sticky_header_tablet) || (theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile)))) {
                        self.sticky_height = 0;
                        self.sticky_offset = 0;
                    }

                    self.sticky_pos = (self.header_height - self.sticky_main_height) + $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));

                    if (self.reveal) {
                        self.sticky_pos += self.main_height + 30;
                    }
                }

                if (self.sticky_pos < 0) {
                    self.sticky_pos = 0;
                }

                self.init_toggle_menu = false;

                self.$header_main.removeAttr('style');
                self.$header.removeAttr('style');

                return self;
            },

            events: function() {
                var self = this, win_width = 0;

                /*$(window).on('resize', function() {
                    if (win_width != $(window).width()) {
                        self.reset()
                            .build();
                        win_width = $(window).width();
                    }
                });*/

                $(window).on('scroll', function() {
                    self.build();
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);

// Side Nav
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        SideNav: {

            defaults: {
                side_nav: $('.header-side-nav #header')
            },

            bc_pos_top: 0,

            initialize: function($side_nav) {
                this.$side_nav = ($side_nav || this.defaults.side_nav);

                if (!this.$side_nav.length)
                    return this;

                var self = this;

                self.$side_nav.addClass('initialize');

                self.reset()
                    .build()
                    .events();

                return self;
            },

            build: function() {
                var self = this;

                $page_top = $('.page-top');
                $main = $('#main');

                if (theme.isTablet()) {
                    self.$side_nav.removeClass("fixed-bottom");
                    $page_top.removeClass("fixed-pos");
                    $page_top.attr('style', '');
                    $main.attr('style', '');
                } else {
                    var side_height = self.$side_nav.innerHeight();
                    var window_height = $(window).height();
                    var scroll_top = $(window).scrollTop();

                    if (side_height - window_height + theme.adminBarHeight() < scroll_top) {
                        if (!self.$side_nav.hasClass("fixed-bottom"))
                            self.$side_nav.addClass("fixed-bottom");
                    } else {
                        if (self.$side_nav.hasClass("fixed-bottom"))
                            self.$side_nav.removeClass("fixed-bottom");
                    }

                    if ($page_top.length && $page_top.outerHeight() < 100 && !$('.side-header-narrow-bar-top').length) {
                        if (self.page_top_offset == theme.adminBarHeight() || self.page_top_offset <= scroll_top) {
                            if (!$page_top.hasClass("fixed-pos")) {
                                $page_top.addClass("fixed-pos");
                                $page_top.css('top', theme.adminBarHeight());
                                $main.css('padding-top', $page_top.outerHeight());
                            }
                        } else {
                            if ($page_top.hasClass("fixed-pos")) {
                                $page_top.removeClass("fixed-pos");
                                $page_top.attr('style', '');
                                $main.attr('style', '');
                            }
                        }
                    }
                    $main.css('min-height', $(window).height() - theme.adminBarHeight() - $('.page-top:not(.fixed-pos)').height() - $('.footer-wrapper').height());
                }

                return self;
            },

            reset: function() {
                var self = this;

                if (theme.isTablet()) {

                    self.$side_nav.attr('style', '');

                } else {

                    var w_h = $(window).height();

                    $side_bottom = self.$side_nav.find('.side-bottom');

                    self.$side_nav.css({
                        'min-height': w_h - theme.adminBarHeight(),
                        'padding-bottom': $side_bottom.height() + parseInt($side_bottom.css('margin-top')) + parseInt($side_bottom.css('margin-bottom'))
                    });

                    var appVersion          = navigator.appVersion;
                    var webkitVersion_positionStart = appVersion.indexOf("AppleWebKit/") + 12;
                    var webkitVersion_positionEnd   = webkitVersion_positionStart + 3;
                    var webkitVersion       = appVersion.slice(webkitVersion_positionStart,webkitVersion_positionEnd);
                    if (webkitVersion  < 537) {
                        self.$side_nav.css('-webkit-backface-visibility', 'hidden');
                        self.$side_nav.css('-webkit-perspective', '1000');
                    }
                }

                $page_top = $('.page-top');
                $main = $('#main');

                if ($page_top.length) {
                    $page_top.removeClass("fixed-pos");
                    $page_top.attr('style', '');
                    $main.attr('style', '');
                    self.page_top_offset = $page_top.offset().top;
                }

                return self;
            },

            events: function() {
                var self = this;

                $(window).on('resize', function() {
                    self.reset()
                        .build();
                });

                $(window).on('scroll', function() {
                    self.build();
                });

                if ($('.side-header-narrow-bar-top').length) {
                    if ($(window).scrollTop() > theme.adminBarHeight() + $('.side-header-narrow-bar-top').height()) {
                        $('.side-header-narrow-bar-top').addClass('side-header-narrow-bar-sticky');
                    }
                    $(window).on('scroll', function() {
                        var scroll_top = $(this).scrollTop();
                        if (scroll_top > theme.adminBarHeight() + $('.side-header-narrow-bar-top').height()) {
                            $('.side-header-narrow-bar-top').addClass('side-header-narrow-bar-sticky');
                        } else {
                            $('.side-header-narrow-bar-top').removeClass('side-header-narrow-bar-sticky');
                        }
                    });
                }

                // Side Narrow Bar
                $('.side-header-narrow-bar .hamburguer-btn').on('click', function() {
                    $(this).toggleClass('active');
                    $('#header').toggleClass('side-header-visible');
                    if ($(this).closest('.side-header-narrow-bar-top').length) {
                        $(this).closest('.side-header-narrow-bar-top').toggle();
                    }
                });
                $('.hamburguer-close').on('click', function(){
                    $('.side-header-narrow-bar .hamburguer-btn').trigger('click');
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Search
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        Search: {

            defaults: {
                popup: $('.searchform-popup'),
                form: $('.searchform')
            },

            initialize: function($popup, $form) {
                this.$popup = ($popup || this.defaults.popup);
                this.$form = ($form || this.defaults.form);

                this.build()
                    .events();

                return this;
            },

            build: function() {
                var self = this;

                /* Change search form values */
                var $search_form_texts = self.$form.find('.text input'),
                    $search_form_cats = self.$form.find('.cat');

                if ($('.header-wrapper .searchform .cat').get(0) && $.fn.selectric) {
                    $('.header-wrapper .searchform .cat').selectric({
                        arrowButtonMarkup: '',
                        expandToItemText: true,
                        maxHeight: 240
                    });
                }

                $search_form_texts.on('change', function() {
                    var $this = $(this),
                        val = $this.val();

                    $search_form_texts.each(function() {
                        if ($this != $(this)) $(this).val(val);
                    });
                });

                $search_form_cats.on('change', function() {
                    var $this = $(this),
                        val = $this.val();

                    $search_form_cats.each(function() {
                        if ($this != $(this)) $(this).val(val);
                    });
                });

                return this;
            },

            events: function() {
                var self = this;

                self.$popup.on('click', function(e) {
                    e.stopPropagation();
                });
                self.$popup.find('.search-toggle').on('click', function(e) {
                    $(this).toggleClass('opened');
                    $(this).next().toggle();
                    e.stopPropagation();
                });

                if (!('ontouchstart' in document)) {
                    $('html,body').on('click', function() {
                        self.removeFormStyle();
                    });

                    $(window).on('resize', function() {
                        self.removeFormStyle();
                    });
                }

                return self;
            },

            removeFormStyle: function() {
                this.$form.removeAttr('style');
                this.$popup.find('.search-toggle').removeClass('opened');
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Hash Scroll
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        HashScroll: {

            initialize: function() {

                this.build()
                    .events();

                return this;
            },

            build: function() {
                var self = this;

                try {
                    var hash = window.location.hash;
                    var target = $(hash);
                    if (target.length && !(hash == '#review_form' || hash == '#reviews' || hash.indexOf('#comment-') != -1)) {
                        setTimeout(function() {
                            $('html, body').stop().animate({
                                scrollTop: target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1
                            }, 600, 'easeOutQuad', function() {
                                self.activeMenuItem();
                            });
                        }, 600);
                    }

                    return self;
                } catch (err) {
                    return self;
                }
            },

            getTarget: function(href) {
                var target;

                if (href.indexOf('#') == 0) {
                    target = $(href);
                } else {
                    var url = window.location.href;
                    url = url.substring(url.indexOf('://') + 3);
                    if (url.indexOf('#') != -1)
                        url = url.substring(0, url.indexOf('#'));
                    href = href.substring(href.indexOf('://') + 3);
                    href = href.substring(href.indexOf(url) + url.length);
                    if (href.indexOf('#') == 0) {
                        target = $(href);
                    }
                }
                return target;
            },

            activeMenuItem: function() {
                var self = this;

                var scroll_pos = $(window).scrollTop();

                var $menu_items = $('.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"]');
                if ($menu_items.length) {
                    $menu_items.each(function() {
                        var $this = $(this);
                        var href = $this.attr('href');
                        var target = self.getTarget(href);
                        if (target && target.get(0)) {
                            if ($this.is(':last-child') && scroll_pos + $(window).height() >= target.offset().top + target.outerHeight()) {
                                $this.parent().siblings().removeClass('active');
                                $this.parent().addClass('active');
                            } else {
                                var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1,
                                    $parent = $this.parent();
                                //if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
                                    //scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
                                //}
                                if (scroll_to <= scroll_pos + 5) {
                                    $parent.siblings().removeClass('active');
                                    $parent.addClass('active');
                                } else {
                                    $parent.removeClass('active');
                                }
                            }
                        }
                    });
                }

                return self;
            },

            events: function() {
                var self = this;

                $('.menu-item > a[href*="#"], .porto-sticky-nav .nav > li > a[href*="#"], a[href*="#"].hash-scroll, .hash-scroll-wrap a[href*="#"]').on('click', function(e) {
                    e.preventDefault();

                    var $this = $(this);
                    var href = $this.attr('href');
                    var target = self.getTarget(href);

                    if (target && target.get(0)) {
                        var $parent = $this.parent();

                        var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1;
//                        if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
//                            scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
//                        }
                        $('html, body').stop().animate({
                            scrollTop: scroll_to
                        }, 600, 'easeOutQuad', function() {
                            self.activeMenuItem();
                            $parent.siblings().removeClass('active');
                            $parent.addClass('active');
                        });
                    } else {
                        window.location.href = $this.attr('href');
                    }
                });

                $(window).on('scroll', function() {
                    self.activeMenuItem();
                });

                self.activeMenuItem();

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// FAQ Filter
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        FaqFilter: {

            defaults: {
                elements: '.faq-filter'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {
                    var $this = $(this);
                    $this.find('li').on('click', function(e) {
                        e.preventDefault();

                        var selector = $(this).attr('data-filter'),
                            position = $this.data('position'),
                            $parent;

                        $this.find('.active').removeClass('active');

                        if (position == 'sidebar') {
                            $parent = $('.main-content .page-faqs');
                            theme.scrolltoContainer($parent);
                            $('.sidebar-overlay').click();
                        } else if (position == 'global') {
                            $parent = $('.main-content .page-faqs');
                        } else {
                            $parent = $(this).closest('.page-faqs');
                        }

                        var selected = 0;
                        $parent.find('.faq').each(function() {
                            var $that = $(this), easing = "easeInOutQuart", timeout = 300;
                            if (selector == '*') {
                                if ($that.css('display') == 'none') $that.stop(true).slideDown(timeout, easing, function() {
                                    $(this).attr('style', '').show();
                                });
                                selected++;
                            } else {
                                if ($that.hasClass(selector)) {
                                    if ($that.css('display') == 'none') $that.stop(true).slideDown(timeout, easing, function() {
                                        $(this).attr('style', '').show();
                                    });
                                    selected++;
                                } else {
                                    if ($that.css('display') != 'none') $that.stop(true).slideUp(timeout, easing, function() {
                                        $(this).attr('style', '').hide();
                                    });
                                }
                            }
                        });

                        if (!selected && $parent.find('.faqs-infinite').length && typeof ($.fn.infinitescroll) != 'undefined') {
                            $parent.find('.faqs-infinite').infinitescroll('retrieve');
                        }

                        $(this).addClass('active');

                        if (position == 'sidebar') {
                            self.$elements.each(function() {
                                var $that = $(this);

                                if ($that == $this && $that.data('position') != 'sidebar') return;
                                $that.find('li').removeClass('active');
                                $that.find('li[data-filter="' + selector + '"]').addClass('active');
                            });
                        }

                        window.location.hash = '#' + selector;
                        theme.refreshVCContent();
                    });
                });

                function hashchange() {
                    var $filter = $(self.$elements.get(0)), hash = window.location.hash;

                    if (hash) {
                        $filter.find('li[data-filter="' + hash.replace('#', '') + '"]').click();
                    }
                }

                $(window).on('hashchange', hashchange);
                hashchange();

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Filter Zoom
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        FilterZoom: {

            defaults: {
                elements: null
            },

            initialize: function($elements) {
                this.$elements = ($elements || this.defaults.elements);

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {
                    var $this = $(this),
                        zoom = $this.find('.zoom, .thumb-info-zoom').get(0);

                    if (!zoom) return;

                    $this.find('.zoom, .thumb-info-zoom').unbind('click');
                    var links = [];
                    var i = 0;
                    $this.find('article').each(function() {
                        var $that = $(this);
                        if ($that.css('display') != 'none') {
                            var $zoom = $that.find('.zoom, .thumb-info-zoom'),
                                slide,
                                src = $zoom.data('src'),
                                title = $zoom.data('title');

                            $zoom.data('index', i);
                            if ($.isArray(src)) {
                                $.each(src, function(index, value) {
                                    slide = {};
                                    slide.src = value;
                                    slide.title = title[index];
                                    links[i] = slide;
                                    i++;
                                });
                            } else {
                                slide = {};
                                slide.src = src;
                                slide.title = title;
                                links[i] = slide;
                                i++;
                            }
                        }
                    });
                    $this.find('article').each(function() {
                        var $that = $(this);
                        if ($that.css('display') != 'none') {
                            $that.off('click', '.zoom, .thumb-info-zoom').on('click', '.zoom, .thumb-info-zoom', function(e) {
                                var $zoom = $(this), $parent = $zoom.parents('.thumb-info'), offset = 0;
                                if ($parent.get(0)) {
                                    var $slider = $parent.find('.porto-carousel');
                                    if ($slider.get(0)) {
                                        offset = $slider.data('owl.carousel').current() - $slider.find('.cloned').length / 2;
                                    }
                                }
                                e.preventDefault();
                                $.magnificPopup.close();
                                $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                                    items: links,
                                    gallery: {
                                        enabled: true
                                    },
                                    type: 'image'
                                }), $zoom.data('index') + offset);
                                return false;
                            });
                        }
                    });
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Portfolio Ajax on Page
(function(theme, $) {

    theme = theme || {};

    var activePortfolioAjaxOnPage;

    $.extend(theme, {

        PortfolioAjaxPage: {

            defaults: {
                elements: '.page-portfolios'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {

                    var $this = $(this);

                    if (!$this.find('#portfolioAjaxBox').get(0))
                        return;

                    var $container = $(this),
                        portfolioAjaxOnPage = {

                            $wrapper: $container,
                            pages: [],
                            currentPage: 0,
                            total: 0,
                            $ajaxBox: $this.find('#portfolioAjaxBox'),
                            $ajaxBoxContent: $this.find('#portfolioAjaxBoxContent'),

                            build: function() {
                                var self = this;

                                self.pages = [];
                                self.total = 0;

                                $this.find('a[data-ajax-on-page]').each(function() {
                                    self.add($(this));
                                });

                                $this.off('mousedown', 'a[data-ajax-on-page]').on('mousedown', 'a[data-ajax-on-page]', function (ev) {
                                    if (ev.which == 2) {
                                        ev.preventDefault();
                                        return false;
                                    }
                                });
                            },

                            add: function($el) {

                                var self = this,
                                    href = $el.attr('href');

                                self.pages.push(href);
                                self.total++;

                                $el.off('click').on('click', function(e) {
                                   e.preventDefault();
                                   /* D3-Start */
                                    var _class = e.target.className
                                    if( _class == 'owl-next' ){
                                        return false;
                                    }else if( _class == 'owl-prev' ){
                                        return false;
                                    } else{
                                        self.show(self.pages.indexOf(href));
                                    }
                                    /* End-D3 */
                                    return false;
                                });

                            },

                            events: function() {
                                var self = this;

                                // Close
                                $this.off('click', 'a[data-ajax-portfolio-close]').on('click', 'a[data-ajax-portfolio-close]', function(e) {
                                    e.preventDefault();
                                    self.close();
                                    return false;
                                });

                                if (self.total <= 1) {
                                    $('a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]').remove();
                                } else {
                                    // Prev
                                    $this.off('click', 'a[data-ajax-portfolio-prev]').on('click', 'a[data-ajax-portfolio-prev]', function(e) {
                                        e.preventDefault();
                                        self.prev();
                                        return false;
                                    });
                                    // Next
                                    $this.off('click', 'a[data-ajax-portfolio-next]').on('click', 'a[data-ajax-portfolio-next]', function(e) {
                                        e.preventDefault();
                                        self.next();
                                        return false;
                                    });
                                }
                            },

                            close: function() {
                                var self = this;

                                if (self.$ajaxBoxContent.find('.rev_slider').get(0)) {
                                    try {self.$ajaxBoxContent.find('.rev_slider').revkill();} catch(err) {}
                                }
                                self.$ajaxBoxContent.empty();
                                self.$ajaxBox.removeClass('ajax-box-init').removeClass('ajax-box-loading');
                            },

                            next: function() {
                                var self = this;
                                if(self.currentPage + 1 < self.total) {
                                    self.show(self.currentPage + 1);
                                } else {
                                    self.show(0);
                                }
                            },

                            prev: function() {
                                var self = this;

                                if((self.currentPage - 1) >= 0) {
                                    self.show(self.currentPage - 1);
                                } else {
                                    self.show(self.total - 1);
                                }
                            },

                            show: function(i) {
                                var self = this;

                                activePortfolioAjaxOnPage = null;

                                if (self.$ajaxBoxContent.find('.rev_slider').get(0)) {
                                    try {self.$ajaxBoxContent.find('.rev_slider').revkill();} catch(err) {}
                                }
                                self.$ajaxBoxContent.empty();
                                self.$ajaxBox.removeClass('ajax-box-init').addClass('ajax-box-loading');

                                theme.scrolltoContainer(self.$ajaxBox);

                                self.currentPage = i;

                                if (i < 0 || i > (self.total-1)) {
                                    self.close();
                                    return false;
                                }

                                // Ajax
                                $.ajax({
                                    url: self.pages[i],
                                    complete: function(data) {
                                        var $response = $(data.responseText),
                                            $portfolio = $response.find('#content article.portfolio'),
                                            $vc_css = $response.filter('style[data-type]:not("")'),
                                            vc_css = '';

                                        if ($('#portfolioAjaxCSS').get(0)) {
                                            $('#portfolioAjaxCSS').text(vc_css);
                                        } else {
                                            $('<style id="portfolioAjaxCSS">' + vc_css + '</style>').appendTo( "head" )
                                        }

                                        $portfolio.find('.portfolio-nav-all').html('<a href="#" data-ajax-portfolio-close data-tooltip data-original-title="' + js_porto_vars.popup_close + '"><i class="fa fa-th"></i></a>');
                                        $portfolio.find('.portfolio-nav').html('<a href="#" data-ajax-portfolio-prev class="portfolio-nav-prev" data-tooltip data-original-title="' + js_porto_vars.popup_prev + '"><i class="fa"></i></a><a href="#" data-toggle="tooltip" data-ajax-portfolio-next class="portfolio-nav-next" data-tooltip data-original-title="' + js_porto_vars.popup_next + '"><i class="fa"></i></a>');
                                        self.$ajaxBoxContent.html($portfolio.html()).append('<div class="row"><div class="col-lg-12"><hr class="tall"></div></div>');
                                        self.$ajaxBox.removeClass('ajax-box-loading');
                                        $(window).trigger('resize');
                                        porto_init();
                                        theme.refreshVCContent(self.$ajaxBoxContent);
                                        self.events();
                                        activePortfolioAjaxOnPage = self;
                                    }
                                });
                            }
                        };

                    portfolioAjaxOnPage.build();

                    $this.data('portfolioAjaxOnPage', portfolioAjaxOnPage);
                });

                return self;
            }
        }

    });

    // Key Press
    $(document.documentElement).on('keyup', function(e) {
        try {
            if (!activePortfolioAjaxOnPage) return;
            // Next
            if (e.keyCode == 39) {
                activePortfolioAjaxOnPage.next();
            }
            // Prev
            if (e.keyCode == 37) {
                activePortfolioAjaxOnPage.prev();
            }
        } catch(err) {}
    });

}).apply(this, [window.theme, jQuery]);


// Portfolio Ajax on Modal
(function(theme, $) {

    theme = theme || {};

    var $rev_sliders;

    $.extend(theme, {

        PortfolioAjaxModal: {

            defaults: {
                elements: '.page-portfolios'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {

                    var $this = $(this);

                    if (!$this.find('a[data-ajax-on-modal]').get(0))
                        return;

                    var $container = $(this),
                        portfolioAjaxOnModal = {

                            $wrapper: $container,
                            modals: [],
                            currentModal: 0,
                            total: 0,

                            build: function() {
                                var self = this;

                                self.modals = [];
                                self.total = 0;

                                $this.find('a[data-ajax-on-modal]').each(function() {
                                    self.add($(this));
                                });

                                $this.off('mousedown', 'a[data-ajax-on-modal]').on('mousedown', 'a[data-ajax-on-modal]', function (ev) {
                                    if (ev.which == 2) {
                                        ev.preventDefault();
                                        return false;
                                    }
                                });
                            },

                            add: function($el) {

                                var self = this,
                                    href = $el.attr('href'),
                                    index = self.total;

                                self.modals.push({src: href});
                                self.total++;

                                $el.off('click').on('click', function(e) {
                                    e.preventDefault();
                                    self.show(index);
                                    return false;
                                });

                            },

                            next: function() {
                                var self = this;
                                if(self.currentModal + 1 < self.total) {
                                    self.show(self.currentModal + 1);
                                } else {
                                    self.show(0);
                                }
                            },

                            prev: function() {
                                var self = this;

                                if((self.currentModal - 1) >= 0) {
                                    self.show(self.currentModal - 1);
                                } else {
                                    self.show(self.total - 1);
                                }
                            },

                            show: function(i) {
                                var self = this;

                                self.currentModal = i;

                                if (i < 0 || i > (self.total-1)) {
                                    return false;
                                }

                                $.magnificPopup.close();
                                $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {
                                    type: 'ajax',
                                    items: self.modals,
                                    gallery: {
                                        enabled: true
                                    },
                                    ajax: {
                                        settings: {
                                            type: 'post',
                                            data: {
                                                ajax_action: 'portfolio_ajax_modal'
                                            }
                                        }
                                    },
                                    mainClass: 'portfolio-ajax-modal',
                                    fixedContentPos: false,
                                    callbacks: {
                                        parseAjax: function(mfpResponse) {
                                            var $response = $(mfpResponse.data),
                                                $portfolio = $response.find('#content article.portfolio'),
                                                $vc_css = $response.filter('style[data-type]:not("")'),
                                                vc_css = '';

                                            $vc_css.each(function() {
                                                vc_css += $(this).text();
                                            });

                                            if ($('#portfolioAjaxCSS').get(0)) {
                                                $('#portfolioAjaxCSS').text(vc_css);
                                            } else {
                                                $('<style id="portfolioAjaxCSS">' + vc_css + '</style>').appendTo( "head" )
                                            }

                                            $portfolio.find('.portfolio-nav-all').html('<a href="#" data-ajax-portfolio-close data-tooltip data-original-title="' + js_porto_vars.popup_close + '" data-placement="bottom"><i class="fa fa-th"></i></a>');
                                            $portfolio.find('.portfolio-nav').html('<a href="#" data-ajax-portfolio-prev class="portfolio-nav-prev" data-tooltip data-original-title="' + js_porto_vars.popup_prev + '" data-placement="bottom"><i class="fa"></i></a><a href="#" data-toggle="tooltip" data-ajax-portfolio-next class="portfolio-nav-next" data-tooltip data-original-title="' + js_porto_vars.popup_next + '" data-placement="bottom"><i class="fa"></i></a>');
                                            mfpResponse.data = '<div class="ajax-container">' + $portfolio.html() + '</div>';
                                        },
                                        ajaxContentAdded: function() {
                                            // Wrapper
                                            var $wrapper = $('.portfolio-ajax-modal');

                                            // Close
                                            $wrapper.find('a[data-ajax-portfolio-close]').on('click', function(e) {
                                                e.preventDefault();
                                                $.magnificPopup.close();
                                                return false;
                                            });

                                            $rev_sliders = $wrapper.find('.rev_slider');

                                            // Remove Next and Close
                                            if(self.modals.length <= 1) {
                                                $wrapper.find('a[data-ajax-portfolio-prev], a[data-ajax-portfolio-next]').remove();
                                            } else {
                                                // Prev
                                                $wrapper.find('a[data-ajax-portfolio-prev]').on('click', function(e) {
                                                    e.preventDefault();
                                                    if ($rev_sliders && $rev_sliders.get(0)) {
														try {$rev_sliders.revkill();} catch(err) {}
                                                    }
                                                    $wrapper.find('.mfp-arrow-left').trigger('click');
                                                    return false;
                                                });
                                                // Next
                                                $wrapper.find('a[data-ajax-portfolio-next]').on('click', function(e) {
                                                    e.preventDefault();
                                                    if ($rev_sliders && $rev_sliders.get(0)) {
														try {$rev_sliders.revkill();} catch(err) {}
                                                    }
                                                    $wrapper.find('.mfp-arrow-right').trigger('click');
                                                    return false;
                                                });
                                            }
                                            $(window).trigger('resize');
                                            porto_init();
                                            theme.refreshVCContent($wrapper);
                                            setTimeout(function() {
                                                var videos = $wrapper.find('video');
                                                if (videos.get(0)) {
                                                    videos.each(function() {
														$(this)[0].play();
														$(this).parent().parent().parent().find('.video-controls').attr('data-action','play');
														$(this).parent().parent().parent().find('.video-controls').html('<i class="ult-vid-cntrlpause"></i>');
                                                    });
                                                }
                                            }, 600);
                                            $wrapper.off('scroll').on('scroll', function() {
                                                $.fn.appear.run();
                                            });
                                        },
                                        change: function() {
                                            $('.mfp-wrap .ajax-container').click();
                                        },
                                        beforeClose: function() {
                                            if ($rev_sliders && $rev_sliders.get(0)) {
                                                try {$rev_sliders.revkill();} catch(err) {}
                                            }
                                            // Wrapper
                                            var $wrapper = $('.portfolio-ajax-modal');
                                            $wrapper.off('scroll');
                                        }
                                    }
                                }), i);
                            }
                        };

                    portfolioAjaxOnModal.build();

                    $this.data('portfolioAjaxOnModal', portfolioAjaxOnModal);
                });

                return self;
            }
        }

    });

    // Key Press
    $(document.documentElement).on('keydown', function(e) {
        try {
            if (e.keyCode == 37 || e.keyCode == 39) {
                if ($rev_sliders && $rev_sliders.get(0)) {
                    $rev_sliders.revkill();
                }
            }
        } catch(err) {}
    });

}).apply(this, [window.theme, jQuery]);

// Portfolio Filter
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        PortfolioFilter: {

            defaults: {
                elements: '.portfolio-filter'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {
                    var $this = $(this);
                    $this.find('li').on('click', function(e) {
                        e.preventDefault();

                        var selector = $(this).attr('data-filter'),
                            position = $this.data('position'),
                            $parent;

                        $this.find('.active').removeClass('active');

                        if (position == 'sidebar') {
                            $parent = $('.main-content .page-portfolios');
                            //theme.scrolltoContainer($parent);
                            $('.sidebar-overlay').click();
                        } else if (position == 'global') {
                            $parent = $('.main-content .page-portfolios');
                        } else {
                            $parent = $(this).closest('.page-portfolios');
                        }

                        if ($parent.hasClass('portfolios-timeline')) {
                            var selected = 0;
                            $parent.find('.portfolio').each(function() {
                                var $that = $(this), easing = "easeInOutQuart", timeout = 300;
                                if (selector == '*') {
                                    if ($that.css('display') == 'none') $that.stop(true).slideDown(timeout, easing, function() {
                                        $(this).attr('style', '').show();
                                    });
                                    selected++;
                                } else {
                                    if ($that.hasClass(selector)) {
                                        if ($that.css('display') == 'none') $that.stop(true).slideDown(timeout, easing, function() {
                                            $(this).attr('style', '').show();
                                        });
                                        selected++;
                                    } else {
                                        if ($that.css('display') != 'none') $that.stop(true).slideUp(timeout, easing, function() {
                                            $(this).attr('style', '').hide();
                                        });
                                    }
                                }
                            });
                            if (!selected && $parent.find('.portfolios-infinite').length && typeof ($.fn.infinitescroll) != 'undefined') {
                                $parent.find('.portfolios-infinite').infinitescroll('retrieve');
                            }
                            setTimeout(function() {
                                theme.FilterZoom.initialize($parent);
                            }, 400);
                        } else {
                            $parent.find('.portfolio-row').isotope({
                                filter: selector == '*' ? selector : '.' + selector
                            });
                        }

                        $(this).addClass('active');

                        if (position == 'sidebar') {
                            self.$elements.each(function() {
                                var $that = $(this);

                                if ($that == $this && $that.data('position') != 'sidebar') return;
                                $that.find('li').removeClass('active');
                                $that.find('li[data-filter="' + selector + '"]').addClass('active');
                            });
                        }

                        window.location.hash = '#' + selector;
                        theme.refreshVCContent();
                    });
                });

                function hashchange() {
                    var $filter = $(self.$elements.get(0)), hash = window.location.hash;

                    if (hash) {
                        $filter.find('li[data-filter="' + hash.replace('#', '') + '"]').click();
                    }
                }

                $(window).on('hashchange', hashchange);
                hashchange();

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Member Ajax on Page
(function(theme, $) {

    theme = theme || {};

    var activeMemberAjaxOnPage;

    $.extend(theme, {

        MemberAjaxPage: {

            defaults: {
                elements: '.page-members'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {

                    var $this = $(this);

                    if (!$this.find('#memberAjaxBox').get(0))
                        return;

                    var $container = $(this),
                        memberAjaxOnPage = {

                            $wrapper: $container,
                            pages: [],
                            currentPage: 0,
                            total: 0,
                            $ajaxBox: $this.find('#memberAjaxBox'),
                            $ajaxBoxContent: $this.find('#memberAjaxBoxContent'),

                            build: function() {
                                var self = this;

                                self.pages = [];
                                self.total = 0;

                                $this.find('a[data-ajax-on-page]').each(function() {
                                    self.add($(this));
                                });

                                $this.off('mousedown', 'a[data-ajax-on-page]').on('mousedown', 'a[data-ajax-on-page]', function (ev) {
                                    if (ev.which == 2) {
                                        ev.preventDefault();
                                        return false;
                                    }
                                });
                            },

                            add: function($el) {

                                var self = this,
                                    href = $el.attr('href');

                                self.pages.push(href);
                                self.total++;

                                $el.off('click').on('click', function(e) {
                                    e.preventDefault();
                                    self.show(self.pages.indexOf(href));
                                    return false;
                                });

                            },

                            next: function() {
                                var self = this;
                                if(self.currentPage + 1 < self.total) {
                                    self.show(self.currentPage + 1);
                                } else {
                                    self.show(0);
                                }
                            },

                            prev: function() {
                                var self = this;

                                if((self.currentPage - 1) >= 0) {
                                    self.show(self.currentPage - 1);
                                } else {
                                    self.show(self.total - 1);
                                }
                            },

                            show: function(i) {
                                var self = this;

                                activeMemberAjaxOnPage = null;

                                if (self.$ajaxBoxContent.find('.rev_slider').get(0)) {
                                    try {self.$ajaxBoxContent.find('.rev_slider').revkill();} catch(err) {}
                                }
                                self.$ajaxBoxContent.empty();
                                self.$ajaxBox.removeClass('ajax-box-init').addClass('ajax-box-loading');

                                theme.scrolltoContainer(self.$ajaxBox);

                                self.currentPage = i;

                                if (i < 0 || i > (self.total-1)) {
                                    self.close();
                                    return false;
                                }

                                // Ajax
                                $.ajax({
                                    url: self.pages[i],
                                    complete: function(data) {
                                        var $response = $(data.responseText),
                                            $member = $response.find('#content article.member'),
                                            $vc_css = $response.filter('style[data-type]:not("")'),
                                            vc_css = '';

                                        $vc_css.each(function() {
                                            vc_css += $(this).text();
                                        });

                                        if ($('#memberAjaxCSS').get(0)) {
                                            $('#memberAjaxCSS').text(vc_css);
                                        } else {
                                            $('<style id="memberAjaxCSS">' + vc_css + '</style>').appendTo( "head" )
                                        }

                                        var $append = self.$ajaxBox.find('.ajax-content-append'), html = '';
                                        if ($append.length) html = $append.html();
                                        self.$ajaxBoxContent.html($member.html()).prepend('<div class="row"><div class="col-lg-12"><hr class="tall m-t-none"></div></div>').append('<div class="row"><div class="col-md-12"><hr class="m-t-md"></div></div>' + html);

                                        self.$ajaxBox.removeClass('ajax-box-loading');
                                        $(window).trigger('resize');
                                        porto_init();
                                        theme.refreshVCContent(self.$ajaxBoxContent);
                                        activeMemberAjaxOnPage = self;
                                    }
                                });
                            }
                        };

                    memberAjaxOnPage.build();

                    $this.data('memberAjaxOnPage', memberAjaxOnPage);
                });

                return self;
            }
        }

    });

    // Key Press
    $(document.documentElement).on('keyup', function(e) {
        try {
            if (!activeMemberAjaxOnPage) return;
            // Next
            if (e.keyCode == 39) {
                activeMemberAjaxOnPage.next();
            }
            // Prev
            if (e.keyCode == 37) {
                activeMemberAjaxOnPage.prev();
            }
        } catch(err) {}
    });

}).apply(this, [window.theme, jQuery]);

// Member Ajax on Modal
(function(theme, $) {

    theme = theme || {};

    var $rev_sliders;

    $.extend(theme, {

        MemberAjaxModal: {

            defaults: {
                elements: '.page-members'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {

                    var $this = $(this);

                    if (!$this.find('a[data-ajax-on-modal]').get(0))
                        return;

                    var $container = $(this),
                        memberAjaxOnModal = {

                            $wrapper: $container,
                            modals: [],
                            currentModal: 0,
                            total: 0,

                            build: function() {
                                var self = this;

                                self.modals = [];
                                self.total = 0;

                                $this.find('a[data-ajax-on-modal]').each(function() {
                                    self.add($(this));
                                });

                                $this.off('mousedown', 'a[data-ajax-on-modal]').on('mousedown', 'a[data-ajax-on-modal]', function (ev) {
                                    if (ev.which == 2) {
                                        ev.preventDefault();
                                        return false;
                                    }
                                });
                            },

                            add: function($el) {

                                var self = this,
                                    href = $el.attr('href'),
                                    index = self.total;

                                self.modals.push({src: href});
                                self.total++;

                                $el.off('click').on('click', function(e) {
                                    e.preventDefault();
                                    self.show(index);
                                    return false;
                                });

                            },

                            next: function() {
                                var self = this;
                                if(self.currentModal + 1 < self.total) {
                                    self.show(self.currentModal + 1);
                                } else {
                                    self.show(0);
                                }
                            },

                            prev: function() {
                                var self = this;

                                if((self.currentModal - 1) >= 0) {
                                    self.show(self.currentModal - 1);
                                } else {
                                    self.show(self.total - 1);
                                }
                            },

                            show: function(i) {
                                var self = this;

                                self.currentModal = i;

                                if (i < 0 || i > (self.total-1)) {
                                    return false;
                                }

                                $.magnificPopup.close();
                                $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, {

                                    type: 'ajax',
                                    items: self.modals,
                                    gallery: {
                                        enabled: true
                                    },
                                    ajax: {
                                        settings: {
                                            type: 'post',
                                            data: {
                                                ajax_action: 'member_ajax_modal'
                                            }
                                        }
                                    },
                                    mainClass: 'member-ajax-modal',
                                    fixedContentPos: false,
                                    callbacks: {
                                        parseAjax: function(mfpResponse) {
                                            var $response = $(mfpResponse.data),
                                                $member = $response.find('#content article.member'),
                                                $vc_css = $response.filter('style[data-type]:not("")'),
                                                vc_css = '';

                                            $vc_css.each(function() {
                                                vc_css += $(this).text();
                                            });

                                            if ($('#memberAjaxCSS').get(0)) {
                                                $('#memberAjaxCSS').text(vc_css);
                                            } else {
                                                $('<style id="memberAjaxCSS">' + vc_css + '</style>').appendTo( "head" )
                                            }

                                            $member.find('.member-nav-all').html('<a href="#" data-ajax-member-close data-tooltip data-original-title="' + js_porto_vars.popup_close + '" data-placement="bottom"><i class="fa fa-th"></i></a>');
                                            $member.find('.member-nav').html('<a href="#" data-ajax-member-prev class="member-nav-prev" data-tooltip data-original-title="' + js_porto_vars.popup_prev + '" data-placement="bottom"><i class="fa"></i></a><a href="#" data-toggle="tooltip" data-ajax-member-next class="member-nav-next" data-tooltip data-original-title="' + js_porto_vars.popup_next + '" data-placement="bottom"><i class="fa"></i></a>');
                                            mfpResponse.data = '<div class="ajax-container">' + $member.html() + '</div>';
                                        },
                                        ajaxContentAdded: function() {
                                            // Wrapper
                                            var $wrapper = $('.member-ajax-modal');

                                            // Close
                                            $wrapper.find('a[data-ajax-member-close]').on('click', function(e) {
                                                e.preventDefault();
                                                $.magnificPopup.close();
                                                return false;
                                            });

                                            $rev_sliders = $wrapper.find('.rev_slider');

                                            // Remove Next and Close
                                            if(self.modals.length <= 1) {
                                                $wrapper.find('a[data-ajax-member-prev], a[data-ajax-member-next]').remove();
                                            } else {
                                                // Prev
                                                $wrapper.find('a[data-ajax-member-prev]').on('click', function(e) {
                                                    e.preventDefault();
                                                    if ($rev_sliders && $rev_sliders.get(0)) {
														try {$rev_sliders.revkill();} catch(err) {}
                                                    }
                                                    $wrapper.find('.mfp-arrow-left').trigger('click');
                                                    return false;
                                                });
                                                // Next
                                                $wrapper.find('a[data-ajax-member-next]').on('click', function(e) {
                                                    e.preventDefault();
                                                    if ($rev_sliders && $rev_sliders.get(0)) {
														try {$rev_sliders.revkill();} catch(err) {}
                                                    }
                                                    $wrapper.find('.mfp-arrow-right').trigger('click');
                                                    return false;
                                                });
                                            }
                                            $(window).trigger('resize');
                                            porto_init();
                                            theme.refreshVCContent($wrapper);
                                            setTimeout(function() {
                                                $(window).trigger('resize');
                                                var videos = $wrapper.find('video');
                                                if (videos.get(0)) {
                                                    videos.each(function() {
														$(this)[0].play();
														$(this).parent().parent().parent().find('.video-controls').attr('data-action','play');
														$(this).parent().parent().parent().find('.video-controls').html('<i class="ult-vid-cntrlpause"></i>');
                                                    });
                                                }
                                            }, 600);
                                            $wrapper.off('scroll').on('scroll', function() {
                                                $.fn.appear.run();
                                            });
                                        },
                                        change: function() {
                                            $('.mfp-wrap .ajax-container').click();
                                        },
                                        beforeClose: function() {
                                            if ($rev_sliders && $rev_sliders.get(0)) {
                                                try {$rev_sliders.revkill();} catch(err) {}
                                            }
                                            // Wrapper
                                            var $wrapper = $('.member-ajax-modal');
                                            $wrapper.off('scroll');
                                        }
                                    }
                                }), i);
                            }
                        };

                    memberAjaxOnModal.build();

                    $this.data('memberAjaxOnModal', memberAjaxOnModal);
                });

                return self;
            }
        }

    });

    // Key Press
    $(document.documentElement).on('keydown', function(e) {
        try {
            if (e.keyCode == 37 || e.keyCode == 39) {
                if ($rev_sliders && $rev_sliders.get(0)) {
                    $rev_sliders.revkill();
                }
            }
        } catch(err) {}
    });

}).apply(this, [window.theme, jQuery]);

// Member Filter
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        MemberFilter: {

            defaults: {
                elements: '.member-filter'
            },

            initialize: function($elements) {
                this.$elements = ($elements || $(this.defaults.elements));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {
                    var $this = $(this);
                    $this.find('li').on('click', function(e) {
                        e.preventDefault();

                        var selector = $(this).attr('data-filter'),
                            position = $this.data('position'),
                            $parent;

                        $this.find('.active').removeClass('active');

                        if (position == 'sidebar') {
                            $parent = $('.main-content .page-members');
                            theme.scrolltoContainer($parent);
                            $('.sidebar-overlay').click();
                        } else if (position == 'global') {
                            $parent = $('.main-content .page-members');
                        } else {
                            $parent = $(this).closest('.page-members');
                        }

                        $parent.find('.member-row').isotope({
                            filter: selector == '*' ? selector : '.' + selector
                        });

                        $(this).addClass('active');

                        if (position == 'sidebar') {
                            self.$elements.each(function() {
                                var $that = $(this);

                                if ($that == $this && $that.data('position') != 'sidebar') return;
                                $that.find('li').removeClass('active');
                                $that.find('li[data-filter="' + selector + '"]').addClass('active');
                            });
                        }

                        window.location.hash = '#' + selector;
                        theme.refreshVCContent();
                    });
                });

                function hashchange() {
                    var $filter = $(self.$elements.get(0)), hash = window.location.hash;

                    if (hash) {
                        $filter.find('li[data-filter="' + hash.replace('#', '') + '"]').click();
                    }
                }

                $(window).on('hashchange', hashchange);
                hashchange();

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Sort Filter
(function(theme, $) {

    theme = theme || {};

    $.extend(theme, {

        SortFilter: {

            defaults: {
                filters: '.porto-sort-filters ul',
                elements: '.porto-sort-container .row'
            },

            initialize: function($elements, $filters) {
                this.$elements = ($elements || $(this.defaults.elements));
                this.$filters = ($filters || $(this.defaults.filters));

                this.build();

                return this;
            },

            build: function() {
                var self = this;

                self.$elements.each(function() {
                    var $this = $(this);
                    $this.isotope({
                        itemSelector: '.porto-sort-item',
                        layoutMode: 'masonry',
                        getSortData: {
                            popular: '[data-popular] parseInt'
                        },
                        sortBy: 'popular',
                        isOriginLeft : !theme.rtl
                    });
                    $this.waitForImages(function() {
                        if ($this.data('isotope')) {
                            $this.isotope('layout');
                        }
                    });
                });

                self.$filters.each(function() {
                    var $this = $(this);
                    var id = $this.attr('data-sort-id');
                    var $container = $('#' + id);
                    if ($container.length) {
                        $this.on('click', 'li', function(e) {
                            e.preventDefault();

                            var $that = $(this);
                            $this.find('li').removeClass('active');
                            $that.addClass("active");

                            var sortByValue = $that.attr('data-sort-by');
                            $container.isotope({sortBy: sortByValue});

                            var filterByValue = $that.attr('data-filter-by');
                            if (filterByValue) {
                                $container.isotope({filter: filterByValue});
                            } else {
                                $container.isotope({filter: '.porto-sort-item'});
                            }
                            theme.refreshVCContent();
                        });

                        $this.find('li[data-active]').click();
                    }
                });

                return self;
            }
        }

    });

}).apply(this, [window.theme, jQuery]);


// Init Theme
function porto_init() {
    jQuery(window).on('touchstart',function(){});
    // Accordion
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeAccordion'])) {

            $(function() {
                $('.accordion:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeAccordion(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Accordion Menu
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeAccordionMenu'])) {

            $(function() {
                $('.accordion-menu:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeAccordionMenu(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Animate
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeAnimate'])) {

            $(function() {
                $('[data-plugin-animate], [data-appear-animation]').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeAnimate(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Carousel
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeCarousel'])) {

            $(function() {
                $('[data-plugin-carousel]:not(.manual), .porto-carousel:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeCarousel(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Chart.Circular
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeChartCircular'])) {

            $(function() {
                $('[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeChartCircular(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Fit Video
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeFitVideo'])) {

            $(function() {
                $('.fit-video:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeFitVideo(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Video Background
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themePluginVideoBackground'])) {

            $(function() {
                $('[data-plugin-video-background]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = JSON.parse($this.data('plugin-options').replace(/'/g,'"').replace(';',''));
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePluginVideoBackground(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Word Rotate
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themePluginWordRotate'])) {

            $(function() {
                $('[data-plugin-word-rotate]:not(.manual), .word-rotate:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = JSON.parse($this.data('plugin-options').replace(/'/g,'"').replace(';',''));
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePluginWordRotate(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Flickr Zoom
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeFlickrZoom'])) {

            $(function() {
                $('.wpb_flickr_widget:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeFlickrZoom(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Lazy Load
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themePluginLazyLoad'])) {

            $(function() {
                $('[data-plugin-lazyload]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;
                    $this.themePluginLazyLoad(opts);
                });
                $('.porto-lazyload').themePluginLazyLoad({effect: 'fadeIn', effect_speed: 400});
                if ($('.porto-lazyload').closest('.nivoSlider').length) {
                    setTimeout(function() {
                        $('.nivoSlider').each(function() {
                            if ($(this).find('.porto-lazyload').length) {
                                $(this).closest('.nivoSlider').find('.nivo-main-image').attr('src', $(this).closest('.nivoSlider').find('.porto-lazyload').eq(0).attr('src'));
                            }
                        });
                    }, 100);
                }
                if ($('.porto-lazyload').closest('.porto-carousel-wrapper').length) {
                    setTimeout(function() {
                        $('.porto-carousel-wrapper').each(function() {
                            if ($(this).find('.porto-lazyload:not(.lazy-load-loaded)').length) {
                                $(this).find('.slick-list').css('height', 'auto');
                                $(this).find('.porto-lazyload:not(.lazy-load-loaded)').trigger('appear');
                            }
                        });
                    }, 100);
                }
            });

        }

    }).apply(this, [jQuery]);

    // Lightbox
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeLightbox'])) {

            $(function() {
                $('.lightbox:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeLightbox(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Masonry
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeMasonry'])) {

            $(function() {

                $('[data-plugin-masonry]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;
                    $this.themeMasonry(opts);
                });
                $('.posts-masonry .posts-container:not(.manual)').each(function() {
                    $(this).themeMasonry({
                        itemSelector: '.post'
                    });
                });
                $('.page-portfolios .portfolio-row:not(.manual)').each(function() {
                    if ( $(this).closest('.porto-grid-container').length > 0 ) {
                        return;
                    }
                    var $parent = $(this).parent(), layoutMode = 'masonry', options, columnWidth = '.portfolio:not(.w2)', timer = null;

                    if ($parent.hasClass('portfolios-grid')) {
                        layoutMode = 'fitRows';
                    } else if ($parent.hasClass('portfolios-masonry')) {
                        $parent.append('<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
                    }

                    options = {
                        itemSelector: '.portfolio',
                        layoutMode: layoutMode,
                        callback: function() {
                            timer && clearTimeout(timer);
                            timer = setTimeout(function() {
                                theme.FilterZoom.initialize($('.page-portfolios'));
                                 $parent.addClass('portfolio-iso-active');
                            }, 400);
                        }
                    };
                    if (layoutMode == 'masonry') {
                        if (!$parent.find('.portfolio:not(.w2)').length)
                            columnWidth = '.portfolio';
                        options = $.extend(true, {}, options, {
                            masonry: { columnWidth: columnWidth }
                        });
                    }

                    $(this).themeMasonry(options);

                });
                $('.page-members .member-row:not(.manual)').each(function() {
                    $(this).themeMasonry({
                        itemSelector: '.member',
                        layoutMode: 'fitRows',
                        callback: function() {
                            setTimeout(function() {
                                theme.FilterZoom.initialize($('.page-members'));
                            }, 400);
                        }
                    });
                });
            });

        }

    }).apply(this, [jQuery]);

    // Preview Image
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themePreviewImage'])) {

            $(function() {
                $('.thumb-info-preview .thumb-info-image:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themePreviewImage(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Refresh Video Size
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeRefreshVideoSize'])) {

            $(function() {
                $('.video-cover:not(.manual) .upb_video-bg').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeRefreshVideoSize(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Toggle
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeToggle'])) {

            $(function() {
                $('section.toggle:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeToggle(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Parallax
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeParallax'])) {

            $(function() {
                $('[data-plugin-parallax]:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeParallax(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Visual Composer Image Zoom
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeVcImageZoom'])) {

            $(function() {
                var $galleryParent = null;
                $('.porto-vc-zoom:not(.manual)').each(function() {
                    var $this = $(this),
                        opts,
                        gallery = $this.attr('data-gallery');

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    if (typeof opts == "undefined") {
                        opts = {};
                    }
                    opts.container = $this.parent();

                    if (gallery == 'true') {
                        var container = 'vc_row';

                        if ($this.attr('data-container'))
                            container = $this.attr('data-container');

                        var $parent = $($this.closest('.' + container).get(0));
                        if ($parent.length > 0 && $galleryParent != null && $galleryParent.is($parent)) {
                            return;
                        } else if ($parent.length > 0) {
                            $galleryParent = $parent;
                        }
                        if ($galleryParent != null && $galleryParent.length > 0) {
                            opts.container = $galleryParent;
                        }
                    }

                    $this.themeVcImageZoom(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Sticky
    (function($) {

        'use strict';

        if ($.isFunction($.fn['themeSticky'])) {

            $(function() {
                $('[data-plugin-sticky]:not(.manual), .porto-sticky:not(.manual), .porto-sticky-nav:not(.manual)').each(function() {
                    var $this = $(this),
                        opts;

                    var pluginOptions = $this.data('plugin-options');
                    if (pluginOptions)
                        opts = pluginOptions;

                    $this.themeSticky(opts);
                });
            });

        }

    }).apply(this, [jQuery]);

    // Common
    (function($) {

        'use strict';

        // Tooltip
        if ($.isFunction($.fn['tooltip'])) {
            $("[data-tooltip]:not(.manual), [data-toggle='tooltip']:not(.manual), .star-rating:not(.manual)").tooltip();
        }

        // bootstrap popover
        //$("[data-toggle='popover']").popover();

        // Tabs
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $(this).parents('.nav-tabs').find('.active').removeClass('active');
            $(this).addClass('active').parent().addClass('active');
        });

        if($().waypoint) {
            // Progress bar tooltip
            $('.vc_progress_bar').each(function() {
                var $tooltips = $(this).find('.progress-bar-tooltip');
                $($tooltips.get(0)).waypoint(function() {
                    var delay = 200;
                    $tooltips.each(function(index) {
                        var $tooltip = $(this);
                        setTimeout(function() {
                            $tooltip.animate({
                                opacity: 1
                            });
                        }, 200 + delay * index);
                    });
                }, {
                    offset: '85%'
                });
            });
        }

        // Fixed video
        $('.video-fixed').each(function() {
            var $this = $(this),
                $video = $this.find('video, iframe');

            if ($video.length) {
                $(window).on('scroll', function() {
                    var offset = $(window).scrollTop() - $this.position().top + theme.adminBarHeight();
                    $video.css("cssText", "top: " + offset + "px !important;");
                });
            }
        });

        // Popup with video or map
        $('.porto-popup-iframe').magnificPopup($.extend(true, {}, theme.mfpConfig, {
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        }));

        // Popup with ajax
        $('.porto-popup-ajax').magnificPopup($.extend(true, {}, theme.mfpConfig, {
            type: 'ajax'
        }));

        // Popup with content
        $('.porto-popup-content').each(function() {
            var animation = $(this).attr('data-animation');
            $(this).magnificPopup($.extend(true, {}, theme.mfpConfig, {
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: animation
            }));
        });

        // Thumb Gallery
        $('.thumb-gallery-thumbs').each(function() {
            var $thumbs = $(this),
                $detail = $thumbs.parent().find('.thumb-gallery-detail'),
                flag = false,
                duration = 300;

            if ($thumbs.data('initThumbs'))
                return;

            $detail.on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    var len = $detail.find('.owl-item').length,
                        cloned = $detail.find('.cloned').length;
                    if (len) {
                        $thumbs.trigger('to.owl.carousel', [(e.item.index - cloned / 2 - 1) % len, duration, true]);
                    }
                    flag = false;
                }
            });

            $thumbs.on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    var len = $thumbs.find('.owl-item').length,
                        cloned = $thumbs.find('.cloned').length;
                    if (len) {
                        $detail.trigger('to.owl.carousel', [(e.item.index - cloned / 2) % len, duration, true]);
                    }
                    flag = false;
                }
            }).on('click', '.owl-item', function() {
                if (!flag) {
                    flag = true;
                    var len = $thumbs.find('.owl-item').length,
                        cloned = $thumbs.find('.cloned').length;
                    if (len) {
                        $detail.trigger('to.owl.carousel', [($(this).index() - cloned / 2) % len, duration, true]);
                    }
                    flag = false;
                }
            }).data('initThumbs', true);
        });
    }).apply(this, [jQuery]);
}

(function(theme, $) {

    'use strict';

    $(document).ready(function() {
        // Init Porto Theme
        porto_init();

        // Scroll to Top
        if (typeof theme.ScrollToTop !== 'undefined') {
            theme.ScrollToTop.initialize();
        }

        // Mega Menu
        if (typeof theme.MegaMenu !== 'undefined') {
            theme.MegaMenu.initialize();
        }

        $(window).on('load', function() {
            setTimeout(function() {
                theme.MegaMenu.build();
            }, 400);
        });

        // Sidebar Menu
        if (typeof theme.SidebarMenu !== 'undefined') {
            theme.SidebarMenu.initialize();

            $('.sidebar-menu.side-menu-accordion').themeAccordionMenu({'open_one':true});
        }

        // Side Navigation
        if (typeof theme.SideNav !== 'undefined') {
            theme.SideNav.initialize();
        }

        // Sticky Header
        if (typeof theme.StickyHeader !== 'undefined') {
            theme.StickyHeader.initialize();
        }

        // Search
        if (typeof theme.Search !== 'undefined') {
            theme.Search.initialize();
        }

        // Hash Scroll
        if (typeof theme.HashScroll !== 'undefined') {
            theme.HashScroll.initialize();
        }

        // Portfolio Ajax on Page
        if (typeof theme.PortfolioAjaxPage !== 'undefined') {
            theme.PortfolioAjaxPage.initialize();
        }

        // Portfolio Ajax on Modal
        if (typeof theme.PortfolioAjaxModal !== 'undefined') {
            theme.PortfolioAjaxModal.initialize();
        }

        // Portfolio Filter
        if (typeof theme.PortfolioFilter !== 'undefined') {
            theme.PortfolioFilter.initialize();
        }

        // Member Ajax on Page
        if (typeof theme.MemberAjaxPage !== 'undefined') {
            theme.MemberAjaxPage.initialize();
        }

        // Member Ajax on Modal
        if (typeof theme.MemberAjaxModal !== 'undefined') {
            theme.MemberAjaxModal.initialize();
        }

        // Member Filter
        if (typeof theme.MemberFilter !== 'undefined') {
            theme.MemberFilter.initialize();
        }

        // FAQ Filter
        if (typeof theme.FaqFilter !== 'undefined') {
            theme.FaqFilter.initialize();
        }

        // Filter Zooms
        if (typeof theme.FilterZoom !== 'undefined') {
            // Portfolio Filter Zoom
            theme.FilterZoom.initialize($('.page-portfolios'));
            // Member Filter Zoom
            theme.FilterZoom.initialize($('.page-members'));
            // Posts Related Style Filter Zoom
            theme.FilterZoom.initialize($('.blog-posts-related'));
        }

        // Sort Filter
        if (typeof theme.SortFilter !== 'undefined') {
            theme.SortFilter.initialize();
        }

        // Mobile Sidebar
        // filter popup events
        $(document).on('click', '.sidebar-toggle', function(e) {
            var $html = $('html');
            if ($(this).closest('.porto-product-filters').length) {
                if ($html.hasClass('filter-sidebar-opened')) {
                    $html.removeClass('filter-sidebar-opened');
                    $('.sidebar-overlay').removeClass('active');
                } else {
                    $html.addClass('filter-sidebar-opened');
                    $('.sidebar-overlay').addClass('active');
                }
            } else {
                if ($html.hasClass('sidebar-opened')) {
                    $html.removeClass('sidebar-opened');
                    $('.sidebar-overlay').removeClass('active');
                } else {
                    $html.addClass('sidebar-opened');
                    $('.sidebar-overlay').addClass('active');
                }
            }
        });

        $(document.body).on('click', '.sidebar-overlay', function() {
            $('html').removeClass('sidebar-opened');
            $('html').removeClass('filter-sidebar-opened');
            $(this).removeClass('active');
        });

        $(window).on('resize', function() {
            if ($(window).width() > 991 - theme.getScrollbarWidth()) {
                $('.sidebar-overlay').click();
            }
        });

        // Common

        // Match Height
        if ($.isFunction($.fn['matchHeight'])) {
            $('.tabs-simple .featured-box .box-content').matchHeight();
            $('.porto-content-box .featured-box .box-content').matchHeight();
            $('.vc_general.vc_cta3').matchHeight();
            $('.match-height').matchHeight();
        }

        // WhatsApp Sharing
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.share-whatsapp').css('display', 'inline-block');
        }
        $(document).ajaxComplete(function(event, xhr, options) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                $('.share-whatsapp').css('display', 'inline-block');
            }
        });

        // Add Ege Browser Class
        var ua = window.navigator.userAgent,
            ie12 = ua.indexOf('Edge/') > 0;
        if (ie12) $('html').addClass('ie12');

        // Portfolio Link Lightbox
        $(document).on('click', '.portfolios-lightbox a.portfolio-link', function(e) {
            $(this).find('.thumb-info-zoom').click();
            return false;
        });

        // Portfolios Shortcode Pagination
        $(document).on('click', '.porto-portfolios .pagination:not(.load-more) a', function(e) {
            var $this = $(this),
                url = $this.attr('href'),
                shortcode_id = $this.closest('.porto-portfolios').find('.shortcode-id').val(),
                $container = $this.closest('.porto-portfolios' + shortcode_id);

            if (url) {
                e.preventDefault();
                $container.addClass('porto-ajax-loading');
                if (!$container.children('.porto-loading-icon').length) {
                    $container.append('<i class="porto-loading-icon"></i>');
                }

                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 14
                    }, 600, 'easeOutQuad');
                }, 200);

                $.ajax({
                    type : 'post',
                    url : url,
                    success: function(response) {
                        var $response_container = $('<div>' + response + '</div>').find('.porto-portfolios'+shortcode_id);
                        $container.html($response_container.html());
                        theme.PortfolioAjaxPage.initialize($container.find('.page-portfolios'));
                        theme.PortfolioAjaxModal.initialize($container.find('.page-portfolios'));
                        porto_init();
                        theme.PortfolioFilter.initialize($container.find('.portfolio-filter'));
                    }
                }).always(function() {
                    $container.removeClass('porto-ajax-loading');
                });

                return false;
            }
        });

        // Members Shortcode Pagination
        $(document).on('click', '.porto-members .pagination a', function(e) {
            var $this = $(this),
                url = $this.attr('href'),
                shortcode_id = $this.closest('.porto-members').find('.shortcode-id').val(),
                $container = $this.closest('.porto-members' + shortcode_id);

            if (url) {
                e.preventDefault();
                $container.addClass('porto-ajax-loading');
                if (!$container.children('.porto-loading-icon').length) {
                    $container.append('<i class="porto-loading-icon"></i>');
                }

                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 14
                    }, 600, 'easeOutQuad');
                }, 200);

                $.ajax({
                    type : 'post',
                    url : url,
                    success: function(response) {
                        var $response_container = $('<div>' + response + '</div>').find('.porto-members'+shortcode_id);
                        $container.html($response_container.html());
                        theme.MemberAjaxPage.initialize($container.find('.page-members'));
                        theme.MemberAjaxModal.initialize($container.find('.page-members'));
                        porto_init();
                        theme.MemberFilter.initialize($container.find('.member-filter'));
                    }
                }).always(function() {
                        $container.removeClass('porto-ajax-loading');
                    });

                return false;
            }
        });

        // FAQs Shortcode Pagination
        $(document).on('click', '.porto-faqs .pagination a', function(e) {
            var $this = $(this),
                url = $this.attr('href'),
                shortcode_id = $this.closest('.porto-faqs').find('.shortcode-id').val(),
                $container = $this.closest('.porto-faqs' + shortcode_id);

            if (url) {
                e.preventDefault();
                $container.addClass('porto-ajax-loading');
                if (!$container.children('.porto-loading-icon').length) {
                    $container.append('<i class="porto-loading-icon"></i>');
                }

                setTimeout(function() {
                    $('html, body').stop().animate({
                        scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 14
                    }, 600, 'easeOutQuad');
                }, 200);

                $.ajax({
                    type : 'post',
                    url : url,
                    success: function(response) {
                        var $response_container = $('<div>' + response + '</div>').find('.porto-faqs'+shortcode_id);
                        $container.html($response_container.html());
                        porto_init();
                        theme.FaqFilter.initialize($container.find('.faq-filter'));
                    }
                }).always(function() {
                        $container.removeClass('porto-ajax-loading');
                    });

                return false;
            }
        });

        $('.porto-faqs').each(function() {
            if ($(this).find('.faq .toggle.active').length < 1) {
                $(this).find('.faq').eq(0).find('.toggle').addClass('active');
                $(this).find('.faq').eq(0).find('.toggle-content').show();
            }
        });

        // refresh wpb content
        $(document).on('shown.bs.collapse', '.collapse', function() {
            var panel = $(this);
            theme.refreshVCContent(panel);
        });
        $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
            var panel = $($(e.target).attr('href'));
            theme.refreshVCContent(panel);
        });

        // porto tooltip for header, footer
        $(".porto-tooltip .tooltip-icon").on('click', function(){
            if($(this).parent().children(".tooltip-popup").css("display")=="none"){
                $(this).parent().children(".tooltip-popup").fadeIn(200);
            }else{
                $(this).parent().children(".tooltip-popup").fadeOut(200);
            }
        });
        $(".porto-tooltip .tooltip-close").on('click', function(){
            $(this).parent().fadeOut(200);
        });

    });

}).apply(this, [window.theme, jQuery]);

(function (theme, $, undefined) {
    "use strict";

    $(document).ready(function(){
        $(window).on('vc_reload', function() {
            porto_init();
            $('.type-post').addClass('post');
            $('.type-portfolio').addClass('portfolio');
            $('.type-member').addClass('member');
            $('.type-block').addClass('block');
        });
    });

    // Portfolios Load More
    var masonryContainer, masonryOptions;
    $(document).on('click', '.porto-portfolios .pagination.load-more a', function(e) {
        var $this = $(this),
            url = $this.attr('href'),
            shortcode_id = $this.closest('.porto-portfolios').find('.shortcode-id').val(),
            $container = $this.closest('.porto-portfolios' + shortcode_id),
            $loader = $container.find('.pagination-wrap.load-more .bounce-loader'),
            $btn = $container.find('.pagination.load-more a.next');

        if (url) {
            e.preventDefault();
            $btn.hide();
            $loader.show();

            $.ajax({
                type : 'post',
                url : url,
                success: function(response) {
                    var $response_container = $('<div>' + response + '</div>').find('.porto-portfolios'+shortcode_id),
                        $portfolio_thumbs = $response_container.find('.porto-portfolios-lighbox-thumbnails .owl-carousel').html(),
                        $next_posts = $response_container.find('.portfolio-row').children('article.portfolio');

                    $container.find('.pagination-wrap').replaceWith( $response_container.find('.pagination-wrap') );
                    $container.find('.porto-portfolios-lighbox-thumbnails .owl-carousel').append( $portfolio_thumbs );

                    if ($next_posts.length) {
                        var $iso = $container.find('.page-portfolios').find('.portfolio-row');
                        $iso.isotope('insert', $next_posts);
                        $iso.waitForImages(function() {
                            $iso.isotope('layout');
                        });
                    } else if ($response_container.find('.portfolios-timeline').length) { // timeline
                        $next_posts = $response_container.find('.portfolios-timeline .timeline-body');
                        var $first_timeline_date = $next_posts.children('.timeline-date:first-child'),
                            $last_date = $container.find('.timeline-body').children('.timeline-date').last();
                        if ($last_date.length && $first_timeline_date.length && $last_date.html() == $first_timeline_date.html()) {
                            $next_posts.children('.timeline-date:first-child').remove();
                        }
                        $container.find('.timeline-body').append($next_posts.children());
                    }

                    theme.PortfolioAjaxPage.initialize($('.page-portfolios'));
                    theme.PortfolioAjaxModal.initialize($('.page-portfolios'));
                    porto_init();
                    theme.PortfolioFilter.initialize($('.portfolio-filter'));
                    $container.find('.porto-lazyload:not(.lazy-load-loaded)').trigger('appear');
                }
            }).always(function() {
                $loader.hide();
            });

            return false;
        }

    });

    $(window).on('resizeEnd', function() {
        $( masonryContainer ).masonry( 'reloadItems' );
        $( masonryContainer ).masonry( 'layout' );
    });

    $(window).on('resize', function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 700);
    });

    /*
    * Experience Timeline
    */
    var timelineHeightAdjust = {
        $timeline: $('#exp-timeline'),
        $timelineBar: $('#exp-timeline .timeline-bar'),
        $firstTimelineItem: $('#exp-timeline .timeline-box').first(),
        $lastTimelineItem: $('#exp-timeline .timeline-box').last(),

        build: function() {
            var self = this;

            self.adjustHeight();
        },
        adjustHeight: function() {
            var self                = this,
                calcFirstItemHeight = ( self.$firstTimelineItem.outerHeight(true) / 2 ) + 5,
                calcLastItemHeight  = ( self.$lastTimelineItem.outerHeight(true) / 2 ) + 5;

            // Set Timeline Bar Top and Bottom
            self.$timelineBar.css({
                top: calcFirstItemHeight,
                bottom: calcLastItemHeight
            });
        }
    }

    if( $('#exp-timeline').get(0) ) {
        setTimeout(function(){
            // Adjust Timeline Height On Resize
            $(window).on('resizeEnd',function() {
                timelineHeightAdjust.build();
            });
        }, 1000);

        timelineHeightAdjust.build();
    }

    $('.custom-view-our-location').on('click',function(e){
        e.preventDefault();
        var this_ = $(this);
        $('.custom-googlemap').slideDown('1000', function(){
            setTimeout(function () {
                this_.hide();
            }, 700);
        });
    });

})( window.theme, jQuery );

// Porto 4.0 extra shortcodes
(function (theme, $, undefined) {
    //"use strict";

    // porto ultimate heading
    $(document).ready(function(e) {
        porto_headings_init();
        $(window).on('resize', function(e){
            porto_headings_init();
        });
    });
    $(window).on('load', function(e) {
        porto_headings_init();
    });
    function porto_headings_init() {
        var fixer = 0;
        $('.porto-u-heading').each(function(){
            var icon_height, icon_width, line_width;
            var wrapper_width = $(this).outerWidth();
            var hline_width = $(this).attr('data-hline_width');
            var icon_type = $(this).attr('data-hicon_type');
            var align = $(this).attr('data-halign');
            var spacer = $(this).attr('data-hspacer');

            left_rtl = 'left';
            right_rtl = 'right';
            if ( jQuery( 'body' ).hasClass('rtl') ) {
                left_rtl = 'right';
                right_rtl = 'left';
            }

            if(spacer == 'line_only') {
                if(align == 'right' || align == 'left') {
                    $(this).find('.porto-u-heading-spacer').find('.porto-u-headings-line').css({'float':align});
                } else {
                    $(this).find('.porto-u-heading-spacer').find('.porto-u-headings-line').css({'margin':'0 auto'});
                }
            }
        });
    }

    /* Porto Modal */
    jQuery(document).ready(function($) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').each(function(index) {
            var overlayClass = $(this).find('.porto-modal-trigger').data('overlay-class'),
                args = {
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,

                    fixedContentPos: false
                };
            if (typeof overlayClass != "undefined" && overlayClass) {
                args.mainClass = escape(overlayClass);
            }
            $(this).magnificPopup(args);
        });
        function porto_modal_open($this) {
            var trigger = $this.data('trigger-id'),
                overlayClass = $this.data('overlay-class'),
                type = $this.data('type');
            if (typeof trigger != 'undefined'/* && $('#' + escape(trigger)).length > 0*/) {
                if (typeof type == 'undefined') {
                    type = 'inline';
                }
                if (type == 'inline') {
                    trigger = '#' + escape(trigger);
                }
                var args = {
                    items: {
                        src: trigger
                    },
                    type: type,
                };
                if ($this.hasClass('porto-onload')) {
                    args['callbacks'] = {
                        'beforeClose': function() {
                            if ($('.mfp-wrap .porto-modal-content .porto-disable-modal-onload').length && $('.mfp-wrap .porto-modal-content .porto-disable-modal-onload').is(':checked')) {
                                $.cookie('porto_modal_disable_onload', 'true', { expires : 7 });
                            }
                        }
                    };
                }
                if (typeof overlayClass != "undefined" && overlayClass) {
                    args.mainClass = escape(overlayClass);
                }
                $.magnificPopup.open($.extend(true, {}, theme.mfpConfig, args), 0);
            }
        }
        if ($('.porto-modal-trigger.porto-onload').length > 0) {
            var $obj = $('.porto-modal-trigger.porto-onload').eq(0),
                timeout = 0;
            if ($obj.data('timeout')) {
                timeout = parseInt($obj.data('timeout'), 10);
            }
            setTimeout(function() {
                porto_modal_open($obj);
            }, timeout);
        }
        $('.porto-modal-trigger').on('click', function(e) {
            e.preventDefault();
            porto_modal_open($(this));
        });
    });

    /* Content Box */
    $(window).on('load', function(a){
        contentBoxInit();
    });
    $(window).on('resize', function(a){
        contentBoxInit();
    });
    $(document).ready(function(a) {
        contentBoxInit();
    });

    //  Content Box - Initialize
    function contentBoxInit() {
        $('.porto-ultimate-content-box').each(function(index, el) {
            var normal_bg_color = $(el).css('background-color') || '';
            var normal_border_color = $(el).data('border_color') || 'transparent';
            var normal_box_shadow = $(el).css('box-shadow') || '';

            var hover_bg_color = $(el).data('hover_bg_color') || $(el).css('background-color');
            var hover_border_color = $(el).data('hover_border_color') || 'transparent';
            var hover_box_shadow = $(el).data('hover_box_shadow') || $(el).css('box-shadow');

            $(el).on('mouseenter', function() {
                $(el).css('background-color', hover_bg_color);
                $(el).css('border-color', hover_border_color);
                $(el).css('box-shadow', hover_box_shadow);
            }).on('mouseleave', function() {
                $(el).css('background-color', normal_bg_color);
                $(el).css('border-color', normal_border_color);
                $(el).css('box-shadow', normal_box_shadow);
            });

            //  Margins -   Responsive
            var rm_o = {};
            var rm = $(el).data('responsive_margins');
            if(typeof rm != 'undefined' && rm != null) {
                rm_o = getMargins(rm);
            }

            //  Margins -   Normal
            var nm_o = {};
            var nm = $(el).data('normal_margins');
            if(typeof nm != 'undefined' && nm != null ) {
                nm_o = getMargins(nm);
            } else {
                nm_o = getCssMargins(el);
            }

            var WW = $(window).width() || '';
            if(WW!='') {
                if(WW>=768) {
                    applyMargins(nm_o, el);
                } else {
                    applyMargins(rm_o, el);
                }
            }

        });
    }
    //  create an object
    function getCssMargins(el) {
        var tmOb = {};
        tmOb['margin-left'] = trimPx($(el).css('margin-left'));
        tmOb['margin-right'] = trimPx($(el).css('margin-right'));
        tmOb['margin-top'] = trimPx($(el).css('margin-top'));
        tmOb['margin-bottom'] = trimPx($(el).css('margin-bottom'));

        //  Create normal margins
        var bs = '';
        $.each(tmOb, function(index, val) {
            if(typeof val!= 'undefined' && val != null) {
                bs += index+':'+val+'px;';
            }
        });
        $(el).attr('data-normal_margins', bs);
        return tmOb;
    }
    //  Trim 'px' from margin val
    function trimPx(l) {
        var sp;
        if(typeof l != 'undefined' && l != null) {
            sp = l.split('px');
            sp = parseInt(sp[0])
        }
        return sp;
    }

    //  Get margins from - DATA ATTRIBUTE
    //  @return object
    function getMargins(mo) {
        var tmOj = {};
        var b = mo.split(';');
        if(typeof b != 'undefined' && b != null ) {
            $.each(b, function(index, val) {
                if(typeof val != undefined && val != null) {
                    var nm = val.split(':');
                    if(typeof nm[0] != undefined && nm[0] != null && typeof nm[1] != undefined && nm[1] != null ) {
                        switch(nm[0]) {
                            case 'margin' :     tmOj['margin'] = (nm[1]);
                                break;
                            case 'margin-left' :    tmOj['margin-left'] = (nm[1]);
                                break;
                            case 'margin-right' :   tmOj['margin-right'] = (nm[1]);
                                break;
                            case 'margin-top' :     tmOj['margin-top'] = (nm[1]);
                                break;
                            case 'margin-bottom' :  tmOj['margin-bottom'] = (nm[1]);
                                break;
                        }
                    }
                }
            });
        }
        return tmOj;
    }

    //  Apply css margins from object
    //  @return null
    function applyMargins(ob, el) {
        if( !$.isEmptyObject(ob) ) {
            $.each(ob, function(index, val) {
                if(typeof val!= 'undefined' && val != null) {
                    $(el).css(index, val);
                }
            });
        }
    }

    /* Porto Interactive Banner */
    $(document).ready(function() {
        porto_ibanner();
        $(window).on('load', function() {
            porto_ibanner();
        });
        $(window).on('resize', function() {
            porto_ibanner();
        });

        function porto_ibanner() {
            $(".porto-ibanner").each(function(index, element) {
                $(this).on('mouseenter', function() {
                    if ($(this).data('hover-opacity')) {
                        $(this).find(".porto-ibanner-img").css("opacity", $(this).data('hover-opacity') );
                    }
                }).on('mouseleave', function() {
                    if ($(this).data('opacity')) {
                        $(this).find(".porto-ibanner-img").css("opacity", $(this).data('opacity') );
                    }
                });
            });
        }
    });

    /* Advanced Buttons */
    $('.porto-btn[data-hover]').on('mouseenter', function() {
        var hoverColor = $(this).data('hover');
        if (hoverColor) {
            $(this).data('originalColor', $(this).css('color'));
            $(this).css('color', hoverColor);
        }
    }).on('mouseleave', function() {
        var originalColor = $(this).data('originalColor');
        if (originalColor) {
            $(this).css('color', originalColor);
        }
    });

    // widget wysija
    $('#footer .widget_wysija .wysija-submit:not(.btn)').addClass('btn btn-default');

    // fixed visual compoer issue which has owl carousel
    if ($("[data-vc-parallax] .owl-carousel").length) {
        setTimeout(function() { if (typeof window.vcParallaxSkroll == 'object') { window.vcParallaxSkroll.refresh(); } }, 200);
    }

    $(".wpcf7-form .wpcf7-submit").on("click",function(e) {
        if ($(this).closest('form').hasClass('processing')) {
            e.preventDefault();
            return false;
        }
        $(this).closest('form').addClass("processing")
    });
    $(document).ajaxComplete(function(t,e,i) {
        $(".wpcf7-form.processing").removeClass("processing");
    });

    if ($('.page-content > .alignfull').length) {
        var initAlignFull = function() {
            $('.page-content > .alignfull').each(function() {
                $(this).css('left', -1 * $(this).parent().offset().left).css('right', -1 * $(this).parent().offset().left).css('width', $('body').width());
            });
        };
        initAlignFull();
        $(window).smartresize(function() {
            initAlignFull();
        });
    }
})( window.theme, jQuery );
