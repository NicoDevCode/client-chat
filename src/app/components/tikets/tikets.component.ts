import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tikets',
  templateUrl: './tikets.component.html',
  styleUrls: ['./tikets.component.scss']
})
export class TiketsComponent implements OnInit {

  

  constructor() {        
      this.loadAPI = new Promise((resolve) => {
          this.loadScript();
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



  ngOnInit() {
  }

}
