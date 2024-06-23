import { globSync } from 'glob';
import * as esbuild from 'esbuild';
import * as tsup from 'tsup';

async function build(path) {
    const file = `${path}/src/index.ts`;
    const dist = `${path}/dist`;

    const esbuildConfig = {
        entryPoints: [file],
        external: [],
        packages: 'external',
        bundle: true,
        sourcemap: true,
        format: 'cjs',
        target: 'es2022',
        outdir: dist,
    };

    await esbuild.build(esbuildConfig);

    console.log(`Built ${path}/dist/index.js`);

    await esbuild.build({
        ...esbuildConfig,
        format: 'esm',
        outExtension: { '.js': '.mjs' },
    });
    console.log(`Built ${path}/dist/index.mjs`);

    await tsup.build({
        entry: [file],
        format: ['cjs', 'esm'],
        dts: { only: true },
        outDir: dist,
        silent: true,
        external: [],
    });

    console.log(`Built ${path}/dist/index.d.ts`);
}

globSync('packages/*').forEach(build);