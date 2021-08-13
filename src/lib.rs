use wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Does it work?");
}

#[wasm_bindgen]
pub fn fib(n: i64) -> u64 {
    if n < 0 {
        return 0;
    } else if n == 1 {
        return 1;
    }

    let mut sum = 0;
    let mut last = 0;
    let mut current = 1;
    for _i in 1..n {
        sum = last + current;
        last = current;
        current = sum;
    }
    sum
}
