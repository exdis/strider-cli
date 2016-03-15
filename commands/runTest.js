module.exports = function(deps, parser) {
  var runTest = require('../run-test')(deps)
  parser.command('runTest')
  .option('email', {
    abbr: 'l',
    help: 'User\'s email address'
  })
  .option('password', {
    abbr: 'p',
    help: 'User\'s password'
  })
  .option('project', {
    abbr: 'j',
    help: 'Project name'
  })
  .option('branch', {
    abbr: 'b',
    help: 'Branch name (default: master)'
  })
  .option('message', {
    abbr: 'm',
    help: 'Commit message (optional)'
  })
  .option('deploy', {
    abbr: 'd',
    flag: true,
    help: 'Deploy on green'
  })
  .option('options', {
    abbr: 'o',
    type: 'string',
    help: 'Additional options passed to job (Must be a stringified JSON)'
  })
  .callback(function(opts){
    if (opts.email) {
      opts.email = opts.email.toString();
    }

    if (opts.password) {
      opts.password = opts.password.toString();
    }

    if (opts.project) {
      opts.project = opts.project.toString();
    }

    if (opts.branch) {
      opts.branch = opts.branch.toString();
    }

    if (opts.message) {
      opts.message = opts.message.toString();
    }

    if (opts.options) {
      opts.options = opts.options.toString();
    }

    runTest(opts.email, opts.password, opts.project, opts.branch, opts.message, opts.deploy, opts.options);
  })
  .help('Run a test and optionally deploy')
}
