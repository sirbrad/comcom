module.exports = function(grunt) {

	// Displays the elapsed execution time of grunt tasks
	require('time-grunt')(grunt);

	// Load NPM Tasks
   require('load-grunt-tasks')(grunt, ['grunt-*'])

  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    connect: {
      dev: {
        options: {
          port: 8000,
          keepalive: true
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
  			  style: 'expanded',
  			  // debugInfo: true,
  			  lineNumbers: true
  			},
  			expand: true,
  			cwd: './css/sass/',
  			src: ['**/*.scss'],
  			dest: './css/',
  			ext: '.css'
		  }
		},

		watch: {
			files: ['<%= sass.dev.src %>'],
			tasks: 'default'
		}
  });

  // Default Task
  grunt.registerTask('default', ['sass:dev']);
};
