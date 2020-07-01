import { Component, OnInit, Inject } from '@angular/core';
import { DynamicScriptLoaderService } from './services/dynamic-script-loader.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'molovafrontend';


constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
  // You can load multiple scripts by just providing the key as argument into load method of the service
  // this.dynamicScriptLoader.load('script1').then(data => {
  //   // Script Loaded Successfully
  // }).catch(error => console.log(error));

  this.loadAPI = new Promise((resolve) => {
    this.loadScript();
    this.loadScript2();
    this.loadScript3();
    this.loadScript4();
    resolve(true);
  });
}

loadAPI: Promise<any>;

public loadScript() {        
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
        if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
            isFound = true;
        }
    }

    if (!isFound) {
        var dynamicScripts = ["https://assentsspoketuadmin.s3.amazonaws.com/vendors/bundle.js"];

        for (var i = 0; i < dynamicScripts.length; i++) {
            let node = document.createElement('script');
            node.src = dynamicScripts [i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }

    }
}


public loadScript2() {        
  var isFound = false;
  var scripts = document.getElementsByTagName("script")
  for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
          isFound = true;
      }
  }

  if (!isFound) {
      var dynamicScripts = ["https://assentsspoketuadmin.s3.amazonaws.com/assets/js/app.min.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
          let node = document.createElement('script');
          node.src = dynamicScripts [i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
      }

  }
}


public loadScript3() {        
  var isFound = false;
  var scripts = document.getElementsByTagName("script")
  for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
          isFound = true;
      }
  }

  if (!isFound) {
      var dynamicScripts = ["https://assentsspoketuadmin.s3.amazonaws.com/assets/js/examples/mail.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
          let node = document.createElement('script');
          node.src = dynamicScripts [i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
      }

  }
}

public loadScript4() {        
  var isFound = false;
  var scripts = document.getElementsByTagName("script")
  for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
          isFound = true;
      }
  }

  if (!isFound) {
      var dynamicScripts = ["https://assentsspoketuadmin.s3.amazonaws.com/vendors/quill/quill.js"];

      for (var i = 0; i < dynamicScripts.length; i++) {
          let node = document.createElement('script');
          node.src = dynamicScripts [i];
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
      }

  }
}

ngOnInit() {
  
}


}
