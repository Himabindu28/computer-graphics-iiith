var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 60, (0.7*window.innerWidth) / (0.7*window.innerHeight), 0.001, 100000 );

var camera2 = new THREE.OrthographicCamera(	window.innerWidth / -900, 
											window.innerWidth / 900, 
											window.innerHeight / 800, 
											window.innerHeight / -800,
											0.01,
											10000 );


var renderer = new THREE.WebGLRenderer();
var heightScreen = 0.7*window.innerHeight;
var widthScreen = 0.5*window.innerWidth;
renderer.setSize( widthScreen, heightScreen);
document.body.appendChild( renderer.domElement );


window.addEventListener( 'resize' , function () {
	var width = 0.5*window.innerWidth;
	var height = 0.7*window.innerHeight;
	renderer.setSize( width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2;
controls.maxAzimuthAngle = Math.PI / 2;
controls.enableKeys = true;

function camera2D() {
	var condition = document.getElementById('2DCamera').checked;
	if( condition == true) {
		scene.remove(camera2);
		scene.add(camera);
		controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.enableRotate = true;
		controls.maxPolarAngle = Math.PI / 2;
		controls.maxAzimuthAngle = Math.PI / 2;
		camera.position.set(0.5,-0.25,2.2);
		controls.enableKeys = true;
		camera.rotation.y = Math.PI / 6;
		camera.rotation.x = -Math.PI / 10;
		camera.rotation.z = Math.PI / 16;
		camera.position.x = 1.25;
		camera.position.y = 0.5;
		camera.position.z = 2.2;
		light.position.set( 0, 0.2, -0.5 );
	} else {
		scene.remove(camera);
		scene.add(camera2);
		controls = new THREE.OrbitControls(camera2, renderer.domElement);
		camera2.position.set(0,0,2.2);
		controls.maxPolarAngle = Math.PI / 2;
		controls.maxAzimuthAngle = 0;
		controls.enableKeys = true;
		controls.enableRotate = false;
		camera2.rotation.x = 0;
		camera2.rotation.y = 0;
		camera2.rotation.z = 0;
	}
}




// create the shape
var geometry = new THREE.BoxGeometry(0.1, 0.4, 0.1);
var geometry2 = new THREE.BoxGeometry(0.7, 0.1, 0.1);
var geometry3 = new THREE.BoxGeometry(0.4, 0.1, 0.4);
// create a material, color, or image structure
var material = new THREE.MeshLambertMaterial( { color: 0x099556, flatShading: true, wireframe: false} );
			
var exmple1 = new THREE.Mesh( geometry, material);
var exmpl2 = new THREE.Mesh( geometry2, material);
var exmple3 = new THREE.Mesh( geometry3, material);


	
//scene.add( exmple1, exmpl2, exmple3);

//To change the background color of the scene
scene.background = new THREE.Color( 0x4F4F4F);

//To set the position of objects,camera and lightSource		
exmple1.position.set(0.05,-0.2,0);
exmpl2.position.set(0.35,-0.35,0);
exmple3.position.set(0.9,-0.35,0);

var sg = new THREE.SphereGeometry( 0.008, 32, 32 );
var sm = new THREE.MeshBasicMaterial( {color: 0xffffff} );
var s1 = new THREE.Mesh( sg, sm );
var s2 = new THREE.Mesh( sg, sm );
var s3 = new THREE.Mesh( sg, sm );
var s4 = new THREE.Mesh( sg, sm );
var s5 = new THREE.Mesh( sg, sm );
var s6 = new THREE.Mesh( sg, sm );
var s7 = new THREE.Mesh( sg, sm );
var s8 = new THREE.Mesh( sg, sm );
var s9 = new THREE.Mesh( sg, sm );
var s10 = new THREE.Mesh( sg, sm );
var s11 = new THREE.Mesh( sg, sm );
var s12 = new THREE.Mesh( sg, sm );
var s13 = new THREE.Mesh( sg, sm );
var s14 = new THREE.Mesh( sg, sm );
var s15 = new THREE.Mesh( sg, sm );
var s16 = new THREE.Mesh( sg, sm );
var s17 = new THREE.Mesh( sg, sm );
var s18 = new THREE.Mesh( sg, sm );
var s19 = new THREE.Mesh( sg, sm );
var s20 = new THREE.Mesh( sg, sm );
var s21 = new THREE.Mesh( sg, sm );
var s22 = new THREE.Mesh( sg, sm );
var s23 = new THREE.Mesh( sg, sm );
var s24 = new THREE.Mesh( sg, sm );
var s25 = new THREE.Mesh( sg, sm );
var s26 = new THREE.Mesh( sg, sm );
var s27 = new THREE.Mesh( sg, sm );
var s28 = new THREE.Mesh( sg, sm );
var s29 = new THREE.Mesh( sg, sm );
var s30 = new THREE.Mesh( sg, sm );
var s31 = new THREE.Mesh( sg, sm );
var s32 = new THREE.Mesh( sg, sm );
var s33 = new THREE.Mesh( sg, sm );
var s34 = new THREE.Mesh( sg, sm );
var s35 = new THREE.Mesh( sg, sm );
var s36 = new THREE.Mesh( sg, sm );
var s37 = new THREE.Mesh( sg, sm );
var s38 = new THREE.Mesh( sg, sm );
var s39 = new THREE.Mesh( sg, sm );
var s40 = new THREE.Mesh( sg, sm );
var s41 = new THREE.Mesh( sg, sm );
var s42 = new THREE.Mesh( sg, sm );
var s43 = new THREE.Mesh( sg, sm );


function lockV() {
	var condition = document.getElementById('lockVertices').checked;
	if( condition == true ) {
		exmple1.position.set(0.05,-0.2,0);
		exmpl2.position.set(0.35,-0.35,0);
		exmple3.position.set(0.9,-0.35,0);
		
		s1.position.set(0.7, -0.3, 0.2);
		s2.position.set(1.1, -0.3, 0.2);
		s3.position.set(1.1, -0.3, -0.2);
		s4.position.set(0.7, -0.3, -0.2);
		s5.position.set(0.7, -0.4, 0.2);
		s6.position.set(1.1, -0.4, 0.2);
		s7.position.set(1.1, -0.4, -0.2);
		s8.position.set(0.7, -0.4, -0.2);
		s9.position.set(0.1, -0.3, 0.05);
		s10.position.set(0.1, -0.3, -0.05);
		s11.position.set(0, -0.4, 0.05);
		s12.position.set(0, -0.4, -0.05);
		s13.position.set(0, 0, 0.05);
		s14.position.set(0, 0, -0.05);
		s15.position.set(0.1, 0, 0.05);
		s16.position.set(0.1, 0, -0.05);
		s17.position.set(0.7, -0.3, 0.05);
		s18.position.set(0.7, -0.3, -0.05);
		
		/*scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);*/
	} else {
		scene.remove(s1);
		scene.remove(s2);
		scene.remove(s3);
		scene.remove(s4);
		scene.remove(s5);
		scene.remove(s6);
		scene.remove(s7);
		scene.remove(s8);
		scene.remove(s9);
		scene.remove(s10);
		scene.remove(s11);
		scene.remove(s12);
		scene.remove(s13);
		scene.remove(s14);
		scene.remove(s15);
		scene.remove(s16);
		scene.remove(s17);
		scene.remove(s18);
	}
}


/*function world_lockV() {
	exmple1.position.set(0.05,-0.2,0);
	exmpl2.position.set(0.35,-0.35,0);
	exmple3.position.set(0.9,-0.35,0);
		
		s1.position.set(0.7, -0.3, 0.2);
		s2.position.set(1.1, -0.3, 0.2);
		s3.position.set(1.1, -0.3, -0.2);
		s4.position.set(0.7, -0.3, -0.2);
		s5.position.set(0.7, -0.4, 0.2);
		s6.position.set(1.1, -0.4, 0.2);
		s7.position.set(1.1, -0.4, -0.2);
		s8.position.set(0.7, -0.4, -0.2);
		s9.position.set(0.1, -0.3, 0.05);
		s10.position.set(0.1, -0.3, -0.05);
		s11.position.set(0, -0.4, 0.05);
		s12.position.set(0, -0.4, -0.05);
		s13.position.set(0, 0, 0.05);
		s14.position.set(0, 0, -0.05);
		s15.position.set(0.1, 0, 0.05);
		s16.position.set(0.1, 0, -0.05);
		s17.position.set(0.7, -0.3, 0.05);
		s18.position.set(0.7, -0.3, -0.05);
		
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);
}
*/
// The World figures block functions 


var dodecahedronGeometry = new THREE.DodecahedronGeometry(0.1618);
dodecahedronGeometry.rotateX(11/7);
var material = new THREE.MeshBasicMaterial({color: 0x099556});
var dodecahedron = new THREE.Mesh(dodecahedronGeometry, material);

//dodecahedron.position.x = 25;
dodecahedron.position.set(0,0,0);
var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set(0,0,0);

		
function DrawDodecahedron() {
	var condition = document.getElementById('DodecahedronDraw').checked;
	if( condition == true) {
		scene.add(dodecahedron);
		scene.add(light);
	} else {
		scene.remove(dodecahedron);
		scene.remove(light);
		document.getElementById('DodecahedronActive').checked = false;
		ActiveDodecahedron();
	}
}



function ActiveDodecahedron() {
	var condition1 = document.getElementById('DodecahedronDraw').checked;
	var condition2 = document.getElementById('DodecahedronActive').checked;

	if( (condition1 == true) && (condition2 == true) ) {
		//dodecahedron.position.set(0.05,0.25,0);
		//20 vertices :(
		s9.position.set(0.1, 0.1, 0.1);
		s10.position.set(0.1, 0.1, -0.1);
		s11.position.set(0.1, -0.1, 0.1);
		s12.position.set(0.1, -0.1, -0.1);
		s13.position.set(-0.1, -0.1, -0.1);
		s14.position.set(-0.1, 0.1, -0.1);
		s15.position.set(-0.1, -0.1, 0.1);
		s16.position.set(-0.1, 0.1, 0.1);

		s17.position.set(0, 0.1618, 0.0618);
		s18.position.set(0, -0.1618, -0.0618);
		s19.position.set(0, 0.1618, -0.0618);
		s20.position.set(0, -0.1618, 0.0618);

		s21.position.set(0.0618, 0, 0.1618);
		s22.position.set(-0.0618, 0, -0.1618);
		s23.position.set(-0.0618, 0, 0.1618);
		s24.position.set(0.0618, 0, -0.1618);

		s25.position.set(0.1618,0.0618,0);
		s26.position.set(-0.1618,-0.0618,0);
		s27.position.set(0.1618,-0.0618,0);
		s28.position.set(-0.1618,0.0618,0);
		
		
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);
		scene.add(s19);
		scene.add(s20);
		scene.add(s21);
		scene.add(s22);
		scene.add(s23);
		scene.add(s24);
		scene.add(s25);
		scene.add(s26);
		scene.add(s27);
		scene.add(s12);
		scene.add(s28);
		
		DodecTActive();
	} else {
		scene.remove(s9);
		scene.remove(s10);
		scene.remove(s11);
		scene.remove(s12);
		scene.remove(s13);
		scene.remove(s14);
		scene.remove(s15);
		scene.remove(s16);
		scene.remove(s17);
		scene.remove(s18);
		scene.remove(s19);
		scene.remove(s20);
		scene.remove(s21);
		scene.remove(s22);
		scene.remove(s23);
		scene.remove(s24);
		scene.remove(s25);
		scene.remove(s26);
		scene.remove(s27);
		scene.remove(s28);
	}
}


function DodecTActive()
{		
	var dx = Number(document.getElementById('DodecX').value);
	var dy = Number(document.getElementById('DodecY').value);
	var dz = Number(document.getElementById('DodecZ').value);
		s9.position.set(0.1  + 0.1*dx, 0.1 +0.1*dy,0.1*dz+ 0.1);
		s10.position.set(0.1 + 0.1*dx, 0.1 +0.1*dy,0.1*dz -0.1);
		s11.position.set(0.1 + 0.1*dx, -0.1+0.1*dy,0.1*dz+ 0.1);
		s12.position.set(0.1 + 0.1*dx, -0.1+0.1*dy,0.1*dz -0.1);
		s13.position.set(-0.1+ 0.1*dx, -0.1+0.1*dy,0.1*dz -0.1);
		s14.position.set(-0.1+ 0.1*dx, 0.1 +0.1*dy,0.1*dz -0.1);
		s15.position.set(-0.1+ 0.1*dx, -0.1+0.1*dy,0.1*dz+ 0.1);
		s16.position.set(-0.1+ 0.1*dx, 0.1 +0.1*dy,0.1*dz+ 0.1);

		s17.position.set(0+0.1*dx, 0.1618 +0.1*dy, 0.1*dz+0.0618);
		s18.position.set(0+0.1*dx, -0.1618+0.1*dy, 0.1*dz-0.0618);
		s19.position.set(0+0.1*dx, 0.1618 +0.1*dy, 0.1*dz-0.0618);
		s20.position.set(0+0.1*dx, -0.1618+0.1*dy, 0.1*dz+0.0618);

		s21.position.set(0.0618 +0.1*dx, 0+0.1*dy,0.1*dz+0.1618);
		s22.position.set(-0.0618+0.1*dx, 0+0.1*dy,0.1*dz-0.1618);
		s23.position.set(-0.0618+0.1*dx, 0+0.1*dy,0.1*dz+0.1618);
		s24.position.set(0.0618 +0.1*dx, 0+0.1*dy,0.1*dz-0.1618);

		s25.position.set(0.1*dx+0.1618,0.1*dy+0.0618,0.1*dz+0);
		s26.position.set(0.1*dx-0.1618,0.1*dy-0.0618,0.1*dz+0);
		s27.position.set(0.1*dx+0.1618,0.1*dy-0.0618,0.1*dz+0);
		s28.position.set(0.1*dx-0.1618,0.1*dy+0.0618,0.1*dz+0);
		
		scene.add(s9);
		scene.add(s10);
		scene.add(s11);
		scene.add(s12);
		scene.add(s13);
		scene.add(s14);
		scene.add(s15);
		scene.add(s16);
		scene.add(s17);
		scene.add(s18);
		scene.add(s19);
		scene.add(s20);
		scene.add(s21);
		scene.add(s22);
		scene.add(s23);
		scene.add(s24);
		scene.add(s25);
		scene.add(s26);
		scene.add(s27);
		scene.add(s12);
		scene.add(s28);

		document.getElementById('DodecahedronActive').checked = true;

}





var icosahedronGeometry = new THREE.IcosahedronGeometry(0.1);
icosahedronGeometry.rotateX(11/7);
var material = new THREE.MeshBasicMaterial({color: 0xFF250E});
var icosahedron = new THREE.Mesh(icosahedronGeometry, material);
//dodecahedron.position.x = 25;

icosahedron.position.set(0,0,0);
var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set(0,0,0);

		
function DrawIcosahedron() {
	var condition = document.getElementById('IcosahedronDraw').checked;
	if( condition == true) {
		scene.add(icosahedron);
		scene.add(light);
	} else {
		scene.remove(icosahedron);
		scene.remove(light);
		document.getElementById('IcosahedronActive').checked = false;
		ActiveIcosahedron();
	}
}



function ActiveIcosahedron() {
	var condition1 = document.getElementById('IcosahedronDraw').checked;
	var condition2 = document.getElementById('IcosahedronActive').checked;

	if( (condition1 == true) && (condition2 == true) ) {
		//dodecahedron.position.set(0.05,0.25,0);
		//20 vertices :(
		/*s9.position.set(0.1, 0.1, 0.05);
		s10.position.set(0.1, 0.1, -0.05);
		s11.position.set(0, 0, 0.05);
		s12.position.set(0, 0, -0.05);
		s13.position.set(0, 0.45, 0.05);
		s14.position.set(0, 0.45, -0.05);
		s15.position.set(0.1, 0.45, 0.05);
		s16.position.set(0.1, 0.45, -0.05);*/
		

		 s29.position.set(0.05236, 0.0, 0.08472);
		 s30.position.set(-0.05236, 0.0, 0.084726);
		 s31.position.set(0.0, 0.084726, 0.05236);

		 s32.position.set(0.0, -0.084726, 0.05236);
		 s33.position.set(0.084726, 0.05236, 0.0);
		 s34.position.set(-0.084726 , 0.05236, 0.0);

		 s35.position.set(-0.084726, -0.05236, 0.0);
		 s36.position.set( 0.084726, -0.05236, 0.0);
		 s37.position.set(0.0, 0.084726, -0.05236) ;

		s38.position.set(0.0, -0.084726, -0.05236);
		 s39.position.set(0.05236, 0.0, -0.084726);
		 s40.position.set(-0.05236, 0.0, -0.084726); 



		scene.add(s29);
		scene.add(s30);
		scene.add(s31);
		scene.add(s32);
		scene.add(s33);
		scene.add(s34);
		scene.add(s35);
		scene.add(s36);
		scene.add(s37);
		scene.add(s38);
		scene.add(s39);
		scene.add(s40);
		IcosaTActive();

	} else {
		scene.remove(s29);
		scene.remove(s30);
		scene.remove(s31);
		scene.remove(s32);
		scene.remove(s33);
		scene.remove(s34);
		scene.remove(s35);
		scene.remove(s36);
		scene.remove(s37);
		scene.remove(s38);
		scene.remove(s39);
		scene.remove(s40);
	}
}

function IcosaTActive()
{
	var ix = Number(document.getElementById('IcoX').value);
	var iy = Number(document.getElementById('IcoY').value);
	var iz = Number(document.getElementById('IcoZ').value);


		 s29.position.set(0.1*ix+0.05236, 0.1*iy+ 0.0,     0.1*iz+0.08472);
		 s30.position.set(0.1*ix-0.05236, 0.1*iy+ 0.0,     0.1*iz+0.084726);
		 s31.position.set(0.1*ix+0.0,     0.1*iy+ 0.084726,0.1*iz+0.05236);
		 s32.position.set(0.1*ix+0.0,     0.1*iy -0.084726,0.1*iz+0.05236);
		 s33.position.set(0.1*ix+0.084726,0.1*iy+ 0.05236, 0.1*iz+0.0);
		 s34.position.set(0.1*ix-0.084726,0.1*iy+ 0.05236, 0.1*iz+0.0);
		 s35.position.set(0.1*ix-0.084726,0.1*iy -0.05236, 0.1*iz+0.0);
		 s36.position.set(0.1*ix+0.084726,0.1*iy -0.05236, 0.1*iz+0.0);
		 s37.position.set(0.1*ix+0.0,     0.1*iy+ 0.084726,0.1*iz-0.05236) ;
		s38.position.set(0.1*ix+0.0, -0.084726+0.1*iy,0.1*iz-0.05236);
		 s39.position.set(0.1*ix+0.05236, 0.0 +0.1*iy,0.1*iz-0.084726);
		 s40.position.set(0.1*ix-0.05236, 0.0 +0.1*iy,0.1*iz-0.084726); 

		scene.add(s29);
		scene.add(s30);
		scene.add(s31);
		scene.add(s32);
		scene.add(s33);
		scene.add(s34);
		scene.add(s35);
		scene.add(s36);
		scene.add(s37);
		scene.add(s38);
		scene.add(s39);
		scene.add(s40);
		document.getElementById('IcosahedronActive').checked = true;
}




var geometry4 = new THREE.BoxGeometry( 0.2,0.2,0.2);
var material = new THREE.MeshBasicMaterial( { color: 0x099556 } );
var cube = new THREE.Mesh( geometry4, material );
cube.position.set(0,0,0);

function DrawCube() {

	var condition = document.getElementById('CubeDraw').checked;
	if( condition == true) {

		scene.add( cube );
		//scene.add(newWP1);

	} else {
		scene.remove(cube);
		document.getElementById('CubeActive').checked = false;
		ActiveCube();
	}
}
var geom = new THREE.Geometry();
var v1 = new THREE.Vector3(0.4,0.3,0);
var v2 = new THREE.Vector3(0,0.4,0);
var v3 = new THREE.Vector3(0.2,0.1,0);
geom.vertices.push(v1);
geom.vertices.push(v2);
geom.vertices.push(v3);


geom.faces.push( new THREE.Face3( 0, 1, 2 ) );

var geometry5=new THREE.Triangle(v1,v2,v3);
var material = new THREE.MeshBasicMaterial( { color: 0x099556 } );
var triangle = new THREE.Mesh( geom, material );


function DrawTriangle(){
	var condition = document.getElementById('TriangleDraw').checked;
	if( condition == true) {

		scene.add(triangle );


	} else {
		scene.remove(triangle);
		document.getElementById('TriangleActive').checked = false;
		ActiveTriangle();
	}

}
function ActiveTriangle(){

	var condition1 = document.getElementById('TriangleActive').checked;
	var condition2 = document.getElementById('TriangleDraw').checked;
	if( condition1 == true && condition2 == true) {
		//cube.position.set(0,0,0);

		s41.position.set(0.4,0.3,0);
		s42.position.set(0,0.4,0);
		s43.position.set(0.2,0.1,0);
		
		
		scene.add(s41);
		scene.add(s42);
		scene.add(s43);

		TriTActive();
	} else {
		scene.remove(s41);
		scene.remove(s42);
		scene.remove(s43);

	}

}

// Vertices of the figures in the world
function ActiveCube() {
	var condition1 = document.getElementById('CubeActive').checked;
	var condition2 = document.getElementById('CubeDraw').checked;
	if( condition1 == true && condition2 == true) {
		//cube.position.set(0,0,0);

		s1.position.set(0.1, 0.1, -0.1);
		s2.position.set(0.1, 0.1, 0.1);
		s3.position.set(-0.1, 0.1, -0.1);
		s4.position.set(0.1, -0.1, 0.1);
		s5.position.set(0.1, -0.1, -0.1);
		s6.position.set(-0.1, -0.1, 0.1);
		s7.position.set(-0.1, 0.1, 0.1);
		s8.position.set(-0.1, -0.1, -0.1);
		
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
		CubeTActive();
	} else {
		scene.remove(s1);
		scene.remove(s2);
		scene.remove(s3);
		scene.remove(s4);
		scene.remove(s5);
		scene.remove(s6);
		scene.remove(s7);
		scene.remove(s8);
	}
}


function CubeTrans() {
	var condition1 = document.getElementById('CubeDraw').checked;
	if(condition1==true){
	document.getElementById('CubeActive').checked = false;
	ActiveCube();

	var cx = Number(document.getElementById('CubeX').value);
	var cy = Number(document.getElementById('CubeY').value);
	var cz = Number(document.getElementById('CubeZ').value);
	//var s = Number(document.getElementById('CubeSide').value);

	//var geometry4 = new THREE.BoxGeometry( 0.2*s,0.2*s,0.2*s);
	//var material = new THREE.MeshBasicMaterial( { color: 0x099556 } );
	/*scene.remove(cube);
	document.getElementById('CubeActive').checked = false;
	ActiveCube();*/
	//var cube = new THREE.Mesh( geometry4, material );
	
	//scene.add(cube);
		cube.position.x = cx*0.1;
	cube.position.y = cy*0.1;
	cube.position.z = cz*0.1;

}
	// body...
}

function CubeTActive(){
	

	var cx = Number(document.getElementById('CubeX').value);
	var cy = Number(document.getElementById('CubeY').value);
	var cz = Number(document.getElementById('CubeZ').value);
	var sx=(document.getElementById('sliderStatus').innerHTML);
	s1.position.set(sx*0.1+cx*0.1 *sx, 0.1+cy*0.1, -0.1+cz*0.1);
	s2.position.set(sx*0.1+cx*0.1 *sx, 0.1+cy*0.1, 0.1+cz*0.1);
	s3.position.set(sx*-0.1+cx*0.1*sx, 0.1+cy*0.1, -0.1+cz*0.1);
	s4.position.set(sx*0.1+cx*0.1 *sx, -0.1+cy*0.1, 0.1+cz*0.1);
	s5.position.set(sx*0.1+cx*0.1 *sx, -0.1+cy*0.1, -0.1+cz*0.1);
	s6.position.set(sx*-0.1+cx*0.1*sx, -0.1+cy*0.1, 0.1+cz*0.1);
	s7.position.set(sx*-0.1+cx*0.1*sx, 0.1+cy*0.1, 0.1+cz*0.1);
	s8.position.set(sx*-0.1+cx*0.1*sx, -0.1+cy*0.1, -0.1+cz*0.1);
		scene.add(s1);
		scene.add(s2);
		scene.add(s3);
		scene.add(s4);
		scene.add(s5);
		scene.add(s6);
		scene.add(s7);
		scene.add(s8);
	document.getElementById('CubeActive').checked = true;
}


function TriTActive()
{
	var tx = Number(document.getElementById('TriX').value);
	var ty = Number(document.getElementById('TriY').value);
	var tz = Number(document.getElementById('TriZ').value);
	var sx=(document.getElementById('sliderStatus').innerHTML);
	s41.position.set(0.4+tx*0.1 , 0.3+ty*0.1, 0+tz*0.1);
	s42.position.set(0+tx*0.1 , 0.4+ty*0.1, 0+tz*0.1);
	s43.position.set(0.2+tx*0.1, 0.1+ty*0.1, 0+tz*0.1);
	
	scene.add(s41);
	scene.add(s42);
	scene.add(s43);

	document.getElementById('TriangleActive').checked = true;
}




function sliderChange(val){
    document.getElementById('sliderStatus').innerHTML=val; 
}



function addScale() {
	var condition= document.getElementById('CubeDraw');
	var condition1= document.getElementById('DodecahedronDraw');
	var condition2= document.getElementById('IcosahedronDraw');
	var condition3=document.getElementById('TriangleDraw');
    var sx=(document.getElementById('sliderStatus').innerHTML);
    var sy=(document.getElementById('sliderStatus').innerHTML);
    if (isNaN(sx) || isNaN(sy)) {
        //setErrorMessage("Scale inputs must be numbers!");
        return;
    }
    if (sx == 0 || sy == 0) {
        //setErrorMessage("Enter a non-zero scale factors!");
        return;
    }
    if(condition)
			{	if(sx<=2&&sy<=3){
				cube.scale.set(sx,sy,1);}
				else if(sy<=3 && sx>2){
					cube.scale.set(2,sy,1);
				}else{
					cube.scale.set(2,3,1);
				}
				document.getElementById('CubeActive').checked = false;
				ActiveCube();
			}
		if(condition1)
			{	if(sx<=2&&sy<=3){
				icosahedron.scale.set(sx,sy,1);}
				else if(sy<=3 && sx>2){
					icosahedron.scale.set(2,sy,1);
				}
				else{
				icosahedron.scale.set(2,3,1);
			}
				document.getElementById('IcosahedronActive').checked = false;
				ActiveIcosahedron();
			}
		if(condition2)
			{	if(sx<=2&&sy<=3){
				dodecahedron.scale.set(sx,sy,1);}
				else if(sy<=3 && sx>2){
					dodecahedron.scale.set(2,sy,1);
				}
				else{
				dodecahedron.scale.set(2,3,1);
			}
				document.getElementById('DodecahedronActive').checked = false;
				ActiveDodecahedron();
			}
		if(condition3)
		{	if(sx<=2&&sy<=3){
				triangle.scale.set(sx,sy,1);}
				else if(sy<=3 && sx>2){
					triangle.scale.set(2,sy,1);
				}
				else{
			triangle.scale.set(2,3,1);}
			document.getElementById('TriangleActive').checked = false;
			ActiveTriangle();
		}
}




function DodecTrans(){
	var condition1 = document.getElementById('DodecahedronDraw').checked;
	if(condition1==true){
	document.getElementById('DodecahedronActive').checked = false;
	ActiveDodecahedron();


	var dx = Number(document.getElementById('DodecX').value);
	var dy = Number(document.getElementById('DodecY').value);
	var dz = Number(document.getElementById('DodecZ').value);

	dodecahedron.position.x = dx*0.1;
	dodecahedron.position.y = dy*0.1;
	dodecahedron.position.z = dz*0.1;

		
}

}

function IcosaTrans() {
	var condition1 = document.getElementById('IcosahedronActive').checked;
	if(condition1==true){
	document.getElementById('IcosahedronActive').checked = false;
	//document.getElementById('InstanceActive').checked = false;

	ActiveIcosahedron();
	
	var ix = Number(document.getElementById('IcoX').value);
	var iy = Number(document.getElementById('IcoY').value);
	var iz = Number(document.getElementById('IcoZ').value);

	icosahedron.position.x = ix*0.1;
	icosahedron.position.y = iy*0.1;
	icosahedron.position.z = iz*0.1;


}
}
function TriTrans(){
	var condition1 = document.getElementById('TriangleDraw').checked;
	if(condition1==true){
	document.getElementById('TriangleActive').checked = false;
	ActiveTriangle();

	var tx = Number(document.getElementById('TriX').value);
	var ty = Number(document.getElementById('TriY').value);
	var tz = Number(document.getElementById('TriZ').value);
	triangle.position.x = tx*0.1;
	triangle.position.y = ty*0.1;
	triangle.position.z = tz*0.1;

}}

//camera.position.set(0.5,-0.25,1.5)
camera.position.set(0.5,-0.25,2.2);

var ambientLight = new THREE.AmbientLight(0x099556, 0.7);
scene.add(ambientLight);

var light = new THREE.PointLight( 0xffffff, 3, 100 );
light.position.set( 0, 0.2, -0.5 );
scene.add( light );

// Moving Light by using arrows
var xSpeed = 2;
var ySpeed = 2;

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 40) {
        light.position.y += ySpeed;
    } else if (keyCode == 38) {
        light.position.y -= ySpeed;
    } else if (keyCode == 39) {
        light.position.x -= xSpeed;
    } else if (keyCode == 37) {
        light.position.x += xSpeed;
    }
};


