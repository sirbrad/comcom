module.exports = function(grunt) {

	// Displays the elapsed execution time of grunt tasks
	require('time-grunt')(grunt);

	// Load NPM Tasks
   require('load-grunt-tasks')(grunt, ['grunt-*'])

  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
		  dist: {
		    options: {
		      style: 'compressed'
		    },
		    expand: true,
		    cwd: './assets/styles/sass/',
		    src: ['*.scss'],
		    dest: './assets/styles/',
		    ext: '.css'
		  },
		  dev: {
			options: {
			  style: 'expanded',
			  debugInfo: true,
			  lineNumbers: true
			},
			expand: true,
			cwd: './assets/styles/sass/',
			src: ['*.scss'],
			dest: './assets/styles/',
			ext: '.css'
		  }
		},

		coffee: {
			compile: {
		    files: {
		      './assets/javascript/main.js': './assets/javascript/*.coffee'
		    }
		  },

		},

		watch: {
			files: ['<%= sass.dev.src %>'],
			tasks: 'default'
		}
  });

  // Default Task
  grunt.registerTask('default', ['sass:dev']);
};
