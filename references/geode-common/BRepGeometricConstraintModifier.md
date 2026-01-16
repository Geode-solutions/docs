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

# class BRepGeometricConstraintModifier


```cpp
Inherits from ConstraintModifier
```



## Records

Constraints

RemoveAdjacencyInfo



## Functions

### BRepGeometricConstraintModifier

```cpp
public void BRepGeometricConstraintModifier(const BRepGeometricConstraintModifier & )
```


### operator=

```cpp
public BRepGeometricConstraintModifier & operator=(const BRepGeometricConstraintModifier & )
```


### BRepGeometricConstraintModifier

```cpp
public void BRepGeometricConstraintModifier(BRepGeometricConstraintModifier && )
```


### operator=

```cpp
public BRepGeometricConstraintModifier & operator=(BRepGeometricConstraintModifier && )
```


### BRepGeometricConstraintModifier

```cpp
public void BRepGeometricConstraintModifier(ModifiableObject brep, Constraints constraints)
```


### ~BRepGeometricConstraintModifier

```cpp
public void ~BRepGeometricConstraintModifier()
```


### modifiable_brep

```cpp
public const ModifiableBRep & modifiable_brep()
```


### modifiable_brep

```cpp
public ModifiableBRep & modifiable_brep()
```


### constraints

```cpp
public const Constraints & constraints()
```


### constraints

```cpp
public const BlockConstraints & constraints(const Block3D & block)
```


### constraints

```cpp
public BlockConstraints & constraints(const Block3D & block)
```


### collapse_edge

```cpp
public flat_hash_map collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const OrientedEdgeVertices & edge_vertices)
```


### swap_edge

```cpp
public flat_hash_map swap_edge(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### swap_facet

```cpp
public flat_hash_map swap_facet(const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### split_facet

```cpp
public flat_hash_map split_facet(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```


### split_tetrahedron

```cpp
public flat_hash_map split_tetrahedron(const Block3D & block, index_t tetrahedron, const Point3D & point)
```


### split_collapse_edge

```cpp
public flat_hash_map split_collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const index_t apex, const BRepEdgeTShape & tshapes)
```


### split_collapse_edge

```cpp
public flat_hash_map split_collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const index_t apex, const Point3D & point, const BRepEdgeTShape & tshapes)
```


### split_collapse_facet

```cpp
public flat_hash_map split_collapse_facet(const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### split_collapse_facet

```cpp
public flat_hash_map split_collapse_facet(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point, const BRepFacetTShape & tshape_apexes)
```


### split_split_collapse

```cpp
public flat_hash_map split_split_collapse(const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point)
```


### remove_triple_adjacency

```cpp
public RemoveAdjacencyInfo remove_triple_adjacency(const Block3D & block, const PolyhedronVertex & vertex)
```


### remove_double_adjacency

```cpp
public RemoveAdjacencyInfo remove_double_adjacency(const Block3D & block, const PolyhedronFacetEdge & edge)
```


### do_swap_edge

```cpp
protected tuple do_swap_edge(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### do_swap_facet

```cpp
protected tuple do_swap_facet(const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### do_split_collapse_edge

```cpp
protected tuple do_split_collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const index_t apex, const Point3D & apex_point, const BRepEdgeTShape & tshapes)
```


### do_split_collapse_facet

```cpp
protected tuple do_split_collapse_facet(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point, const BRepFacetTShape & tshape_apexes)
```


### do_remove_triple_adjacency

```cpp
protected tuple do_remove_triple_adjacency(const Block3D & block, const PolyhedronVertex & vertex, bool keep_vertex)
```




