"use strict";

var Webrift = function(url) {

	var self = this;

	self.initialize = function() {
		self.url = url;
		self.ws = new WebSocket(url);
		self.ws.onmessage = self.onMessage;
		self.ws.onopen = self.onOpen;
		self.ws.onclose = self.onClose;
		self.x = 0.0;
		self.y = 0.0;
		self.z = 0.0;
		self.w = 1.0;
		self.py = 0.0;
		self.pz = 0.0;
		self.px = 0.0;
	}

	self.onMessage = function(e) {
		var msg = JSON.parse(e.data);
		/*self.x = msg[1];
		self.y = msg[2];
		self.z = msg[3];
		self.w = msg[0];
		self.px = msg[4];
		self.py = msg[5];
		self.pz = msg[6];*/
		if(msg.OculusRiftDK2) {
			self.x = msg.OculusRiftDK2.x;
			self.y = msg.OculusRiftDK2.y;
			self.z = msg.OculusRiftDK2.z;
			self.w = msg.OculusRiftDK2.w;
			self.px = msg.OculusRiftDK2.px;
			self.py = msg.OculusRiftDK2.py;
			self.pz = msg.OculusRiftDK2.pz;
		}
		if(msg.Xbox360Controller) {
			self.Xbox360Controller = msg.Xbox360Controller;
		}
		
	}

	self.onOpen = function() {
		console.log("Webrift socket connected.");
	}

	self.onClose = function() {
		console.log("Webrift socket disconnected.");
	}

	self.initialize();

}