function WdrawXY() {

	// Vertical lines
	var x = 2, y = 2;
	var i = 0;
	for(i = -20; i < 20; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, y, 0));
		grid.vertices.push(new THREE.Vector3( x, -y, 0));
		var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(verticalyz);
		x = x - 0.1;
	}

	//Horizontal lines
	var x = 2, y = 2;
	var i = 0;
	for(i = -19; i < 20; i += 1 ) {
		var grid = new THREE.Geometry();
		var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
		grid.vertices.push(new THREE.Vector3( x, y, 0));
		grid.vertices.push(new THREE.Vector3( -x, y, 0));
		var horizontalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
		scene.add(horizontalyz);
		y = y - 0.1;
	}
}


//X-axis red line 
var X = new THREE.Geometry();
var x_material = new THREE.LineBasicMaterial({color: 'red'});
X.vertices.push(new THREE.Vector3( -0.6, 0, 0));
X.vertices.push(new THREE.Vector3(0.6, 0, 0));
var X_direction = new THREE.Line(X, x_material, THREE.LineSegments);
scene.add(X_direction);

//Y-axis green line 
var Y = new THREE.Geometry();
var y_material = new THREE.LineBasicMaterial({color: 0x3EF70F});
Y.vertices.push(new THREE.Vector3( 0, 0.6, 0));
Y.vertices.push(new THREE.Vector3(0, -0.6, 0));
var Y_direction = new THREE.Line(Y, y_material, THREE.LineSegments);
scene.add(Y_direction);

