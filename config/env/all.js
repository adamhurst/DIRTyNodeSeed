'use strict';

module.exports = {
    app: {
        title: 'MEAN.JS',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport'
    },
    port: process.env.PORT || 8000,
    templateEngine: 'swig',
    log: {
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'combined',
        // Stream defaults to process.stdout
        // Uncomment to enable logging to a log on the file system
        options: {
            stream: 'access.log'
        }
    }
};
