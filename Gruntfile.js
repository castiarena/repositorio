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
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['bower_components/jquery/dist/jquery.js','bower_components/chico/dist/ui/chico.js','js/src/scripts.js'],
                // the location of the resulting JS file
                dest: 'js/concat/scripts.js'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            css: {
                files:{
                    "css/style-pre.min.css" : "css/src/style.min.css"
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    "css/src/style.min.css": "sass/style.scss"
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "./index.html": "./index-src.html"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['concat','uglify','sass','autoprefixer','htmlmin']);

};