## Task 1. Caesar cipher CLI tool

**Implements CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

**How to run:**
  1. git clone https://github.com/alexvjsfed/nodejs-course-rs-task1
  2. cd "path to nodejs-course-rs-task1"
  3. npm install
  4. see **Usage**

**Command line options:**

  **-s, --shift \<number>** number to shift
  
  **-i, --input \<path>**: path to input file
  
  **-o, --output \<path>**: path to output file
  
  **-a, --action \<action>**: action could be "encode" or "decode"
  
  
**Usage**: 

```bash
$ node caesar-cipher-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node caesar-cipher-cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node caesar-cipher-cli --action decode --shift 7 --input decoded.txt --output plain.txt
```