//Z-axis blue line
var Z = new THREE.Geometry();
var z_material = new THREE.LineBasicMaterial({color: 0x3CEFF1});
Z.vertices.push(new THREE.Vector3( 0, 0, -0.6));
Z.vertices.push(new THREE.Vector3(0, 0, 0.6));
var Z_direction = new THREE.Line(Z, z_material, THREE.LineSegments);
scene.add(Z_direction);

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 'red'} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.55,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.55,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.55,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.55);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.55);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

									//   EXTRA ARROWS

//Arrow +x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 270*(Math.PI / 180);
scene.add( cone );

//Arrow -x
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0XF7FF00} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(-0.15,0,0);
cone.rotation.x = 90*(Math.PI / 180);
cone.rotation.z = 90*(Math.PI / 180);
scene.add( cone );

//Arrow +y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,0.15,0);
scene.add( cone );

//Arrow -y
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3EF70F} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0,-0.15,0);
cone.rotation.x = 180*(Math.PI / 180);
scene.add( cone );

//Arrow +z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, 0.15);
cone.rotation.x = 90*(Math.PI / 180);
scene.add( cone );

//Arrow -z
var geometry = new THREE.ConeGeometry( 0.01, 0.1, 100, 100);
var material = new THREE.MeshBasicMaterial( {color: 0x3CEFF1} );
var cone = new THREE.Mesh( geometry, material );
cone.position.set(0, 0, -0.15);
cone.rotation.x = -90*(Math.PI / 180);
scene.add( cone );

