function Orbittour(config) {
    var self = this;
    this.config = config;
    this.hotspots = {};
    this.js = [];
    this.tout = -1;
    this.external_access_name = 'orbittour_externalAccessInit' + parseInt(Math.random() * 99999999);
    var files = ['orbitvu.js', 'swfobject.js'];
    for (var i in files) {
        this.js.push(this.config['base'] + '/' + files[i]);
    };

    this.js.push(config['hotspot']);
    if (!this.config['jsonp']) {
        this.config['jsonp']  = 'orbittour_callback';
    }
    window[this.config['jsonp']] = function(hotspots) {
        self.hotspots = hotspots;
    };
 
    this.load_scripts();



};
Orbittour.prototype.addViews = function() {
    var self = this;
    if (!this.hotspots['views'].length) {
        return false;
    }
    for (var i in this.hotspots['views']) {
        var scene = this.hotspots['views'][i];
        var link = this.views.appendChild(document.createElement('a'));
        link.href = 'javascript:void(null);';
        link.className = 'view';
        link.scene = scene;
        link.onclick = function(e) {
            if (this.scene.images) {
                self.viewer_container.style.display = 'none';
                self.viewer_image.style.width = self.viewer_container.style.width;
                self.viewer_image.style.height = self.viewer_container.style.height;
                self.viewer_image.style.position = self.viewer_container.style.position;
                if (self.viewer_container.style.top) {
                    self.viewer_image.style.top = self.viewer_container.style.top;
                }
                if (self.viewer_container.style.left) {
                    self.viewer_image.style.left = self.viewer_container.style.left;
                }
                if (self.viewer_container.style.right) {
                    self.viewer_image.style.right = self.viewer_container.style.right;
                }
                if (self.viewer_container.style.bottom) {
                    self.viewer_image.style.bottom = self.viewer_container.style.bottom;
                }
                self.viewer_image.style.display = 'block';
                self.viewer_image.style.background = 'url(' + this.scene.images[0] + ') center center no-repeat';
            } else {
                self.viewer.setScene(this.scene);
            }
            self.changeMessage(this.scene['message']);
            e.preventDefault();
            return false;
        };
        link.setAttribute('data-scene', scene);
        var img = link.appendChild(document.createElement('img'));
	    img.onmousedown = function(e){ e.preventDefault(); return false; };
        img.src = scene['thumbnail'];
        img.width = 100;
	    img.title = scene['message'];
    }
};
Orbittour.prototype.changeMessage = function(message) {
    var self = this;
    if (!message) {
        self.message_container.style.opacity = '0';
        this.tout = setTimeout(function() {
            self.message.innerHTML = '';
            self.tout = -1;
        }, 5000);
    } else {
        this.message.innerHTML = message;
        this.message_container.style.opacity = '1';
        if (this.tout != -1) {
            clearTimeout(this.tout);
            self.tout = -1;
        }
        this.tout = setTimeout(function() {
            self.message_container.style.opacity = '0';
            self.tout = -1;
        }, 5000);
    }
};
Orbittour.prototype.addHotspots = function() {
    if (!this.hotspots['hotspots'].length) {
        return false;
    }
    for (var i in this.hotspots['hotspots']) {
        this.viewer.addHotspot(this.hotspots['hotspots'][i]);
    }
};
Orbittour.prototype.init = function() {
    var self = this;
    
    this.container = document.getElementById(this.config['container']);
    // TODO - zmienic metode wyliczania this.container.parentNode.parentNode.offsetWidth - niezalezna od liczby rodzicow
    if (this.config['viewer']['height'] == '100%' ||  this.config['viewer']['height'] == undefined ) {
        this.config['viewer']['height'] = (this.container.parentNode.parentNode.offsetHeight * parseInt(this.config['viewer']['height'])) / 100;
    }
    if (this.config['viewer']['width'] == '100%' ||  this.config['viewer']['width'] == undefined ) {
        this.config['viewer']['width'] = (this.container.parentNode.parentNode.offsetWidth * parseInt(this.config['viewer']['width'])) / 100;
    }

    this.viewer_container = this.container.appendChild(document.createElement('div'));
    this.viewer_container.id = this.config['container'] + '-viewer-container';
    this.viewer_container.className = 'orbittour-viewer-container';

    if (isIOS() || isAndroid()){
        this.viewer_container.className = 'orbittour-viewer-container orbittour-viewer-container-html5';
    } else {
        this.viewer_container.className = 'orbittour-viewer-container orbittour-viewer-container-flash';
    }

    this.viewer_image = this.container.appendChild(document.createElement('div'));
    this.viewer_image.id = this.config['container'] + '-image';
    this.viewer_image.className = 'orbittour-image-container';

    this.viewer_image.onclick = function() {
        self.viewer_image.style.display = 'none';
        self.viewer_container.style.display = 'block';
    }


    var viewer = this.viewer_container.appendChild(document.createElement('div'));
    viewer.id = this.config['container'] + '-viewer';
    viewer.className = 'orbittour-viewer';

    this.views_container = this.container.appendChild(document.createElement('div'));
    this.views_container.id = this.config['container'] + '-views';
    this.views_container.className = 'orbittour-views-container';

    this.views = this.views_container.appendChild(document.createElement('div'));
    this.views.id = this.config['container'] + '-views';
    this.views.className = 'orbittour-views-container-wrapper'

    this.message_container = this.container.appendChild(document.createElement('div'));
    this.message_container.id = this.config['container'] + '-message';
    this.message_container.className = 'orbittour-message';
    this.message = this.message_container.appendChild(document.createElement('p'));
    this.message.innerHTML = 'Click thumbnail to change view';

    var self = this;
   window[this.external_access_name] = function(local_viewer) {
        if (local_viewer) {
            self.viewer = local_viewer;
        } else {
            self.viewer = document.getElementById(self.config['container'] + '-viewer-obj');
        }
        if (self.views.children.length == 0) {
            self.addViews();
        }
        self.addHotspots();
    };    this.viewer_container.style.top = parseInt(getStyle(this.viewer_container, 'padding-top')) + "px";
    this.viewer_container.style.left = parseInt(getStyle(this.viewer_container, 'padding-left')) + "px";

    if(parseInt(getStyle(this.viewer_container, 'padding-left')) == 0 && parseInt(getStyle(this.viewer_container, 'padding-right')) == 0 ){
        this.viewer_container.style.width = '100%';
        //this.config['viewer']['width'] = '100%';
    }
    else {
        if(parseInt(getStyle(this.viewer_container, 'padding-left'))) {
            this.config['viewer']['width'] -= parseInt(getStyle(this.viewer_container, 'padding-left'));
        }
        if(parseInt(getStyle(this.viewer_container, 'padding-right'))) {
            this.config['viewer']['width'] -= parseInt(getStyle(this.viewer_container, 'padding-right'));
            //this.viewer_container.style.right = parseInt(getStyle(this.viewer_container, 'padding-right')) + "px";
        }

        this.viewer_container.style.width = this.config['viewer']['width'] + "px";
    }
    if(parseInt(getStyle(this.viewer_container, 'padding-top')) == 0 && parseInt(getStyle(this.viewer_container, 'padding-bottom')) == 0 ){
        this.viewer_container.style.height = '100%';
        //this.config['viewer']['width'] = '100%';
    }
    else {
        if(parseInt(getStyle(this.viewer_container, 'padding-top'))) {
            this.config['viewer']['height'] -= parseInt(getStyle(this.viewer_container, 'padding-top'));
        }
        if(parseInt(getStyle(this.viewer_container, 'padding-bottom'))) {
            this.config['viewer']['height'] -= parseInt(getStyle(this.viewer_container, 'padding-bottom'));
        }
    }
    this.viewer_container.style.height = this.config['viewer']['height'] + "px";
    this.viewer_container.style.padding = "0px";

    this.config['viewer']['external_access_init'] = this.external_access_name;
    inject_orbitvu(this.config['container'] + '-viewer', this.config['base'] + '/orbitvuer12.swf', this.config['base'] + '/expressInstall.swf', this.config['viewer']);
    this.message_container.style.opacity = '1';
    this.message_container.onclick = function() { self.message_container.style.opacity = '0'; return true;};
};
Orbittour.prototype.load_style = function() {
    var load = false;
    var self = this;
    loadStyleSheet(this.config['style'], function() {
        if (!load) {
            load = true;
            self.init();
        }
    });
};
Orbittour.prototype.load_scripts = function() {
    if (this.js.length) {
        var head = document.getElementsByTagName('head')[0] || document.documentElement;
        var self = this;
        var done = false;

        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                self.load_scripts();
                done = true;
                // Handle memory leak in IE
                script.onload = script.onreadystatechange = null;
                if (head && script.parentNode) {
                    head.removeChild(script);
                }
            }
        };
        script.setAttribute('src', this.js.pop());
        head.insertBefore(script, head.firstChild);
    } else {
        this.load_style();
    }
};
function loadStyleSheet(path, fn) {
    var head = document.getElementsByTagName('head')[0], link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onreadystatechange = link.onload = fn;
    head.appendChild(link);
    link.href = path;

    window.setTimeout(function() {
        fn();
    }, 2000);
    return link;
};
function getStyle(oElm, strCssRule) {
    var strValue = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    } else if (oElm.currentStyle) {
        strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}


/*
 * Detect iOS device
 */
function isIOS() {
    var agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf('iphone') >= 0 ||agent.indexOf('ipad') >= 0 || agent.indexOf('ipod') >= 0) {
        return true;
    }
    return false;
}

/*
 * Detect Android device
 */
function isAndroid() {
    var agent = navigator.userAgent.toLowerCase();
    return agent.indexOf('android') > -1;
}

