
# Week 05
# Task 08

Написать клас со следующим API:

app.use - принимает функцию которой будут переданы следующие параметры: req, res (NodeJs request/response).
app.use может принимать неограниченное количество функций- обработчиков и вызывает их в том порядке в котором 
они были переданы. каждый обработчик-функцию разместите в отдельном файле.

app.start() - запускает http сервер.

Пример использования:

var app = new App();
app.use((req, res)  => {
  console.log("url", req.url); 
  console.log("method", req.method); 
})
app.use((req, res) => {
  console.log(req.headers); 
  res.end("Hello World");
})
app.start(config.host, config.port, () => console.log("listening on" + config.port))
Дополнительно:

используйте node-config для передачи host/port;
напишите npm script который будет использовать nodemon/node-supervisor для рестарта сервера;
