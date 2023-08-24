import { typescript } from 'projen';
import {
  automation,
  dependencies,
  eslint,
  forceDefaults,
  nodeVersion,
  packageInfo,
  preventSelfDependency,
  release,
} from './features';
import { TypeScriptProjectOptions } from './typescript-project-options';
import { configureFeatures, defaultOptions } from './utils';

/**
 * @pjid ts
 */
export class TypeScriptProject extends typescript.TypeScriptProject {
  public constructor(options: TypeScriptProjectOptions) {
    const opts = defaultOptions<TypeScriptProjectOptions>(
      packageInfo(),
      release,
      automation,
      dependencies,
      forceDefaults({
        sampleCode: false,
        projenrcTs: true,
      }),
    )(options);

    super(opts);

    configureFeatures(eslint, nodeVersion, preventSelfDependency)(this, opts);
  }
}
