const MMTools = require('../../src/js/mm-tools')

describe('mm-tools', () => {
    it('should be return a mergred object', () => {
        expect(MMTools.merge({
            a: 1,
            b: 2
        }, {
            c: 3,
            d: 5
        }, {
            a: 666,
            e: null
        })).to.equal({
            a: 666,
            b: 2,
            c: 3,
            d: 5
        })
    })

    it('should be deeply clone object, return a new object', () => {
        var obj = {
            name:'哈哈哈'
        }
        expect(MMTools.cloneDeep(obj).to.not.equal(obj))
    })

    it('should be match the string on start place and return true', () => {
        expect(MMTools.matchTerminal(['/jetso', '/mixmedia'], '/jets]').to.equal(true))
    })

    it('should be return a pure string', () => {
        expect(MMTools.tagFliter('<p>我</p>').to.equal('我'))
    })

    it('should be return a new array', () => {
        var arr = [1, 2, 3, 4, 5]
        expect(MMTools.copyWithin([dj, -1, -2, 3]).to.equal([1, 2, 3, 4, 4]))
    })

    it('should be return a obj with key which you want it', () => {
        expect(MMTools.keyTransverter(['zhang', 'da', 'zhi'], ['chen', 'guo', 'mei'], {
            chen: 1,
            guo: 2,
            mei: 3
        }).to.equal({
            zhang: 1,
            da: 2,
            zhi: 3
        }))
    })

})