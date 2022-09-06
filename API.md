# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### PythonOptions <a name="PythonOptions" id="python-test-2.zaiPython.PythonOptions"></a>

#### Initializer <a name="Initializer" id="python-test-2.zaiPython.PythonOptions.Initializer"></a>

```typescript
import { zaiPython } from 'python-test-2'

const pythonOptions: zaiPython.PythonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcOptions</code> | Options for .projenrc.json. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.version">version</a></code> | <code>string</code> | Version of the package. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.classifiers">classifiers</a></code> | <code>string[]</code> | A list of PyPI trove classifiers that describe the project. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.description">description</a></code> | <code>string</code> | A short description of the package. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.homepage">homepage</a></code> | <code>string</code> | A URL to the website of the project. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.license">license</a></code> | <code>string</code> | License of this package as an SPDX identifier. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.packageName">packageName</a></code> | <code>string</code> | Package name. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.poetryOptions">poetryOptions</a></code> | <code>projen.python.PoetryPyprojectOptionsWithoutDeps</code> | Additional options to set for poetry if using poetry. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.setupConfig">setupConfig</a></code> | <code>{[ key: string ]: any}</code> | Additional fields to pass in the setup() function if using setuptools. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.moduleName">moduleName</a></code> | <code>string</code> | Name of the python package as used in imports and filenames. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | List of dev dependencies for this project. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.pip">pip</a></code> | <code>boolean</code> | Use pip with a requirements.txt file to track project dependencies. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.poetry">poetry</a></code> | <code>boolean</code> | Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Use projenrc in javascript. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options related to projenrc in JavaScript. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenrcPython">projenrcPython</a></code> | <code>boolean</code> | Use projenrc in Python. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.projenrcPythonOptions">projenrcPythonOptions</a></code> | <code>projen.python.ProjenrcOptions</code> | Options related to projenrc in python. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.pytest">pytest</a></code> | <code>boolean</code> | Include pytest tests. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.pytestOptions">pytestOptions</a></code> | <code>projen.python.PytestOptions</code> | pytest options. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.setuptools">setuptools</a></code> | <code>boolean</code> | Use setuptools with a setup.py script for packaging and publishing. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.venv">venv</a></code> | <code>boolean</code> | Use venv to manage a virtual environment for installing dependencies inside. |
| <code><a href="#python-test-2.zaiPython.PythonOptions.property.venvOptions">venvOptions</a></code> | <code>projen.python.VenvOptions</code> | Venv options. |

---

##### `name`<sup>Required</sup> <a name="name" id="python-test-2.zaiPython.PythonOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="python-test-2.zaiPython.PythonOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="python-test-2.zaiPython.PythonOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="python-test-2.zaiPython.PythonOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="python-test-2.zaiPython.PythonOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="python-test-2.zaiPython.PythonOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="python-test-2.zaiPython.PythonOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="python-test-2.zaiPython.PythonOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* projen.ProjenrcOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="python-test-2.zaiPython.PythonOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="python-test-2.zaiPython.PythonOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="python-test-2.zaiPython.PythonOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="python-test-2.zaiPython.PythonOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="python-test-2.zaiPython.PythonOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="python-test-2.zaiPython.PythonOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="python-test-2.zaiPython.PythonOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="python-test-2.zaiPython.PythonOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="python-test-2.zaiPython.PythonOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="python-test-2.zaiPython.PythonOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="python-test-2.zaiPython.PythonOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="python-test-2.zaiPython.PythonOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="python-test-2.zaiPython.PythonOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="python-test-2.zaiPython.PythonOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="python-test-2.zaiPython.PythonOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="python-test-2.zaiPython.PythonOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="python-test-2.zaiPython.PythonOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="python-test-2.zaiPython.PythonOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="python-test-2.zaiPython.PythonOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="python-test-2.zaiPython.PythonOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Author's e-mail.

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="python-test-2.zaiPython.PythonOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

Author's name.

---

##### `version`<sup>Required</sup> <a name="version" id="python-test-2.zaiPython.PythonOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

Version of the package.

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="python-test-2.zaiPython.PythonOptions.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

A list of PyPI trove classifiers that describe the project.

> [https://pypi.org/classifiers/](https://pypi.org/classifiers/)

---

##### `description`<sup>Optional</sup> <a name="description" id="python-test-2.zaiPython.PythonOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the package.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="python-test-2.zaiPython.PythonOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

A URL to the website of the project.

---

##### `license`<sup>Optional</sup> <a name="license" id="python-test-2.zaiPython.PythonOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

License of this package as an SPDX identifier.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="python-test-2.zaiPython.PythonOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Package name.

---

##### `poetryOptions`<sup>Optional</sup> <a name="poetryOptions" id="python-test-2.zaiPython.PythonOptions.property.poetryOptions"></a>

```typescript
public readonly poetryOptions: PoetryPyprojectOptionsWithoutDeps;
```

- *Type:* projen.python.PoetryPyprojectOptionsWithoutDeps

Additional options to set for poetry if using poetry.

---

##### `setupConfig`<sup>Optional</sup> <a name="setupConfig" id="python-test-2.zaiPython.PythonOptions.property.setupConfig"></a>

```typescript
public readonly setupConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Additional fields to pass in the setup() function if using setuptools.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="python-test-2.zaiPython.PythonOptions.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string
- *Default:* $PYTHON_MODULE_NAME

