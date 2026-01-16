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

# class BackgroundSolidConstraintModifier


```cpp
Inherits from TetrahedralSolidConstraintModifier
```



## Functions

### BackgroundSolidConstraintModifier

```cpp
public void BackgroundSolidConstraintModifier(const BackgroundSolidConstraintModifier & )
```


### operator=

```cpp
public BackgroundSolidConstraintModifier & operator=(const BackgroundSolidConstraintModifier & )
```


### BackgroundSolidConstraintModifier

```cpp
public void BackgroundSolidConstraintModifier(ModifiableObject solid, BackgroundSolidBuilder & builder, Constraints constraints)
```


### BackgroundSolidConstraintModifier

```cpp
public void BackgroundSolidConstraintModifier(BackgroundSolidConstraintModifier && other)
```


### operator=

```cpp
public BackgroundSolidConstraintModifier & operator=(BackgroundSolidConstraintModifier && other)
```


### ~BackgroundSolidConstraintModifier

```cpp
public void ~BackgroundSolidConstraintModifier()
```


### modifiable_background

```cpp
public const ModifiableBackgroundSolid & modifiable_background()
```


### modifiable_background

```cpp
public ModifiableBackgroundSolid & modifiable_background()
```


### background_builder

```cpp
public BackgroundSolidBuilder & background_builder()
```


### swap_edge

```cpp
public vector swap_edge(const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### swap_facet

```cpp
public vector swap_facet(const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point, const std::optional<SolidEdgeTShape> & tshape)
```


### split_collapse_facet

```cpp
public SplitInfo split_collapse_facet(const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### split_collapse_facet

```cpp
public SplitInfo split_collapse_facet(const PolyhedronFacet & facet, const Point3D & point, const std::optional<PolyhedronVertex> & tshape_apex)
```


### remove_triple_adjacency

```cpp
public RemoveAdjacencyInfo remove_triple_adjacency(const PolyhedronVertex & vertex)
```


### remove_double_adjacency

```cpp
public RemoveAdjacencyInfo remove_double_adjacency(const PolyhedronFacetEdge & edge)
```




