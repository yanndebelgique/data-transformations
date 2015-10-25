Package.describe({
  name: 'yann:data-transformations',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple data-structure tranformation from mongodb documents to tables and vise-versa',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use('underscore');
  api.addFiles('data-transformations.js');
  api.export('DataTransformations');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('yann:data-transformations');
  api.addFiles('data-transformations-tests.js');
});
