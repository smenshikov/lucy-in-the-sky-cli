oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lucy-in-the-sky-cli
$ lucy-in-the-sky-cli COMMAND
running command...
$ lucy-in-the-sky-cli (--version)
lucy-in-the-sky-cli/0.1.0 darwin-x64 node-v14.15.5
$ lucy-in-the-sky-cli --help [COMMAND]
USAGE
  $ lucy-in-the-sky-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lucy-in-the-sky-cli generate-table`](#lucy-in-the-sky-cli-generate-table)
* [`lucy-in-the-sky-cli hello PERSON`](#lucy-in-the-sky-cli-hello-person)
* [`lucy-in-the-sky-cli help [COMMAND]`](#lucy-in-the-sky-cli-help-command)
* [`lucy-in-the-sky-cli plugins`](#lucy-in-the-sky-cli-plugins)
* [`lucy-in-the-sky-cli plugins:inspect PLUGIN...`](#lucy-in-the-sky-cli-pluginsinspect-plugin)
* [`lucy-in-the-sky-cli plugins:install PLUGIN...`](#lucy-in-the-sky-cli-pluginsinstall-plugin)
* [`lucy-in-the-sky-cli plugins:link PLUGIN`](#lucy-in-the-sky-cli-pluginslink-plugin)
* [`lucy-in-the-sky-cli plugins:uninstall PLUGIN...`](#lucy-in-the-sky-cli-pluginsuninstall-plugin)
* [`lucy-in-the-sky-cli plugins update`](#lucy-in-the-sky-cli-plugins-update)

## `lucy-in-the-sky-cli generate-table`

Generate table for admin dashboard

```
USAGE
  $ lucy-in-the-sky-cli generate-table -j <value>

FLAGS
  -j, --jsonFileSrc=<value>  (required) Path to json file with description

DESCRIPTION
  Generate table for admin dashboard

EXAMPLES
  $ lucy-in-the-sky-cli generate-table
```

_See code: [dist/commands/generate-table.ts](https://github.com/smenshikov/lucy-in-the-sky-cli/blob/v0.1.0/dist/commands/generate-table.ts)_

## `lucy-in-the-sky-cli hello PERSON`

Say hello

```
USAGE
  $ lucy-in-the-sky-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/smenshikov/lucy-in-the-sky-cli/blob/v0.1.0/dist/commands/hello/index.ts)_

## `lucy-in-the-sky-cli help [COMMAND]`

Display help for lucy-in-the-sky-cli.

```
USAGE
  $ lucy-in-the-sky-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for lucy-in-the-sky-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `lucy-in-the-sky-cli plugins`

List installed plugins.

```
USAGE
  $ lucy-in-the-sky-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ lucy-in-the-sky-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `lucy-in-the-sky-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ lucy-in-the-sky-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ lucy-in-the-sky-cli plugins:inspect myplugin
```

## `lucy-in-the-sky-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ lucy-in-the-sky-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ lucy-in-the-sky-cli plugins add

EXAMPLES
  $ lucy-in-the-sky-cli plugins:install myplugin 

  $ lucy-in-the-sky-cli plugins:install https://github.com/someuser/someplugin

  $ lucy-in-the-sky-cli plugins:install someuser/someplugin
```

## `lucy-in-the-sky-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ lucy-in-the-sky-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ lucy-in-the-sky-cli plugins:link myplugin
```

## `lucy-in-the-sky-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ lucy-in-the-sky-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ lucy-in-the-sky-cli plugins unlink
  $ lucy-in-the-sky-cli plugins remove
```

## `lucy-in-the-sky-cli plugins update`

Update installed plugins.

```
USAGE
  $ lucy-in-the-sky-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
