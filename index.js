var juxtapose = require('./juxtapose/js/juxtapose')

if (typeof window !== 'undefined') window.juxtapose = juxtapose;
if (typeof module !== 'undefined') module.exports = juxtapose;
if (typeof self !== 'undefined') self.juxtapose = juxtapose;
