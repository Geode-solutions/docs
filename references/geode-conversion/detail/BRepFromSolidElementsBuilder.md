<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class BRepFromSolidElementsBuilder


 Class that converts a SolidMesh3D into a BRep.



```cpp
Inherits from WireframeBuilderFromOneMesh<BRep, SolidMesh3D>
```



## Functions

### BRepFromSolidElementsBuilder

```cpp
public void BRepFromSolidElementsBuilder(BRep & model, SolidMesh3D & solid, Span corner_vertices, Span line_edges, Span surface_facets)
```


### ~BRepFromSolidElementsBuilder

```cpp
public void ~BRepFromSolidElementsBuilder()
```


### build_brep_without_block_mesh

```cpp
public pair build_brep_without_block_mesh()
```


 Builds a BRep with no mesh in the Blocks. This build uses only the given elements to determine the topological components of the resulting BRep.

### build_brep_with_block_mesh

```cpp
public pair build_brep_with_block_mesh()
```


 Builds a BRep with meshed Blocks. This build uses both the solid adjacencies and the given elements to determine the topological components of the resulting BRep.

### is_corner

```cpp
public bool is_corner(index_t vertex)
```




