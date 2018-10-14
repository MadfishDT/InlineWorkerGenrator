# InlineWorkerGenrator
Inline Worker Generator TypeScript and JavaScript.
this soulution make file have worker **inline worker module**

web worker:  
https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

features:
* Make basic worker source generate
* Make minified source inline worker 

---
## What is inline worker(a.k.a Blob Worker)? 

* Normal web worker : worker source and worker hander source are seperated  
    * Normal web worker need 2 source file to rung single web worker
    * handler javascript (**front side source**)
    * worker javascript (**web worker source**)

    * example describe javascript source using and importing worker javascript source

     ```
     var myWorker = new Worker("worker.js");
     ```
* Inline web worker
    * Inline web worker need just one javascript file to run single webworker
    ```
    var 
     var myWorker = new Worker(URL.createObjectURL(new Blob([ workerCode ] , {type: "javascript"})))
    ```
* https://www.html5rocks.com/en/tutorials/workers/basics/#toc-inlineworkers
