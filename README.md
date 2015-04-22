# ipgeobulk

## Prereqs

Install the dependencies, then download a copy of [MaxMind's GeoLite City DB](http://dev.maxmind.com/geoip/legacy/geolite/) (which will probably end up being named `GeoLiteCity.dat.`). You'll also need a file enumerating IP addresses that you want to geolocate. This should be a plain UTF-8 text file separating addresses by line breaks:

```
x.x.x.x
y.y.y.y
z.z.z.z
```

## Usage

Run
```
node ipgeobulk.js -i inFile -o outFile -d dbFile
```

where `inFile` is the path to your IP address file, `outFile` is a path for writing the resulting CSV, and `dbFile` is the path to the MaxMind DB file.

## License

This software is licensed under the MIT License (MIT). All software that it utilizes is owned by its respective copyright holders and bound by their license terms.

Copyright (c) 2015 Jacob Prystowsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.