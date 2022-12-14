import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Zachariah Mully',
  authorAddress: 'zack.mully@zephyrai.bio',
  defaultReleaseBranch: 'main',
  name: 'python-test-2',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/zack.mully/python-test-2.git',
  peerDeps: ['projen'],
github: false,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
