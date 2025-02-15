export { optionsMiddleware as automation } from './automation';
export {
  optionsMiddleware as dependencies,
  preventSelfDependency,
} from './dependencies';
export { featureMiddleware as eslint } from './eslint';
export { makeMiddleware as forceDefaults } from './force-defaults';
export { featureMiddleware as nodeVersion } from './node-version';
export { makeMiddleware as packageInfo } from './package-info';
export { optionsMiddleware as release } from './release';
