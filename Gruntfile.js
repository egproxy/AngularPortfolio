module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Can run all atomicized tasks(target) with
       - grunt watch
       Can run atomicized tasks(target) with
       - grunt watch:script
       - grunt watch:css

       Task-level `options` property is inherited by all targets
       Can be overridden in targets by specifying an options property
       and setting a different value from what is specified in task-level

       Not spawning child process is faster but collisions can cause it
       to fail? Then what is shared in parent context?

       If spawning child processes, it would be necessary to interrupt
       as not to overflow the queue. Can this lead to zombie processes?
    */
    watch: {
      options: {
        spawn: true,
        interrupt: true
      },
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['concat', 'uglify']
      },
      css: {
        files: ['src/css/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },


    /* targets should contain src & dest or files property
       can be used to specify multiple dest/src pairs
       Ordering matters
    */

    concat: {
      build: {
        options: { separator: ';\n' },
        src: [
          'includes/js/libs/jquery-1.11.3.min.js',
          'includes/js/libs/bootstrap.js',
          'includes/js/libs/angular.js',
          'includes/js/libs/angular-route.js',
          'includes/js/main.js'
        ],
        dest: 'scripts/main.js'
      }
    },

    cssmin: {
      build: {
        files: {
          'styles/main.min.css' : [
            'includes/css/libs/bootstrap.css',
            'styles/main.css'
          ]
        }
      }
    },

    uglify: {
      build: {
        src: 'scripts/main.js',
        dest: 'scripts/main.min.js'
      }
    },

    sass: {
      options: { style: 'compressed', sourceMap: false },
      dist: {
        files: {
          'styles/main.css' : 'includes/css/main.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // default task
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);
};
