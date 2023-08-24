import { cdk } from 'projen';
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
import { ProjenProjectOptions } from './projen-project-options';
import { configureFeatures, defaultOptions } from './utils';

/**
 * A project to create new projen projects & components
 * @pjid projen
 */
export class ProjenProject extends cdk.JsiiProject {
  public constructor(options: ProjenProjectOptions) {
    const opts = defaultOptions<ProjenProjectOptions>(
      packageInfo(),
      release,
      automation,
      dependencies,
      forceDefaults({
        author: options.authorName,
        authorUrl: undefined,
        sampleCode: false,
        projenrcTs: true,
        jsiiVersion: '5.1.x',
        typescriptVersion: '5.1.x',
      }),
    )(options);

    super(opts);

    configureFeatures(eslint, nodeVersion, preventSelfDependency)(this, opts);
  }
}
