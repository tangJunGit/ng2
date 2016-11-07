import { rollup }      from 'rollup';
import { nodeResolve } from 'rollup-plugin-node-resolve';
import { commonjs }    from 'rollup-plugin-commonjs';
import { uglify }      from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.aot.js',
  dest: 'dist/app.build.js',    //输出一个文件
  sourceMap: true,
  sourceMapFile: 'dist/app.build.js.map',
  format: 'iife',
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: [
        'node_modules/rxjs/**'
      ],
    }),
    uglify()
  ]
}