Name of the python package as used in imports and filenames.

Must only consist of alphanumeric characters and underscores.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="python-test-2.zaiPython.PythonOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDependency()`.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="python-test-2.zaiPython.PythonOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of dev dependencies for this project.

Dependencies use the format: `<module>@<semver>`

Additional dependencies can be added via `project.addDevDependency()`.

---

##### `pip`<sup>Optional</sup> <a name="pip" id="python-test-2.zaiPython.PythonOptions.property.pip"></a>

```typescript
public readonly pip: boolean;
```

- *Type:* boolean
- *Default:* true

Use pip with a requirements.txt file to track project dependencies.

---

##### `poetry`<sup>Optional</sup> <a name="poetry" id="python-test-2.zaiPython.PythonOptions.property.poetry"></a>

```typescript
public readonly poetry: boolean;
```

- *Type:* boolean
- *Default:* false

Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="python-test-2.zaiPython.PythonOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in javascript.

This will install `projen` as a JavaScript dependency and add a `synth`
task which will run `.projenrc.js`.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="python-test-2.zaiPython.PythonOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options related to projenrc in JavaScript.

---

##### `projenrcPython`<sup>Optional</sup> <a name="projenrcPython" id="python-test-2.zaiPython.PythonOptions.property.projenrcPython"></a>

```typescript
public readonly projenrcPython: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in Python.

This will install `projen` as a Python dependency and add a `synth`
task which will run `.projenrc.py`.

---

##### `projenrcPythonOptions`<sup>Optional</sup> <a name="projenrcPythonOptions" id="python-test-2.zaiPython.PythonOptions.property.projenrcPythonOptions"></a>

```typescript
public readonly projenrcPythonOptions: ProjenrcOptions;
```

- *Type:* projen.python.ProjenrcOptions
- *Default:* default options

Options related to projenrc in python.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="python-test-2.zaiPython.PythonOptions.property.pytest"></a>

```typescript
public readonly pytest: boolean;
```

- *Type:* boolean
- *Default:* true

Include pytest tests.

---

##### `pytestOptions`<sup>Optional</sup> <a name="pytestOptions" id="python-test-2.zaiPython.PythonOptions.property.pytestOptions"></a>

```typescript
public readonly pytestOptions: PytestOptions;
```

- *Type:* projen.python.PytestOptions
- *Default:* defaults

pytest options.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="python-test-2.zaiPython.PythonOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `setuptools`<sup>Optional</sup> <a name="setuptools" id="python-test-2.zaiPython.PythonOptions.property.setuptools"></a>

```typescript
public readonly setuptools: boolean;
```

- *Type:* boolean
- *Default:* true if the project type is library

Use setuptools with a setup.py script for packaging and publishing.

---

##### `venv`<sup>Optional</sup> <a name="venv" id="python-test-2.zaiPython.PythonOptions.property.venv"></a>

```typescript
public readonly venv: boolean;
```

- *Type:* boolean
- *Default:* true

Use venv to manage a virtual environment for installing dependencies inside.

---

##### `venvOptions`<sup>Optional</sup> <a name="venvOptions" id="python-test-2.zaiPython.PythonOptions.property.venvOptions"></a>

```typescript
public readonly venvOptions: VenvOptions;
```

- *Type:* projen.python.VenvOptions
- *Default:* defaults

Venv options.

---

## Classes <a name="Classes" id="Classes"></a>

### Python <a name="Python" id="python-test-2.zaiPython.Python"></a>

#### Initializers <a name="Initializers" id="python-test-2.zaiPython.Python.Initializer"></a>

```typescript
import { zaiPython } from 'python-test-2'

