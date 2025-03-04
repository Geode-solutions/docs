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

# class BackgroundBRepConstraintModifier


## Functions

### BackgroundBRepConstraintModifier

```cpp
public void BackgroundBRepConstraintModifier(const BackgroundBRepConstraintModifier & )
```


### operator=

```cpp
public BackgroundBRepConstraintModifier & operator=(const BackgroundBRepConstraintModifier & )
```


### BackgroundBRepConstraintModifier

```cpp
public void BackgroundBRepConstraintModifier(BackgroundBRepConstraintModifier && )
```


### operator=

```cpp
public BackgroundBRepConstraintModifier & operator=(BackgroundBRepConstraintModifier && )
```


### BackgroundBRepConstraintModifier

```cpp
public void BackgroundBRepConstraintModifier(ModifiableObject brep, BackgroundBRepBuilder & builder, flat_hash_map constraints)
```


### ~BackgroundBRepConstraintModifier

```cpp
public void ~BackgroundBRepConstraintModifier()
```


### brep

```cpp
public const ModifiableBackgroundBRep & brep()
```


### brep

```cpp
public ModifiableBackgroundBRep & brep()
```


### builder

```cpp
public BackgroundBRepBuilder & builder()
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
public flat_hash_map swap_edge(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex)
```


### swap_facet

```cpp
public flat_hash_map swap_facet(const Block3D & block, const PolyhedronFacet & facet)
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
public flat_hash_map split_collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const index_t apex)
```


### split_collapse_edge

```cpp
public flat_hash_map split_collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const index_t apex, const Point3D & point)
```


### split_collapse_facet

```cpp
public flat_hash_map split_collapse_facet(const Block3D & block, const PolyhedronFacet & facet)
```


### split_collapse_facet

```cpp
public flat_hash_map split_collapse_facet(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```


### split_split_collapse

```cpp
public flat_hash_map split_split_collapse(const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point)
```


### remove_triple_adjacency

```cpp
public flat_hash_map remove_triple_adjacency(const Block3D & block, const PolyhedronVertex & vertex)
```


### remove_double_adjacency

```cpp
public flat_hash_map remove_double_adjacency(const Block3D & block, const PolyhedronFacetEdge & edge)
```




