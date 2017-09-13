var express = require('express');
var router = express.Router();
var path = require('path');
var sitemap = require('sitemap');
/* GET home page. */

var map = sitemap.createSitemap ({
    hostname: 'http://www.netsalary.in',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
        { url: '/',  changefreq: 'weekly'},
        { url: '/russia',  changefreq: 'monthly'},
        { url: '/canada',  changefreq: 'monthly'},
        { url: '/canada/alberta', changefreq: 'monthly'},
        { url: '/canada/british_columbia', changefreq: 'monthly'},
        { url: '/canada/manitoba', changefreq: 'monthly'},
        { url: '/canada/new_brunswick', changefreq: 'monthly'},
        { url: '/canada/newfoundland', changefreq: 'monthly'},
        { url: '/canada/northwest_territories', changefreq: 'monthly'},
        { url: '/canada/nova_scotia', changefreq: 'monthly'},
        { url: '/canada/nunavut', changefreq: 'monthly'},
        { url: '/canada/ontario', changefreq: 'monthly'},
        { url: '/canada/prince_edward_island', changefreq: 'monthly'},
        { url: '/canada/quebec', changefreq: 'monthly'},
        { url: '/canada/saskatchewan', changefreq: 'monthly'},
        { url: '/canada/yukon', changefreq: 'monthly'},
        { url: '/united_arab_emirates', changefreq: 'monthly'}

    ]
});

router.get('/sitemap.xml', function(req, res) {
    map.toXML( function (err, xml) {
        if (err) {
            return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send( xml );
    });
});

router.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

// router.get('/:country/:region', function(req, res, next) {
//     res.sendFile(path.resolve(__dirname + '/../public/index.html'));
// });

module.exports = router;
