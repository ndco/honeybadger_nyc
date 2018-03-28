let Snowman = require('../snowman');

describe('Snowman', () => {
    let snowman;
    let name;

    beforeEach(() => {
        name = 'Olaf'
        snowman = new Snowman(name);
    });

    it('has a name', () => {
        expect(snowman.name).toBe(name, hasCarrotNose, hasStickArms);
    });

    it('has a nose', () => {
        expect(snowman.hasCarrotNose).tobe(true);
    });

    it('has stick arms', () => {
        expect(snowman.hasStickArms).tobe(true);
    });

    describe('likeWarmHuges()', () => {
        it('returns true when snowman name is Olaf', () => {

        });

        it('returns false when snowman name is not Olaf', () => {

        })
    });
});