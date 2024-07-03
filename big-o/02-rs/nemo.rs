fn find_nemo(array: &[&str]) {
    for item in array {
        if *item == "nemo" {
            println!("Found NEMO!");
        }
    }
}

fn main() {
    let nemo = ["nemo"];
    find_nemo(&nemo);
}


