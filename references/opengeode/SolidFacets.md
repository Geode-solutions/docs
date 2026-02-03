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

# class SolidFacets


## Functions

### SolidFacets

```cpp
public void SolidFacets<>(const SolidFacets<> & )
```


### operator=

```cpp
public SolidFacets<> & operator=(const SolidFacets<> & )
```


### SolidFacets

```cpp
public void SolidFacets<>()
```


### SolidFacets

```cpp
public void SolidFacets<>(const SolidMesh<dimension> & solid)
```


### ~SolidFacets

```cpp
public void ~SolidFacets<>()
```


### nb_facets

```cpp
public index_t nb_facets()
```


### is_facet_isolated

```cpp
public bool is_facet_isolated(index_t facet_id)
```


### facet_vertices

```cpp
public const PolyhedronFacetVertices & facet_vertices(index_t facet_id)
```


 Return the indices of facet vertices.

**edge_id** [in] Index of an edge.

### facet_from_vertices

```cpp
public optional facet_from_vertices(const PolyhedronFacetVertices & vertices)
```


 Get the index of facet corresponding to given vertices

**vertices** [in] Ordered vertex indices

### is_opposite

```cpp
public bool is_opposite(index_t facet_id, const PolyhedronFacetVertices & vertices)
```


### facet_attribute_manager

```cpp
public AttributeManager & facet_attribute_manager()
```


 Access to the manager of attributes associated with facets.

### update_facet_vertices

```cpp
public vector update_facet_vertices(Span old2new, SolidFacetsKey )
```


### update_facet_vertex

```cpp
public BijectiveMapping update_facet_vertex(InlinedVector facet_vertices, index_t facet_vertex_id, index_t new_vertex_id, SolidFacetsKey )
```


### remove_facet

```cpp
public void remove_facet(InlinedVector facet_vertices, SolidFacetsKey )
```


### delete_facets

```cpp
public vector delete_facets(const std::vector<bool> & to_delete, SolidFacetsKey )
```


### remove_isolated_facets

```cpp
public vector remove_isolated_facets(SolidFacetsKey )
```


### find_or_create_facet

```cpp
public index_t find_or_create_facet(InlinedVector facet_vertices, SolidFacetsKey )
```


### overwrite_facets

```cpp
public void overwrite_facets(const SolidFacets<dimension> & from, SolidFacetsKey )
```




# class SolidFacets


