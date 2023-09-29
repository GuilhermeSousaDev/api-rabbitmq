import * as amqp from 'amqplib/callback_api';

const url = "amqp://dev:dev@localhost:5672";

amqp.connect(url, (err0, connection) => {
    if (err0) {
        throw err0
    }

    connection.createChannel((err1, channel) => {
        if (err1) {
            throw err1
        }

        const queue = 'hello'

        channel.assertQueue(queue, { durable: false })

        channel.consume(queue, (msg) => console.log(msg.content.toString()), { noAck: true })
    })
})