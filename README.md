# @web-scrobbler/stylelint-config [![NPM][NpmBadge]][Npm] [![Test][WorkflowBadge]][Workflow]

Stylelint configuration file for Web Scrobbler projects.

## Usage

You can install `@web-scrobbler/stylelint-config` in the following way:
```sh
> npm install --save-dev @web-scrobbler/stylelint-config
```

Then, add `@web-scrobbler/stylelint-config` to the `extends` array in your
`.stylelintrc.*` file.
```json
{
  "extends": [
    "some-other-config-you-use",
    "@web-scrobbler/stylelint-config"
  ]
}
```

## License

Licensed under the [MIT License](./LICENSE).

<!-- Badges -->
[NpmBadge]: https://img.shields.io/npm/v/@web-scrobbler/stylelint-config
[WorkflowBadge]: https://github.com/web-scrobbler/stylelint-config-web-scrobbler/workflows/Lint/badge.svg

<!-- Related pages -->
[Npm]: https://www.npmjs.com/package/@web-scrobbler/stylelint-config
[Workflow]: https://github.com/web-scrobbler/stylelint-config-web-scrobbler/actions?query=workflow%3ALint