new zaiPython.Python(options: PythonOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#python-test-2.zaiPython.Python.Initializer.parameter.options">options</a></code> | <code>python-test-2.zaiPython.PythonOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="python-test-2.zaiPython.Python.Initializer.parameter.options"></a>

- *Type:* python-test-2.zaiPython.PythonOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#python-test-2.zaiPython.Python.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#python-test-2.zaiPython.Python.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#python-test-2.zaiPython.Python.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#python-test-2.zaiPython.Python.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#python-test-2.zaiPython.Python.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#python-test-2.zaiPython.Python.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#python-test-2.zaiPython.Python.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#python-test-2.zaiPython.Python.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#python-test-2.zaiPython.Python.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#python-test-2.zaiPython.Python.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#python-test-2.zaiPython.Python.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#python-test-2.zaiPython.Python.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#python-test-2.zaiPython.Python.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#python-test-2.zaiPython.Python.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#python-test-2.zaiPython.Python.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#python-test-2.zaiPython.Python.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#python-test-2.zaiPython.Python.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="python-test-2.zaiPython.Python.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="python-test-2.zaiPython.Python.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="python-test-2.zaiPython.Python.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="python-test-2.zaiPython.Python.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="python-test-2.zaiPython.Python.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="python-test-2.zaiPython.Python.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="python-test-2.zaiPython.Python.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="python-test-2.zaiPython.Python.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="python-test-2.zaiPython.Python.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="python-test-2.zaiPython.Python.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="python-test-2.zaiPython.Python.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="python-test-2.zaiPython.Python.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="python-test-2.zaiPython.Python.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="python-test-2.zaiPython.Python.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="python-test-2.zaiPython.Python.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="python-test-2.zaiPython.Python.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="python-test-2.zaiPython.Python.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="python-test-2.zaiPython.Python.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="python-test-2.zaiPython.Python.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="python-test-2.zaiPython.Python.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="python-test-2.zaiPython.Python.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="python-test-2.zaiPython.Python.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="python-test-2.zaiPython.Python.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="python-test-2.zaiPython.Python.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="python-test-2.zaiPython.Python.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="python-test-2.zaiPython.Python.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="python-test-2.zaiPython.Python.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="python-test-2.zaiPython.Python.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="python-test-2.zaiPython.Python.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="python-test-2.zaiPython.Python.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="python-test-2.zaiPython.Python.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="python-test-2.zaiPython.Python.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#python-test-2.zaiPython.Python.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#python-test-2.zaiPython.Python.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#python-test-2.zaiPython.Python.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#python-test-2.zaiPython.Python.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#python-test-2.zaiPython.Python.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#python-test-2.zaiPython.Python.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#python-test-2.zaiPython.Python.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#python-test-2.zaiPython.Python.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#python-test-2.zaiPython.Python.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#python-test-2.zaiPython.Python.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#python-test-2.zaiPython.Python.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#python-test-2.zaiPython.Python.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#python-test-2.zaiPython.Python.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#python-test-2.zaiPython.Python.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#python-test-2.zaiPython.Python.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#python-test-2.zaiPython.Python.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#python-test-2.zaiPython.Python.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#python-test-2.zaiPython.Python.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#python-test-2.zaiPython.Python.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#python-test-2.zaiPython.Python.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#python-test-2.zaiPython.Python.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#python-test-2.zaiPython.Python.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#python-test-2.zaiPython.Python.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#python-test-2.zaiPython.Python.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#python-test-2.zaiPython.Python.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#python-test-2.zaiPython.Python.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#python-test-2.zaiPython.Python.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#python-test-2.zaiPython.Python.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#python-test-2.zaiPython.Python.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#python-test-2.zaiPython.Python.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#python-test-2.zaiPython.Python.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#python-test-2.zaiPython.Python.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#python-test-2.zaiPython.Python.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#python-test-2.zaiPython.Python.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#python-test-2.zaiPython.Python.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="python-test-2.zaiPython.Python.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="python-test-2.zaiPython.Python.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="python-test-2.zaiPython.Python.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="python-test-2.zaiPython.Python.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="python-test-2.zaiPython.Python.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="python-test-2.zaiPython.Python.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="python-test-2.zaiPython.Python.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="python-test-2.zaiPython.Python.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="python-test-2.zaiPython.Python.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="python-test-2.zaiPython.Python.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="python-test-2.zaiPython.Python.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="python-test-2.zaiPython.Python.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="python-test-2.zaiPython.Python.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="python-test-2.zaiPython.Python.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="python-test-2.zaiPython.Python.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="python-test-2.zaiPython.Python.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="python-test-2.zaiPython.Python.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="python-test-2.zaiPython.Python.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="python-test-2.zaiPython.Python.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="python-test-2.zaiPython.Python.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="python-test-2.zaiPython.Python.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="python-test-2.zaiPython.Python.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="python-test-2.zaiPython.Python.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="python-test-2.zaiPython.Python.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="python-test-2.zaiPython.Python.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="python-test-2.zaiPython.Python.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="python-test-2.zaiPython.Python.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="python-test-2.zaiPython.Python.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="python-test-2.zaiPython.Python.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="python-test-2.zaiPython.Python.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="python-test-2.zaiPython.Python.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="python-test-2.zaiPython.Python.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `version`<sup>Required</sup> <a name="version" id="python-test-2.zaiPython.Python.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="python-test-2.zaiPython.Python.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="python-test-2.zaiPython.Python.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#python-test-2.zaiPython.Python.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="python-test-2.zaiPython.Python.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


