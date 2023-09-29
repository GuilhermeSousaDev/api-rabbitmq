import * as amqp from "amqplib/callback_api";

const url = "amqp://dev:dev@localhost:5672";

amqp.connect(url, function (err0, connection) {
  if (err0) {
    throw err0;
  }

  connection.createChannel(function (err1, channel) {
    if (err1) {
      throw err1;
    }

    const queue = "hello";
    const msg = "world";

    channel.assertQueue(queue, { durable: false });

    channel.sendToQueue(queue, Buffer.from(msg));

    console.log("Sended msg: ", msg);
  });

  setTimeout(function () {
    connection.close();
    process.exit(0);
  }, 500);
});
