import data from '../../data/courses.json';

describe('Numbers Test', () => {
    const courseLen = data.length;

    test('Number of items = 12', () => {
        expect(courseLen).toBe(12);
    });

    test('Number of items greater than or equal to 12', () => {
        expect(courseLen).toBeGreaterThanOrEqual(12);
    });
});

describe('Strings Test', () => {
    const text = data[0].title;

    test('There is a JS in title', () => {
        expect(text).toMatch(/JS/);
    });

    test('Title contains React', () => {
        expect(text).toContain('React');
    });
});


describe('Array Test', () => {
    const item2 = ['React', 'React Native'];

    test('The list course contains react and react native', () => {
        expect(['React', 'React Native', 'Meteor JS']).toEqual(expect.arrayContaining(item2));
    });
});

describe('Objects Test', () => {
    const item = data[0];
    test('The first course have property title', () => {
        expect(item).toHaveProperty('title');
    });
});

