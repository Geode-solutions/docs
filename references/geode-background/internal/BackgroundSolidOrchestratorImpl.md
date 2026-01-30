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

# class BackgroundSolidOrchestratorImpl


## Functions

### BackgroundSolidOrchestratorImpl

```cpp
public void BackgroundSolidOrchestratorImpl(const BackgroundSolidConstraintModifier & constraint_modifier)
```


### allowed_collapse_edge

```cpp
public ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge(const PolyhedronFacetEdge & edge)
```


### allowed_split_collapse_edge

```cpp
public ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape, SplitCollapseEdgeTetrahedraAfter & tetra_after)
```


### allowed_split_collapse_facet

```cpp
public ALLOWED_COLLAPSE_FACET_VERTEX allowed_split_collapse_facet(const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### allowed_split_split_collapse

```cpp
public ALLOWED_COLLAPSE_EDGE_EDGE allowed_split_split_collapse(const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```




