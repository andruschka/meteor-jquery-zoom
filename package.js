Package.describe({
  name: 'andrushcka:jquery-zoom',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A small jQuery plugin for zooming images on mouseover or mousedown. (For Meteor)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/andruschka/meteor-jquery-zoom.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('jquery', 'client');
  api.addFiles('jquery-zoom.js', 'client');
});
