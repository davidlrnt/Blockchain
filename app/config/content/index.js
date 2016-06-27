var primarytabs = require('../primary-tabs.js');
module.exports = {
    view: "index",
    optional_path: "blockchain", // also honor requests for this........ TODO
    global_navigation: {
        site_def: {
            name: "IBM Blockchain",
            path: "/blockchain/index.html",
        },
        primary_tabs: primarytabs,
    },
    content: require('../pages/index.js'),
    routes: {

      "blockchain/testpage":require('../pages/testpage.js'),
      "blockchain/testpage/index":require('../pages/testpage.js'),
      "demos":require('../pages/demos.js'),

      "blockchain/index":               require('../pages/blockchain-index.js'),
      "blockchain/for-business":        require('../pages/for-business.js'),
      "blockchain/basics":              require('../pages/basics.js'),
      "blockchain/what-is-blockchain":  require('../pages/what-is-blockchain.js'),

    } // END routes
}
