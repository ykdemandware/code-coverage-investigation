/* global describe: true, it: true */
var assert = require('assert'),
    path = require('path'),
    slag = require('ti-slag'),
    Alloy = require('ti-slag/lib/Alloy');
var istanbul = require('istanbul'),
    collector = new istanbul.Collector(),
    reporter = new istanbul.Reporter();
describe('ti-slag test', function() {
    var context, alloy = Alloy.load({
        titanium: '4.0.0.GA',
        platform: 'ios'
    });
    it('should does not throw exception ti-slag load', function(done) {

        assert.doesNotThrow(function() {
            context = slag(path.join(__dirname, 'Resources', 'iphone', 'alloy', 'controllers', 'index.js'), {
                titanium: '4.0.0.GA',
                platform: 'ios',
                coverage: true,
                module: {
                    alloy: alloy.core,
                    'alloy/controllers/BaseController': alloy.BaseController
                }
            });

            context.Controller();

            this.timeout(5000);
            setTimeout(function() {
                context.label.fireEvent('click');
                collector.add(context.__coverage__);
                reporter.add('text');
                reporter.addAll(['lcov', 'clover']);
                reporter.write(collector, true, function() {
                    console.log('All reports generated');
                });
                done();
            }, 3000);

        }.bind(this));
    });
    // it('should does not throw exception Controller', function() {
    //     assert.doesNotThrow(function() {
    //         context.Controller();
    //     });
    // });
});
