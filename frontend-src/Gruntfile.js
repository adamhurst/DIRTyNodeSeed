module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["<%= pkg.prod %>", '.tmp'],
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: ['**', '!*.js', '!services/**', '!features/*.js', '!bower_components/**', '!css/**'],
                dest: '<%= pkg.prod %>'
            }
        },
        concat: {},
        rev: {
            files: {
                src: ['<%= pkg.prod %>**/*.{js,css}']
            }
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: '<%= pkg.prod %>'
            }
        },
        usemin: {
            html: ['<%= pkg.prod %>index.html']
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false,
                dest: '<%= pkg.prod %>'
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('build', [
        'clean', 'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin'
    ]);
};