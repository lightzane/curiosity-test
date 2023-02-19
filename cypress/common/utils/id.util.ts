export const IDUtil = {
    ObjectId: (d = Date, m = Math, h = 16, x = (n: number) => m.floor(n).toString(h)) =>
        x(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => x(m.random() * h)),

    UUID: (m = Math, h = 16, x = (n: number) => m.floor(n).toString(h), u = (n: number) => ' '.repeat(n).replace(/./g, () => x(m.random() * h))) =>
        u(8) + '-' +
        u(4) + '-' + u(4) + '-' + u(4) + '-' + u(12)
};