//Dynamic JavaScript part taking inputs from checkBox

// YZ Grid
var horizontalyz = [];
var verticalyz = [];
var z = 2, y = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( 0, y, z));
	grid.vertices.push(new THREE.Vector3( 0, -y, z));
	verticalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	z = z - 0.1;
}

var z = 2, y = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( 0, y, z));
	grid.vertices.push(new THREE.Vector3( 0, y, -z));
	horizontalyz[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	y = y - 0.1;
}
function drawYZ() {
	var condition = document.getElementById('yzAxis').checked;
	if( condition == true) {

		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalyz[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalyz[i]);
			y = y - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalyz[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalyz[i]);
			y = y - 0.1;
		}
	}
}

// ZX Grid
var horizontalzx = [];
var verticalzx = [];
var z = 2, x = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, 0, z));
	grid.vertices.push(new THREE.Vector3( -x, 0, z));
	verticalzx[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	z = z - 0.1;
}

var z = 2, x = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, 0, z));
	grid.vertices.push(new THREE.Vector3( x, 0, -z));
	horizontalzx[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	x = x - 0.1;
}
function drawZX() {
	var condition = document.getElementById('zxAxis').checked;
	if( condition == true) {

		// Vertical lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalzx[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalzx[i]);
			x = x - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalzx[i]);
			z = z - 0.1;
		}

		//Horizontal lines
		var z = 2, x = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalzx[i]);
			x = x - 0.1;
		}
	}
}

