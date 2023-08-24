import * as builders from './projenrc';
import { ProjenProject } from './src';

const project = new ProjenProject({
  // Repo info
  repo: 'schuettc/projen-projects',
  name: 'schuettc',
  description: 'Opinionated projen project types.',
  authorName: 'Court Schuett',
  authorAddress: 'https://subaud.io',

  release: true,
  automationAppName: 'projen-builder',
});

new builders.ConstructProjectOptionsBuilder(project);
new builders.ProjenProjectOptionsBuilder(project);
new builders.TypeScriptProjectOptionsBuilder(project);

project.synth();
