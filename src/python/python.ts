import { python } from 'projen';

export interface PythonOptions extends python.PythonProjectOptions {
}

/**
 * @pjid zaiPython
 */

export class Python extends python.PythonProject {
  constructor(options: PythonOptions) {
    super({
      ...options,
    });
    this.addGitIgnore('zmully');
    this.addGitIgnore('testing');
  }
}