// XY Grid
var horizontalxy = [];
var verticalxy = [];
var x = 2, y = 2;
var i = 0;
for(i = -20; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( x, -y, 0));
	verticalxy[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	x = x - 0.1;
}

var x = 2, y = 2;
var i = 0;
for(i = -19; i < 20; i += 1 ) {
	var grid = new THREE.Geometry();
	var gridMaterial = new THREE.LineBasicMaterial({color: 'black'});
	grid.vertices.push(new THREE.Vector3( x, y, 0));
	grid.vertices.push(new THREE.Vector3( -x, y, 0));
	horizontalxy[i] = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
	y = y - 0.1;
}
function drawXY() {
	var condition = document.getElementById('xyAxis').checked;
	if( condition == true) {

		// Vertical lines
		var x = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.add(verticalxy[i]);
			x = x - 0.1;
		}

		//Horizontal lines
		var x = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.add(horizontalxy[i]);
			y = y - 0.1;
		}
	}
	
	if( condition == false) {
		// Vertical lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -20; i < 20; i += 1 ) {
			scene.remove(verticalxy[i]);
			x = x - 0.1;
		}

		//Horizontal lines
		var z = 2, y = 2;
		var i = 0;
		for(i = -19; i < 20; i += 1 ) {
			scene.remove(horizontalxy[i]);
			y = y - 0.1;
		}
	}
}

