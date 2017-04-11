module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// css: {
		// 	dist: {
		// 		files: {
		// 			'dest/style.css' : 'css/style.css'
		// 		}
		// 	}
		// },
		autoprefixer: {
        options: {
          // autoprefixed options
            browsers: ['last 5 versions', 'Safari >= 5.0']
        },
        dist: {
          //  targeted files
            files: {
                'dest/style.css': 'css/style.css'
            }
        }
      },
		cssmin: {
  target: {
    files: [{

      // cwd: 'release/css',

      // dest: 'release/css',

			expand: true,
			cwd: 'css/',
			src: ['*.css','!*.min.css'],
			dest: 'css/',
			ext: '.min.css'
    }]
  }
},
		uglify: {
			options: {
      mangle: false,
			beautify: true,
			preserveComments: 'all'
    },
    my_target: {
      files: {
        'dest/index.min.js': ['js/index.js']
				// expand: true,
				// cwd: 'js/',
				// src: '**/*.js',
				// dest: 'js',
      }
    }
  },
		watch: {
			css: {
				files: '**/*.css',
				// tasks: ['css'],
				options: {
          livereload: true,
        },
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['autoprefixer','uglify', 'cssmin','watch']);
}





// module.exports = function(grunt) {
//   grunt.initConfig({
//     // pkg: grunt.file.readJSON('package.json'),
//
//     sass: {
//       dist: {
//         files: {
//           'css/main.css' : 'sass/main.scss'
//         }
//       }
//     },
//
//     autoprefixer: {
//         options: {
//           // autoprefixed options
//             browsers: ['last 5 versions', 'Safari >= 5.0']
//         },
//         dist: {
//           //  targeted files
//             files: {
//                 'css/main.css': 'css/main.css'
//             }
//         }
//       },
//
//       watch: {
//         css: {
//         files: ['sass/**/*.scss'],
//         tasks: ['sass'],
//         options: {
//           livereload: true,
//         },
//         },
//       },
//
//
//
//     uglify: {
//       options: {
//         manage: false,
//         preserveComments: 'all'
//       },
//       my_target:{
//         files:[{
//           expand: true,
//           cwd: 'js/',
//           src: '**/*.js',
//           dest: 'js',
//         }]
//       }
//     },
//
//     cssmin:{
//       my_target: {
//         files:[{
//           expand: true,
//           cwd: 'css/',
//           src: ['*.css','!*.min.css'],
//           dest: 'css/',
//           ext: '.min.css'
//         }]
//       }
//     }
//   });
//
//     grunt.loadNpmTasks('grunt-contrib-sass');
//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.loadNpmTasks('grunt-contrib-cssmin');
//     grunt.loadNpmTasks('grunt-contrib-uglify');
//     grunt.loadNpmTasks('grunt-autoprefixer');
//     // grunt.loadNpmTasks('grunt-contrib-concat');
//
//     grunt.registerTask('default', ['sass','autoprefixer','uglify', 'cssmin']);
//
//
// };
