module.exports = function(grunt) {

  // Displays the elapsed execution time of grunt tasks
  require('time-grunt')(grunt);

  // Load NPM Tasks
  require('load-grunt-tasks')(grunt, ['grunt-*']);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      dev: {
        options: {
          port: 8000,
          keepalive: true
        }
      },
      test: {
        options: {
          port: 8899
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        expand: true,
        cwd: './css/sass/',
        src: ['**/*.scss'],
        dest: './css/',
        ext: '.css'
      },
      dev: {
        options: {
          style: 'expanded'
        },
        expand: true,
        cwd: './css/sass/',
        src: ['**/*.scss'],
        dest: './css/',
        ext: '.css'
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', '!js/libs/**/*'],
      options: {
        curly:   true,
        eqeqeq:  true,
        immed:   true,
        latedef: true,
        newcap:  true,
        noarg:   true,
        sub:     true,
        undef:   true,
        boss:    true,
        eqnull:  true,
        browser: true,

        globals: {
          // AMD
          module:     true,
          require:    true,
          requirejs:  true,
          define:     true,

          // Environments
          console:    true,

          // General Purpose Libraries
          $:          true,
          jQuery:     true,

          // Testing
          describe:   true,
          it:         true,
          expect:     true,
          beforeEach: true,
          afterEach:  true
        }
      }
    },

    watch: {
      files: ['<%= jasmine.options.specs %>', '<%= sass.dev.src %>'],
      tasks: 'default'
    }
  });

  // Default Task
  grunt.registerTask('default', ['sass:dev', 'connect:dev']);

};
