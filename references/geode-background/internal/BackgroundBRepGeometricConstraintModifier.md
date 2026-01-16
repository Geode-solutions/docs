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

# class BackgroundBRepGeometricConstraintModifier


```cpp
Inherits from BRepGeometricConstraintModifier
```



## Functions

### BackgroundBRepGeometricConstraintModifier

```cpp
public void BackgroundBRepGeometricConstraintModifier(const BackgroundBRepGeometricConstraintModifier & )
```


### operator=

```cpp
public BackgroundBRepGeometricConstraintModifier & operator=(const BackgroundBRepGeometricConstraintModifier & )
```


### BackgroundBRepGeometricConstraintModifier

```cpp
public void BackgroundBRepGeometricConstraintModifier(BackgroundBRepGeometricConstraintModifier && )
```


### operator=

```cpp
public BackgroundBRepGeometricConstraintModifier & operator=(BackgroundBRepGeometricConstraintModifier && )
```


### BackgroundBRepGeometricConstraintModifier

```cpp
public void BackgroundBRepGeometricConstraintModifier(ModifiableObject brep, BackgroundBRepBuilder & builder, Constraints constraints)
```


### ~BackgroundBRepGeometricConstraintModifier

```cpp
public void ~BackgroundBRepGeometricConstraintModifier()
```


### modifiable_background

```cpp
public const ModifiableBackgroundBRep & modifiable_background()
```


### modifiable_background

```cpp
public ModifiableBackgroundBRep & modifiable_background()
```


### background_builder

```cpp
public BackgroundBRepBuilder & background_builder()
```


### swap_edge

```cpp
public flat_hash_map swap_edge(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### swap_facet

```cpp
public flat_hash_map swap_facet(const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
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


### remove_triple_adjacency

```cpp
public RemoveAdjacencyInfo remove_triple_adjacency(const Block3D & block, const PolyhedronVertex & vertex)
```


### remove_double_adjacency

```cpp
public RemoveAdjacencyInfo remove_double_adjacency(const Block3D & block, const PolyhedronFacetEdge & edge)
```




