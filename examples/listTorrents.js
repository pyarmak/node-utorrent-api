var utorrentClient = require('../lib/utorrent');

var utorrent = new utorrentClient('localhost', '22222');
utorrent.setCredentials('admin', '123456');

utorrent.call('list', function(err, data) {
	//if(err) { console.log(err); return; }

	console.log(data);
});