var xd = 0, yd = 0, zd = 0;
function startTransistion() {

	document.getElementById('lockVertices').checked = false;
	lockV();

	xd = Number(document.getElementById('xco').value);
	yd = Number(document.getElementById('yco').value);
	zd = Number(document.getElementById('zco').value);

	xd = xd*0.1;
	yd = yd*0.1;
	zd = zd*0.1;
	
	exmple1.position.set(0.05+xd,-0.2+yd,0+zd);
	exmpl2.position.set(0.35+xd,-0.35+yd,0+zd);
	exmple3.position.set(0.9+xd,-0.35+yd,0+zd);
}
	/*var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: 0xffffff
    }));

    mesh.position.set(0, 0, 0);
    mesh.scale.set(0.5, 0.5, 1);
    mesh.castShadow = true;*/
  
function startAnimation() {

	var conditionAnimation = document.getElementById('animation').checked;

	if(conditionAnimation == false) {
		document.getElementById('lockVertices').checked = false;
		lockV();

		var condition = document.getElementById('CubeDraw').checked;
		var condition1 = document.getElementById('IcosahedronDraw').checked;
		var condition2 = document.getElementById('DodecahedronDraw').checked;
		var condition3 = document.getElementById('TriangleDraw').checked;
		if(condition)
			{
				cube.scale.set(2,3,1);
				document.getElementById('CubeActive').checked = false;
				ActiveCube();

			}
		if(condition1)
			{
				icosahedron.scale.set(2,3,1);
				document.getElementById('IcosahedronActive').checked = false;
				ActiveIcosahedron();
			}
		if(condition2)
		{
			dodecahedron.scale.set(2,3,1);
			document.getElementById('DodecahedronActive').checked = false;
			ActiveDodecahedron();
		}
		if(condition3)
		{
			triangle.scale.set(2,3,1);
			document.getElementById('TriangleActive').checked = false;
			ActiveTriangle();
		}


	} else {
		document.getElementById('lockVertices').checked = true;
		lockV();

		var condition = document.getElementById('CubeDraw').checked;
		var condition1 = document.getElementById('IcosahedronDraw').checked;
		var condition2 = document.getElementById('DodecahedronDraw').checked;
		var condition3 = document.getElementById('TriangleDraw').checked;
		if(condition3)
		{	
			triangle.scale.set(1,1,1);

		}
		if(condition)
			{
				cube.scale.set(1,1,1);
			}
		if(condition1)
			{
				icosahedron.scale.set(1,1,1);
			}
		if(condition2)
			{
				dodecahedron.scale.set(1,1,1);
			}
	}
}
scene.add(triangle);

													//GAME LOGIC

var update = function() {
};

//draw scene
var render = function() {
	var someCondition = document.getElementById('2DCamera').checked;
	if( someCondition == false) {
		renderer.render(scene, camera2);
	} else {
		renderer.render( scene, camera);
	}
};

//run game loop (update, render, repeat)
var GameLoop = function() {
	requestAnimationFrame(GameLoop);
	update();
	render();
};

GameLoop();
