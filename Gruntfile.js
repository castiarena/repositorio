/**
 * Created by agus on 08/11/15.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                banner: '/*! Castiarena Agustin <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'js/scripts.min.js': ['js/concat/scripts.js']
                }
            }
        },
        concat: {
            options: {
                separator: ' '
            },
            dist: {
                // the files to concatenate
                src: ['bower_components/jquery/dist/jquery.js','bower_components/chico/dist/ui/chico.js','js/src/scripts.js'],
                // the location of the resulting JS file
                dest: 'js/concat/scripts.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['concat','uglify']);

};