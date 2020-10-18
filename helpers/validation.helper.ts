export default class validator {
  static register = (must = true) => ({
    name: {
      presence: must,
      type: "string",
    },
    phone: {
      presence: must,
      type: "string",
      length: {
        maximum: 15,
        minimum: 10,
      },
    },
    password: {
        presence:must,
    type:"string",
    length: {
        maximum: 15,
        minimum: 4,
      },
    },
  });
}
