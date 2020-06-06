# Catalan Messages for React-Admin

Catalan messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

[![react-admin-demo](https://marmelab.com/react-admin/img/react-admin-demo-still.png)](https://vimeo.com/268958716)

## Installation

```sh
npm install --save @joshfradley/ra-language-catalan
```

## Usage

```js
import catalanMessages from '@joshfradley/ra-language-catalan';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'ca': catalanMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="ca" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.
