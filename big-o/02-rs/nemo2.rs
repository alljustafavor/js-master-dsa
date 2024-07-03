use std::time::Instant;

fn find_nemo(array: &[&str]) {
    let now = Instant::now();

    for item in array {
        if *item == "nemo" {
            println!("Found NEMO!");
        }
    }

    let elapsed = now.elapsed();
    println!(
        "find_nemo function call took {} milliseconds",
        elapsed.as_millis()
    );
}

fn main() {
    let nemo = ["nemo"];
    let everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
    let large = vec!["nemo"; 100_000];
    find_nemo(&large);
} 
 
