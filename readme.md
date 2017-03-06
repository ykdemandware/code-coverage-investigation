Titanium Code coverage  Investigation
----------------------------------

We have not found any pre built tool for generating code coverage report for titanium.
One of the tools I came across for building tests for titanium if called Ti.mocha (http://tonylukasavage.com/ti-mocha/).  But the way this work is that the tests suites are bundled together with the app code and executed after app startup.  Another popular tool used in the javascript environment for code coverage is Istanbul (https://github.com/gotwarlost/istanbul), but this tool is not adapted to run with Titanium in the IOS simulator. 
The closest approach we had, was to use this tool (https://github.com/k0sukey/ti-slag/) to simulate running  titanium along with istanbul in a node environment. But the test capabilities with the tool were still very limited when it came to testing the UI, the server requests etc.. . 

More Details about Ti.Slag here https://translate.google.com/translate?sl=auto&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=http%3A%2F%2Fk0sukey.github.io%2Fti-slag%2F&edit-text=
 
Test Sandbox
----------------------------------

To test the Sanbox project first install all the node packages and run "mocha test.js" at the root of the sandbox project.