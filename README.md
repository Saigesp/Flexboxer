# Flexboxer
Small super-responsive CSS framework to structure simple web pages based on **flexbox**.

## Page structure
```
<body>
	<div id="navtop"></div>
	<div id="main"></div>
	<div id="navleft"></div>
	<div id="navright"></div>
	<div id="footer"></div>
</body>
```
Obviulsy, `nav` must contain an `ul`
## Box structure
Inside main, or directly in it, you can declare the box structure:
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

## Box dividers
We need to compress boxs and restructure their content in a similar way to rows and columns, but with flexbox.
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
