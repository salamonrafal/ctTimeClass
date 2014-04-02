/**
 * @author Rafał Salamon
 * @version 0.0.4
 * @description Calculating time from seconds and time to seconds
 * 
 */
ctTimeClass = function (opts) {
    /**
     * @description Convert Time to number of seconds
     * 
     * @param {integer} hours
     * @param {integer} minutes
     * @param {integer} seconds
     * 
     * @returns {integer}
     */
    function convertTimeToSec (hours, minutes, seconds) {
        
        if (hours > 0) {
           seconds =  seconds + (3600 * hours);
        }
        
        if (minutes > 0) {
            seconds = seconds + (60 * minutes);
        }
        
        return seconds;
    }
    
    /**
     * @description Convert Seconds to Time
     * 
     * @param {integer} seconds
     * @param {boolean} settingDZ Setting Double Zero
     * 
     * @returns {countobj.calcTime.ct}
     */
    function calcTime (seconds, settingDZ) {
        var ct = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        
        ct.seconds = seconds;
        ct.hours = Number(String(ct.seconds / 3600).split('.', 1));

        if (ct.hours >= 1) { 
            ct.seconds = ct.seconds - (3600 * ct.hours);
        }
        
        ct.minutes = Number(String(ct.seconds / 60).split('.', 1));
        
        if (ct.minutes >= 1) { 
            ct.seconds = ct.seconds - (60 * ct.minutes);
        }
        ct.hours = formatTime (settingDZ, ct.hours);
        ct.minutes = formatTime (settingDZ, ct.minutes);
        ct.seconds = formatTime (settingDZ, ct.seconds);
        
        
        return ct;
    }
    
    function formatTime (settingDZ, value) {
        var patt = new RegExp("^[0-9]$");
        
        if (settingDZ && value < 10 && patt.test(String(value))) {
           value = '0' + value; 
        }
        
        return value;
    }
    
    return {
        /**
         * @param {integer} ctSec Seconds
         * @public
         */
        ctSecons: 0,
        
        /**
         * @param {object} ctTime Time struct data
         * @public
         */
        ctTime: {
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        
        /**
         * @param {boolean} doubleZero Return times with double two numbers like 01, 02 etc.
         * @public
         */
        doubleZero: false,
        
        /**
         * @description Constructor
         * 
         * @param {struct} opts
         * @returns {this}
         */
        init: function (opts) {
            var defaults = {
                ctTime: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                },
                ctSec: 0,
                doubleZero: false
            };
    
            if (opts.ctTime !== undefined) {
                if (opts.ctTime.hours !== undefined) {
                    defaults.ctTime.hours = opts.ctTime.hours;
                }
        
                if (opts.ctTime.hours !== undefined) {
                    defaults.ctTime.minutes = opts.ctTime.minutes;
                }
        
                if (opts.ctTime.hours !== undefined) {
                    defaults.ctTime.seconds = opts.ctTime.seconds;
                }
        
                defaults.ctSec = convertTimeToSec(defaults.ctTime.hours, defaults.ctTime.minutes, defaults.ctTime.seconds);
            }
            
            if (opts.doubleZero !== undefined) {
                this.doubleZero = opts.doubleZero;
            }
    
            if (opts.ctSec !== undefined) {
                defaults.ctSec = opts.ctSec;
                defaults.ctTime = calcTime(defaults.ctSec, this.doubleZero);
            }
    
    
            /**
             * @param {object} ctTime Time struct data
             * @public
             */
            this.ctTime = {
                hours: formatTime (this.doubleZero, defaults.ctTime.hours),
                minutes: formatTime (this.doubleZero,defaults.ctTime.minutes),
                seconds: formatTime (this.doubleZero,defaults.ctTime.seconds)
            };
    
            /**
             * @param {integer} ctSec Seconds
             * @public
             */
            this.ctSecons = defaults.ctSec;  
            
            return this;
        },
        
        /**
         * @description Return time struct
         * 
         * @returns {ctTime}
         */
        getTime: function () {
            return this.ctTime;
        },
        
        /**
         * @description Return number of seconds
         * 
         * @returns {seconds|ctSec|defaults.ctSec}
         */
        getSeconds: function () {
            return this.ctSecons;
        },
        
        /**
         * @description Increment seconds
         * 
         * @returns {void}
         */
        countSeconds: function () {
           this.ctSecons++;
           this.ctTime = calcTime (this.ctSecons, this.doubleZero);
        },
        
        /**
         * @description Set number of seconds
         * 
         * @param {integer} seconds
         */
        setSeconds: function(seconds) {
            this.ctSecons = seconds;
            this.ctTime = calcTime (this.ctSecons, this.doubleZero);
        } 
    }.init(opts);
    
};
