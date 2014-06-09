[graph]:../images/graph.png "Memory Graph"
[dominator_tree]:../images/dominator_tree.png "Dominator Tree"
[fragmentation]:../images/external_fragmentation.png "External Fragmentation (Wikipedia)"
[global_handles]:../images/global_handles.png "Global Handles"
#Basic Terms
<a href="http://www.ibm.com/developerworks/library/wa-jsmemory/index.html?utm_source=tuicool"">IBM Memory Leak Explanation</a>

##Common Terms
- <i>The heap (free store):</i> It is the pool of memory blocks
- <i>Renderer memory:</i> It is all memory of the process where an inspected page is rendered: native memory + JS heap memory of the page + JS heap memory of all dedicated workers started by the page. 
- <i>External Fragmentation:</i> It "arises when there are many small gaps between allocated memory blocks, which invalidates their use for an allocation request"

![fragmentation]

- <i>Memory leak:</i> a memory leak may happen when an object is stored in memory but cannot be accessed by the running code and cannot be grabage collected.
- <i>GC roots:</i> They are made up of handles that are created (either local or global) when making a reference from native code to a JavaScript object outside of V8. They can be found in  a heap snapshot under <b>GC roots > Handle scope</b> and <b>GC roots > Global handles</b>. 

![global_handles]

- <i>V8:</i> It is the name an version of Javascript virtual machine
- <i>Immediate:</i> The name "immediate" comes from the values being available immediately from the instruction stream, as opposed to loading them indirectly by looking up a memory address.


###Object Sizes

Memory can be held in two ways: (What it means that memory cannot be recliamed by garbage collector)

- Directly by the object itself. This is called <b>Shallow Size</b>. It is less improtant than <b>Retained Size</b> when looking for memory leaks.
- Holding references to other objects.This is called <b>Retained Size</b>. (Anothder definition: The size of memory that will be freed, when the object itself is deleted, and its dependent objects made unreachable from GC roots, is called retained size.)

###Retaining Path
The heap is a network of interconnected objects(It is like a graph). Each graph is made of nodes and edges: (Have a look at this <a herf="https://developer.chrome.com/devtools/docs/demos/memory/example10">example</a>)


![graph]

	var path;

	function largStr() {
    	return new Array(1000000).join('x');
	}

	function Z1(child1) {
    	this.child1 = child1;
	}
	
	function Z2(child1) {
    	this.child1 = child1;
	}

	function Y1(child1, child2) {
    	this.child1 = child1;
	    this.child2 = child2;
	}

	function Y2() {
	}

	function X1(child1) {
    	this.child1 = child1;
	}
	
	function X2(child1) {
    	this.child1 = child1;
	}
	function X3(child1) {
    	this.child1 = child1;
	}

	function W(child1, child2, child3) {
    	this.child1 = child1;
	    this.child2 = child2;
	    this.child3 = child3;
	}

	function Item() {
    	this.content = largStr();
	}

	function createObjects() {
    	var item = new Item(),
        	z1 = new Z1(item),
	        z2 = new Z2(item),
	        y1 = new Y1(z1, z2),
	        y2 = new Y2(),
    	    x1 = new X1(y1),
        	x2 = new X2(y1),
	        x3 = new X3(y2),
    	    w = new W(x1, x2, x3);
	    path = w;
	}

- <i>Node:</i> These are object which are labled using the name of their constructers
- <i>Edge:</i> These are the properties of the each object and they are name with their property name
- <i>Path:</i> The sequence of edges that needs to be traversed in order to reach one object from another
- <i>Simple Paths:</i> They are paths that do not go through the same node twice.
- <i>aretaining path:</i> A path from GC roots to a particular object. Basically the node is reachable for GC;
- <i>Unreachable:</i> When there is no <i>aretaining path</i> to a node, that node is called unreachable. When a node is unreachable it will be collected by GC.

###Dominators
- <i>Dominator of object A: </i> It is an object which exists in very simple path from the root to A. So if the dominator is removed then object A will be garbage collected

- <i>Dominator tree:</i> Dominators make a tree structure because each object has exactly one dominator object. A dominator of an object may lack direct references to an object it dominates.

![dominator_tree]

- <i>Accumulation points:</i> Collection-like nodes(objects) where they dominate other objects, are called <b>accumulation points</b>.


##Heap Snapshot
<b>Note:</b> It is recommended to take a heap snapshot with clear console and no active break points

<b>Note:</b> Both the Shallow and Retained size columns represent data in bytes.

<b>Note</b> use named functions. It is easier to track the function
-<i>distance:</i> It is the number of edges from the root to the object





