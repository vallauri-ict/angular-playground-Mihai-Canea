import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server-farm",
  templateUrl: "./server-farm.component.html",
  styleUrls: ["./server-farm.component.css"]
})
export class ServerFarmComponent implements OnInit {
  //servers = [{serverID:32,serverStatus:'online'},{serverID:34,serverStatus:'offline'}];
  serverName: string = "";
  serverCreated: boolean = false;
  servers = [];

  constructor() {}

  ngOnInit() {}

  onCreateServer() {
    this.servers.push("");
    this.serverCreated=true;
    //setTimeout(()=>{this.serverCreated=false;},2000);
  }

  onChangeServerName(){
    this.serverCreated=false;
  }
}
