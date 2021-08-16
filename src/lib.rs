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
    return sum;
}

#[wasm_bindgen]
pub fn prime_factorization(mut n: u64) -> Vec<u64> {
    let mut factors = Vec::new();
    let mut candidates = 2..;

    while n > 1 {
        let x = candidates.next().unwrap();

        while n % x == 0 {
            n /= x;
            factors.push(x);
        }
    }

    return factors;
}

#[wasm_bindgen]
pub fn is_armstrong_number(n: u32) -> bool {
    let n_str = n.to_string();
    let num_len = n_str.len() as u32;

    let sum = n_str
        .chars()
        .map(|c| c.to_digit(10).unwrap())
        .map(|d| d.pow(num_len))
        .sum();

    n == sum
}

#[wasm_bindgen]
pub fn is_prime(n: u32) -> bool {
    for a in 2..n {
        if n % a == 0 {
            return false;
        }
    }
    true
}

#[wasm_bindgen]
pub fn nth(n: u32) -> Option<u32> {
    match n {
        n if n <= 0 => None,
        n => (1..).filter(|c| is_prime(*c)).nth(n as usize),
    }
}
