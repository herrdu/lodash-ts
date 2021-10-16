import * as isArrayLike from "./isArrayLike"
// @ponicode
describe("isArrayLike.isArrayLike", () => {
    test("0", () => {
        let callFunction: any = () => {
            isArrayLike.isArrayLike(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            isArrayLike.isArrayLike("callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            isArrayLike.isArrayLike(64)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            isArrayLike.isArrayLike(32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            isArrayLike.isArrayLike("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            isArrayLike.isArrayLike(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
