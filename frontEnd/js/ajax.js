// ajax.js 需要的ajax接口
var ajax = {
	uploadMusic: function(postData, callback) {
		ajaxUtil('/uploadMusic', 
			{	type: 'POST',
				data: postData,
				onsuccess: function(res) {
					callback(res);
				}
			});
	},
	getAllMusic: function(callback) {
		ajaxUtil('/getAllMusic',
			{	type: 'GET',
				onsuccess: function(res) {
					callback(res);
				}
			});
	}
};

function ajaxUtil(url, options) {

    var xmlhttp;
    var dataArr = [];
    var dataTemp;
    var tURL = "";

    if (window.XMLHttpRequest) {   
        xmlhttp = new XMLHttpRequest();
    } else{        
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 处理数据
    if (options.data && typeof options.data !== "String" ) {
        for (var dataKey in options.data) {
            dataArr.push(dataKey + "=" + options.data[dataKey]); 
        }
        dataTemp = dataArr.join("\&");
    } else {
        dataTemp = options.data;
    }

    // 请求
    if (!options.type) {
        options.type = "GET";  
    } else {
        options.type = options.type.toUpperCase();
    }
    if (options.type === "GET") {
        tURL = options.data ? url + "?" + dataTemp : url;  
        xmlhttp.open("GET", tURL, true);
        xmlhttp.send();
    } else if (options.type === "POST") {
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send(dataTemp);
    } 

    // readyState、响应
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            options.onsuccess(xmlhttp.responseText, xmlhttp.responseXML);
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
             if (options.onfail) {
                 options.onfail();
            }
        }
    } 
}




