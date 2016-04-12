# Flexboxer
Small super-responsive CSS framework to structure simple web pages based on **flexbox**. Build with **LESS** and **Gulp**.

[Demo](http://saigesp.es/demo/flexboxer/demo/demo1.html)

### Install & use
To clone files to you local machine, run:
```
git clone https://github.com/Saigesp/Flexboxer.git
```
Now you can open any HTML demo file from `dist/demo`

### Compile files
To **compile** LESS files, run:
```
gulp less
```
To **watch** LESS files and compilie it when they change, run:
```
gulp watch
```
To **build** a minified CSS file, run:
```
gulp build
```
----------

## Page structure
Flexboxer provides a simply page structure, divided in **boxes** and **wrappers**.

**Boxes** are the main section structure, and they split the content in rows.
**Wrappers** are the subvidivers ob boxes, which works ina similar way to columns.

### General page structure
```
<body>
	<div id="navtop"></div>
	<div id="main"></div>
	<div id="navleft"></div>
	<div id="navright"></div>
	<div id="footer"></div>
</body>
```

### Box structure
Inside `#main`, or directly in it, you can declare the box structure:
```
<div class="flexboxer">
	<section class="wrap wrap--content">
		// Inside box
	</section>
</div>
```
You can repeat it if you want:
```
<div class="flexboxer">
	<section class="wrap wrap--frame">
		// Box 1
	</section>
	<section class="wrap wrap--content">
		// Box 2
	</section>
</div>
```
`wrap--frame` generates a box without padding, and `wrap--content` gives a simple padding to it's content.

### Wrappers (Box dividers)
We need to compress boxs and restructure their content in a similar way to rows and columns, but with flexbox. The following example shows one box divided in two wraps with same width.
```
<section class="wrap wrap--content wrap--shadow">										
	<h1>Crear nuevo usuario</h1>
	<div class="wrap wrap--flex">
		<div class="wrap wrap--frame wrap--frame__middle">
			// Content 50%
		</div>
		<div class="wrap wrap--frame wrap--frame__middle">
			// Content 50%
		</div>
	</div>
</section>
```

Item     | Value
-------- | ---
Computer | $1600
Phone    | $12
Pipe     | $1