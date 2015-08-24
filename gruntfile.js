module.exports = function(grunt){
	grunt.initConfig({
	  concat: {
	    options: {
	      separator: ';',
	    },
	    js: {
	      src: ['public/js/config/*','public/js/controller/*','public/js/directive/*','public/js/service/*'],
	      dest: 'public/app/js/appScripts.js',
	    },
	    css: {
	      src: ['public/css/app.css'],
	      dest: 'public/app/css/styles.css',
	    },
	  },
	  watch: {
			js: {
					files: ['public/js/**/*'],
					tasks: ['concat','uglify'],
				},
			css: {
					files: ['public/css/app.css'],
					tasks: ['concat'],
				},
		},
	  uglify: {
      		my_target: {
	      		files: {
	        	'public/app/js/min/appScripts.min.js': ['public/app/js/appScripts.js']
	      		}
    		},
    		options: {
			    mangle: false
			  }
  		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}

