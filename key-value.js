function KeyValue () {
	"use strict";

	var head, tail, pos;
	var keys = {};
	this.len = 0;

	/**
	 * 
	 */
	this.add = function (k, v) {
		if (! keys[k]) {
			var node = {v: v};

			if (this.len === 0) {
				head = tail = node;
				this.rwd();
			} else {
				node.p = tail;
				tail.n = node;
				tail = node;
			}
			keys[k] = node;

			this.len++;
		}
	};
	
	this.addOverride = function (k, v) {
		if(keys[k]){
			this.remove(k);
			this.add(k, v);
		}else{
			this.add(k, v);
		}
	};

	this.remove = function (k) {
		var v = "";
		var node = keys[k];

		if (node) {
			v = node.v;

			if (node.p) node.p.n = node.n;
			if (node.n) node.n.p = node.p;

			keys[k] = null;
			this.len--;
		}

		return v;
	};

	this.get = function (k) {
		return keys[k];
	};

	this.itr = function () {
		return pos = pos.n;
	};

	this.rwd = function () {
		pos = {n: head};
	};

	this.empty = function () {
		keys = {};
		head = tail = pos = null;
		this.len = 0;
	};
}