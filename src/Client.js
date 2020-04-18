import KNoTCloudAMQP from '@cesarbr/knot-cloud-sdk-js-amqp';

class Client {}

const clientHandler = {
  construct(target, args) {
    const properties = args[0];
    if (properties.protocol !== 'amqp' && properties.protocol !== 'amqps') {
      throw new Error('Unsupported client protocol');
    }

    return new KNoTCloudAMQP(properties);
  },
};

export default new Proxy(Client, clientHandler);
