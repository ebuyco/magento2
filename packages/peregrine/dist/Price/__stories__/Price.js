import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Price from '../Price';
import docs from '../__docs__/Price.md';
var stories = storiesOf('Price', module);
stories.add('USD', withReadme(docs, function () {
  return React.createElement(Price, {
    value: 100.99,
    currencyCode: "USD"
  });
}));
stories.add('EUR', withReadme(docs, function () {
  return React.createElement(Price, {
    value: 100.99,
    currencyCode: "EUR"
  });
}));
stories.add('JPY', withReadme(docs, function () {
  return React.createElement(Price, {
    value: 100.99,
    currencyCode: "JPY"
  });
}));
stories.add('Custom Styles', withReadme(docs, function () {
  var classes = {
    currency: 'curr',
    integer: 'int',
    decimal: 'dec',
    fraction: 'fract'
  };
  return React.createElement("div", null, React.createElement("style", null, "\n                    .curr { color: green; font-weight: bold; }\n                    .int { color: red; }\n                    .dec { color: black; }\n                    .fract { color: blue; }\n                "), React.createElement(Price, {
    value: 100.99,
    currencyCode: "USD",
    classes: classes
  }));
}));
//# sourceMappingURL=Price.js.map