
/* IMPORT */

import chalk from 'chalk';
import * as simpleGit from 'simple-git/promise';

/* COMMIT */

const defaultOptions = {
  message: ''
};

function factory ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return async function commit ( config, repoPath, ctx, task ) {

    if ( !options.message ) return task.skip ( 'You need to provide a message' );

    const git = simpleGit ( repoPath );

    task.title = `commit ${chalk.gray ( options.message )}`;

    const staged = ( await git.status () ).staged.length;

    if ( !staged ) return task.skip ( 'No staged files to commit' );

    task.output = `Committing ${staged} staged files...`;

    if ( config.dry ) return task.skip ();

    await git.commit ( options.message );

    task.output = `Committed ${staged} staged files`;

  };

}

/* EXPORT */

export default factory;
